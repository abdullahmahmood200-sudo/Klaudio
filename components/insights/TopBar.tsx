import Link from "next/link";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";

const menuLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/** The same sticky top bar the service and legal pages use. */
export default function TopBar({ active = "/insights" }: { active?: string }) {
  return (
    <>
      <MobileMenu home={false} activeHref={active} />
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
            <Link
              key={l.label}
              href={l.href}
              aria-current={l.href === active ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
