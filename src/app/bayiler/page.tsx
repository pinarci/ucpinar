import type { Metadata } from "next";
import { DealerFinder } from "@/components/dealers/dealer-finder";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { publicContent } from "@/content/site-content";

export const metadata: Metadata = { title: "Bayiler" };

export default function DealersPage() {
  return (
    <>
      <PageIntro eyebrow="Bayi ağı" title="Size hizmet veren bayiyi bulun." />
      <section className="section section--paper" aria-labelledby="finder-title">
        <Container>
          <div className="section-heading"><p className="eyebrow">Bayi arama</p><h2 id="finder-title">İlçe veya bölge seçin.</h2><p className="section-heading__description">Bayi kayıtlarını bölgeye göre filtreleyin; telefon ve adres bilgilerine tek yerden ulaşın.</p></div>
          {publicContent.dealers.length > 0 ? <DealerFinder dealers={publicContent.dealers} /> : <div className="content-panel"><p>Güncel bayi bilgileri doğrulanmış kayıtlarıyla yayımlanır.</p></div>}
        </Container>
      </section>
    </>
  );
}
