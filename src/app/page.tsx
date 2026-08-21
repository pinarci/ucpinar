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

  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <Container className="home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow eyebrow--light">1944&apos;ten beri</p>
            <h1 id="hero-title">ÜÇPINAR</h1>
            <p className="home-hero__descriptor">Kaynak Suyu</p>
            <div className="action-row">
              <TextLink href="/bayiler" variant="primary">Bayi Bul</TextLink>
              <TextLink href="/kalite-ve-analizler" variant="secondary">Analizler &amp; Belgeler</TextLink>
            </div>
          </div>
          <MediaSlot media={publicContent.media.hero} priority />
        </Container>
      </section>

      <section className="section section--paper" aria-labelledby="heritage-title">
        <Container>
          <div className="heritage-grid">
            <p className="heritage-year" aria-hidden="true">1944</p>
            <div className="heritage-copy">
              <p className="eyebrow">Marka geçmişi</p>
              <h2 id="heritage-title">1944&apos;ten bugüne.</h2>
              <p>Üçpınar Kaynak Suyu, 1944&apos;e uzanan marka geçmişiyle bugün 19 L damacana ve bayi ağı odağında hizmet vermektedir.</p>
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
        </Container>
      </section>

      <section className="section" aria-labelledby="facility-title">
        <Container>
          <SectionHeading id="facility-title" eyebrow="Tesis & üretim" title="Üretimden dağıtıma uzanan fiziksel süreç." description="Kaynak suyun tüketiciye ulaşan yolculuğu; üretim, kontrol ve dağıtım adımlarıyla ele alınır." />
          <div className="facility-composition">
            <MediaSlot media={publicContent.media.facility} />
            <MediaSlot media={publicContent.media.production} />
          </div>
        </Container>
      </section>

      <section className="section section--cool" aria-labelledby="product-title">
        <Container className="split-grid split-grid--reverse">
          <MediaSlot media={publicContent.media.product} />
          <div className="split-copy">
            <p className="eyebrow">Ana ürün</p>
            <h2 id="product-title">{siteContent.product.name}</h2>
            <p>{siteContent.product.description}</p>
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
            <span className="document-sheet__tag">BELGE DÜZENİ</span>
            <h3>{hasResearchHistory ? "1950—2011 tarihsel kayıtları" : "Su analizleri"}</h3>
            <p>{hasResearchHistory ? "Gazete arşivleri, resmî yanıt ve tarihsel kayıtlar ayrı kaynak türleriyle incelenebilir." : "Güncel analiz belgeleri yalnız doğrulanmış dosyalarıyla yayımlanır."}</p>
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
            <h2 id="corporate-title">Kurumsal ve toplu su ihtiyaçları için Üçpınar merkez ile iletişime geçin.</h2>
          </div>
          {contact.phone ? <a className="text-link text-link--secondary" href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}>Telefonla İletişim<span aria-hidden="true">→</span></a> : <TextLink href="/iletisim#kurumsal-talep" variant="secondary">Kurumsal İletişim</TextLink>}
        </Container>
      </section>

      <section className="section section--paper" aria-labelledby="contact-title">
        <Container>
          <SectionHeading id="contact-title" eyebrow="Tesis & iletişim" title="Üçpınar'a ulaşın." description={contact.address ? "Merkez iletişim kaydına ve konum yönlendirmesine bu bölümden ulaşabilirsiniz." : "Kurumsal ve toplu sipariş talepleri için iletişim sayfasını kullanabilirsiniz."} />
          {contact.address || contact.phone ? (
            <div className="contact-summary">
              <div><p className="footer-label">{contact.label}</p><address>{contact.address}</address>{contact.phone ? <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}>{contact.phone}</a> : null}</div>
              <div className="action-row">
                {contact.address ? <a className="text-link text-link--outline" href={getMapSearchUrl(contact.address)} target="_blank" rel="noopener noreferrer">Haritada Aç<span aria-hidden="true">↗</span></a> : null}
                <TextLink href="/iletisim" variant="primary">İletişim Bilgileri</TextLink>
              </div>
            </div>
          ) : <MediaSlot media={publicContent.media.logistics} />}
        </Container>
      </section>
    </>
  );
}
