import SideNav from "@/components/home/SideNav";
import Landing from "@/components/home/Landing";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Industries from "@/components/home/Industries";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="page-shell"
      style={{ display: "flex", minHeight: "100vh", background: "#ffffff" }}
    >
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
        <About />
        <Footer />
      </main>
    </div>
  );
}
