import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { MediaSlot } from "@/components/ui/media-slot";
import { PageIntro } from "@/components/ui/page-intro";
import { getMapSearchUrl, publicContent } from "@/content/site-content";

export const metadata: Metadata = { title: "İletişim" };

function telephoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export default function ContactPage() {
  const contact = publicContent.contact;
  const contactRows = [
    ["Adres", contact.address],
    ["Telefon", contact.phone],
    ["E-posta", contact.email],
    ["Çalışma saatleri", contact.hours],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  return (
    <>
      <PageIntro eyebrow="İletişim" title="Üçpınar'a ulaşın." description="Kurumsal ve toplu sipariş talepleri merkez üzerinden değerlendirilebilir. Bireysel teslimatlar için bayi ağını kullanın." />

      {contactRows.length > 0 ? (
        <section className="section section--paper">
          <Container className="split-grid">
            <MediaSlot media={publicContent.media.facility} />
            <div className="split-copy">
              <p className="eyebrow">{contact.label ?? "İletişim"}</p>
              <h2>İletişim detayları</h2>
              <ul className="contact-list">{contactRows.map(([label, value]) => <li key={label}><strong>{label}</strong>{label === "Telefon" ? <a href={telephoneHref(value)}>{value}</a> : <span>{value}</span>}</li>)}</ul>
              <div className="action-row contact-actions">
                {contact.address ? <a className="text-link text-link--outline" href={getMapSearchUrl(contact.address)} target="_blank" rel="noopener noreferrer">Haritada Aç<span aria-hidden="true">↗</span></a> : null}
                {contact.sourceUrl ? <a className="text-link text-link--inline" href={contact.sourceUrl} target="_blank" rel="noopener noreferrer">Kaydı Gör<span aria-hidden="true">↗</span></a> : null}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section inquiry-panel" id="kurumsal-talep" aria-labelledby="inquiry-title">
        <Container className="page-grid">
          <div><p className="eyebrow eyebrow--light">Kurumsal talep</p><h2 id="inquiry-title">Kurumsal ve toplu siparişler</h2></div>
          <div>
            <p>Kurumsal ve toplu su ihtiyaçları için Üçpınar merkez ile iletişime geçin.</p>
            {contact.phone ? <a className="text-link text-link--secondary" href={telephoneHref(contact.phone)}>Telefonla İletişim<span aria-hidden="true">→</span></a> : null}
          </div>
        </Container>
      </section>
    </>
  );
}
