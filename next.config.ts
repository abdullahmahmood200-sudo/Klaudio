import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        // Salesforce is now folded into the Revenue Operations service page.
        source: "/services/salesforce-consulting",
        destination: "/services/crm-marketing-automation",
        permanent: true,
      },
      {
        // Managed Services no longer has its own card; the offering lives
        // inside the other service pages now.
        source: "/services/managed-services",
        destination: "/services",
        permanent: true,
      },
      {
        // The site presents Klaudio as one team, with no individual author
        // pages. Articles are credited to the company, which /about describes.
        source: "/authors/:slug",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
