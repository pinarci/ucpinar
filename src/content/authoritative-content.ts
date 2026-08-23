export type SourceLevel =
  | "userProvided"
  | "officialDocument"
  | "archivedCompanyWebsite"
  | "historicalPress"
  | "researchCandidate"
  | "legacyCandidate"
  | "previewOnly";

export type NewInfosCategory =
  | "currentOfficial"
  | "historicalCompanySource"
  | "historicalArchive"
  | "legacyDealerData"
  | "previewVisual"
  | "outdatedHealthInformation"
  | "needsReview";

export interface SourceReference {
  file: string;
  level: SourceLevel;
  category: NewInfosCategory;
  date: string | null;
  verificationStrength: "strong" | "corroborating" | "historical" | "restricted";
}

export interface OfficialAnalysisReport {
  id: string;
  title: string;
  reportDate: string;
  displayDate: string;
  institution: "Ankara Halk Sağlığı Laboratuvarı";
  protocolNumber: string;
  samplePoint: string;
  sampleType: string;
  facilityAddress: string | null;
  fileUrl: string;
  sourceFile: string;
  pageCount: number;
  statedPageCount: number;
  isCompleteCapture: boolean;
  outcomeSummary: string | null;
  permissionReview: true;
  sourceLevel: "officialDocument";
}

export interface LegacyDealerCandidate {
  region: string;
  phoneAsArchived: string;
  status: "legacyCandidate";
  sourceFile: "NewInfos/SU HAKKINDA HERŞEY.docx";
}

export interface VerifiedDealerRecord {
  id: string;
  region: string;
  phone: string;
  status: "verifiedCurrent";
  sourceLevel: "userProvided";
  verifiedDate: "2026-08-23";
}

const officialInstitution = "Ankara Halk Sağlığı Laboratuvarı" as const;
const officialFacilityAddress = "Esenboğa Yolu 16. Km., Sarayköy, Pursaklar / Ankara";

export const officialAnalysisReports: readonly OfficialAnalysisReport[] = [
  {
    id: "2025-01-27",
    title: "Üçpınar Kaynağı analiz raporu",
    reportDate: "2025-01-27",
    displayDate: "27.01.2025",
    institution: officialInstitution,
    protocolNumber: "2025-314-1",
    samplePoint: "Üçpınar Kaynağı",
    sampleType: "Kaynak suyu",
    facilityAddress: officialFacilityAddress,
    fileUrl: "/documents/analizler/ucpinar-analiz-2025-01-27.pdf",
    sourceFile: "NewInfos/analiz 2025-01-27.pdf",
    pageCount: 2,
    statedPageCount: 2,
    isCompleteCapture: true,
    outcomeSummary: "Çalışılan analizler yönünden ilgili yönetmeliğe uygun olarak değerlendirilmiştir.",
    permissionReview: true,
    sourceLevel: "officialDocument",
  },
  {
    id: "2024-11-12",
    title: "19 L dolum hattı analiz raporu",
    reportDate: "2024-11-12",
    displayDate: "12.11.2024",
    institution: officialInstitution,
    protocolNumber: "2024-5157-1",
    samplePoint: "15-19 L'lik dolum hattı",
    sampleType: "Orijinal damacana · Etiketli · 19 L",
    facilityAddress: officialFacilityAddress,
    fileUrl: "/documents/analizler/ucpinar-analiz-2024-11-12.pdf",
    sourceFile: "NewInfos/ANALZ_20241105.pdf",
    pageCount: 3,
    statedPageCount: 3,
    isCompleteCapture: true,
    outcomeSummary: "Çalışılan analizler yönünden ilgili yönetmeliğe uygun olarak değerlendirilmiştir.",
    permissionReview: true,
    sourceLevel: "officialDocument",
  },
  {
    id: "2024-10-01",
    title: "19 L damacana analiz raporu",
    reportDate: "2024-10-01",
    displayDate: "01.10.2024",
    institution: officialInstitution,
    protocolNumber: "2024-4428-1",
    samplePoint: "Üçpınar Kaynak Suyu · Kırıkkale",
    sampleType: "Orijinal damacana · Etiketli · 19 L",
    facilityAddress: null,
    fileUrl: "/documents/analizler/ucpinar-analiz-2024-10-01.pdf",
    sourceFile: "NewInfos/analiz_20241001.pdf",
    pageCount: 1,
    statedPageCount: 3,
    isCompleteCapture: false,
    outcomeSummary: null,
    permissionReview: true,
    sourceLevel: "officialDocument",
  },
  {
    id: "2024-09-17",
    title: "19 L damacana analiz raporu",
    reportDate: "2024-09-17",
    displayDate: "17.09.2024",
    institution: officialInstitution,
    protocolNumber: "2024-4158-1",
    samplePoint: "Üçpınar · Keçiören",
    sampleType: "Orijinal damacana · Etiketli · 19 L",
    facilityAddress: null,
    fileUrl: "/documents/analizler/ucpinar-analiz-2024-09-17.pdf",
    sourceFile: "NewInfos/analiz_20240917.pdf",
    pageCount: 1,
    statedPageCount: 3,
    isCompleteCapture: false,
    outcomeSummary: null,
    permissionReview: true,
    sourceLevel: "officialDocument",
  },
  {
    id: "2024-07-11",
    title: "19 L dolum hattı analiz raporu",
    reportDate: "2024-07-11",
    displayDate: "11.07.2024",
    institution: officialInstitution,
    protocolNumber: "2024-2839-1",
    samplePoint: "15-19 L'lik dolum hattı",
    sampleType: "Orijinal damacana · Etiketli · 19 L",
    facilityAddress: officialFacilityAddress,
    fileUrl: "/documents/analizler/ucpinar-analiz-2024-07-11.pdf",
    sourceFile: "NewInfos/ANALZ_20240711.pdf",
    pageCount: 1,
    statedPageCount: 3,
    isCompleteCapture: false,
    outcomeSummary: null,
    permissionReview: true,
    sourceLevel: "officialDocument",
  },
  {
    id: "2024-06-12",
    title: "19 L dolum hattı analiz raporu",
    reportDate: "2024-06-12",
    displayDate: "12.06.2024",
    institution: officialInstitution,
    protocolNumber: "2024-2463-1",
    samplePoint: "15-19 L'lik dolum hattı",
    sampleType: "Orijinal damacana · Etiketli · 19 L",
    facilityAddress: officialFacilityAddress,
    fileUrl: "/documents/analizler/ucpinar-analiz-2024-06-12.pdf",
    sourceFile: "NewInfos/ANALZ_20240605.pdf",
    pageCount: 1,
    statedPageCount: 3,
    isCompleteCapture: false,
    outcomeSummary: null,
    permissionReview: true,
    sourceLevel: "officialDocument",
  },
  {
    id: "2024-03-01",
    title: "19 L damacana analiz raporu",
    reportDate: "2024-03-01",
    displayDate: "01.03.2024",
    institution: officialInstitution,
    protocolNumber: "2024-796-1",
    samplePoint: "Üçpınar · Altındağ",
    sampleType: "Orijinal damacana · Etiketli · 19 L",
    facilityAddress: null,
    fileUrl: "/documents/analizler/ucpinar-analiz-2024-03-01.pdf",
    sourceFile: "NewInfos/ANALZ_20240301.pdf",
    pageCount: 1,
    statedPageCount: 3,
    isCompleteCapture: false,
    outcomeSummary: null,
    permissionReview: true,
    sourceLevel: "officialDocument",
  },
];

