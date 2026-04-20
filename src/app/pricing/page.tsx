import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { FAQ } from "@/components/blocks/faq";
import { CTABlock } from "@/components/blocks/cta-block";
import { PricingTierCard, type PricingTier } from "@/components/blocks/pricing-tier";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Public pricing. Tiers for non-profits, municipal / small public, regulated SMB, MSP / partner, and enterprise / state agency. No haggling.",
};

/**
 * IA 3.5: Pricing. Placeholder numbers — actual tier structure + numbers
 * are locked in the pricing-model spec (not in scope for this IA doc).
 */
const TIERS: ReadonlyArray<PricingTier> = [
  {
    name: "Non-profit",
    price: "Contact",
    cadence: "/ mission-priced",
    blurb:
      "Mission-priced. Built for non-profits with a cyber-grant or insurance requirement. Apply — no haggling.",
    includes: [
      "Full scenario library",
      "AI-facilitated sessions",
      "HSEEP-conformant AAR",
      "Framework crosswalks",
      "Email support",
    ],
    cta: { label: "Apply for non-profit tier", href: "/pricing#non-profit" },
  },
  {
    name: "Municipal / Small Public",
    price: "TBD",
    cadence: "/ year",
    blurb:
      "For counties, cities, school districts, water utilities, and small state offices. Procurement-friendly.",
    includes: [
      "Full library + public-sector scenarios",
      "Cooperative-purchasing eligible",
      "HSEEP AAR + CTEPs crosswalk",
      "SSO",
      "Priority support",
    ],
    cta: { label: "Talk to us", href: "/about#contact" },
  },
  {
    name: "Regulated SMB",
    price: "TBD",
    cadence: "/ year",
    blurb:
      "For SOC 2, HIPAA, FFIEC, PCI, and cyber-insurance-driven SMBs. Annual cadence aligned to your audit calendar.",
    includes: [
      "Full library + regulated-SMB scenarios",
      "SOC 2 / HIPAA / FFIEC AAR templates",
      "Framework crosswalks",
      "SSO",
      "Standard support",
    ],
    cta: { label: "Talk to us", href: "/about#contact" },
    highlight: true,
  },
  {
    name: "MSP / Partner",
    price: "TBD",
    cadence: "/ tenant",
    blurb:
      "Multi-tenant + white-label. Deliver tabletops to your customers under your own brand.",
    includes: [
      "White-label Atlas",
      "Per-tenant AARs + access control",
      "Partner pricing",
      "Dedicated partner manager",
      "Co-marketing kit",
    ],
    cta: { label: "See the white-label kit", href: "/for/msp" },
  },
  {
    name: "Enterprise / State",
    price: "TBD",
    cadence: "/ enterprise",
    blurb:
      "State agencies, large public systems, and multi-region enterprises. Custom procurement and data-residency options.",
    includes: [
      "Dedicated tenant + data residency options",
      "Custom scenarios + frameworks",
      "Dedicated CSM",
      "VPAT/508 on request",
      "Security questionnaire concierge",
    ],
    cta: { label: "Talk to us", href: "/about#contact" },
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        title="Public pricing. Tiers built for the buyers we serve."
        subtitle="Numbers land with the v1.1 pricing-model pass. Placeholders below reflect the tier structure; final prices will be live at launch."
        textOnly
      />

      <section className="py-16">
        <div className="container-wide">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <li key={tier.name}>
                <PricingTierCard tier={tier} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-50 py-16">
        <div className="container-wide">
          <p className="eyebrow mb-3">Universal floor</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Every tier ships with
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm text-ink-700">
            <li className="rounded-md border border-border bg-card p-4">
              <strong className="block text-navy">AI facilitation</strong>
              Atlas runs the session.
            </li>
            <li className="rounded-md border border-border bg-card p-4">
              <strong className="block text-navy">Full library</strong>
              Every scenario, every framework.
            </li>
            <li className="rounded-md border border-border bg-card p-4">
              <strong className="block text-navy">AAR generation</strong>
              HSEEP-conformant, PDF + DOCX.
            </li>
            <li className="rounded-md border border-border bg-card p-4">
              <strong className="block text-navy">WCAG 2.1 AA</strong>
              Every surface. No exceptions.
            </li>
          </ul>
        </div>
      </section>

      <section id="non-profit" className="py-16">
        <div className="container-tight rounded-lg border border-border bg-card p-8">
          <p className="eyebrow mb-3">Non-profit application</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Mission-driven orgs shouldn&apos;t have to haggle.
          </h2>
          <p className="mt-3 text-ink-700">
            Tell us about your mission, your cyber-grant or insurance
            requirement, and the scenarios you need. We&apos;ll reply within
            three business days with a price we can both live with.
          </p>
          <Link
            href="/about#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal hover:text-navy"
          >
            Apply for non-profit tier →
          </Link>
        </div>
      </section>

      <FAQ
        items={[
          {
            q: "How does public-sector procurement work?",
            a: "We support cooperative-purchasing vehicles, state contracts, and direct procurement. GSA schedule status listed on the Pricing FAQ at v1.1.",
          },
          {
            q: "Annual billing, monthly billing, or both?",
            a: "Annual at launch — the cadence is in the name. Monthly billing available on Enterprise.",
          },
          {
            q: "Can I cancel?",
            a: "Yes. Pro-rated refund on the current year, minus any consumed custom-scenario work.",
          },
          {
            q: "Is white-label included on every tier?",
            a: "White-label is the headline of the MSP / Partner tier. Other tiers can add it as a per-tenant upgrade.",
          },
        ]}
      />

      <CTABlock title="See what an audit-ready AAR looks like — in 90 seconds." />
    </>
  );
}
