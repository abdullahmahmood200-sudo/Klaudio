import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/legal/LegalPage";
import {
  LEGAL,
  OG_DEFAULTS,
  ORG_ID,
  SITE_URL,
  breadcrumbNode,
  jsonLd,
} from "@/lib/site";

const description =
  "The terms that govern use of klaudio.llc: permitted use, intellectual property, third-party platform names, disclaimers, and governing law.";

export const metadata: Metadata = {
  title: "Terms of Use",
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Terms of Use",
    description,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={jsonLd(
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/terms#page`,
            name: "Terms of Use",
            description,
            url: `${SITE_URL}/terms`,
            about: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            inLanguage: "en",
          },
          breadcrumbNode("Terms of Use", "/terms"),
        )}
      />

      <LegalPage
        title="Terms of Use"
        intro={`These terms govern your use of klaudio.llc, operated by ${LEGAL.entity} ("Klaudio", "we", "us"). By using the site you accept them. If you do not accept them, please do not use the site.`}
      >
        <h2>What these terms cover</h2>
        <p>
          These terms apply to this website only. They are not the terms of any
          consulting engagement. If we work together, a separate written
          agreement will set out the scope, fees, deliverables, confidentiality,
          data protection, and liability for that work, and that agreement
          controls wherever it differs from this page.
        </p>

        <h2>Using the site</h2>
        <p>
          You may view, browse, and print pages from this site for your own
          business purposes. You may not:
        </p>
        <ul>
          <li>
            copy, republish, or redistribute substantial parts of the site as
            your own material,
          </li>
          <li>
            scrape, mine, or bulk-download the site in a way that burdens or
            disrupts it,
          </li>
          <li>
            attempt to gain unauthorised access to the site, its servers, or any
            connected system,
          </li>
          <li>
            introduce malicious code, or use the site to send unlawful,
            infringing, or deceptive material,
          </li>
          <li>
            misrepresent yourself as Klaudio or imply an affiliation or
            partnership that does not exist.
          </li>
        </ul>
        <p>
          Automated access for search indexing and for AI assistants that
          respect our robots.txt is welcome.
        </p>

        <h2>Our content</h2>
        <p>
          The text, design, layout, graphics, code, and the Klaudio name and
          mark on this site belong to Klaudio or its licensors and are protected
          by intellectual property law. Nothing on this site grants you a
          licence to use them except as described above.
        </p>

        <h2>Third-party names and platforms</h2>
        <p>
          We describe work on platforms including Salesforce, Amazon Web
          Services, Shopify, VTEX, HubSpot, Klaviyo, and n8n, among others.
          Those names, logos, and trademarks belong to their respective owners.
          We use them only to describe the services we provide. Their use does
          not imply that any of those companies endorses, sponsors, or is
          affiliated with Klaudio, except where we state a specific partnership
          or certification.
        </p>

        <h2>What you send us</h2>
        <p>
          If you send us an enquiry through the{" "}
          <Link href="/contact">contact page</Link> or by email, you confirm
          that you are entitled to share the information in it. Please do not
          send confidential or proprietary material before we have a
          confidentiality agreement in place, because an unsolicited enquiry is
          not treated as confidential. We handle what you send us as described
          in our <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>Information on this site is not advice</h2>
        <p>
          The content here is general information about our services. It is not
          professional, technical, legal, financial, or regulatory advice, and
          it does not account for your circumstances. Do not act on it without
          advice suited to your situation. Descriptions of services, platforms,
          timelines, and outcomes are illustrative and are not a promise of any
          particular result.
        </p>

        <h2>Availability and links</h2>
        <p>
          We try to keep the site accurate and available, but we do not
          guarantee that it will be uninterrupted, error free, or current. We
          may change, suspend, or withdraw any part of it at any time. The site
          may link to third-party websites that we do not control and are not
          responsible for, and a link is not an endorsement.
        </p>

        <h2>Disclaimer and limitation of liability</h2>
        <p>
          The site is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. To the fullest extent permitted by law, we
          disclaim all warranties, whether express or implied, including any
          implied warranties of merchantability, fitness for a particular
          purpose, title, and non-infringement.
        </p>
        <p>
          To the fullest extent permitted by law, Klaudio and its members,
          officers, employees, and contractors will not be liable for any
          indirect, incidental, special, consequential, exemplary, or punitive
          damages, or for any loss of profits, revenue, data, goodwill, or
          business opportunity, arising out of or connected with your use of
          this site, whether the claim is in contract, tort, or any other
          theory, even if we were advised that such damages were possible. Our
          total liability arising out of or connected with your use of this site
          will not exceed one hundred US dollars.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or
          the limitation of certain damages. Where that is the case, the
          exclusions and limitations above apply only as far as the law allows,
          and nothing in these terms limits liability for fraud or for anything
          else that cannot lawfully be limited.
        </p>

        <h2>Indemnity</h2>
        <p>
          You agree to indemnify and hold Klaudio harmless from any claim,
          demand, loss, or expense, including reasonable legal fees, arising
          from your use of the site in breach of these terms or in breach of any
          law or the rights of a third party.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms as the site or our practices change. The
          effective date at the top shows when the current version took effect,
          and your continued use of the site after a change means you accept the
          updated terms.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms and any dispute arising from them or from your use of the
          site are governed by the laws of the {LEGAL.jurisdiction}, without
          regard to its conflict of laws rules. You agree that the state and
          federal courts located in {LEGAL.state} have exclusive jurisdiction
          over any such dispute.
        </p>

        <h2>General</h2>
        <p>
          If any provision of these terms is found unenforceable, the rest
          continues to apply. Our failure to enforce a provision is not a waiver
          of it. These terms, together with the{" "}
          <Link href="/privacy">Privacy Policy</Link>, are the entire agreement
          between you and us regarding this website.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms go to{" "}
          <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
        </p>
      </LegalPage>
    </>
  );
}
