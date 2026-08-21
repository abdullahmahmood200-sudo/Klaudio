import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import ScrollFX from "@/components/ScrollFX";
import ContextCursor from "@/components/ContextCursor";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klaudio Agency | AI & Technology Consulting",
  description:
    "Klaudio Agency is an AI and technology consulting firm helping ambitious organizations put the right platforms to work.",
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
        <ScrollFX />
        <ContextCursor />
        {children}
      </body>
    </html>
  );
}
