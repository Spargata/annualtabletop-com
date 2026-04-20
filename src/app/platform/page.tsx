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
        title="One Atlas. Six buyer segments. Every exercise ends in an AAR."
        subtitle="Annual Tabletop is an AI exercise director (Atlas), a framework-aligned scenario library, an HSEEP-conformant AAR generator, and a multi-tenant delivery layer for partners — in one product, not four."
        primaryCta={{ label: "Try the demo", href: "/demo" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        textOnly
      />

      <section className="py-20">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Four capabilities</p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What you get when you run a session.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <CapabilityCard
              index={1}
              title="Atlas, our AI exercise director"
              body="Atlas presents injects, keeps the clock, captures each decision as it&rsquo;s made, and adapts the next inject based on what your team actually did. It stays inside HSEEP guardrails — no &ldquo;creative&rdquo; drift off-framework. Runs live in a browser for the room, or async across a distributed team."
            />
            <CapabilityCard
              index={2}
              title="Framework-aligned scenario library"
              body="Every scenario is authored against a primary framework and carries crosswalks to every other relevant one. FFIEC wire fraud scenarios carry NIST CSF + CJIS + NYDFS mappings. Hospital EHR outage scenarios carry HIPAA §164.308 + NIST CSF + PCI. Your AAR arrives graded on the same axes as your audit."
              link={{ label: "Browse scenarios", href: "/scenarios" }}
            />
            <CapabilityCard
              index={3}
              title="Audit-ready AAR generation"
              body="HSEEP-conformant template out of the box. Every decision time-stamped, scored against your plan, and linked to a framework control. Evidence attached. Crosswalk built in. Exports to PDF (for the examiner) and DOCX (for your remediation tracker) in under 30 seconds."
              link={{ label: "Download sample AAR", href: "/sample-aar.pdf" }}
            />
            <CapabilityCard
              index={4}
              title="Multi-tenant + white-label for partners"
              body="MSP and IR firms deliver Annual Tabletop as their own service: partner branding, partner colors, partner footer. Per-tenant isolation for client data, per-tenant access control, per-tenant AARs. Customer-deliverable inside 48 hours from session end."
              link={{ label: "White-label kit", href: "/for/msp" }}
            />
          </div>
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
            output. No integrations required to get started — Atlas runs in a
            browser. Optional SSO, SCIM, and webhooks land on higher tiers.
            (Diagram coming in the v1.1 visual pass.)
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
              The incumbents win the Fortune 500. The free options serve the
              truly under-resourced. Everyone in between has been choosing
              between a template they have to drive themselves and a $50K
              consulting engagement. Here&apos;s where we sit.
            </p>
          </div>
          <div className="mt-8">
            <ComparisonTable
              columns={[
                "Annual Tabletop",
                "Free / CISA CTEPs",
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
                  capability:
                    "FFIEC / NCUA / NYDFS crosswalk in the AAR",
                  cells: ["yes", "no", "partial", "partial"],
                },
                {
                  capability:
                    "Priced for SMB, county, non-profit, community bank",
                  cells: ["yes", "yes", "no", "no"],
                },
                {
                  capability: "White-label for MSP / IR delivery",
                  cells: ["yes", "no", "no", "no"],
                },
                {
                  capability: "No per-user seat tax",
                  cells: ["yes", "yes", "no", "yes"],
                },
                {
                  capability:
                    "Repeatable — same platform for next year's exercise",
                  cells: ["yes", "partial", "yes", "no"],
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
            Decisions, evidence, and AARs stay in your tenant. Optional U.S.
            single-region hosting for FFIEC, CJIS, and CMMC buyers. DPA and
            SCC available on request. The full write-up — encryption,
            retention, sub-processors, and access controls — lives on{" "}
            <Link href="/security" className="text-signal underline">
              /security
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABlock
        title="See Atlas run a session in 90 seconds."
        subtitle="No sign-up, no sales call, no calendar invite. Sample AAR downloadable at the end."
      />
    </>
  );
}
