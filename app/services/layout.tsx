import type { Metadata } from "next";
import { OG_DEFAULTS, SITE_NAME } from "@/lib/site";

const description =
  "Klaudio LLC's ecommerce services: Shopify and VTEX development, AI support agents and n8n automation, Klaviyo and Meta Ads growth marketing, AWS cloud for commerce, ecommerce accounting systems, and managed support.";

const title = `Ecommerce Services | Shopify, VTEX, AI Automation & Growth | ${SITE_NAME}`;

export const metadata: Metadata = {
  // A plain string title here would stop the root template reaching the six
  // /services/<slug> pages, so they would ship without the brand name.
  title: { absolute: title, template: `%s | ${SITE_NAME}` },
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    ...OG_DEFAULTS,
    title,
    description,
    url: "/services",
  },
};

/**
 * Metadata only. The structured data for the hub lives in page.tsx, because a
 * layout also wraps /services/<slug> and would stamp the FAQ and catalog nodes
 * onto all six service pages, which do not show either.
 */
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
