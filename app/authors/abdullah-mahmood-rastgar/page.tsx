import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import TopBar from "@/components/insights/TopBar";
import { articles, formatDate, readingMinutes } from "@/lib/insights";
import {
  AUTHOR,
  AUTHOR_ID,
  OG_DEFAULTS,
  SITE_URL,
  authorNode,
  jsonLd,
} from "@/lib/site";

const PATH = `/authors/${AUTHOR.slug}`;
const DESCRIPTION = `${AUTHOR.name} is ${AUTHOR.jobTitle} at Klaudio LLC.`;

export const metadata: Metadata = {
  title: AUTHOR.name,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    ...OG_DEFAULTS,
    type: "profile",
    title: AUTHOR.name,
    description: DESCRIPTION,
    url: PATH,
  },
};

export default function AuthorPage() {
  /** ProfilePage is the type Google reads for author pages. */
  const profile = {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}${PATH}`,
    url: `${SITE_URL}${PATH}`,
    name: AUTHOR.name,
    mainEntity: { "@id": AUTHOR_ID },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${SITE_URL}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: AUTHOR.name,
        item: `${SITE_URL}${PATH}`,
      },
    ],
  };

  return (
    <div style={{ background: "#ffffff" }}>
      <JsonLd data={jsonLd(profile, authorNode(), breadcrumb)} />
      <TopBar />

      <nav className="svc-crumb section-pad" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden>/</span>
        <Link href="/insights">Insights</Link>
        <span aria-hidden>/</span>
        <span aria-current="page">{AUTHOR.name}</span>
      </nav>

      <main className="insights section-pad">
        <header className="insights-hero">
          <Image
            src={AUTHOR.image}
            alt={AUTHOR.name}
            width={120}
            height={120}
            priority
            className="insights-author-photo"
          />
          <p className="insights-eyebrow">Author</p>
          <h1 className="insights-title">{AUTHOR.name}</h1>
          <p className="insights-role">{AUTHOR.jobTitle}, Klaudio LLC</p>
          <p className="insights-intro">{AUTHOR.bio}</p>
          {AUTHOR.sameAs.length > 0 && (
            <p className="insights-intro">
              {AUTHOR.sameAs.map((href) => (
                <a key={href} href={href} rel="me noopener noreferrer" target="_blank">
                  {href.includes("linkedin.com")
                    ? "LinkedIn profile"
                    : new URL(href).hostname.replace(/^www\./, "")}
                </a>
              ))}
            </p>
          )}
        </header>

        <h2 className="svc-related-title">Articles by {AUTHOR.name}</h2>
        <ul className="insights-list">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="insights-card">
                <h3 className="insights-card-title">{a.title}</h3>
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
