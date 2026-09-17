"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/**
 * Contents list for a legal page. The pages write their sections as plain
 * <h2>s, so this reads them from the rendered prose, gives each an anchor,
 * and tracks which one is in view.
 */
export default function LegalToc({ bodyId }: { bodyId: string }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const body = document.getElementById(bodyId);
    if (!body) return;

    const headings = Array.from(body.querySelectorAll("h2"));
    const found = headings.map((h) => {
      const label = h.textContent ?? "";
      if (!h.id) h.id = slug(label);
      return { id: h.id, label };
    });
    setSections(found);
    if (found[0]) setActive(found[0].id);

    // A heading counts as current once it passes the top third of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -66% 0px" },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [bodyId]);

  if (sections.length === 0) return null;

  return (
    <nav className="legal-toc" aria-label="On this page">
      <p className="legal-toc-label">On this page</p>
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
