import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SiteNavigationState } from "@/components/navigation/site-navigation-state";
import { siteContent } from "@/content/site-content";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link className="wordmark" href="/" aria-label={`${siteContent.company.name} ana sayfa`}>
          {siteContent.company.shortName}
        </Link>
        <SiteNavigationState />
      </Container>
    </header>
  );
}
