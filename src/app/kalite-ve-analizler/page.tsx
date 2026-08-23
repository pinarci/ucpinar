import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { latestOfficialReport, reports2024 } from "@/content/authoritative-content";
import { publicContent } from "@/content/site-content";

export const metadata: Metadata = { title: "Kalite & Analizler" };

export default function QualityPage() {
  return (
    <>
      <PageIntro eyebrow="Belge merkezi" title="Kalite & Analizler" description="Güncel ve geçmiş dönem analiz raporları ile tarihsel marka kayıtları, kaynak türleri birbirine karıştırılmadan sunulur." />

      <section className="section section--paper" aria-labelledby="latest-analysis-title">
        <Container className="report-feature">
          <div className="report-feature__copy">
            <p className="eyebrow">Güncel analiz</p>
            <h2 id="latest-analysis-title">Üçpınar Kaynağı</h2>
            <p>{latestOfficialReport.institution} tarafından düzenlenen {latestOfficialReport.displayDate} tarihli analiz raporu.</p>
            {latestOfficialReport.outcomeSummary ? <p className="report-feature__status">{latestOfficialReport.outcomeSummary}</p> : null}
            <a className="text-link text-link--primary" href={latestOfficialReport.fileUrl} target="_blank" rel="noopener noreferrer">PDF Raporu Aç <span aria-hidden="true">↗</span></a>
          </div>
          <dl className="report-feature__meta">
            <div><dt>Rapor tarihi</dt><dd><time dateTime={latestOfficialReport.reportDate}>{latestOfficialReport.displayDate}</time></dd></div>
            <div><dt>Kurum</dt><dd>{latestOfficialReport.institution}</dd></div>
            <div><dt>Protokol no</dt><dd>{latestOfficialReport.protocolNumber}</dd></div>
            <div><dt>Numune noktası</dt><dd>{latestOfficialReport.samplePoint}</dd></div>
            <div><dt>Tesis adresi</dt><dd>{latestOfficialReport.facilityAddress}</dd></div>
          </dl>
        </Container>
      </section>

      <section className="section report-showcase" aria-labelledby="archive-analysis-title">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">2024 analiz arşivi</p>
            <h2 id="archive-analysis-title">Altı rapor, tarih sırasıyla.</h2>
            <p className="section-heading__description">Rapor kartlarında yalnız belge üzerinde açıkça bulunan tarih, kurum, protokol, numune ve izleme noktası bilgileri yer alır.</p>
          </div>
          <ol className="analysis-list">
            {reports2024.map((report) => (
              <li key={report.id}>
                <time dateTime={report.reportDate}>{report.displayDate}</time>
                <div>
                  <h3>{report.title}</h3>
                  <p>{report.samplePoint} · Protokol {report.protocolNumber}</p>
                  {!report.isCompleteCapture ? <span>Arşiv kopyası: ilk sayfa</span> : <span>Tam rapor</span>}
                </div>
                <a href={report.fileUrl} target="_blank" rel="noopener noreferrer">PDF Aç <span aria-hidden="true">↗</span></a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section" aria-labelledby="records-title">
        <Container className="page-grid">
          <div className="sticky-title">
            <p className="eyebrow">Tarihsel kayıtlar</p>
            <h2 id="records-title">Gazete arşivi</h2>
            <p>Bu kayıtlar güncel analiz veya güncel ruhsat bilgisi değildir.</p>
          </div>
          <ol className="record-list">
            {publicContent.pressArchive.map((record) => (
              <li key={record.src}>
                <time>{record.date.split(" ").at(-1)}</time>
                <div>
                  <h3>{record.publication} · {record.date}</h3>
                  <p>Gazetenin {record.page}. sayfasındaki Üçpınar arşiv kaydı.</p>
                  <a href={record.src} target="_blank" rel="noopener noreferrer">Belgeyi Aç ↗</a>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
