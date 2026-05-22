import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Annual Tabletop privacy policy. What we collect, how we use it, and the rights you have over your data. Plain language. Practitioner-readable.",
};

/**
 * Operational privacy policy. Written to be substantive and launch-livable
 * while explicitly noting that counsel review supersedes it on final sign-off.
 * Mirrors the commitments in the /security page and the standard DPA.
 */
export default function PrivacyPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Privacy policy"
        subtitle="Last updated 21 May 2026. This policy is operational and binding on us; counsel review may clarify wording. Where counsel review changes a material commitment, we will announce it on the status page 30 days before it takes effect."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-ink-700 prose-li:text-ink-700 prose-a:text-signal">
          <h2>Plain-language summary</h2>
          <p>
            Annual Tabletop is a B2B SaaS product. We collect the data we need
            to deliver tabletop exercises, generate after-action reports, and
            bill our customers. We do not sell personal data. We do not use
            customer scenario content, decisions, or AAR contents to train
            third-party models.
          </p>

          <h2>Who this applies to</h2>
          <p>
            This policy covers the marketing site at{" "}
            <Link href="/">annualtabletop.com</Link> and the Annual Tabletop
            product. It covers visitors, trial users, paying customers, and
            individuals who participate in an exercise on behalf of a paying
            customer.
          </p>

          <h2>What we collect</h2>
          <p>
            <strong>Account data.</strong> Name, work email, organization
            name, role, and the tier you&apos;re on. Used for authentication,
            billing, and customer communications.
          </p>
          <p>
            <strong>Exercise data.</strong> Which scenario ran, who
            participated, the decisions captured, and the generated AAR. This
            is the product of record and belongs to the customer organization.
          </p>
          <p>
            <strong>Product telemetry.</strong> Standard page-view and
            feature-event telemetry so we can improve the product. IP
            addresses are hashed at collection; individual-level PII is not
            stored alongside telemetry.
          </p>
          <p>
            <strong>Support interactions.</strong> Email, chat, and call
            content you send us directly. Retained for the life of the
            customer relationship plus one year.
          </p>

          <h2>What we do not collect</h2>
          <p>
            We do not run third-party advertising trackers on the marketing
            site or in the product. We do not collect biometric data. We do
            not require customers to upload personal data &mdash; the product
            is designed around organizational decision-making, not individual
            personal data. If a customer uploads personal data as part of a
            custom scenario, it is covered by the DPA and the security
            commitments on the{" "}
            <Link href="/security">Security page</Link>.
          </p>

          <h2>Cookies and local storage</h2>
          <p>
            The marketing site sets the following cookies and localStorage
            keys. Items marked &ldquo;analytics&rdquo; are only set after you
            accept the consent banner.
          </p>
          <div className="not-prose mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-paper-200 text-left text-navy">
                  <th className="py-2 pr-4 font-semibold">Name</th>
                  <th className="py-2 pr-4 font-semibold">Type</th>
                  <th className="py-2 pr-4 font-semibold">Purpose</th>
                  <th className="py-2 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                <tr className="border-b border-paper-200 align-top">
                  <td className="py-3 pr-4 font-medium text-navy">
                    analytics_consent
                  </td>
                  <td className="py-3 pr-4">localStorage</td>
                  <td className="py-3 pr-4">
                    Stores your cookie-consent choice (accepted or rejected)
                  </td>
                  <td className="py-3">30&nbsp;days (re-prompts after expiry)</td>
                </tr>
                <tr className="border-b border-paper-200 align-top">
                  <td className="py-3 pr-4 font-medium text-navy">
                    analytics_consent_timestamp
                  </td>
                  <td className="py-3 pr-4">localStorage</td>
                  <td className="py-3 pr-4">
                    Records when the consent choice was made, used for
                    30-day expiry calculation
                  </td>
                  <td className="py-3">30&nbsp;days</td>
                </tr>
                <tr className="border-b border-paper-200 align-top">
                  <td className="py-3 pr-4 font-medium text-navy">
                    is_unique
                  </td>
                  <td className="py-3 pr-4">
                    Cookie (third-party, StatCounter)
                  </td>
                  <td className="py-3 pr-4">
                    Identifies unique visitors for aggregate page-view
                    counts. Only set when analytics consent is accepted.
                  </td>
                  <td className="py-3">Session</td>
                </tr>
                <tr className="border-b border-paper-200 align-top">
                  <td className="py-3 pr-4 font-medium text-navy">
                    sc_is_visitor_unique
                  </td>
                  <td className="py-3 pr-4">
                    Cookie (third-party, StatCounter)
                  </td>
                  <td className="py-3 pr-4">
                    Determines whether a visitor has been counted before in
                    aggregate statistics. Only set when analytics consent is
                    accepted.
                  </td>
                  <td className="py-3">2&nbsp;years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Vercel Analytics (our primary page-view analytics) is cookieless
            by design and does not set any cookies. It is loaded only after
            you accept the consent banner.
          </p>

          <h2>Cookie consent</h2>
          <p>
            A consent banner appears on your first visit. You have two
            choices: <strong>Accept</strong> or <strong>Reject</strong>.
            If you accept, analytics scripts (Vercel Analytics and
            StatCounter) are loaded. If you reject, no analytics scripts
            load and no analytics cookies are set.
          </p>
          <p>
            Your choice is stored in your browser&apos;s localStorage for
            30&nbsp;days. After 30&nbsp;days the banner re-appears so you
            can make a fresh choice. You can change your choice at any time
            using the &ldquo;Privacy Choices&rdquo; link in the site
            footer.
          </p>

          <h2>Global Privacy Control</h2>
          <p>
            We honor the{" "}
            <a
              href="https://globalprivacycontrol.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Global Privacy Control
            </a>{" "}
            (GPC) signal. When your browser sends{" "}
            <code className="rounded bg-paper-50 px-1 text-[0.9em]">
              Sec-GPC: 1
            </code>
            , we treat it as a legally binding opt-out: analytics are
            automatically rejected without showing the consent banner. This
            applies under the CCPA/CPRA, Colorado Privacy Act, and other
            U.S. state privacy laws that recognize GPC as a valid opt-out
            mechanism.
          </p>

          <h2>Do Not Sell or Share</h2>
          <p>
            Annual Tabletop does not sell or share personal data as defined
            by the California Consumer Privacy Act (CCPA) and the California
            Privacy Rights Act (CPRA). We do not run advertising trackers,
            do not share data with data brokers, and do not engage in
            cross-context behavioral advertising.
          </p>
          <p>
            You can opt out of all analytics at any time using the consent
            banner or the &ldquo;Privacy Choices&rdquo; link in the site
            footer. For CCPA-specific data requests (right to know, right
            to delete, right to opt out), email{" "}
            <a href="mailto:privacy@annualtabletop.com">
              privacy@annualtabletop.com
            </a>
            . We do not discriminate against users who exercise their
            privacy rights.
          </p>

          <h2>How Atlas processes exercise text</h2>
          <p>
            Atlas is our AI facilitator. During an exercise, player inputs,
            injects, and facilitator prompts are sent to a model provider
            over a TLS-terminated private connection. Model providers are
            contractually bound to a zero-retention data-processing addendum
            &mdash; your exercise text is not retained by the model provider
            and is not used to train any model, ours or theirs. See the{" "}
            <Link href="/legal/subprocessors">sub-processors list</Link> for
            the specific providers.
          </p>

          <h2>Sub-processors</h2>
          <p>
            Our current sub-processor list is at{" "}
            <Link href="/legal/subprocessors">/legal/subprocessors</Link> and
            updated on a 30-day notice cadence. Customers on annual contracts
            may object to a new sub-processor that materially changes the
            data-handling posture of their account.
          </p>

          <h2>Your rights</h2>
          <p>
            Customers and individual participants may request access,
            correction, deletion, or export of their data by emailing{" "}
            <a href="mailto:privacy@annualtabletop.com">
              privacy@annualtabletop.com
            </a>
            . We respond within 30 days. For GDPR / UK GDPR / CCPA / CPRA
            specific requests, the same address is the controller / business
            contact.
          </p>

          <h2>Retention</h2>
          <p>
            AARs default to a seven-year retention to match the longest
            common audit retention (CJIS, HIPAA, FFIEC). Customers may
            configure a shorter retention or request on-demand deletion.
            Deletion is propagated to backups on the 35-day backup-rollover
            cycle.
          </p>

          <h2>International transfers</h2>
          <p>
            Customer data sits in U.S. regions by default. For EU / UK
            customers whose data crosses the Atlantic, we rely on Standard
            Contractual Clauses (EU Commission 2021/914) and the UK IDTA
            addendum, both included in our DPA.
          </p>

          <h2>Children</h2>
          <p>
            Annual Tabletop is a B2B product not directed at children under
            16. We do not knowingly collect data from children. If you
            believe a child has provided data to us, email the privacy
            address above.
          </p>

          <h2>Changes</h2>
          <p>
            We announce material changes to this policy on the{" "}
            <Link href="/status">status page</Link> 30 days before they take
            effect. Non-material clarifications may land without notice and
            are logged in the page history.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions:{" "}
            <a href="mailto:privacy@annualtabletop.com">
              privacy@annualtabletop.com
            </a>
            . Security incidents: see our{" "}
            <Link href="/security">Security page</Link>. Mailing address is
            provided in the DPA.
          </p>

          <hr />
          <p className="text-xs text-ink-500">
            This policy is operational and binding on us. It will be replaced
            verbatim or clarified by the counsel-reviewed final at sign-off;
            in the meantime, the commitments here govern.
          </p>
        </div>
      </section>
    </>
  );
}