export const legacyDealerCandidates: readonly LegacyDealerCandidate[] = [
  ["Aktepe", "338 1 338"],
  ["Aydınlıkevler", "316 53 16"],
  ["Bahçeli", "0 535 830 35 51"],
  ["Bağlıca", "0 546 870 70 01"],
  ["Batıkent", "0 535 830 35 51"],
  ["Beştepe", "0 535 830 35 51"],
  ["Beşevler", "0 535 830 35 51"],
  ["Çaldıran", "338 1 338"],
  ["Cebeci / Kurtuluş", "0 530 568 43 45"],
  ["Demetevler", "0 312 315 93 06"],
  ["Elvankent", "0 546 870 70 01"],
  ["Etimesgut", "0 546 870 70 01"],
  ["Emek", "0 535 830 35 51"],
  ["Etlik", "321 84 61"],
  ["Hasköy", "0 531 395 39 39"],
  ["İskitler", "341 30 51"],
  ["İvedik", "0 531 993 33 88"],
  ["Kalaba / İncirli", "0 544 369 78 19"],
  ["Karapürçek / Beşikkaya", "0 554 644 87 95"],
  ["Keçiören 1 (Şenlik / Gazino)", "380 17 01"],
  ["Keçiören 2 (Pınarbaşı / Bademlik)", "380 38 00"],
  ["Keçiören 3 (Tepebaşı / Güçlükaya)", "360 60 66"],
  ["Kırıkkale", "(0318) 212 15 99"],
  ["Maltepe", "0 530 568 43 45"],
  ["Mamak", "0 542 721 63 33"],
  ["Pursaklar", "0 535 786 90 41"],
  ["Saray (Esenboğa Yolu)", "0 538 864 15 80"],
  ["Sıhhiye", "433 32 22"],
  ["Siteler 1", "376 40 40"],
  ["Siteler 2", "316 53 16"],
  ["Şentepe", "0 312 315 93 06"],
  ["Ulus", "0 506 911 11 90"],
  ["Varlık", "0 312 315 93 06"],
  ["Yapracık TOKİ", "0 546 870 70 01"],
  ["Yenikent", "0 555 020 13 75"],
  ["Yenimahalle", "0 312 315 93 06"],
  ["Yenişehir / Sıhhiye", "433 32 22"],
].map(([region, phoneAsArchived]) => ({
  region,
  phoneAsArchived,
  status: "legacyCandidate" as const,
  sourceFile: "NewInfos/SU HAKKINDA HERŞEY.docx" as const,
}));

