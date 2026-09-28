import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/lib/site";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .filter((_, i, all) => i === 0 || i === all.length - 1)
    .join("");

/**
 * The partners. Named people with a title, a practice area, and a LinkedIn
 * link are what let answer engines connect Klaudio LLC to real expertise.
 * A partner without a photo yet gets an initials placeholder.
 */
export default function Team({
  moreLink = false,
}: {
  /** Show a "More about us" link to /about (used on the homepage). */
  moreLink?: boolean;
}) {
  return (
    <section id="team" className="section-pad team">
      <div className="team-inner">
        <p className="home-faq-eyebrow">Our team</p>
        <h2 className="home-faq-title">The partners behind Klaudio LLC</h2>

        <ul className="team-list">
          {TEAM.map((m) => {
            const linkedin = m.sameAs.find((u) => u.includes("linkedin.com"));
            return (
              <li key={m.slug} className="team-card">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={112}
                    height={112}
                    className="team-photo"
                  />
                ) : (
                  <span className="team-photo team-photo-empty" aria-hidden>
                    {initials(m.name)}
                  </span>
                )}
                <h3 className="team-name">
                  {m.author ? (
                    <Link href={`/authors/${m.slug}`}>{m.name}</Link>
                  ) : (
                    m.name
                  )}
                </h3>
                <p className="team-role">{m.jobTitle}</p>
                <p className="team-bio">{m.bio}</p>
                {linkedin && (
                  <a
                    href={linkedin}
                    className="team-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {moreLink && (
          <p className="team-more">
            <Link href="/about">More about Klaudio LLC</Link>
          </p>
        )}
      </div>
    </section>
  );
}
