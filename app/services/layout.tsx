import type { Metadata } from "next";
import { OG_DEFAULTS } from "@/lib/site";

const description =
  "Klaudio's consulting services: AI voice agents and n8n automation, Salesforce, CRM and marketing automation, AWS cloud, Shopify and VTEX commerce, financial systems, and managed support.";

export const metadata: Metadata = {
  title: "Services | AI, Salesforce, AWS, CRM & Ecommerce Consulting",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Services | AI, Salesforce, AWS, CRM & Ecommerce Consulting",
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