function formatVerifiedPhone(phoneAsArchived: string) {
  const digits = phoneAsArchived.replace(/\D/g, "");
  const nationalNumber = digits.length === 7 ? `312${digits}` : digits.startsWith("0") ? digits.slice(1) : digits;

  return `+90 ${nationalNumber.slice(0, 3)} ${nationalNumber.slice(3, 6)} ${nationalNumber.slice(6, 8)} ${nationalNumber.slice(8, 10)}`;
}

export const verifiedDealerNetwork: readonly VerifiedDealerRecord[] = legacyDealerCandidates.map((dealer, index) => ({
  id: `verified-dealer-${String(index + 1).padStart(2, "0")}`,
  region: dealer.region,
  phone: formatVerifiedPhone(dealer.phoneAsArchived),
  status: "verifiedCurrent" as const,
  sourceLevel: "userProvided" as const,
  verifiedDate: "2026-08-23" as const,
}));

export const authoritativeContent = {
  company: {
    brand: "Üçpınar Kaynak Suyu",
    slogan: {
      value: "Güzel ülkemin, güzel suyu",
      sourceLevel: "userProvided" as const,
    },
    currentLegalName: "ÜÇPINAR KAYNAK SUYU GIDA İNŞ. TEK. TURZ. OTO SAN. TİC. LTD. ŞTİ.",
    historicalLegalName: "ÜÇPINAR Kaynak Suyu Sanayi ve Ticaret Ltd. Şti.",
    facilityAddress: officialFacilityAddress,
    facilityCoordinates: {
      latitude: 40.058061,
      longitude: 32.913586,
      sourceLevel: "userProvided" as const,
    },
    sourceName: "Üçpınar Kaynağı",
    foundingYear: {
      previousUserProvided: 1944,
      archivedCompanyWebsite: 1943,
      userConfirmed: 1943,
      resolved: 1943,
      publicCopy: "1943'ten bugüne",
    },
  },
  product: {
    name: "19 L Damacana Su",
    packaging: "Orijinal damacana · Etiketli · 19 L",
    distribution: "Bayi ağı üzerinden tüketiciye ulaşır.",
    mainVisual: {
      src: "/product/ucpinar-19l-damacana-nobackground.png",
      assetType: "brandProductRender",
      sourceLevel: "userProvided" as const,
      isPhotographicEvidence: false,
    },
  },
  historicalCompanySource: {
    location: "Sarayköy / Ankara",
    claims: [
      "Eski site başlangıç yılını 1943 olarak verir.",
      "Eski site Ankara'nın ilk ve Türkiye'nin dördüncü membası olduğu iddiasını taşır.",
      "Eski site değişen teknoloji ve yasalara uyum söylemini kullanır.",
      "Eski site tam otomatik makineler ve el değmeden üretim söylemini kullanır.",
      "Eski site kaynaktan doluma ilişkin bir şirket anlatısı sunar.",
    ],
    sourceLevel: "archivedCompanyWebsite" as const,
    sourceFile: "NewInfos/SU HAKKINDA HERŞEY.docx",
  },
  legacyContactCandidates: [
    { purpose: "Ankara bayilik", phoneAsArchived: "0 530 880 67 80", status: "legacyCandidate" as const },
    { purpose: "Ankara kurumsal bayi", phoneAsArchived: "0 530 880 67 80", status: "legacyCandidate" as const },
  ],
  outdatedHealthArchive: [
    { title: "Bisfenol A basın açıklaması", date: "2008-10-24", sourceFile: "NewInfos/su14.jpg", status: "outdatedHealthInformation" as const },
    { title: "Bisfenol-A basın açıklaması", date: "2011-09-19", sourceFile: "NewInfos/su15.jpg", status: "outdatedHealthInformation" as const },
    { title: "Su Hakkında Her Şey / SUDER metinleri", date: null, sourceFile: "NewInfos/SU HAKKINDA HERŞEY.docx", status: "outdatedHealthInformation" as const },
  ],
  reports: officialAnalysisReports,
  legacyDealerCandidates,
  verifiedDealerNetwork,
} as const;

export const latestOfficialReport = officialAnalysisReports[0];
export const reports2024 = officialAnalysisReports.filter((report) => report.reportDate.startsWith("2024-"));
