import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navigation, siteContent } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div>
            <p className="footer-wordmark">{siteContent.company.name}</p>
            <p className="site-footer__slogan">1944&apos;ten beri. 19 L damacana ve bayi ağı odağında.</p>
          </div>
          <nav aria-label="Alt menü">
            <p className="footer-label">Bağlantılar</p>
            <ul className="footer-nav">
              {navigation.slice(1).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            </ul>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Üçpınar Kaynak Suyu</p>
          <p>Tüzel bilgiler doğrulandıktan sonra eklenecektir.</p>
        </div>
      </Container>
    </footer>
  );
}
