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

test("public source contains the verified 1943 founding year and no legacy identity", () => {
  const source = filesUnder(join(root, "src"), /\.(ts|tsx|css)$/).map((file) => readFileSync(file, "utf8")).join("\n");
  for (const required of ["ÜÇPINAR", "Üçpınar Kaynak Suyu", "1943", "19 L Damacana"]) assert.match(source, new RegExp(required));
  for (const heroAsset of ["/hero/dark-water-ripples.webp", "/hero/blue-water-ripples.webp"]) assert.match(source, new RegExp(heroAsset));

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

test("owner-provided logo is integrated through the shared brand component", () => {
  assert.equal(existsSync(join(root, "public/brand/ucpinar-logo.png")), true, "optimized public logo is missing");
  assert.equal(existsSync(join(root, "ucpinar_research_assets/brand/logo-owner-provided.png")), true, "original owner-provided logo is missing");
  const logoComponent = readFileSync(join(root, "src/components/brand/brand-logo.tsx"), "utf8");
  assert.match(logoComponent, /\/brand\/ucpinar-logo\.png/);
  for (const consumer of [
    "src/components/layout/header.tsx",
    "src/components/layout/mobile-navigation.tsx",
    "src/components/layout/footer.tsx",
  ]) {
    assert.match(readFileSync(join(root, consumer), "utf8"), /BrandLogo/, `shared logo missing from ${consumer}`);
  }
});

test("owner-provided branded water jug is featured in the hero without cropping", () => {
  assert.equal(existsSync(join(root, "public/product/ucpinar-19l-damacana-nobackground.png")), true, "transparent branded 19 L water jug is missing");
  const contentSource = readFileSync(join(root, "src/content/site-content.ts"), "utf8");
  const styles = readFileSync(join(root, "src/app/globals.css"), "utf8");
  assert.match(contentSource, /hero:[\s\S]*\/product\/ucpinar-19l-damacana-nobackground\.png/);
  assert.match(styles, /\.home-hero \.media-slot--hero \{ border-color: transparent; background: transparent; \}/);
  assert.match(styles, /\.home-hero \.media-slot--hero::before \{ display: none; \}/);
  assert.match(styles, /\.home-hero \.media-slot--hero img \{ object-fit: contain;/);
  assert.match(styles, /filter: brightness\(0\.9\)/);
  assert.match(styles, /transform: scale\(0\.88\)/);
});

test("built public HTML passes the same guard when a build is present", () => {
  const serverApp = join(root, ".next/server/app");
  if (!existsSync(serverApp)) return;
  const htmlFiles = filesUnder(serverApp, /\.html$/);
  assert.ok(htmlFiles.length >= 4, "expected prerendered HTML for the four public routes");
  const html = htmlFiles.map((file) => readFileSync(file, "utf8")).join("\n");
  for (const required of ["ÜÇPINAR", "Üçpınar Kaynak Suyu", "1943", "19 L Damacana", "27.01.2025", "2025-314-1", "Üçpınar Aktepe Bayii"]) assert.ok(html.includes(required), `missing public HTML term: ${required}`);
  for (const locationTerm of ["Esenboğa Yolu 16. Km.", "Sarayköy", "Pursaklar / Ankara", "40.058061", "32.913586", "google.com/maps"]) {
    assert.ok(html.includes(locationTerm), `missing verified location term: ${locationTerm}`);
  }
  for (const forbidden of ["[GEREKLİ BİLGİ", "fake pH", "fake mineral", "fake laboratory", "fake certificate", "info@example.com", "+90 312 399 34 52", "1944'ten beri", "1940'lı yıllardan", "Gerçek analiz değildir", "Bisfenol"]) {
    assert.equal(html.toLowerCase().includes(forbidden.toLowerCase()), false, `unsafe public copy found: ${forbidden}`);
  }

  const manifest = JSON.parse(readFileSync(join(root, ".next/server/app-paths-manifest.json"), "utf8"));
  for (const route of ["/page", "/kalite-ve-analizler/page", "/bayiler/page", "/iletisim/page"]) {
    assert.ok(route in manifest, `missing built route: ${route}`);
  }
});

test("production build publishes official content and excludes candidate content", () => {
  const serverApp = join(root, ".next/server/app");
  if (!existsSync(serverApp)) return;
  const html = filesUnder(serverApp, /\.html$/).map((file) => readFileSync(file, "utf8")).join("\n");
  for (const officialValue of ["Üçpınar Kaynağı", "Ankara Halk Sağlığı Laboratuvarı", "19 L dolum hattı analiz raporu"]) {
    assert.equal(html.includes(officialValue), true, `official value missing from production build: ${officialValue}`);
  }
  for (const excludedValue of ["Pınarbaşı Mah.", "KS.06.010", "+90 312 399 34 52", "/research-preview/production/bottling-fill-line.jpg", "/research-preview/product/generic-water-jug.jpg"]) {
    assert.equal(html.includes(excludedValue), false, `candidate value leaked into production build: ${excludedValue}`);
  }
  assert.equal(html.includes("/product/ucpinar-19l-damacana-nobackground.png"), true);
});

test("official report copies and source safety metadata are present", () => {
  const model = readFileSync(join(root, "src/content/authoritative-content.ts"), "utf8");
  const publicReports = filesUnder(join(root, "public/documents/analizler"), /\.pdf$/);
  assert.equal(publicReports.length, 7);
  for (const token of [
    'previousUserProvided: 1944',
    'archivedCompanyWebsite: 1943',
    'userConfirmed: 1943',
    'resolved: 1943',
    'sourceLevel: "officialDocument"',
    'permissionReview: true',
    'isPhotographicEvidence: false',
  ]) assert.ok(model.includes(token), `missing source guard: ${token}`);
  assert.match(model, /currentLegalName: "ÜÇPINAR KAYNAK SUYU GIDA İNŞ\. TEK\. TURZ\. OTO SAN\. TİC\. LTD\. ŞTİ\."/);
  assert.match(model, /historicalLegalName: "ÜÇPINAR Kaynak Suyu Sanayi ve Ticaret Ltd\. Şti\."/);
  assert.equal((model.match(/status: "legacyCandidate"/g) ?? []).length >= 3, true);
  assert.equal(model.includes('status: "verified"'), false);
  assert.match(model, /verifiedDealerNetwork:[\s\S]*legacyDealerCandidates\.map|verifiedDealerNetwork[\s\S]*legacyDealerCandidates\.map/);
});

test("research package and selected preview assets remain traceable", () => {
  const research = JSON.parse(readFileSync(join(root, "ucpinar_research_assets/research-content.json"), "utf8"));
  assert.equal(research.userProvided.publicBrandName, "Üçpınar Kaynak Suyu");
  assert.equal(research.userProvided.foundingYear, 1943);
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

test("licensed hero backgrounds and their source record remain available", () => {
  for (const asset of ["dark-water-ripples.webp", "blue-water-ripples.webp"]) {
    assert.equal(existsSync(join(root, "public/hero", asset)), true, `missing hero background: ${asset}`);
  }
  const sources = readFileSync(join(root, "docs/hero-image-sources.md"), "utf8");
  assert.match(sources, /unsplash\.com\/photos\/SG6d3jYqx0U/);
  assert.match(sources, /unsplash\.com\/photos\/5iSdv3yqqZo/);
  assert.match(sources, /unsplash\.com\/license/);
});

test("owner-provided newspaper and video archive is integrated without cropping newspaper text", () => {
  const homeSource = readFileSync(join(root, "src/app/page.tsx"), "utf8");
  const styles = readFileSync(join(root, "src/app/globals.css"), "utf8");
  const contentSource = readFileSync(join(root, "src/content/site-content.ts"), "utf8");

  for (const asset of [
    "archive/newspapers/ulus-1950-05-26-page-8.png",
    "archive/newspapers/zafer-1950-05-26-page-4.png",
    "archive/newspapers/ulus-1952-12-11-page-1.png",
    "archive/newspapers/zafer-1953-12-27-page-6.png",
    "archive/video/ucpinar-sehrin-nabzi.mp4",
    "archive/video/ucpinar-sehrin-nabzi-poster.jpg",
  ]) {
    assert.equal(existsSync(join(root, "public", asset)), true, `missing owner-provided archive asset: ${asset}`);
  }

  for (const label of ["26 Mayıs 1950", "11 Aralık 1952", "27 Aralık 1953", "Şehrin Nabzı"]) {
    assert.equal((contentSource + homeSource).includes(label), true, `archive label missing: ${label}`);
  }
  assert.match(styles, /\.press-card__image img \{ object-fit: contain; \}/);
  assert.match(homeSource, /<video controls preload="metadata" playsInline/);
});

test("research preview mode is explicit and production-safe", () => {
  const contentSource = readFileSync(join(root, "src/content/site-content.ts"), "utf8");
  const layoutSource = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
  assert.match(contentSource, /process\.env\.VERCEL_ENV/);
  assert.match(contentSource, /presentationModeEnabled = false/);
  assert.match(contentSource, /expandedContentEnabled = researchPreviewEnabled/);
  assert.match(contentSource, /expandedContentEnabled \? \[\.\.\.siteContent\.dealers, \.\.\.previewDealers\] : siteContent\.dealers/);
  assert.match(contentSource, /contact: siteContent\.contact/);
  assert.match(contentSource, /media: publicMedia/);
  assert.match(contentSource, /expandedContentEnabled \? researchHeritage : \[\]/);
  assert.match(contentSource, /expandedContentEnabled \? previewArchive/);
  assert.match(layoutSource, /index: false, follow: false, noarchive: true/);
});

test("research preview resolver enforces deployment boundaries", () => {
  assert.equal(resolveResearchPreview({ nodeEnv: "development", vercelEnv: undefined, flag: "true" }), true, "local development should allow an explicit preview flag");
  assert.equal(resolveResearchPreview({ nodeEnv: "production", vercelEnv: "preview", flag: "true" }), true, "Vercel Preview should allow an explicit preview flag");
  assert.equal(resolveResearchPreview({ nodeEnv: "production", vercelEnv: "preview", flag: "false" }), false, "Vercel Preview requires the explicit flag");
  assert.equal(resolveResearchPreview({ nodeEnv: "production", vercelEnv: "production", flag: "true" }), false, "Vercel Production must reject the preview flag");
  assert.equal(resolveResearchPreview({ nodeEnv: "production", vercelEnv: undefined, flag: "true" }), false, "ordinary production builds must remain safe");
});
