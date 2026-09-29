import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LegalToc from "@/components/legal/LegalToc";
import { Blocks, Inline } from "@/components/insights/Rich";
import TopBar from "@/components/insights/TopBar";
import { platforms } from "@/components/services/data";
import {
  articles,
  formatDate,
  getArticle,
  readingMinutes,
} from "@/lib/insights";
import {
  AUTHOR_ID,
  AUTHOR_NAME,
  OG_DEFAULTS,
  ORG_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  jsonLd,
} from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/*
 * No `dynamicParams = false`, for the same reason as the service pages: on
 * Cloudflare (OpenNext) without an incremental cache, a closed param list
 * turns every prerendered page into a 404. Unknown slugs 404 via notFound().
 */

const anchor = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};

  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/insights/${a.slug}` },
    authors: [{ name: SITE_NAME, url: "/about" }],
    openGraph: {
      ...OG_DEFAULTS,
      type: "article",
      title: a.title,
      description: a.description,
      url: `/insights/${a.slug}`,
      publishedTime: a.published,
      modifiedTime: a.updated,
      authors: [`${SITE_URL}/about`],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const url = `${SITE_URL}/insights/${a.slug}`;
  const services = a.services
    .map((s) => platforms.find((p) => p.slug === s))
    .filter((p) => p !== undefined);
  const related = articles
    .filter(
      (o) => o.slug !== a.slug && o.services.some((s) => a.services.includes(s)),
    )
    .concat(articles.filter((o) => o.slug !== a.slug))
    .filter((o, i, list) => list.findIndex((x) => x.slug === o.slug) === i)
    .slice(0, 3);

  /**
   * The article, its author, and the services it is about, all linked by @id
   * to the one Organization node the root layout declares.
   */
  const articleNode = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.description,
    url,
    mainEntityOfPage: url,
    datePublished: a.published,
    dateModified: a.updated,
    inLanguage: "en",
    author: { "@id": AUTHOR_ID },
    publisher: { "@id": ORG_ID },
    image: `${SITE_URL}/opengraph-image`,
    isPartOf: { "@id": `${SITE_URL}/insights#blog` },
    about: services.map((p) => ({
      "@id": `${SITE_URL}/services/${p.slug}#service`,
    })),
    articleSection: services.map((p) => p.title),
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
      { "@type": "ListItem", position: 3, name: a.title, item: url },
    ],
  };

  return (
    <div style={{ background: "#ffffff" }}>
      <JsonLd data={jsonLd(articleNode, breadcrumb)} />
      <TopBar />

      <nav className="svc-crumb section-pad" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden>/</span>
        <Link href="/insights">Insights</Link>
        <span aria-hidden>/</span>
        <span aria-current="page">{a.title}</span>
      </nav>

      <article className="legal insight section-pad">
        <header className="legal-hero insight-hero">
          <p className="insights-eyebrow">
            {services.map((p) => p.title).join(" · ")}
          </p>
          <h1 className="insight-title">{a.title}</h1>
          <p className="insight-byline">
            By{" "}
            <Link href="/about" rel="author">
              {AUTHOR_NAME}
            </Link>
            <span aria-hidden> · </span>
            Published <time dateTime={a.published}>{formatDate(a.published)}</time>
            {a.updated !== a.published && (
              <>
                <span aria-hidden> · </span>
                Updated <time dateTime={a.updated}>{formatDate(a.updated)}</time>
              </>
            )}
            <span aria-hidden> · </span>
            {readingMinutes(a)} min read
          </p>
        </header>

        <div className="legal-layout">
          <aside className="legal-aside">
            <LegalToc bodyId="insight-body" />
          </aside>

          <div id="insight-body" className="insight-body">
            <p className="insight-lede">
              <Inline text={a.intro} />
            </p>

            <section className="insight-takeaways" aria-labelledby="key-takeaways">
              <h2 id="key-takeaways">Key takeaways</h2>
              <ul>
                {a.takeaways.map((t) => (
                  <li key={t}>
                    <Inline text={t} />
                  </li>
                ))}
              </ul>
            </section>

            {a.sections.map((s) => (
              <section key={s.heading}>
                <h2 id={anchor(s.heading)}>{s.heading}</h2>
                <p className="insight-answer">
                  <Inline text={s.answer} />
                </p>
                {s.body && <Blocks blocks={s.body} />}
              </section>
            ))}

            <aside className="insight-author" aria-label="About Klaudio LLC">
              <p className="insight-author-label">Written by</p>
              <p className="insight-author-name">
                <Link href="/about" rel="author">
                  {SITE_NAME}
                </Link>
              </p>
              <p className="insight-author-bio">{SITE_DESCRIPTION}</p>
            </aside>
          </div>
        </div>
      </article>

      <section className="svc-related section-pad">
        <h2 className="svc-related-title">Related services and reading</h2>
        <ul className="svc-related-list">
          {services.map((p) => (
            <li key={p.slug}>
              <Link href={`/services/${p.slug}`}>
                <span className="svc-related-name">{p.title} services</span>
                <span className="svc-related-sub">{p.sub}</span>
              </Link>
            </li>
          ))}
          {related.map((o) => (
            <li key={o.slug}>
              <Link href={`/insights/${o.slug}`}>
                <span className="svc-related-name">{o.title}</span>
                <span className="svc-related-sub">
                  {readingMinutes(o)} min read
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="svc-cta section-pad">
        <h2 className="svc-cta-title">Tell us what you&apos;re trying to fix</h2>
        <p className="svc-cta-body">
          Every engagement starts with a discovery call: your goals, your
          current systems, and what good looks like. No platform pitch until we
          understand the problem.
        </p>
        <Link href="/contact" className="cta-btn svc-cta-btn">
          Schedule a free consultation
        </Link>
      </section>

      <Footer />
    </div>
  );
}
