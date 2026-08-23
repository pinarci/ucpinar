import {
  authoritativeContent,
  officialAnalysisReports,
  type OfficialAnalysisReport,
  type SourceLevel,
} from "@/content/authoritative-content";

export type VerificationStatus =
  | "provided"
  | "sourceBacked"
  | "officialHistorical"
  | "researchCandidate"
  | "previewOnly";

export interface NavigationItem {
  label: string;
  href: `/${string}` | "/";
}

export interface MediaItem {
  src: string | null;
  alt: string;
  caption?: string;
  ratio: "hero" | "landscape" | "wide" | "portrait";
  objectPosition?: string;
  previewOnly?: boolean;
  representsCompanyFacility?: boolean;
  assetType?: "brandProductRender" | "genericPreview" | "archiveImage";
  isPhotographicEvidence?: boolean;
}

export type ReportItem = OfficialAnalysisReport;

export interface DealerItem {
  id: string;
  name: string;
  district: string;
  address?: string;
  phone?: string;
  workingHours?: string;
  serviceArea?: string;
  sourceUrl?: string;
  sourceStatus: "verified" | "researchCandidate";
}

export interface ContactData {
  label: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  hours: string | null;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  sourceUrl?: string;
  sourceStatus: SourceLevel | null;
}

export interface HistoricalRecord {
  year: string;
  title: string;
  description: string;
  sourceLabel?: string;
  sourceUrl?: string;
  verificationStatus: VerificationStatus;
}

export interface ArchiveItem {
  src: string;
  alt: string;
  caption: string;
  sourceUrl: string;
  previewOnly: true;
  verificationStatus: "previewOnly";
}

export interface PressArchiveItem {
  publication: "Ulus" | "Zafer";
  date: string;
  page: number;
  src: string;
  alt: string;
  sourceUrl: string;
}

type MediaKey = "hero" | "facility" | "production" | "product" | "logistics";

export const researchPreviewEnabled = resolveResearchPreview({
  nodeEnv: process.env.NODE_ENV,
  vercelEnv: process.env.VERCEL_ENV,
  flag: process.env.NEXT_PUBLIC_RESEARCH_PREVIEW,
});
// Temporary owner-review mode. Set to false when the approved production content is ready.
export const presentationModeEnabled = false;
export const expandedContentEnabled = researchPreviewEnabled;
export const researchDebugEnabled = researchPreviewEnabled && process.env.NEXT_PUBLIC_SHOW_RESEARCH_DEBUG === "true";

const productionMedia: Record<MediaKey, MediaItem> = {
  hero: {
    src: "/product/ucpinar-19l-damacana-nobackground.png",
    alt: "Üçpınar logolu 19 litre damacana",
    ratio: "hero",
    objectPosition: "50% 50%",
    representsCompanyFacility: false,
    assetType: "brandProductRender",
    isPhotographicEvidence: false,
  },
  facility: {
    src: "/research-preview/production/bottling-fill-line.jpg",
    alt: "Temsili bir su dolum hattının yakın görünümü",
    caption: "Temsili üretim görünümü",
    ratio: "landscape",
    objectPosition: "52% 50%",
    previewOnly: true,
    representsCompanyFacility: false,
    assetType: "genericPreview",
    isPhotographicEvidence: true,
  },
  production: {
    src: "/research-preview/production/bottling-quality-check.jpg",
    alt: "Bir şişeleme hattında temsili kalite kontrol görünümü",
    caption: "Temsili üretim görünümü",
    ratio: "portrait",
    objectPosition: "57% 50%",
    previewOnly: true,
    representsCompanyFacility: false,
    assetType: "genericPreview",
    isPhotographicEvidence: true,
  },
  product: {
    src: authoritativeContent.product.mainVisual.src,
    alt: "Üçpınar logolu 19 litre damacana ürün görseli",
    ratio: "portrait",
    objectPosition: "50% 50%",
    representsCompanyFacility: false,
    assetType: "brandProductRender",
    isPhotographicEvidence: false,
  },
  logistics: { src: null, alt: "", ratio: "wide" },
};

const publicMedia: Record<MediaKey, MediaItem> = expandedContentEnabled
  ? productionMedia
  : {
      ...productionMedia,
      facility: { src: null, alt: "", ratio: "landscape", representsCompanyFacility: false },
      production: { src: null, alt: "", ratio: "portrait", representsCompanyFacility: false },
    };

