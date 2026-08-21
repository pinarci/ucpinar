"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { headerAction, navigation, siteContent } from "@/content/site-content";

export function MobileNavigation({ activePath }: { activePath: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const previousOverflow = useRef("");
  const closeMenu = useCallback((restoreFocus = false) => {
    document.body.style.overflow = previousOverflow.current;
    setIsOpen(false);
    if (restoreFocus) requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenu(true); };
    const query = window.matchMedia("(min-width: 921px)");
    const onDesktop = (event: MediaQueryListEvent) => { if (event.matches) closeMenu(); };
    document.addEventListener("keydown", onKeyDown);
    query.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow.current;
      document.removeEventListener("keydown", onKeyDown);
      query.removeEventListener("change", onDesktop);
    };
  }, [closeMenu, isOpen]);

  return (
    <div className="mobile-navigation">
      <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-site-navigation" onClick={() => setIsOpen((open) => !open)}>
        <span className="menu-toggle__label">{isOpen ? "Kapat" : "Menü"}</span>
      </button>
      {isOpen ? (
        <div className="mobile-menu" id="mobile-site-navigation">
          <button className="mobile-menu__backdrop" type="button" aria-label="Menüyü kapat" onClick={() => closeMenu()} />
          <div className="mobile-menu__panel">
            <p className="mobile-menu__wordmark" aria-hidden="true">{siteContent.company.shortName}</p>
            <nav aria-label="Mobil menü"><ul>{navigation.map((item, index) => {
              const active = activePath === item.href;
              return <li key={item.href}><Link ref={index === 0 ? firstLinkRef : undefined} href={item.href} data-active={active || undefined} aria-current={active ? "page" : undefined} onClick={() => closeMenu()}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</Link></li>;
            })}</ul></nav>
            <Link className="mobile-menu__cta" href={headerAction.href} onClick={() => closeMenu()}>{headerAction.label}</Link>
            <p className="mobile-menu__tagline">1944&apos;ten beri kaynak suyu.</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
