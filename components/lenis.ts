import type Lenis from "lenis";

/**
 * The Lenis instance lives in ScrollFX, which owns its lifecycle. Anything
 * that needs to drive a programmatic scroll (the footer wordmark, for one)
 * reads it from here rather than creating a second instance — two Lenis
 * instances would fight over the same scroll container.
 */
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function getLenis() {
  return instance;
}

/**
 * Glide to the top of the page. Returns true when this function handled the
 * scroll, so callers on an anchor can preventDefault only in that case and
 * otherwise leave the hash to Lenis's own anchor handling.
 */
export function scrollToTop() {
  const lenis = getLenis();
  if (lenis) {
    // `force` matters when something scrolled the page natively (a jump link,
    // scroll restoration): Lenis's tracked position can then already read 0
    // and a plain scrollTo(0) would be treated as a no-op.
    lenis.scrollTo(0, { force: true });
    return true;
  }
  return false;
}
