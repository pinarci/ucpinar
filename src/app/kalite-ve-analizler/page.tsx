import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { publicContent } from "@/content/site-content";

export const metadata: Metadata = { title: "Kalite & Analizler" };

const reportDrafts = [
  {
    title: "Mikrobiyolojik Analiz",
    scope: "Temel mikrobiyolojik parametrelerin sunum düzeni",
    rows: ["Numune bilgisi", "Analiz yöntemi", "Sonuç tablosu"],
  },
  {
    title: "Kimyasal Analiz",
    scope: "Kimyasal parametreler ve referans değerleri için örnek yapı",
    rows: ["Parametre listesi", "Birim ve limit", "Sonuç tablosu"],
  },
  {
    title: "Fiziksel Analiz",
    scope: "Fiziksel özellikler ve değerlendirme alanları için örnek yapı",
    rows: ["Numune tarihi", "Gözlem alanı", "Değerlendirme"],
  },
];

export default function QualityPage() {
  const historicalRecords = publicContent.heritage.filter((record) => record.year !== "1944");

  return (
    <>
      <PageIntro eyebrow="Belgeler" title="Kalite & Analizler" description="Su analizleri ile tarihsel marka kayıtları, kaynak türleri birbirine karıştırılmadan sunulur." />
      <section className="section quality-approach" aria-labelledby="quality-approach-title">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Kalite yaklaşımı</p>
            <h2 id="quality-approach-title">Her aşamada aynı özen.</h2>
            <p className="section-heading__description">Kaynak suyunun tüketiciye ulaşan yolculuğu; üretim, kontrol ve şeffaf bilgilendirme başlıklarıyla ele alınır.</p>
          </div>
          <ol className="process-grid">
            <li><span>01</span><h3>Kaynak & üretim</h3><p>Suyun karakterini korumayı merkezine alan, düzenli ve kontrollü bir üretim yaklaşımı.</p></li>
            <li><span>02</span><h3>Kontrol & dolum</h3><p>Dolum sürecinin hijyen, düzen ve ürün bütünlüğü odağında ele alınması.</p></li>
            <li><span>03</span><h3>Belge & şeffaflık</h3><p>Analiz ve belge içeriklerinin anlaşılır, erişilebilir ve güncel bir yapıda sunulması.</p></li>
          </ol>
        </Container>
      </section>
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

      <section className="section report-showcase" aria-labelledby="report-showcase-title">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Rapor sunumu</p>
            <h2 id="report-showcase-title">Analiz belgeleri için örnek düzen.</h2>
            <p className="section-heading__description">Aşağıdaki kartlar yalnızca arayüz sunumudur. Gerçek analiz sonucu, laboratuvar bilgisi veya onaylı belge içermez.</p>
          </div>
          <div className="report-mockup-grid">
            {reportDrafts.map((report) => (
              <article className="report-mockup" key={report.title}>
                <div className="report-mockup__warning">Sunum taslağı · Gerçek analiz değildir</div>
                <p className="report-mockup__brand">ÜÇPINAR · ANALİZ BELGESİ</p>
                <h3>{report.title}</h3>
                <p>{report.scope}</p>
                <dl>
                  {report.rows.map((row) => (
                    <div key={row}><dt>{row}</dt><dd>Onaylı raporla doldurulacak</dd></div>
                  ))}
                </dl>
                <footer>Belge tarihi ve laboratuvar bilgisi gerçek raporla eklenecektir.</footer>
              </article>
            ))}
          </div>
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
