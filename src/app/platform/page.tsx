import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { CapabilityCard } from "@/components/blocks/capability-card";
import { CTABlock } from "@/components/blocks/cta-block";
import { ComparisonTable } from "@/components/blocks/comparison-row";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The AI cybersecurity tabletop platform: AI-facilitated sessions, framework-aligned scenarios, audit-ready AARs, multi-tenant + white-label for MSPs.",
};

/** IA 3.2: Platform overview. */
export default function PlatformPage() {
  return (
    <>
      <Hero
        eyebrow="Platform"
        title="The AI cybersecurity tabletop platform."
        subtitle="Four core capabilities: AI-facilitated sessions, framework-aligned scenarios, audit-ready AARs, and multi-tenant delivery for MSPs."
        primaryCta={{ label: "Try the demo", href: "/demo" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        textOnly
      />

      <section className="py-20">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <CapabilityCard
            index={1}
            title="AI-facilitated sessions"
            body="Atlas, our AI exercise director, presents injects, captures decisions, and adapts within framework-aligned bounds. In-person or async. Never leaves HSEEP's guardrails."
          />
          <CapabilityCard
            index={2}
            title="Framework-aligned scenario library"
            body="Every scenario maps to NIST, HSEEP, CTEPs, CSF, CJIS, HIPAA, FFIEC, PCI, CMMC. Crosswalks ship in the AAR."
            link={{ label: "Browse scenarios", href: "/scenarios" }}
          />
          <CapabilityCard
            index={3}
            title="Audit-ready AAR generation"
            body="HSEEP-conformant template. Decisions captured, evidence linked, crosswalks built in. Exportable to PDF and DOCX."
            link={{ label: "Download sample AAR", href: "/sample-aar.pdf" }}
          />
          <CapabilityCard
            index={4}
            title="Multi-tenant + white-label"
            body="MSP and IR partners run sessions under their own brand. Per-tenant AARs, per-tenant access control, customer-deliverable in 48 hours."
            link={{ label: "White-label kit", href: "/for/msp" }}
          />
        </div>
      </section>

      {/* Architecture diagram block — textual for v1 */}
      <section className="border-y border-border/60 bg-paper-50 py-20">
        <div className="container-tight text-center">
          <p className="eyebrow mb-3">Architecture</p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Scenario library → Atlas → live session → AAR.
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-ink-700">
            One pipeline. One source of truth for decisions. One audit-ready
            output. (Diagram coming in the v1.1 visual design pass.)
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="py-20">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Compare</p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              How we&apos;re different.
            </h2>
            <p className="mt-3 text-ink-700">
              A short snapshot — full battlecards on the product-management
              competitive brief, available on request.
            </p>
          </div>
          <div className="mt-8">
            <ComparisonTable
              columns={[
                "Annual Tabletop",
                "Static-template player",
                "Enterprise SOC platform",
                "DIY with senior consultant",
              ]}
              rows={[
                {
                  capability: "AI-facilitated live session",
                  cells: ["yes", "no", "yes", "no"],
                },
                {
                  capability: "HSEEP-conformant AAR out of the box",
                  cells: ["yes", "no", "partial", "partial"],
                },
                {
                  capability: "Priced for county / non-profit / SMB",
                  cells: ["yes", "partial", "no", "no"],
                },
                {
                  capability: "White-label for MSP delivery",
                  cells: ["yes", "no", "no", "no"],
                },
                {
                  capability: "No per-user seat tax",
                  cells: ["yes", "yes", "no", "yes"],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-paper-50 py-16">
        <div className="container-tight text-center">
          <p className="eyebrow mb-3">Security & data handling</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Encrypted in transit and at rest. U.S.-only hosting available.
          </h2>
          <p className="mx-auto mt-3 max-w-prose text-ink-700">
            Read the full write-up on{" "}
            <Link href="/security" className="text-signal underline">
              /security
            </Link>
            , including hosting region options, data retention, DPA/SCC, and
            access controls.
          </p>
        </div>
      </section>

      <CTABlock
        title="See Atlas run a session in 90 seconds."
        subtitle="No sign-up. Sample AAR downloadable at the end."
      />
    </>
  );
}
