import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { navigation, siteContent } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div>
            <Link className="footer-logo-link" href="/" aria-label={`${siteContent.company.name} ana sayfa`}><BrandLogo className="footer-logo" decorative /></Link>
            <p className="site-footer__slogan">1943&apos;ten bugüne. 19 L damacana ve bayi ağı odağında.</p>
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
          <p>{siteContent.company.legalName}</p>
        </div>
      </Container>
    </footer>
  );
}
