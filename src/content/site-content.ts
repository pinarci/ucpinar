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
}

export interface ReportItem {
  title: string;
  date: string | null;
  fileUrl: string | null;
  verificationStatus: "verified";
}

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
  sourceStatus: "verified" | "researchCandidate" | null;
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

type MediaKey = "hero" | "facility" | "production" | "product" | "logistics";

export const researchPreviewEnabled = resolveResearchPreview({
  nodeEnv: process.env.NODE_ENV,
  vercelEnv: process.env.VERCEL_ENV,
  flag: process.env.NEXT_PUBLIC_RESEARCH_PREVIEW,
});
export const researchDebugEnabled = researchPreviewEnabled && process.env.NEXT_PUBLIC_SHOW_RESEARCH_DEBUG === "true";

const productionMedia: Record<MediaKey, MediaItem> = {
  hero: {
    src: "/research-preview/production/water-pour.jpg",
    alt: "Bardağa dökülen suyun siyah beyaz görünümü",
    ratio: "hero",
    objectPosition: "50% 48%",
    representsCompanyFacility: false,
  },
  facility: {
    src: "/research-preview/production/bottling-fill-line.jpg",
    alt: "Temsili bir su dolum hattının yakın görünümü",
    caption: "Temsili üretim görünümü",
    ratio: "landscape",
    objectPosition: "52% 50%",
    representsCompanyFacility: false,
  },
  production: {
    src: "/research-preview/production/bottling-quality-check.jpg",
    alt: "Bir şişeleme hattında temsili kalite kontrol görünümü",
    caption: "Temsili üretim görünümü",
    ratio: "portrait",
    objectPosition: "57% 50%",
    representsCompanyFacility: false,
  },
  product: {
    src: "/research-preview/product/generic-water-jug.jpg",
    alt: "Dolum sırasında genel amaçlı büyük su damacanası",
    caption: "Temsili damacana görünümü",
    ratio: "portrait",
    objectPosition: "50% 56%",
    representsCompanyFacility: false,
  },
  logistics: { src: null, alt: "", ratio: "wide" },
};

const productionContact: ContactData = {
  label: "Tesis konumu",
  address: "Saray Köy Sk., Saray Fatih, 06146 Pursaklar/Ankara",
  phone: null,
  email: null,
  hours: null,
  coordinates: {
    latitude: 40.058061,
    longitude: 32.913586,
  },
  sourceStatus: "verified",
};

const previewContact: ContactData = {
  ...productionContact,
  phone: "+90 312 399 34 52",
  sourceStatus: "researchCandidate",
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

export const siteContent = {
  company: {
    name: "Üçpınar Kaynak Suyu",
    shortName: "ÜÇPINAR",
    founded: 1944,
    description: "Üçpınar Kaynak Suyu — 1944'ten beri, 19 L damacana ve bayi ağı odağında.",
  },
  product: {
    name: "19 L Damacana Su",
    description: "Üçpınar'ın ana ürünü olan 19 L damacana, bireysel teslimatlarda bayi ağı üzerinden tüketiciye ulaşıyor.",
  },
  reports: [] as ReportItem[],
  dealers: [] as DealerItem[],
  contact: productionContact,
  media: productionMedia,
};

export const publicContent = {
  ...siteContent,
  dealers: researchPreviewEnabled ? previewDealers : siteContent.dealers,
  contact: researchPreviewEnabled ? previewContact : siteContent.contact,
  media: siteContent.media,
  heritage: [
    {
      year: "1944",
      title: "Üçpınar'ın başlangıcı",
      description: "Üçpınar'ın marka geçmişinin başlangıç yılı.",
      verificationStatus: "provided",
    } satisfies HistoricalRecord,
    ...(researchPreviewEnabled ? researchHeritage : []),
  ],
  archive: researchPreviewEnabled ? previewArchive : ([] as ArchiveItem[]),
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
  label: "Kurumsal Talep",
  href: "/iletisim#kurumsal-talep",
};
import { resolveResearchPreview } from "@/content/research-preview-mode.mjs";
