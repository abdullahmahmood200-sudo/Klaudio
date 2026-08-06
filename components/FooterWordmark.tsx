"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToTop } from "./lenis";

/**
 * The giant KLAUDIO wordmark that closes every page, doubling as back-to-top.
 *
 * On the home page it is a plain anchor to #home: ScrollFX creates Lenis with
 * `anchors: true`, so Lenis intercepts the hash and glides there itself. A
 * next/link would be routed by Next instead and jump. The onClick is only a
 * fallback for the case where Lenis has not mounted yet.
 *
 * On other pages it is an ordinary link home.
 */
export default function FooterWordmark() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return (
      <Link href="/" className="footer-wordmark" aria-label="Klaudio home">
        KLAUDIO
      </Link>
    );
  }

  return (
    <a
      href="#home"
      className="footer-wordmark"
      aria-label="Back to top"
      onClick={(e) => {
        // Lenis handles this when it is running; if it is not, do it manually
        // so the control is never dead.
        if (scrollToTop()) e.preventDefault();
      }}
    >
      KLAUDIO
    </a>
  );
}
