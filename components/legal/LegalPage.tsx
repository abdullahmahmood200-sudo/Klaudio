import Link from "next/link";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import { LEGAL } from "@/lib/site";
import LegalToc from "./LegalToc";

const menuLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/**
 * Chrome shared by the Terms of Use and Privacy Policy pages: the same top bar
 * the service pages use, a breadcrumb, the title block, then the prose.
 */
export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  const sibling =
    title === "Privacy Policy"
      ? { label: "Terms of Use", href: "/terms" }
      : { label: "Privacy Policy", href: "/privacy" };

  return (
    <div style={{ background: "#ffffff" }}>
      <MobileMenu home={false} activeHref="/" />

      <header className="svc-topbar">
        <Link href="/" className="svc-logo" aria-label="Klaudio home">
          <Logo size={36} animated />
          <span
            style={{
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "-.01em",
              color: "#0f1a2e",
            }}
          >
            Klaudio
          </span>
        </Link>

        <nav className="svc-topnav">
          {menuLinks.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      <nav className="svc-crumb section-pad" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden>/</span>
        <span aria-current="page">{title}</span>
      </nav>

      <article className="legal section-pad">
        <header className="legal-hero">
          <p className="legal-effective">
            <span aria-hidden className="legal-effective-dot" />
            Effective {LEGAL.effective}
          </p>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-intro">{intro}</p>
          <p className="legal-sibling">
            See also{" "}
            <Link href={sibling.href}>{sibling.label}</Link>
          </p>
        </header>

        <div className="legal-layout">
          <aside className="legal-aside">
            <LegalToc bodyId="legal-body" />
          </aside>
          <div id="legal-body" className="legal-body">
            {children}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
