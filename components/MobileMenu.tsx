"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "./home/data";

/**
 * Floating hamburger + popup menu for small screens.
 *
 * The button and popup are `position: fixed`, so opening the menu overlays the
 * page (a popup) instead of pushing the content down. Hidden on desktop via CSS
 * (`.mobile-menu { display: none }`), where each page keeps its own nav.
 *
 * `home` controls link targets: on the home page the section links are on-page
 * anchors (`#services`); elsewhere they must jump back to the home route
 * (`/#services`). `activeHref` marks which item shows the accent dot.
 */
export default function MobileMenu({
  home = true,
  activeHref = "#services",
}: {
  home?: boolean;
  activeHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className={`hamburger floating-hamburger${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {open && <div className="mm-backdrop" onClick={close} />}

      <nav className={`mm-popup${open ? " open" : ""}`}>
        {navItems.map((it) => {
          const href =
            !home && it.href.startsWith("#") ? `/${it.href}` : it.href;
          const active = it.href === activeHref;
          const inner = (
            <>
              {active && <span className="mm-dot" />}
              {it.label}
            </>
          );
          return href.startsWith("#") ? (
            <a key={it.label} href={href} onClick={close}>
              {inner}
            </a>
          ) : (
            <Link key={it.label} href={href} onClick={close}>
              {inner}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
