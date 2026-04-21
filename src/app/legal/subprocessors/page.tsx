import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";

export const metadata: Metadata = {
  title: "Sub-processors",
  description:
    "Annual Tabletop sub-processor list. Categories, providers, region, and what data each touches. Updated on the 30-day notice cadence committed in our DPA.",
};

interface SubProcessor {
  category: string;
  provider: string;
  purpose: string;
  region: string;
  touchesCustomerData: boolean;
}

const SUBPROCESSORS: ReadonlyArray<SubProcessor> = [
  {
    category: "Cloud hosting",
    provider: "Amazon Web Services (AWS)",
    purpose: "Compute, storage, database, KMS, networking",
    region: "US (us-east-1, us-west-2)",
    touchesCustomerData: true,
  },
  {
    category: "Foundation model — primary",
    provider: "Anthropic",
    purpose:
      "Atlas facilitator runtime. Zero-retention DPA in force; not used for training.",
    region: "US",
    touchesCustomerData: true,
  },
  {
    category: "Foundation model — fallback",
    provider: "OpenAI",
    purpose:
      "Atlas facilitator fallback. Zero-retention DPA in force; not used for training.",
    region: "US",
    touchesCustomerData: true,
  },
  {
    category: "Transactional email",
    provider: "Resend",
    purpose:
      "Account, magic-link, AAR delivery, and exercise-invite email. Transactional only — no marketing blasts.",
    region: "US",
    touchesCustomerData: true,
  },
  {
    category: "Error monitoring",
    provider: "Sentry",
    purpose: "Application error and performance telemetry",
    region: "US",
    touchesCustomerData: false,
  },
  {
    category: "Product analytics",
    provider: "Vercel Analytics + Statcounter",
    purpose: "Page-level marketing analytics. PII-stripped at collection.",
    region: "US / EU edge",
    touchesCustomerData: false,
  },
  {
    category: "Billing",
    provider: "Stripe",
    purpose: "Subscription billing and invoicing",
    region: "US",
    touchesCustomerData: true,
  },
];

export default function SubProcessorsPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Sub-processors"
        subtitle="The third parties that process customer data on our behalf. We commit to a 30-day notice on changes that affect this list, with a contractual right to object built into every paid agreement."
        textOnly
      />

      <section className="py-12">
        <div className="container-tight">
          <p className="text-sm text-ink-500">
            Last updated 20 April 2026. Subscribe to change notices by emailing{" "}
            <a
              className="text-signal underline"
              href="mailto:privacy@annualtabletop.com"
            >
              privacy@annualtabletop.com
            </a>
            .
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-paper-200 text-left text-navy">
                  <th className="py-2 pr-4 font-semibold">Category</th>
                  <th className="py-2 pr-4 font-semibold">Provider</th>
                  <th className="py-2 pr-4 font-semibold">Purpose</th>
                  <th className="py-2 pr-4 font-semibold">Region</th>
                  <th className="py-2 font-semibold">Touches customer data</th>
                </tr>
              </thead>
              <tbody>
                {SUBPROCESSORS.map((sp) => (
                  <tr
                    key={`${sp.category}-${sp.provider}`}
                    className="border-b border-paper-200 align-top text-ink-700"
                  >
                    <td className="py-3 pr-4">{sp.category}</td>
                    <td className="py-3 pr-4 font-medium text-navy">
                      {sp.provider}
                    </td>
                    <td className="py-3 pr-4">{sp.purpose}</td>
                    <td className="py-3 pr-4">{sp.region}</td>
                    <td className="py-3">
                      {sp.touchesCustomerData ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-sm text-ink-500">
            Sub-processors that handle Atlas inferences are bound by a
            zero-retention data-processing addendum &mdash; they do not retain
            your exercise text and do not use it to train models. See the{" "}
            <Link href="/security" className="text-signal underline">
              Security page
            </Link>{" "}
            for the full data-flow description.
          </p>

          <p className="mt-6 text-sm text-ink-500">
            <strong className="text-navy">
              Authentication and session management
            </strong>{" "}
            are handled inside the Annual Tabletop application using an
            open-source TypeScript auth library (BetterAuth). User records,
            sessions, and credentials live in our own Postgres database under
            our primary hosting provider — no third-party identity
            sub-processor is used for self-serve tiers. Enterprise/FI tiers
            that require SAML 2.0 or OIDC SSO will add a dedicated identity
            partner (typically WorkOS) at the time of that deployment; we will
            update this page and notify customers in writing before any such
            sub-processor is added to an environment.
          </p>
        </div>
      </section>
    </>
  );
}
