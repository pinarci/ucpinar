import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { publicContent } from "@/content/site-content";

export const metadata: Metadata = { title: "Kalite & Analizler" };

export default function QualityPage() {
  const historicalRecords = publicContent.heritage.filter((record) => record.year !== "1944");

  return (
    <>
      <PageIntro eyebrow="Belgeler" title="Kalite & Analizler" description="Su analizleri ile tarihsel marka kayıtları, kaynak türleri birbirine karıştırılmadan sunulur." />
      <section className="section section--paper" aria-labelledby="analysis-title">
        <Container className="page-grid">
          <div className="sticky-title"><p className="eyebrow">Su analizleri</p><h2 id="analysis-title">Güncel analiz belgeleri</h2></div>
          <article className="document-sheet document-sheet--quiet">
            <span className="document-sheet__tag">SU ANALİZLERİ</span>
            <h3>Doğrulanmış belge alanı</h3>
            <p>Güncel analiz raporları yalnız asıl dosyası, tarihi ve kaynağı doğrulandığında burada yayımlanır.</p>
          </article>
        </Container>
      </section>

      {historicalRecords.length > 0 ? (
        <section className="section" aria-labelledby="records-title">
          <Container className="page-grid">
            <div className="sticky-title"><p className="eyebrow">Arşiv & kayıtlar</p><h2 id="records-title">Tarihsel kayıtlar</h2><p>Bu kayıtlar güncel analiz veya güncel ruhsat bilgisi değildir.</p></div>
            <ol className="record-list">
              {historicalRecords.map((record) => (
                <li key={record.year}>
                  <time>{record.year}</time>
                  <div>
                    <h3>{record.title}</h3>
                    <p>{record.description}</p>
                    {record.sourceUrl ? <a href={record.sourceUrl} target="_blank" rel="noopener noreferrer">{record.sourceLabel ?? "Kaynağı Gör"} ↗</a> : null}
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}
    </>
  );
}
