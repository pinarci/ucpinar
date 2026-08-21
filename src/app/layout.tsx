import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { researchPreviewEnabled, siteContent } from "@/content/site-content";
import "./globals.css";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans", display: "swap" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", display: "swap" });

export const metadata: Metadata = {
  title: { default: siteContent.company.name, template: `%s | ${siteContent.company.shortName}` },
  description: siteContent.company.description,
  robots: researchPreviewEnabled ? { index: false, follow: false, noarchive: true } : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <body id="top" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
        <a className="skip-link" href="#main-content">Ana içeriğe geç</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
