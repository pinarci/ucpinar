import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { MediaSlot } from "@/components/ui/media-slot";
import { GoogleMapPreview } from "@/components/ui/google-map-preview";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { getMapSearchUrl, publicContent, siteContent } from "@/content/site-content";

export const metadata: Metadata = { title: { absolute: siteContent.company.name } };

export default function HomePage() {
  const hasResearchHistory = publicContent.heritage.length > 1;
  const contact = publicContent.contact;
  const latestReport = siteContent.reports[0];
  const featuredArchiveRecord = publicContent.pressArchive[0];

  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <Container className="home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow eyebrow--light">1943&apos;ten bugüne</p>
            <h1 id="hero-title">ÜÇPINAR</h1>
            <p className="home-hero__descriptor">Kaynak Suyu</p>
            <p className="home-hero__lede">{siteContent.company.slogan}</p>
            <div className="action-row">
              <TextLink href="/bayiler" variant="primary">Bayi Bul</TextLink>
              <TextLink href="/kalite-ve-analizler" variant="secondary">Analizler &amp; Belgeler</TextLink>
            </div>
          </div>
          <MediaSlot media={publicContent.media.hero} priority />
        </Container>
      </section>

      <section className="brand-pillars" aria-label="Üçpınar marka yaklaşımı">
        <Container>
          <ul className="brand-pillars__grid">
            <li><span>01</span><div><h2>Köklü marka</h2><p>1943&apos;ten bugüne uzanan bir isim ve Ankara&apos;yla kurulan güçlü bağ.</p></div></li>
            <li><span>02</span><div><h2>Sade yaklaşım</h2><p>Ürünü, süreci ve hizmeti gereksiz kalabalıktan uzak anlatan net bir duruş.</p></div></li>
            <li><span>03</span><div><h2>Yakın hizmet</h2><p>19 L damacana odağı ve bayi ağıyla gündelik ihtiyaca doğrudan erişim.</p></div></li>
          </ul>
        </Container>
      </section>

      <section className="section section--paper" aria-labelledby="heritage-title">
        <Container>
          <div className="heritage-grid">
            <p className="heritage-year" aria-hidden="true">1943</p>
            <div className="heritage-copy">
              <p className="eyebrow">Marka geçmişi</p>
              <h2 id="heritage-title">1943&apos;ten bugüne.</h2>
              <p>Üçpınar Kaynak Suyu&apos;nun Sarayköy&apos;deki marka geçmişi 1943 yılında başladı.</p>
            </div>
          </div>

          {hasResearchHistory ? (
            <ol className="heritage-timeline">
              {publicContent.heritage.slice(0, 3).map((record) => (
                <li key={record.year}>
                  <time>{record.year}</time>
                  <div><h3>{record.title}</h3><p>{record.description}</p></div>
                </li>
              ))}
            </ol>
          ) : null}

          <div className="press-archive" aria-labelledby="press-archive-title">
            <div className="press-archive__intro">
              <div>
                <p className="eyebrow">Basında Üçpınar</p>
                <h3 id="press-archive-title">Arşivden kısa bir seçki</h3>
              </div>
              <p>1950–1953 yılları arasında yayımlanan ilanlara tek bakışta ulaşın; tam kayıtlar belge merkezinde yer alır.</p>
            </div>

            <div className="archive-summary">
              <a className="archive-summary__visual" href={featuredArchiveRecord.src} target="_blank" rel="noopener noreferrer" aria-label={`${featuredArchiveRecord.publication}, ${featuredArchiveRecord.date}, sayfa ${featuredArchiveRecord.page} görselini tam boy aç`}>
                <Image src={featuredArchiveRecord.src} alt={featuredArchiveRecord.alt} fill sizes="(max-width: 640px) 100vw, 55vw" />
              </a>
              <div className="archive-summary__records">
                <ol>
                  {publicContent.pressArchive.map((item) => (
                    <li key={item.src}>
                      <div><strong>{item.publication}</strong><span>{item.date} · Sayfa {item.page}</span></div>
                      <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`${item.publication}, ${item.date} belgesini aç`}>Aç <span aria-hidden="true">↗</span></a>
                    </li>
                  ))}
                </ol>
                <TextLink href="/kalite-ve-analizler" variant="outline">Tüm Arşivi İncele</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--compact" aria-labelledby="facility-title">
        <Container>
          <SectionHeading id="facility-title" eyebrow="Tesis & kaynak" title="Üçpınar Kaynağı, Sarayköy'de." />
          {publicContent.media.facility.src ? (
            <div className="facility-composition">
              <MediaSlot media={publicContent.media.facility} />
              <MediaSlot media={publicContent.media.production} />
            </div>
          ) : (
            <div className="facility-facts">
              <div><span>Kaynak / izleme noktası</span><strong>Üçpınar Kaynağı</strong></div>
              <div><span>Tesis adresi</span><strong>{siteContent.contact.address}</strong></div>
            </div>
          )}
        </Container>
      </section>

      <section className="section section--compact section--cool" aria-labelledby="product-title">
        <Container className="product-compact">
          <MediaSlot media={publicContent.media.product} />
          <div className="split-copy">
            <p className="eyebrow">Ana ürün</p>
            <h2 id="product-title">{siteContent.product.name}</h2>
            <p>{siteContent.product.description}</p>
            <ul className="product-notes" aria-label="Ürün sunumu">
              <li><strong>19 L</strong><span>Ana ürün formatı</span></li>
              <li><strong>Ev & iş yeri</strong><span>Günlük kullanım odağı</span></li>
              <li><strong>Bayi ağı</strong><span>Bölgesel teslimat yapısı</span></li>
            </ul>
            <TextLink href="/bayiler" variant="outline">Bayi Bul</TextLink>
          </div>
        </Container>
      </section>

      <section className="section section--paper" aria-labelledby="quality-title">
        <Container className="document-feature">
          <div>
            <SectionHeading id="quality-title" eyebrow="Kalite & analizler" title="Belgeler, doğrulandığı haliyle." description="Su analizleri ve tarihsel kayıtlar, kaynak türleri birbirinden ayrılarak düzenli bir belge yapısında sunulur." />
            <TextLink href="/kalite-ve-analizler" variant="outline">Analizleri İncele</TextLink>
          </div>
          <article className="document-sheet">
            <span className="document-sheet__tag">GÜNCEL ANALİZ</span>
            <div className="document-sheet__content">
              <time dateTime={latestReport.reportDate}>{latestReport.displayDate}</time>
              <h3>{latestReport.samplePoint}</h3>
              <p>{latestReport.institution} · Protokol {latestReport.protocolNumber}</p>
            </div>
            <a className="text-link text-link--inline" href={latestReport.fileUrl} target="_blank" rel="noopener noreferrer">Raporu Aç <span aria-hidden="true">↗</span></a>
          </article>
        </Container>
      </section>

      <section className="section section--paper" aria-labelledby="contact-title">
        <Container>
          <SectionHeading id="contact-title" eyebrow="Tesis & iletişim" title="Üçpınar'a ulaşın." description={contact.address ? "Merkez iletişim kaydına ve konum yönlendirmesine bu bölümden ulaşabilirsiniz." : "Kurumsal ve toplu sipariş talepleri için iletişim sayfasını kullanabilirsiniz."} />
          {contact.address || contact.phone ? (
            <>
              <div className="contact-summary">
                <div><p className="footer-label">{contact.label}</p><address>{contact.address}</address>{contact.phone ? <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}>{contact.phone}</a> : null}</div>
                <div className="action-row">
                  {contact.address ? <a className="text-link text-link--outline" href={getMapSearchUrl(contact.address, contact.coordinates)} target="_blank" rel="noopener noreferrer">Haritada Aç<span aria-hidden="true">↗</span></a> : null}
                  <TextLink href="/iletisim" variant="primary">İletişim Bilgileri</TextLink>
                </div>
              </div>
              {contact.coordinates ? <GoogleMapPreview latitude={contact.coordinates.latitude} longitude={contact.coordinates.longitude} title="Üçpınar tesis konumu" wide /> : null}
            </>
          ) : <MediaSlot media={publicContent.media.logistics} />}
        </Container>
      </section>
    </>
  );
}