const productionContact: ContactData = {
  label: "Tesis adresi",
  address: authoritativeContent.company.facilityAddress,
  phone: null,
  email: null,
  hours: null,
  sourceStatus: "officialDocument",
};

const previewDealers: DealerItem[] = [
  {
    id: "kecioren-pinarbasi",
    name: "Üçpınar Kaynak Suyu",
    district: "Keçiören",
    address: "Pınarbaşı Mah., Anız Sok., No:7, Keçiören, Ankara",
    phone: "+90 545 362 60 66",
    sourceUrl: "https://yandex.com.tr/maps/org/ucpinar_kaynak_suyu/1339153526/",
    sourceStatus: "researchCandidate",
  },
  {
    id: "yenimahalle-demetgul",
    name: "Üçpınar Su Bayii",
    district: "Yenimahalle",
    address: "Demetgül Mahallesi, 422/1. Sk. No:41, Yenimahalle, Ankara",
    phone: "+90 312 335 55 54",
    sourceUrl: "https://www.turk5.com/firma/ucpinar-su-bayii/",
    sourceStatus: "researchCandidate",
  },
  {
    id: "altindag-haskoy",
    name: "Üçpınar Doğal Kaynak Suyu Hasköy",
    district: "Altındağ",
    address: "Malazgirt Cad. No:7/D:4, Hasköy, Altındağ, Ankara",
    phone: "+90 312 347 17 73",
    workingHours: "08:30–20:00",
    sourceUrl: "https://enyakinnerde.com/su-firmalari/238776-ucpinar-dogal-kaynak-suyu-haskoy",
    sourceStatus: "researchCandidate",
  },
  {
    id: "mamak-cengizhan",
    name: "Üçpınar Su",
    district: "Mamak",
    address: "Cengizhan Mah. 846. Cad. No:219, Mamak, Ankara",
    phone: "+90 312 390 87 52",
    sourceUrl: "https://yellowpages.com.tr/ucpinar-su-mamak-ankara",
    sourceStatus: "researchCandidate",
  },
  {
    id: "altindag-zubeydehanim",
    name: "Üçpınar Doğal Kaynak Suyu",
    district: "Altındağ",
    address: "Zübeyde Hanım Mah., Turgut Özal Blv., 14A, Altındağ, Ankara",
    phone: "+90 312 399 30 15",
    sourceUrl: "https://yandex.com.tr/maps/org/ucpinar_dogal_kaynak_suyu/17763625024/",
    sourceStatus: "researchCandidate",
  },
];

const researchHeritage: HistoricalRecord[] = [
  {
    year: "1950",
    title: "Arşivlerde Üçpınar Memba Suyu",
    description: "26 Mayıs 1950 tarihli Ulus gazetesinde Üçpınar Memba Suyu ilanı yer aldı.",
    sourceLabel: "Arşiv kaydı",
    sourceUrl: "https://www.gastearsivi.com/gazete/ulus/1950-05-26/8",
    verificationStatus: "sourceBacked",
  },
  {
    year: "1953",
    title: "Bayilik ağına ilişkin erken kayıt",
    description: "27 Aralık 1953 tarihli Zafer gazetesi ilanında Ankara için bayi arandığı görülüyor.",
    sourceLabel: "Arşiv kaydı",
    sourceUrl: "https://www.gastearsivi.com/gazete/zafer/1953-12-27/6",
    verificationStatus: "sourceBacked",
  },
  {
    year: "2001",
    title: "Sağlık Bakanlığı kayıtlarında",
    description: "23 Ocak 2001 tarihli Bakanlık yanıtında Üçpınar Kaynak Suyu, Ankara çevresindeki ruhsatlı kaynak suları arasında listelendi.",
    sourceLabel: "Resmî tarihsel kayıt",
    sourceUrl: "https://www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d21/c053/tbmm21053047.pdf",
    verificationStatus: "officialHistorical",
  },
  {
    year: "2011",
    title: "Tarihsel ruhsat / kayıt izi",
    description: "ÜÇPINAR adına KS.06.010 numarası ve 2 Nisan 2011 tarihiyle aktarılan üçüncü taraf tarihsel kayıt.",
    sourceLabel: "Tarihsel kayıt",
    sourceUrl: "https://damacanasuisi.blogspot.com/search/label/filiz",
    verificationStatus: "sourceBacked",
  },
];

