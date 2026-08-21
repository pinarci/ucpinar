import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { SiteNavigationState } from "@/components/navigation/site-navigation-state";
import { siteContent } from "@/content/site-content";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link className="wordmark" href="/" aria-label={`${siteContent.company.name} ana sayfa`}>
          <BrandLogo decorative priority />
        </Link>
        <SiteNavigationState />
      </Container>
    </header>
  );
}
