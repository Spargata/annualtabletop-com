import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "Annual Tabletop terms of service. Self-serve and trial use terms in plain language. Final counsel-reviewed terms supersede on sign-off.",
};

/**
 * Operational terms of service for self-serve and trial use. Paying
 * customers are governed by a signed MSA, not this page. Written
 * substantively so it can live on the site until counsel review.
 */
export default function TermsPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Terms of service"
        subtitle="Last updated 20 April 2026. These terms cover the marketing site, self-serve access, and free trials. Paying customers are governed by their signed Master Subscription Agreement (MSA) rather than this page."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-ink-700 prose-a:text-signal">
          <h2>Who we are</h2>
          <p>
            Annual Tabletop is operated by Thagentix, Inc. (&ldquo;we,&rdquo;
            &ldquo;us&rdquo;). Registration details, mailing address, and
            notice provisions are defined in the MSA for paying customers.
          </p>

          <h2>Accepting these terms</h2>
          <p>
            By accessing the marketing site or by signing up for a trial, you
            agree to these terms. If you are accepting on behalf of an
            organization, you represent that you have the authority to bind
            that organization to these terms. If we later sign an MSA with
            your organization, the MSA governs instead of this page.
          </p>

          <h2>Accounts</h2>
          <p>
            You are responsible for safeguarding your account credentials.
            Use MFA. Use SSO on paid tiers. Notify us promptly if you
            suspect unauthorized access at{" "}
            <a href="mailto:security@annualtabletop.com">
              security@annualtabletop.com
            </a>
            .
          </p>

          <h2>Acceptable use</h2>
          <p>
            You may not use Annual Tabletop to facilitate or rehearse
            criminal activity, to generate scenarios designed to cause real
            harm, or to target specific individuals for unlawful action. You
            may not attempt to extract scenario content or AAR templates for
            commercial reuse outside the platform. You may not
            reverse-engineer Atlas or attempt to circumvent tenancy
            isolation. We reserve the right to terminate access for
            violation.
          </p>

          <h2>Customer data</h2>
          <p>
            You own your customer data, including AARs and session content.
            We process it under the{" "}
            <Link href="/legal/privacy">Privacy policy</Link> and the MSA /
            DPA. For trial users without an MSA, the commitments on the{" "}
            <Link href="/security">Security page</Link> govern handling.
          </p>

          <h2>Service availability and SLAs</h2>
          <p>
            Contractual uptime and response-time SLAs are defined in the
            MSA. Enterprise / State and MSP / Partner tiers carry
            contractual uptime. Free-trial, self-serve, and demo access run
            best-effort on the same infrastructure &mdash; same reliability
            posture, no contractual remedy. Scheduled maintenance is posted
            to the <Link href="/status">status page</Link>.
          </p>

          <h2>Fees and billing</h2>
          <p>
            Paid tier pricing is published on our{" "}
            <Link href="/pricing">pricing page</Link> and fixed by your MSA.
            Annual contracts bill at the start of the term; month-to-month
            tiers bill on the monthly anniversary. Taxes are your
            responsibility where applicable. Failed payment may result in
            suspended access after a grace period defined in the MSA.
          </p>

          <h2>Cancellation and refunds</h2>
          <p>
            Annual contracts pro-rate on cancellation, net of consumed
            custom-scenario work and one-time setup fees. Month-to-month
            tiers cancel at the end of the then-current billing period. A
            customer-requested export of AARs is provided on reasonable
            notice at no charge.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The platform, the Atlas facilitator, our scenario templates, and
            our AAR framework crosswalks are our intellectual property.
            Customer-authored scenarios, customer data, and AARs generated
            on your account belong to you. Nothing in these terms grants you
            a license to reuse our scenario library outside the platform.
          </p>

          <h2>Warranties and disclaimers</h2>
          <p>
            We warrant that the service performs materially in accordance
            with our published documentation. Except for that warranty, the
            service is provided &ldquo;as is&rdquo; to the extent permitted
            by applicable law. AARs are decision-support artifacts, not
            legal or regulatory advice; consult counsel before treating an
            AAR as evidence of compliance with a specific regulation.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, neither party is liable for
            indirect, incidental, consequential, or punitive damages arising
            out of these terms or the service. Our aggregate liability is
            capped at the amounts paid to us in the 12 months preceding the
            event giving rise to the claim. Specific carve-outs (IP
            indemnity, confidentiality, data-breach obligations) are
            defined in the MSA.
          </p>

          <h2>Indemnification</h2>
          <p>
            You will indemnify us against claims arising from your misuse of
            the service or violation of these terms. Reciprocal indemnities
            covering third-party IP claims against the platform are defined
            in the MSA.
          </p>

          <h2>Termination</h2>
          <p>
            You may stop using the service at any time. We may suspend or
            terminate access for acceptable-use violation, non-payment
            (after the MSA grace period), or to comply with law. On
            termination, your AARs remain available for export for 30 days.
          </p>

          <h2>Governing law</h2>
          <p>
            These self-serve terms are governed by the laws of the State of
            Delaware, without regard to conflict-of-law principles. Paying
            customers may negotiate governing law in the MSA; for public-
            sector customers, we default to the customer&apos;s jurisdiction
            where procurement rules require.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We announce material changes on the{" "}
            <Link href="/status">status page</Link> 30 days before they take
            effect. Continued use of the service after the effective date
            constitutes acceptance. Non-material clarifications may land
            without notice.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href="mailto:hello@annualtabletop.com">
              hello@annualtabletop.com
            </a>
            .
          </p>

          <hr />
          <p className="text-xs text-ink-500">
            These terms are operational and binding. They will be replaced
            verbatim or clarified by the counsel-reviewed final at sign-off;
            in the meantime, the commitments here govern trial and
            self-serve use.
          </p>
        </div>
      </section>
    </>
  );
}
