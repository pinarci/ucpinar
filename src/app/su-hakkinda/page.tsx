import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { TextLink } from "@/components/ui/text-link";
import { waterGuideFaq, waterGuideSources } from "@/content/water-guide";

export const metadata: Metadata = { title: "Su Hakkında" };

export default function WaterGuidePage() {
  return (
    <>
      <PageIntro eyebrow="Su rehberi" title="Su hakkında merak edilenler." description="Üçpınar'ın eski içerik arşivindeki soru başlıkları, güncel ve doğrulanabilir kaynaklarla yeniden yanıtlandı." />

      <section className="section section--compact section--paper" aria-labelledby="water-history-title">
        <Container className="water-history">
          <div>
            <p className="eyebrow">Üçpınar arşivi</p>
            <h2 id="water-history-title">Sarayköy&apos;den bugüne.</h2>
          </div>
          <p>Kurumsal arşiv, Üçpınar&apos;ın Sarayköy&apos;deki başlangıcını 1943 yılına kaydeder. 1950–1953 dönemindeki gazete ilanları da markanın erken dönem izini taşır.</p>
          <TextLink href="/kalite-ve-analizler" variant="outline">Belgeleri İncele</TextLink>
        </Container>
      </section>

      <section className="section section--cool" aria-labelledby="water-faq-title">
        <Container className="page-grid">
          <div className="sticky-title">
            <p className="eyebrow">11 kısa yanıt</p>
            <h2 id="water-faq-title">Sık sorulan sorular</h2>
            <p>Başlıklara dokunarak yanıtları açabilirsiniz.</p>
          </div>
          <div className="faq-list">
            {waterGuideFaq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--compact section--paper" aria-labelledby="water-sources-title">
        <Container className="water-sources">
          <div>
            <p className="eyebrow">Kaynaklar</p>
            <h2 id="water-sources-title">Genel bilgilendirme notları</h2>
            <p>Bu içerik kişisel tıbbi öneri yerine geçmez. Özel sağlık koşullarında bir sağlık uzmanına danışılmalıdır.</p>
          </div>
          <ul>
            {waterGuideSources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<span aria-hidden="true">↗</span></a></li>)}
          </ul>
        </Container>
      </section>
    </>
  );
}
