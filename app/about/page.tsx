import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import TopBar from "@/components/insights/TopBar";
import { processSteps, whyData } from "@/components/home/data";
import { platforms } from "@/components/services/data";
import {
  ADDRESS,
  FOUNDED,
  LEGAL,
  OG_DEFAULTS,
  ORG_ID,
  SITE_DESCRIPTION,
  SEGMENTS,
  SITE_URL,
  TARGET_INDUSTRY,
  breadcrumbNode,
  jsonLd,
} from "@/lib/site";

const TITLE = "About Klaudio LLC | Ecommerce Technology & AI Consulting";
const DESCRIPTION = `${SITE_DESCRIPTION.replace(/\.$/, "")}. Founded in ${FOUNDED}.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    ...OG_DEFAULTS,
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
  },
};

/**
 * The company's identity page: every fact about Klaudio LLC in one place, so
 * "who is Klaudio LLC" questions resolve to a single citable URL. Facts come
 * from lib/site.ts and the homepage data, never retyped here.
 */
export default function AboutPage() {
  const aboutNode = {
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about`,
    url: `${SITE_URL}/about`,
    name: "About Klaudio LLC",
    description: DESCRIPTION,
    mainEntity: { "@id": ORG_ID },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  const facts: [string, React.ReactNode][] = [
    ["Legal name", LEGAL.entity],
    ["Founded", FOUNDED],
    [
      "Office",
      `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`,
    ],
    ["Registered in", LEGAL.jurisdiction],
    ["Clients served", "Remotely, across the United States and internationally"],
    [
      "Contact",
      <Link key="c" href="/contact">
        Start a conversation
      </Link>,
    ],
  ];

  return (
    <div style={{ background: "#ffffff" }}>
      <JsonLd
        data={jsonLd(aboutNode, breadcrumbNode("About", "/about"))}
      />
      <TopBar active="/about" />

      <nav className="svc-crumb section-pad" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden>/</span>
        <span aria-current="page">About</span>
      </nav>

      <main className="about section-pad">
        <header className="about-hero">
          <p className="insights-eyebrow">About</p>
          <h1 className="insights-title">About Klaudio LLC</h1>
          <p className="about-lede">
            {SITE_DESCRIPTION} We focus on solutions that are implemented,
            adopted, measured, and maintained over the long term.
          </p>
        </header>

        <section className="about-section" aria-labelledby="glance">
          <h2 id="glance" className="about-h2">
            Klaudio LLC at a glance
          </h2>
          <dl className="about-facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="about-section" aria-labelledby="what">
          <h2 id="what" className="about-h2">
            What Klaudio LLC does
          </h2>
          <p className="about-p">
            Klaudio LLC helps ecommerce brands build, automate, and scale
            their online stores, across six service lines, with managed
            support after launch.
          </p>
          <ul className="svc-related-list about-services">
            {platforms.map((p) => (
              <li key={p.slug}>
                <Link href={`/services/${p.slug}`}>
                  <span className="svc-related-name">{p.title}</span>
                  <span className="svc-related-sub">{p.sub}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-section" aria-labelledby="who">
          <h2 id="who" className="about-h2">
            Who Klaudio LLC works with
          </h2>
          <p className="about-p">
            Klaudio LLC serves one industry, {TARGET_INDUSTRY.toLowerCase()},
            and within it four kinds of business:
          </p>
          <ul className="about-principles">
            {SEGMENTS.map((s) => (
              <li key={s.slug} id={s.slug}>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
                <p className="about-buyers">
                  Usually working with {s.buyers.join(", ")}.
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-section" aria-labelledby="how">
          <h2 id="how" className="about-h2">
            How Klaudio LLC works
          </h2>
          <p className="about-p">
            Every engagement follows the same seven stages, from understanding
            the problem to supporting the solution after launch.
          </p>
          <ol className="about-steps">
            {processSteps.map((s) => (
              <li key={s.num}>
                <span className="about-step-num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-section" aria-labelledby="team">
          <h2 id="team" className="about-h2">
            The Klaudio LLC team
          </h2>
          <p className="about-p">
            Klaudio LLC works as one team of Shopify and VTEX developers, AI and
            automation engineers, growth and retention marketers, cloud
            engineers, and ecommerce finance specialists. Every part of your
            store is handled under one roof, from discovery through launch and
            ongoing support, so nothing gets lost between agencies.
          </p>
        </section>

        <section className="about-section" aria-labelledby="principles">
          <h2 id="principles" className="about-h2">
            What Klaudio LLC believes
          </h2>
          <ul className="about-principles">
            {whyData.map((w) => (
              <li key={w.num}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>


      <section className="svc-cta section-pad">
        <h2 className="svc-cta-title">Tell us what your store needs</h2>
        <p className="svc-cta-body">
          Every engagement starts with a discovery call: your store, your
          current stack, and your growth goals. No platform pitch until we
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
