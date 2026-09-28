import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import TopBar from "@/components/insights/TopBar";
import { platforms } from "@/components/services/data";
import { articles, formatDate, readingMinutes } from "@/lib/insights";
import {
  AUTHOR,
  AUTHOR_ID,
  OG_DEFAULTS,
  ORG_ID,
  SITE_URL,
  authorNode,
  breadcrumbNode,
  jsonLd,
} from "@/lib/site";

const TITLE = "Insights on AI, Revenue Operations, Cloud, and Commerce";
const DESCRIPTION =
  "Practical guides from Klaudio LLC on choosing, implementing, and running AI automation, CRM and revenue operations, AWS cloud, ecommerce, and financial systems.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/insights" },
  openGraph: {
    ...OG_DEFAULTS,
    title: TITLE,
    description: DESCRIPTION,
    url: "/insights",
  },
};

const serviceTitle = (slug: string) =>
  platforms.find((p) => p.slug === slug)?.title ?? slug;

export default function InsightsIndex() {
  const blog = {
    "@type": "Blog",
    "@id": `${SITE_URL}/insights#blog`,
    url: `${SITE_URL}/insights`,
    name: "Klaudio LLC Insights",
    description: DESCRIPTION,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/insights/${a.slug}#article`,
      headline: a.title,
      url: `${SITE_URL}/insights/${a.slug}`,
      datePublished: a.published,
      dateModified: a.updated,
      author: { "@id": AUTHOR_ID },
    })),
  };

  return (
    <div style={{ background: "#ffffff" }}>
      <JsonLd
        data={jsonLd(blog, authorNode(), breadcrumbNode("Insights", "/insights"))}
      />
      <TopBar />

      <nav className="svc-crumb section-pad" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden>/</span>
        <span aria-current="page">Insights</span>
      </nav>

      <main className="insights section-pad">
        <header className="insights-hero">
          <p className="insights-eyebrow">Insights</p>
          <h1 className="insights-title">{TITLE}</h1>
          <p className="insights-intro">{DESCRIPTION}</p>
          {/* One author for the whole series, so the byline sits here once
              rather than repeating on every card. */}
          <p className="insights-byline">
            Written by{" "}
            <Link href={`/authors/${AUTHOR.slug}`} rel="author">
              {AUTHOR.name}
            </Link>
          </p>
        </header>

        <ul className="insights-list">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="insights-card">
                <span className="insights-card-tags">
                  {a.services.map(serviceTitle).join(" · ")}
                </span>
                <h2 className="insights-card-title">{a.title}</h2>
                <p className="insights-card-desc">{a.description}</p>
                <span className="insights-card-meta">
                  {formatDate(a.published)} · {readingMinutes(a)} min read
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
