import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import ServiceDetail from "@/components/services/ServiceDetail";
import { platforms } from "@/components/services/data";
import { OG_DEFAULTS, ORG_ID, SITE_URL, jsonLd } from "@/lib/site";

const menuLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

/** All eight pages are known at build time, so they prerender as static HTML. */
export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

/** Anything outside the eight slugs is a 404, not a soft-404 empty page. */
export const dynamicParams = false;

function find(slug: string) {
  return platforms.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const platform = find(slug);
  if (!platform) return {};

  return {
    title: platform.seoTitle,
    description: platform.metaDescription,
    alternates: { canonical: `/services/${platform.slug}` },
    openGraph: {
      ...OG_DEFAULTS,
      title: platform.seoTitle,
      description: platform.metaDescription,
      url: `/services/${platform.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = find(slug);
  if (!platform) notFound();

  const others = platforms.filter((p) => p.slug !== platform.slug);

  /**
   * One Service node scoped to this page, with the page's own offerings as its
   * catalog. This is the pairing that makes a service page citable: the prose
   * an answer engine quotes and the structured data it matches on describe the
   * same single subject, at the same URL.
   */
  const serviceNode = {
    "@type": "Service",
    "@id": `${SITE_URL}/services/${platform.slug}#service`,
    name: platform.title,
    alternateName: platform.seoTitle,
    description: platform.metaDescription,
    url: `${SITE_URL}/services/${platform.slug}`,
    serviceType: platform.title,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: "Worldwide" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${platform.title} offerings`,
      itemListElement: platform.offerings.map((group) => ({
        "@type": "OfferCatalog",
        name: group.title,
        itemListElement: group.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      })),
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: platform.title,
        item: `${SITE_URL}/services/${platform.slug}`,
      },
    ],
  };

  return (
    <div style={{ background: "#ffffff" }}>
      <JsonLd data={jsonLd(serviceNode, breadcrumb)} />
      <MobileMenu home={false} activeHref="/services" />

      <header className="svc-topbar">
        <Link href="/" className="svc-logo" aria-label="Klaudio home">
          <Logo size={36} animated />
          <span
            style={{
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "-.01em",
              color: "#0f1a2e",
            }}
          >
            Klaudio
          </span>
        </Link>

        <nav className="svc-topnav">
          {menuLinks.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Visible breadcrumb, matching the BreadcrumbList above. */}
      <nav className="svc-crumb section-pad" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden>/</span>
        <Link href="/services">Services</Link>
        <span aria-hidden>/</span>
        <span aria-current="page">{platform.title}</span>
      </nav>

      <section className="svc-detail section-pad" style={{ paddingTop: 8 }}>
        {/* The headline is this page's h1, and the explorer's eyebrow would just
            repeat the breadcrumb, so it is dropped here. */}
        <ServiceDetail platform={platform} as="h1" showEyebrow={false} />
      </section>

      <section className="svc-related section-pad">
        <h2 className="svc-related-title">Other services</h2>
        <ul className="svc-related-list">
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={`/services/${p.slug}`}>
                <span className="svc-related-name">{p.title}</span>
                <span className="svc-related-sub">{p.sub}</span>
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
