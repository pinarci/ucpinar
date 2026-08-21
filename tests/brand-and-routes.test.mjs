import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import test from "node:test";
import { resolveResearchPreview } from "../src/content/research-preview-mode.mjs";

const root = resolve(import.meta.dirname, "..");

function filesUnder(directory, extensionPattern) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? filesUnder(path, extensionPattern) : extensionPattern.test(path) ? [path] : [];
  });
}

test("public source contains the Üçpınar foundation and no legacy identity", () => {
  const source = filesUnder(join(root, "src"), /\.(ts|tsx|css)$/).map((file) => readFileSync(file, "utf8")).join("\n");
  for (const required of ["ÜÇPINAR", "Üçpınar Kaynak Suyu", "1944", "19 L Damacana"]) assert.match(source, new RegExp(required));

  const forbidden = [
    ["MS", "Partners"].join(" "),
    ["ms", "partners"].join(""),
    ["Washing", "ton"].join(""),
    ["Vir", "ginia"].join(""),
    ["cross", "-border"].join(""),
  ];
  for (const term of forbidden) assert.equal(source.toLowerCase().includes(term.toLowerCase()), false, `legacy term found: ${term}`);
});

test("target route source files exist", () => {
  for (const route of ["page.tsx", "kalite-ve-analizler/page.tsx", "bayiler/page.tsx", "iletisim/page.tsx"]) {
    assert.equal(existsSync(join(root, "src/app", route)), true, `missing route: ${route}`);
  }
  for (const removedRoute of ["about", "approach", "areas-of-work", "contact", "services"]) {
    assert.equal(existsSync(join(root, "src/app", removedRoute)), false, `legacy route remains: ${removedRoute}`);
  }
});

test("built public HTML passes the same guard when a build is present", () => {
  const serverApp = join(root, ".next/server/app");
  if (!existsSync(serverApp)) return;
  const htmlFiles = filesUnder(serverApp, /\.html$/);
  assert.ok(htmlFiles.length >= 4, "expected prerendered HTML for the four public routes");
  const html = htmlFiles.map((file) => readFileSync(file, "utf8")).join("\n");
  for (const required of ["ÜÇPINAR", "Üçpınar Kaynak Suyu", "1944", "19 L Damacana"]) assert.ok(html.includes(required), `missing public HTML term: ${required}`);
  for (const locationTerm of ["Saray Köy Sk.", "Saray Fatih", "40.058061", "32.913586", "google.com/maps"]) {
    assert.ok(html.includes(locationTerm), `missing verified location term: ${locationTerm}`);
  }
  for (const forbidden of ["[GEREKLİ BİLGİ", "fake pH", "fake mineral", "fake laboratory", "fake certificate", "info@example.com"]) {
    assert.equal(html.toLowerCase().includes(forbidden.toLowerCase()), false, `unsafe public copy found: ${forbidden}`);
  }

  const manifest = JSON.parse(readFileSync(join(root, ".next/server/app-paths-manifest.json"), "utf8"));
  for (const route of ["/page", "/kalite-ve-analizler/page", "/bayiler/page", "/iletisim/page"]) {
    assert.ok(route in manifest, `missing built route: ${route}`);
  }
});

test("production build publishes representative media but excludes research-only records", () => {
  const serverApp = join(root, ".next/server/app");
  if (!existsSync(serverApp)) return;
  const html = filesUnder(serverApp, /\.html$/).map((file) => readFileSync(file, "utf8")).join("\n");
  for (const previewOnly of [
    "Pınarbaşı Mah.",
    "KS.06.010",
    "+90 312 399 34 52",
    "Kayalık Üçpınar Doğal Kaynak Suları",
  ]) {
    assert.equal(html.includes(previewOnly), false, `research-only value leaked into production build: ${previewOnly}`);
  }
  for (const publicMedia of [
    "/research-preview/production/water-pour.jpg",
    "/research-preview/production/bottling-fill-line.jpg",
    "/research-preview/product/generic-water-jug.jpg",
  ]) {
    assert.equal(html.includes(publicMedia), true, `representative production media missing: ${publicMedia}`);
  }
});

test("research package and selected preview assets remain traceable", () => {
  const research = JSON.parse(readFileSync(join(root, "ucpinar_research_assets/research-content.json"), "utf8"));
  assert.equal(research.userProvided.publicBrandName, "Üçpınar Kaynak Suyu");
  assert.equal(research.userProvided.foundingYear, 1944);
  assert.equal(research.userProvided.primaryProduct, "19 L Damacana Su");
  assert.equal(research.previewDealerCandidates.length, 5);
  for (const key of ["heritage1950", "dealerModel1953", "healthMinistry2001", "historicalLicense2011", "facilityCandidate"]) {
    assert.ok(research.researchBacked[key], `missing research item: ${key}`);
  }
  for (const asset of [
    "archive/old-sales-center-01.webp",
    "archive/old-sales-center-02.webp",
    "production/bottling-fill-line.jpg",
    "production/bottling-quality-check.jpg",
    "production/water-pour.jpg",
    "product/generic-water-jug.jpg",
  ]) {
    assert.equal(existsSync(join(root, "public/research-preview", asset)), true, `missing selected asset: ${asset}`);
  }
});

test("research records remain gated while representative media stays public", () => {
  const contentSource = readFileSync(join(root, "src/content/site-content.ts"), "utf8");
  const layoutSource = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
  assert.match(contentSource, /process\.env\.VERCEL_ENV/);
  assert.match(contentSource, /researchPreviewEnabled \? previewDealers : siteContent\.dealers/);
  assert.match(contentSource, /researchPreviewEnabled \? previewContact : siteContent\.contact/);
  assert.match(contentSource, /media: siteContent\.media/);
  assert.match(contentSource, /researchPreviewEnabled \? researchHeritage : \[\]/);
  assert.match(contentSource, /researchPreviewEnabled \? previewArchive/);
  assert.match(layoutSource, /index: false, follow: false, noarchive: true/);
});

test("research preview resolver enforces deployment boundaries", () => {
  assert.equal(resolveResearchPreview({ nodeEnv: "development", vercelEnv: undefined, flag: "true" }), true, "local development should allow an explicit preview flag");
  assert.equal(resolveResearchPreview({ nodeEnv: "production", vercelEnv: "preview", flag: "true" }), true, "Vercel Preview should allow an explicit preview flag");
  assert.equal(resolveResearchPreview({ nodeEnv: "production", vercelEnv: "preview", flag: "false" }), false, "Vercel Preview requires the explicit flag");
  assert.equal(resolveResearchPreview({ nodeEnv: "production", vercelEnv: "production", flag: "true" }), false, "Vercel Production must reject the preview flag");
  assert.equal(resolveResearchPreview({ nodeEnv: "production", vercelEnv: undefined, flag: "true" }), false, "ordinary production builds must remain safe");
});
