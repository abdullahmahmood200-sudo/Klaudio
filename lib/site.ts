/**
 * Single source of truth for the site's identity: canonical origin, the copy
 * that goes into <title>/<meta description>, and the JSON-LD entity graph.
 *
 * Answer engines (ChatGPT Search, Perplexity, Google AI Overviews, Claude)
 * resolve "who is Klaudio" from the Organization node below, so every page
 * points its structured data at the same @id rather than re-declaring the
 * company. Change the facts here, not in the pages.
 */

/** Canonical origin. No trailing slash, metadataBase composes paths onto it. */
export const SITE_URL = "https://klaudio.llc";

export const SITE_NAME = "Klaudio Agency";

/** Stable identifier for the company node that every page's graph references. */
export const ORG_ID = `${SITE_URL}/#organization`;

export const SITE_DESCRIPTION =
  "Klaudio Agency is an AI and technology consulting firm helping ambitious organizations put the right platforms to work: AI automation, Salesforce, AWS cloud, ecommerce, and financial systems.";

/** Registered office. Shown in the footer and published as the Organization's address. */
export const ADDRESS = {
  street: "821 N St, Suite 102",
  city: "Anchorage",
  region: "AK",
  postalCode: "99501",
  country: "US",
} as const;

/**
 * Legal identity, used by the Terms of Use and Privacy Policy pages.
 *
 * LEGAL_ENTITY must match the name on the Alaska registration exactly, so
 * change it here if the filed name differs from the trading name.
 */
export const LEGAL = {
  entity: "Klaudio Agency LLC",
  jurisdiction: "State of Alaska, United States",
  state: "Alaska",
  email: "hello@klaudio.llc",
  /** Date the current wording took effect. Bump it whenever the text changes. */
  effective: "13 September 2026",
} as const;

/**
 * Fields every page's Open Graph block needs. A child page's `openGraph`
 * replaces the parent's outright rather than merging into it, so each page
 * spreads these in alongside its own title, description, and url.
 */
export const OG_DEFAULTS = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_US",
} as const;

/** The service lines, phrased as a person would ask for them. */
export const SERVICE_LINES = [
  "AI & Automation",
  "Salesforce Consulting",
  "CRM & Marketing Automation",
  "AWS Cloud",
  "Shopify & Ecommerce",
  "VTEX Commerce",
  "Financial Systems",
  "Managed Services",
] as const;

export const INDUSTRIES = [
  "Associations",
  "Nonprofits",
  "Professional Services",
  "Healthcare",
  "Real Estate",
  "Financial Services",
  "Education",
  "Manufacturing",
] as const;

/**
 * Published social profiles. These double as the Organization's `sameAs`
 * edges, which is how answer engines confirm that the site, the Instagram
 * account, and the Facebook profile are one entity rather than three.
 * Tracking parameters are stripped, since a `sameAs` has to be canonical.
 */
export const SOCIAL = {
  instagram: "https://www.instagram.com/klaudio.llc/",
  facebook: "https://www.facebook.com/profile.php?id=61593339762061",
} as const;

/**
 * The company itself. Kept deliberately free of phone and email contact
 * points: the site has none published yet, and a fabricated `telephone` is
 * worse than an absent one, because it teaches a wrong fact.
 * Add `telephone` and `email` here once they are real.
 */
export function organizationNode() {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Klaudio",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/klaudio-mark.png`,
      width: 1024,
      height: 1024,
    },
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    knowsAbout: [...SERVICE_LINES],
    areaServed: { "@type": "Place", name: "Worldwide" },
    serviceType: [...SERVICE_LINES],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consulting services",
      itemListElement: SERVICE_LINES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, provider: { "@id": ORG_ID } },
      })),
    },
  };
}

/** The site node, so engines treat the four pages as one publication. */
export function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** Trail for a single-level page, e.g. breadcrumb("Services", "/services"). */
export function breadcrumbNode(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** Wraps nodes in the @graph envelope Google prefers for multi-node pages. */
export function jsonLd(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