const previewArchive: ArchiveItem[] = [
  {
    src: "/research-preview/archive/old-sales-center-01.webp",
    alt: "Üçpınar Memba Suyu tabelasının bulunduğu eski satış noktası",
    caption: "Eski yönetim ve satış noktasından bir görünüm",
    sourceUrl: "https://yandex.com.tr/maps/org/ucpinar_dogal_kaynak_suyu/202811467184/",
    previewOnly: true,
    verificationStatus: "previewOnly",
  },
  {
    src: "/research-preview/archive/old-sales-center-02.webp",
    alt: "Eski Üçpınar satış noktasının bulunduğu bina",
    caption: "Satış noktasının sokaktan görünümü",
    sourceUrl: "https://yandex.com.tr/maps/org/ucpinar_dogal_kaynak_suyu/202811467184/",
    previewOnly: true,
    verificationStatus: "previewOnly",
  },
];

const pressArchive: PressArchiveItem[] = [
  {
    publication: "Ulus",
    date: "26 Mayıs 1950",
    page: 8,
    src: "/archive/newspapers/ulus-1950-05-26-page-8.png",
    alt: "Ulus gazetesinin 26 Mayıs 1950 tarihli 8. sayfasındaki Üçpınar Memba Suyu ilanı",
    sourceUrl: "https://www.gastearsivi.com/gazete/ulus/1950-05-26/8",
  },
  {
    publication: "Zafer",
    date: "26 Mayıs 1950",
    page: 4,
    src: "/archive/newspapers/zafer-1950-05-26-page-4.png",
    alt: "Zafer gazetesinin 26 Mayıs 1950 tarihli 4. sayfasındaki Üçpınar Memba Suyu ilanı",
    sourceUrl: "https://www.gastearsivi.com/gazete/zafer/1950-05-26/4",
  },
  {
    publication: "Ulus",
    date: "11 Aralık 1952",
    page: 1,
    src: "/archive/newspapers/ulus-1952-12-11-page-1.png",
    alt: "Ulus gazetesinin 11 Aralık 1952 tarihli 1. sayfasındaki Üçpınar Memba Suyu ilanı",
    sourceUrl: "https://www.gastearsivi.com/gazete/ulus/1952-12-11/1",
  },
  {
    publication: "Zafer",
    date: "27 Aralık 1953",
    page: 6,
    src: "/archive/newspapers/zafer-1953-12-27-page-6.png",
    alt: "Zafer gazetesinin 27 Aralık 1953 tarihli 6. sayfasındaki Üçpınar bayi ilanı",
    sourceUrl: "https://www.gastearsivi.com/gazete/zafer/1953-12-27/6",
  },
];

export const siteContent = {
  company: {
    name: authoritativeContent.company.brand,
    shortName: "ÜÇPINAR",
    legalName: authoritativeContent.company.currentLegalName,
    founded: authoritativeContent.company.foundingYear,
    description: "Üçpınar Kaynak Suyu — 1940'lı yıllardan bugüne, 19 L damacana ve bayi ağı odağında.",
  },
  product: {
    name: authoritativeContent.product.name,
    description: "Üçpınar 19 L damacana su, bayi ağı üzerinden tüketiciye ulaşıyor.",
  },
  reports: officialAnalysisReports,
  dealers: [] as DealerItem[],
  contact: productionContact,
  media: productionMedia,
};

export const publicContent = {
  ...siteContent,
  dealers: expandedContentEnabled ? previewDealers : siteContent.dealers,
  contact: siteContent.contact,
  media: publicMedia,
  heritage: [
    {
      year: "1940'lar",
      title: "Sarayköy'de başlayan marka geçmişi",
      description: "Üçpınar'ın eski kurumsal kayıtları markanın Sarayköy'deki geçmişini 1940'lı yıllara kadar götürüyor.",
      verificationStatus: "sourceBacked",
    } satisfies HistoricalRecord,
    ...(expandedContentEnabled ? researchHeritage : []),
  ],
  archive: expandedContentEnabled ? previewArchive : ([] as ArchiveItem[]),
  pressArchive,
};

export function getMapSearchUrl(address: string, coordinates?: ContactData["coordinates"]) {
  const query = coordinates ? `${coordinates.latitude},${coordinates.longitude}` : address;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const navigation: NavigationItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kalite & Analizler", href: "/kalite-ve-analizler" },
  { label: "Bayiler", href: "/bayiler" },
  { label: "İletişim", href: "/iletisim" },
];

export const headerAction: NavigationItem = {
  label: "Tesis Bilgileri",
  href: "/iletisim",
};
import { resolveResearchPreview } from "@/content/research-preview-mode.mjs";
