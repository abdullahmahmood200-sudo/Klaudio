import SideNav from "@/components/home/SideNav";
import Landing from "@/components/home/Landing";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import HomeFaq from "@/components/home/HomeFaq";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqPageNode } from "@/components/FaqList";
import { homeFaqs } from "@/components/home/data";
import { ORG_ID, SITE_URL, jsonLd } from "@/lib/site";

/** Mirrors the visible homepage FAQ, question for question. */
const faqNode = {
  ...faqPageNode(`${SITE_URL}/#faq`, homeFaqs),
  about: { "@id": ORG_ID },
};

export default function Home() {
  return (
    <div
      className="page-shell"
      style={{ display: "flex", minHeight: "100dvh", background: "#ffffff" }}
    >
      <JsonLd data={jsonLd(faqNode)} />
      <SideNav />
      <main
        style={{
          flex: 1,
          minWidth: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Landing />
        <Hero />
        <Industries />
        <IndustrySolutions />
        <Process />
        <WhyUs />
        <HomeFaq />
        <Footer />
      </main>
    </div>
  );
}
