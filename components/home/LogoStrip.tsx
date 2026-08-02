"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Platform strip under the landing hero.
 *
 * Each brand tries /logos/<slug>.svg, then /logos/<slug>.png (what
 * scripts/build-logos.mjs emits), and falls back to its wordmark if neither
 * exists — so the strip never shows a broken image while assets are pending.
 */

type Platform = { name: string; slug: string };

const platforms: Platform[] = [
  { name: "Salesforce", slug: "salesforce" },
  { name: "AWS", slug: "aws" },
  { name: "Shopify", slug: "shopify" },
  { name: "VTEX", slug: "vtex" },
  { name: "n8n", slug: "n8n" },
  { name: "HubSpot", slug: "hubspot" },
];

function Logo({ name, slug }: Platform) {
  const sources = [`/logos/${slug}.svg`, `/logos/${slug}.png`];
  const [attempt, setAttempt] = useState(0);
  const ref = useRef<HTMLImageElement>(null);

  // A server-rendered <img> can finish (and fail) before React hydrates, so
  // its error event is missed. Re-check on mount: a completed request with no
  // intrinsic width is a broken image.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setAttempt((a) => a + 1);
  }, [attempt]);

  if (attempt >= sources.length)
    return <span className="lp-logo-text">{name}</span>;

  return (
    <img
      key={sources[attempt]}
      ref={ref}
      src={sources[attempt]}
      alt={name}
      className="lp-logo-img"
      draggable={false}
      onError={() => setAttempt((a) => a + 1)}
    />
  );
}

export default function LogoStrip() {
  return (
    <div className="lp-logos">
      {platforms.map((p) => (
        <Logo key={p.slug} {...p} />
      ))}
    </div>
  );
}
