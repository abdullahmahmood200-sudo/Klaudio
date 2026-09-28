import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/legal/LegalPage";
import {
  ADDRESS,
  LEGAL,
  OG_DEFAULTS,
  ORG_ID,
  SITE_URL,
  breadcrumbNode,
  jsonLd,
} from "@/lib/site";

const description =
  "How Klaudio LLC handles information on klaudio.llc. No cookies, no analytics, no tracking, and only the information you choose to send us.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Privacy Policy",
    description,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={jsonLd(
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/privacy#page`,
            name: "Privacy Policy",
            description,
            url: `${SITE_URL}/privacy`,
            about: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            inLanguage: "en",
          },
          breadcrumbNode("Privacy Policy", "/privacy"),
        )}
      />

      <LegalPage
        title="Privacy Policy"
        intro={`This policy explains what ${LEGAL.entity} does with information collected through klaudio.llc. It describes how this site actually behaves rather than covering every practice a consulting firm might have.`}
      >
        <section className="legal-callout">
          <h2>The short version</h2>
          <p>
            This website sets no cookies, runs no analytics, and carries no
            advertising or tracking pixels. Fonts are served from our own
            domain, so loading a page does not tell a third party that you
            visited. The only personal information we hold is what you choose
            to send us.
          </p>
        </section>

        <h2>Who we are</h2>
        <p>
          {LEGAL.entity} is a technology and AI consulting firm registered in
          the {LEGAL.jurisdiction}, with its office at {ADDRESS.street},{" "}
          {ADDRESS.city}, {ADDRESS.region} {ADDRESS.postalCode}. We are
          responsible for the information described here. For anything in this policy, write to{" "}
          <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
        </p>

        <h2>Information you give us</h2>
        <p>
          If you complete the enquiry form on our{" "}
          <Link href="/contact">contact page</Link>, we receive the fields you
          fill in: your name, business email address, phone number, the service
          you are interested in, your estimated timeline, your estimated
          budget, your preferred contact method, and anything you write in the
          message field. If you email us directly, we receive whatever your
          message and its headers contain.
        </p>
        <p>
          Please do not send passwords, payment card details, health
          information, or government identification numbers through the form.
          If a project needs information of that kind, we will agree a secure
          channel with you first.
        </p>

        <h2>Information collected automatically</h2>
        <p>
          The site is served by our hosting provider, which keeps standard
          server logs for security and reliability. Those logs can include your
          IP address, the page requested, the time of the request, and your
          browser and device type. We do not use them to build a profile of
          you, and we do not combine them with anything you send through the
          form.
        </p>

        <h2>Cookies and tracking</h2>
        <p>
          We set no cookies of our own and use no third-party analytics,
          advertising, session recording, or tracking technology. There is
          nothing to opt out of and no consent banner to dismiss. If that
          changes, we will update this page and, where the law requires it, ask
          for your consent before the change takes effect.
        </p>

        <h2>How we use your information</h2>
        <p>We use what you send us to:</p>
        <ul>
          <li>reply to your enquiry and discuss a possible engagement,</li>
          <li>prepare the proposals, scopes, and estimates you asked for,</li>
          <li>provide and support services under an agreement with you,</li>
          <li>
            keep records we are required to keep, and establish or defend legal
            claims where that becomes necessary.
          </li>
        </ul>
        <p>
          We do not sell your personal information and we do not share it for
          cross-context behavioural advertising. Submitting an enquiry does not
          add you to a marketing list.
        </p>

        <h2>Who we share it with</h2>
        <p>
          We share personal information only with service providers who handle
          it on our behalf, and only as far as they need it: our website
          hosting provider, our email provider, and the customer relationship
          management system we use to track enquiries. We may also disclose
          information where the law requires it, or to protect our rights,
          safety, or property.
        </p>
        <p>
          Where you are a client, we may work inside your own systems as part
          of delivering a project. In that situation the data in those systems
          remains yours, we act on your instructions, and our engagement
          agreement governs the arrangement rather than this policy.
        </p>

        <h2>How long we keep it</h2>
        <p>
          Enquiries that do not lead to an engagement are kept for up to two
          years, so that we have context if you come back to us, and are then
          deleted. Records relating to an actual engagement are kept for as
          long as the relationship lasts and afterwards for as long as we need
          them for tax, accounting, and legal purposes. Server logs are kept
          briefly by our hosting provider and then rotated out.
        </p>

        <h2>Security</h2>
        <p>
          We use access controls, encryption in transit, and the security
          practices set out in our engagement terms. No method of transmission
          or storage is completely secure, so we cannot promise absolute
          security, but we limit who can see what you send us and we treat it
          carefully.
        </p>

        <h2>Your choices and rights</h2>
        <p>
          You can ask us at any time what personal information we hold about
          you, ask us to correct it, or ask us to delete it. Write to{" "}
          <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> and we will
          respond within the time the applicable law allows. We will not treat
          you differently for making a request.
        </p>
        <p>
          If you are a California resident, the California Consumer Privacy Act
          as amended gives you the right to know what personal information we
          collect and how we use and disclose it, the right to delete it, the
          right to correct inaccurate information, and the right to opt out of
          its sale or sharing. As described above, we do not sell or share
          personal information, so there is nothing to opt out of. You may use
          an authorised agent to make a request for you.
        </p>
        <p>
          Residents of other states with comprehensive privacy laws have
          comparable rights. We handle every request the same way regardless of
          where you live.
        </p>

        <h2>Children</h2>
        <p>
          This site is aimed at businesses and is not directed to children. We
          do not knowingly collect personal information from anyone under 13. If
          you believe a child has sent us information, contact us and we will
          delete it.
        </p>

        <h2>Where we operate</h2>
        <p>
          We are based in the United States and this site is operated from
          there. If you visit from elsewhere, any information you send us will
          be processed in the United States, where privacy law may differ from
          the law where you live.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We will update this page when our practices change and move the
          effective date at the top. Material changes will be described plainly
          rather than buried.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, requests, or complaints about privacy go to{" "}
          <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
        </p>
      </LegalPage>
    </>
  );
}
