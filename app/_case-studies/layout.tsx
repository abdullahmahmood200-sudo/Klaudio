import type { Metadata } from "next";

/**
 * Hidden until there are real clients to write up. The leading underscore
 * makes this a private folder, so Next.js does not route it and /case-studies
 * returns 404. To bring it back, rename the folder to `case-studies` and
 * restore the "Case Studies" link in components/home/data.ts (navItems) and
 * in the menus on app/services/page.tsx and app/contact/page.tsx.
 *
 * Held out of the index on purpose: the six entries on this page are
 * placeholder client names, not real engagements. Indexing them would let
 * answer engines cite invented clients as Klaudio's, which is the kind of
 * fact that is very hard to walk back once a model has learned it.
 *
 * To publish: write real problem / approach / outcome copy per client, drop
 * the `robots` block below, add the route to app/sitemap.ts, remove the
 * /case-studies disallow from app/robots.ts, and add it to public/llms.txt.
 */
export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected Klaudio client work across real estate, manufacturing, healthcare, education, and financial services.",
  alternates: { canonical: "/case-studies" },
  robots: { index: false, follow: true },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
