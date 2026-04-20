import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { FAQ } from "@/components/blocks/faq";
import { CTABlock } from "@/components/blocks/cta-block";
import { PricingTierCard, type PricingTier } from "@/components/blocks/pricing-tier";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Public pricing. Seven tiers — Non-profit, General SMB, Municipal, Regulated SMB, Financial Institutions, MSP / Partner, Enterprise / State. No haggling, no per-seat surprises.",
};

/**
 * IA 3.5: Pricing — v1.1.
 *
 * Numbers are placeholder benchmarks the founder will review/adjust.
 * Anchored against:
 *   - CISA CTEPs (free, DIY, no AI/AAR)
 *   - DIY tabletop tools (~$2-5K/yr, no AI facilitation)
 *   - Mid-market platforms (~$8-15K/yr)
 *   - Consultant-run exercises (~$25-50K per exercise)
 *   - Enterprise platforms (Immersive Labs, AttackIQ — $50K+)
 *
 * Positioning: "less than one consultant exercise" for SMB/FI tiers.
 */
const TIERS: ReadonlyArray<PricingTier & { anchorId: string }> = [
  {
    anchorId: "non-profit",
    name: "Non-profit",
    price: "Apply",
    cadence: "/ mission-priced",
    blurb:
      "Mission-priced. Built for non-profits with a cyber-grant or insurance requirement. Apply — no haggling.",
    includes: [
      "Full scenario library",
      "AI-facilitated sessions",
      "HSEEP-conformant AAR",
      "NIST CSF 2.0 + grant-program crosswalks",
      "Email support",
    ],
    cta: { label: "Apply for non-profit tier", href: "/pricing#non-profit" },
  },
  {
    anchorId: "smb-general",
    name: "General SMB",
    price: "$1,200",
    cadence: "/ year",
    blurb:
      "Entry tier for small and midsize businesses without a compliance regime — but with a carrier, customer, or board asking for IR readiness.",
    includes: [
      "Full scenario library",
      "AI-facilitated sessions",
      "NIST CSF 2.0 + CIS Controls v8 IG1/IG2 AAR",
      "Cyber-insurance-renewal cover sheet",
      "Email support",
    ],
    cta: { label: "Try the SMB demo", href: "/demo?segment=smb" },
  },
  {
    anchorId: "municipal-small-public",
    name: "Municipal / Small Public",
    price: "$2,450",
    cadence: "/ year",
    blurb:
      "For counties, cities, school districts, water utilities, and small state offices. Procurement-friendly.",
    includes: [
      "Full library + public-sector scenarios",
      "FEMA HSEEP + CISA CTEPs + NIST 800-84 + CJIS AAR",
      "Cooperative-purchasing eligible",
      "SSO included",
      "Priority support",
    ],
    cta: { label: "Talk to us", href: "/about#contact" },
  },
  {
    anchorId: "regulated-smb",
    name: "Regulated SMB",
    price: "$3,625",
    cadence: "/ year",
    blurb:
      "For SOC 2, HIPAA, PCI, and CMMC-bound SMBs. Annual cadence aligned to your audit calendar. (FI buyers — see Financial Institutions tier.)",
    includes: [
      "Full library + regulated-SMB scenarios",
      "SOC 2 / HIPAA / PCI / CMMC AAR templates",
      "Audit-grade timestamping + signing",
      "SSO included",
      "Standard support",
    ],
    cta: { label: "Talk to us", href: "/about#contact" },
    highlight: true,
  },
  {
    anchorId: "financial-institutions",
    name: "Financial Institutions",
    price: "$6,125",
    cadence: "/ year",
    blurb:
      "For community banks, credit unions, and FinTechs. FFIEC, NCUA, NYDFS, and GLBA crosswalks in every AAR. Examiner-ready evidence packet.",
    includes: [
      "Full library + FI-specific scenarios (wire fraud, BEC, ransomware)",
      "FFIEC IT Handbook + FFIEC CAT + NCUA ACET AAR",
      "NYDFS 23 NYCRR §500 + GLBA Safeguards crosswalks",
      "Custom inject creation for your wire-room runbook",
      "SSO + dedicated CSM",
    ],
    cta: {
      label: "Try the FFIEC demo",
      href: "/demo?segment=financial-institutions",
    },
  },
  {
    anchorId: "msp-partner",
    name: "MSP / Partner",
    price: "From $375",
    cadence: "/ tenant / year",
    blurb:
      "Multi-tenant + white-label. Deliver tabletops to your customers under your own brand. Volume tiers below 10, 25, and 50 tenants.",
    includes: [
      "White-label Atlas + AAR",
      "Per-tenant AARs + access control",
      "Partner pricing",
      "Dedicated partner manager",
      "Co-marketing kit",
    ],
    cta: { label: "See the white-label kit", href: "/for/msp" },
  },
  {
    anchorId: "enterprise-state",
    name: "Enterprise / State",
    price: "Custom",
    cadence: "/ enterprise",
    blurb:
      "State agencies, large public systems, multi-region enterprises, and regulated-FI parent companies. Custom procurement, data residency, dedicated tenancy.",
    includes: [
      "Dedicated tenant + data-residency options",
      "Custom scenarios + frameworks",
      "Dedicated CSM",
      "VPAT / Section 508 on request",
      "Security-questionnaire concierge",
    ],
    cta: { label: "Talk to us", href: "/about#contact" },
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        title="Public pricing. Seven tiers, sized to actual buyers."
        subtitle="Every paid tier ships with the full scenario library, AI facilitation, and an audit-ready AAR. Numbers below are launch placeholders the founder will refine before GA — every tier link is live today."
        textOnly
      />

      <section className="py-16">
        <div className="container-wide">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <li
                key={tier.name}
                id={tier.anchorId}
                className="scroll-mt-24"
              >
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
            Every paid tier ships with
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm text-ink-700">
            <li className="rounded-md border border-border bg-card p-4">
              <strong className="block text-navy">AI facilitation</strong>
              Atlas runs the session. No outside facilitator required.
            </li>
            <li className="rounded-md border border-border bg-card p-4">
              <strong className="block text-navy">Full library</strong>
              Every scenario, every framework — no per-scenario gating.
            </li>
            <li className="rounded-md border border-border bg-card p-4">
              <strong className="block text-navy">AAR generation</strong>
              HSEEP-anchored, framework crosswalks, PDF + DOCX.
            </li>
            <li className="rounded-md border border-border bg-card p-4">
              <strong className="block text-navy">WCAG 2.1 AA</strong>
              Every surface. No exceptions.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">How we price against the alternatives</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Less than one consultant exercise. More than a static slide deck.
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm text-ink-700">
              <thead>
                <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-ink-500">
                  <th className="py-3 pr-4">Alternative</th>
                  <th className="py-3 pr-4">Typical cost</th>
                  <th className="py-3">Trade-off</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium text-navy">CISA CTEPs (DIY)</td>
                  <td className="py-3 pr-4">Free</td>
                  <td className="py-3">No facilitation, no AI, no AAR template — you write everything.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium text-navy">DIY tabletop tools</td>
                  <td className="py-3 pr-4">$2–5K / year</td>
                  <td className="py-3">Static scenarios, no live facilitation, partial AAR.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium text-navy">Consultant-run exercise</td>
                  <td className="py-3 pr-4">$25–50K per exercise</td>
                  <td className="py-3">Excellent quality, but not annual-affordable for most SMB / FI / public-sector buyers.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium text-navy">Enterprise SOC platform</td>
                  <td className="py-3 pr-4">$50K+ / year</td>
                  <td className="py-3">Built for Fortune 500. Per-seat pricing prices everyone else out.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-signal">Annual Tabletop</td>
                  <td className="py-3 pr-4">$1.2K–$6.1K / year</td>
                  <td className="py-3">AI facilitation, framework AAR, annual cadence — sized to who you are.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-500">
            All comparison figures are publicly observable benchmarks. Annual
            Tabletop figures above the table are launch placeholders pending the
            v1.1 pricing-model pass.
          </p>
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
            a: "We support cooperative-purchasing vehicles, state contracts, and direct procurement. GSA schedule status will be listed here at GA. Talk to us with your preferred vehicle and we'll confirm.",
          },
          {
            q: "Annual billing, monthly billing, or both?",
            a: "Annual at launch — the cadence is in the name. Monthly billing available on the Enterprise / State tier on request.",
          },
          {
            q: "What's the difference between Regulated SMB and Financial Institutions?",
            a: "Regulated SMB covers SOC 2, HIPAA, PCI DSS, and CMMC. Financial Institutions adds the FFIEC IT Examination Handbook, FFIEC CAT, NCUA ACET, NYDFS 23 NYCRR §500, and GLBA Safeguards crosswalks, plus FI-specific inject libraries (wire fraud, SAR-filing decisions, NYDFS 72-hour clock). Banks, credit unions, and FinTechs want the FI tier.",
          },
          {
            q: "What's the difference between General SMB and Regulated SMB?",
            a: "General SMB is the entry tier for orgs that aren't compliance-driven but want the AAR for cyber-insurance, customer questionnaires, or board oversight. Regulated SMB adds the audit-grade AAR templates and framework crosswalks (SOC 2 / HIPAA / PCI / CMMC) that auditors specifically ask for.",
          },
          {
            q: "Can I cancel?",
            a: "Yes. Pro-rated refund on the current year, minus any consumed custom-scenario work.",
          },
          {
            q: "Is white-label included on every tier?",
            a: "White-label is the headline of the MSP / Partner tier. Other tiers can add it as a per-tenant upgrade — talk to us.",
          },
          {
            q: "Are these prices final?",
            a: "No. The numbers on this page are launch placeholders the founder will refine before GA. Tier names, framework coverage, and inclusions are stable; the dollar amounts may move ±20%.",
          },
        ]}
      />

      <CTABlock title="See what an audit-ready AAR looks like — in 90 seconds." />
    </>
  );
}
