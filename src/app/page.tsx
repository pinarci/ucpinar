import Image from "next/image";
import type { Metadata } from "next";
import { DealerFinder } from "@/components/dealers/dealer-finder";
import { Container } from "@/components/ui/container";
import { MediaSlot } from "@/components/ui/media-slot";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { getMapSearchUrl, publicContent, siteContent } from "@/content/site-content";

export const metadata: Metadata = { title: { absolute: siteContent.company.name } };

export default function HomePage() {
  const hasResearchHistory = publicContent.heritage.length > 1;
  const contact = publicContent.contact;
  const latestReport = siteContent.reports[0];

  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <Container className="home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow eyebrow--light">1940&apos;lı yıllardan bugüne</p>
            <h1 id="hero-title">ÜÇPINAR</h1>
            <p className="home-hero__descriptor">Kaynak Suyu</p>
            <p className="home-hero__lede">Günlük yaşamın en temel ihtiyacına köklü, sade ve güven veren bir yaklaşım.</p>
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
            <li><span>01</span><div><h2>Köklü marka</h2><p>1940&apos;lı yıllara uzanan bir isim ve Ankara&apos;yla kurulan güçlü bağ.</p></div></li>
            <li><span>02</span><div><h2>Sade yaklaşım</h2><p>Ürünü, süreci ve hizmeti gereksiz kalabalıktan uzak anlatan net bir duruş.</p></div></li>
            <li><span>03</span><div><h2>Yakın hizmet</h2><p>19 L damacana odağı ve bayi ağıyla gündelik ihtiyaca doğrudan erişim.</p></div></li>
          </ul>
        </Container>
      </section>

      <section className="section section--paper" aria-labelledby="heritage-title">
        <Container>
          <div className="heritage-grid">
            <p className="heritage-year" aria-hidden="true">1940&apos;lar</p>
            <div className="heritage-copy">
              <p className="eyebrow">Marka geçmişi</p>
              <h2 id="heritage-title">Sarayköy&apos;den bugüne.</h2>
              <p>Üçpınar&apos;ın eski kurumsal kayıtları markanın Sarayköy&apos;deki geçmişini 1940&apos;lı yıllara kadar götürüyor.</p>
            </div>
          </div>

          {hasResearchHistory ? (
            <ol className="heritage-timeline">
              {publicContent.heritage.map((record) => (
                <li key={record.year}>
                  <time>{record.year}</time>
                  <div><h3>{record.title}</h3><p>{record.description}</p></div>
                </li>
              ))}
            </ol>
          ) : null}

          {publicContent.archive.length > 0 ? (
            <div className="archive-block" aria-labelledby="archive-home-title">
              <div className="archive-block__heading">
                <p className="eyebrow">Arşiv</p>
                <h3 id="archive-home-title">Arşivden Üçpınar</h3>
              </div>
              <div className="archive-gallery">
                {publicContent.archive.map((item) => (
                  <figure key={item.src}>
                    <div className="archive-gallery__image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 42vw" /></div>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}

          <div className="press-archive" aria-labelledby="press-archive-title">
            <div className="press-archive__intro">
              <div>
                <p className="eyebrow">Basında Üçpınar</p>
                <h3 id="press-archive-title">Gazete arşivinden ilanlar</h3>
              </div>
              <p>1950–1953 yılları arasında Ulus ve Zafer gazetelerinde yayımlanan Üçpınar ilanlarından arşiv kesitleri.</p>
            </div>

            <div className="press-archive__grid">
              {publicContent.pressArchive.map((item) => (
                <figure className="press-card" key={item.src}>
                  <a className="press-card__image" href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`${item.publication}, ${item.date}, sayfa ${item.page} görselini tam boy aç`}>
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 920px) 50vw, 38vw" />
                  </a>
                  <figcaption>
                    <span className="press-card__publication">{item.publication}</span>
                    <span>{item.date} · Sayfa {item.page}</span>
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Kaynak kaydı <span aria-hidden="true">↗</span></a>
                  </figcaption>
                </figure>
              ))}
            </div>

            <article className="archive-video">
              <div className="archive-video__copy">
                <p className="eyebrow eyebrow--light">Video arşivi</p>
                <h3>Şehrin Nabzı&apos;nda Üçpınar</h3>
                <p>Üçpınar Doğal Kaynak Suyu&apos;nun üretim alanından Show Max Şehrin Nabzı programına yansıyan arşiv görüntüsü.</p>
                <span>Video süresi · 03:17</span>
              </div>
              <video controls preload="metadata" playsInline poster="/archive/video/ucpinar-sehrin-nabzi-poster.jpg" aria-label="Şehrin Nabzı programındaki Üçpınar Doğal Kaynak Suyu videosu">
                <source src="/archive/video/ucpinar-sehrin-nabzi.mp4" type="video/mp4" />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
            </article>
          </div>
        </Container>
      </section>

      <section className="section" aria-labelledby="facility-title">
        <Container>
          <SectionHeading id="facility-title" eyebrow="Tesis & kaynak" title="Üçpınar Kaynağı, Sarayköy'de." description="Resmî analiz belgelerinde tesis adresi Esenboğa Yolu 16. Km., Sarayköy, Pursaklar / Ankara olarak yer alıyor." />
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

      <section className="section section--cool" aria-labelledby="product-title">
        <Container className="split-grid split-grid--reverse">
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

      <section className="section" aria-labelledby="dealer-title">
        <Container>
          <SectionHeading id="dealer-title" eyebrow="Bayi ağı" title="Bayinizi bulun." description="Bireysel ev teslimatları Üçpınar bayi ağı üzerinden gerçekleştirilir." />
          <DealerFinder dealers={publicContent.dealers} limit={3} />
          <div className="section-action"><TextLink href="/bayiler" variant="inline">Tüm Bayiler</TextLink></div>
        </Container>
      </section>

      <section className="section corporate-section" aria-labelledby="corporate-title">
        <Container className="corporate-panel">
          <div>
            <p className="eyebrow eyebrow--light">Kurumsal talepler</p>
            <h2 id="corporate-title">Kurumsal ve toplu su ihtiyaçları için tesis bilgilerini inceleyin.</h2>
          </div>
          {contact.phone ? <a className="text-link text-link--secondary" href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}>Telefonla İletişim<span aria-hidden="true">→</span></a> : <TextLink href="/iletisim" variant="secondary">Tesis Bilgileri</TextLink>}
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
            </>
          ) : <MediaSlot media={publicContent.media.logistics} />}
        </Container>
      </section>
    </>
  );
}
