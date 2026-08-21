"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { headerAction, navigation } from "@/content/site-content";

export function SiteNavigationState() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const progressElement = progressRef.current;
    if (!progressElement) return;
    let animationFrame: number | null = null;
    const updateProgress = () => {
      animationFrame = null;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress = range > 0 ? Math.min(Math.max(window.scrollY / range, 0), 1) : 0;
      progressElement.style.setProperty("--scroll-progress", progress.toString());
    };
    const requestUpdate = () => {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(updateProgress);
    };
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  return (
    <div className="header-navigation-state">
      <div className="desktop-header">
        <nav aria-label="Ana menü">
          <ul className="site-nav">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return <li key={item.href}><Link href={item.href} data-active={active || undefined} aria-current={active ? "page" : undefined}>{item.label}</Link></li>;
            })}
          </ul>
        </nav>
        <Link className="header-cta" href={headerAction.href}>{headerAction.label}</Link>
      </div>
      <MobileNavigation key={pathname} activePath={pathname} />
      <span className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></span>
    </div>
  );
}
