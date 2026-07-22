import type { Metadata } from "next";
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
  title: "Nyxo Agency — AI & Technology Consulting",
  description:
    "Nyxo Agency is an AI and technology consulting firm helping ambitious organizations put the right platforms to work.",
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
