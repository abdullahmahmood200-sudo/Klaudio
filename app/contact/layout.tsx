import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import {
  OG_DEFAULTS,
  ORG_ID,
  SITE_URL,
  breadcrumbNode,
  jsonLd,
} from "@/lib/site";

const description =
  "Tell Klaudio what your store needs. Share your service of interest, timeline, and budget, and the team will come back with a scoped next step.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Contact Klaudio LLC",
    description,
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={jsonLd(
          {
            "@type": "ContactPage",
            "@id": `${SITE_URL}/contact#page`,
            name: "Contact Klaudio LLC",
            description,
            about: { "@id": ORG_ID },
          },
          breadcrumbNode("Contact", "/contact"),
        )}
      />
      {children}
    </>
  );
}
