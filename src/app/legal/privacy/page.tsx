import type { Metadata } from "next";
import { Hero } from "@/components/blocks/hero";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Annual Tabletop privacy policy. What we collect, how we use it, and the rights you have over your data. Plain language. Practitioner-readable.",
};

/** Placeholder body — counsel review pre-launch. Final copy lands with v1.1 legal pass. */
export default function PrivacyPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Privacy policy"
        subtitle="Last updated: pre-launch placeholder. The plain-language summary below is non-binding. Final policy ships after counsel review and supersedes this draft."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-ink-700">
          <h2>Plain-language summary</h2>
          <p>
            Annual Tabletop is a B2B SaaS product. We collect the data we need
            to deliver tabletops, generate AARs, and bill our customers. We do
            not sell personal data. We do not use customer scenario content,
            decisions, or AAR contents to train third-party models.
          </p>

          <h2>What we collect</h2>
          <p>
            Account data (name, work email, organization, role) for users who
            sign in. Session data (which scenario was run, who participated,
            decisions captured) for AAR generation. Standard product telemetry
            (page views, feature events) for product improvement, with PII
            stripped at collection.
          </p>

          <h2>What we do not collect</h2>
          <p>
            We do not run third-party advertising trackers on the marketing
            site or in the product. We do not collect biometric data. We do not
            require customers to upload personal data — the product is
            designed around organizational decision-making, not individual
            personal data.
          </p>

          <h2>Sub-processors</h2>
          <p>
            Our current sub-processor list is published on our Trust Center and
            updated when changes occur. Customers on annual contracts receive
            advance notice of material sub-processor changes per their MSA.
          </p>

          <h2>Data subject rights</h2>
          <p>
            Customers may request access, correction, deletion, or export of
            their data by emailing privacy@annualtabletop.com. We respond
            within 30 days. For GDPR / UK GDPR / CCPA-specific requests, our
            data protection contact is named in the final policy.
          </p>

          <h2>Retention</h2>
          <p>
            AARs default to a 7-year retention to support audit-evidence use
            cases. Customers may configure a shorter retention or request
            on-demand deletion.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions: privacy@annualtabletop.com. Security incidents:
            see our Security page.
          </p>

          <hr />
          <p className="text-xs text-ink-500">
            This is a pre-launch draft. The final policy will replace this
            page on launch.
          </p>
        </div>
      </section>
    </>
  );
}
