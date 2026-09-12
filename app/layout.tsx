import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import ScrollFX from "@/components/ScrollFX";
import ContextCursor from "@/components/ContextCursor";
import JsonLd from "@/components/JsonLd";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  jsonLd,
  organizationNode,
  webSiteNode,
} from "@/lib/site";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Lets every child segment declare canonicals and OG images as relative paths.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Klaudio Agency | AI & Technology Consulting",
    // Child pages set a bare `title` and inherit the brand suffix.
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  keywords: [
    "AI consulting",
    "AI automation agency",
    "Salesforce consulting",
    "AWS cloud consulting",
    "CRM implementation",
    "n8n automation",
    "technology consulting firm",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Klaudio Agency | AI & Technology Consulting",
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klaudio Agency | AI & Technology Consulting",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      // Uncapped text snippets: answer engines quote longer passages, and a
      // capped snippet is the most common reason a page gets skipped.
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Instagram/Facebook in-app webviews do not reliably apply Next's implicit
// viewport tag, so they lay the page out at a desktop width and then scale it
// down. Declaring it explicitly pins them to the device width.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        {/* Site-wide entity graph: who we are, what this site is. Pages add
            their own nodes (FAQPage, Service, BreadcrumbList) on top. */}
        <JsonLd data={jsonLd(organizationNode(), webSiteNode())} />
        <ScrollFX />
        <ContextCursor />
        {children}
      </body>
    </html>
  );
}
