import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { ScenarioFilterBar } from "@/components/blocks/scenario-filter-bar";
import { CTABlock } from "@/components/blocks/cta-block";
import { Badge } from "@/components/ui/badge";
import { getAllScenarios } from "@/lib/content";
import { FRAMEWORKS } from "@/lib/frameworks";
import { SEGMENTS } from "@/lib/segments";

export const metadata: Metadata = {
  title: "Scenarios library",
  description:
    "Framework-aligned cybersecurity tabletop scenarios. Filter by segment, framework, threat type, and complexity. Try any scenario in the demo.",
};

/** IA 3.3: Scenarios library. Uses ISR — revalidate nightly. */
export const revalidate = 86_400;

export default function ScenariosPage() {
  const scenarios = getAllScenarios();
  const frameworkCount = FRAMEWORKS.length;

  const scenariosBySegment = SEGMENTS.map((seg) => ({
    segment: seg,
    count: scenarios.filter((s) => s.segments.includes(seg.slug)).length,
  }));

  return (
    <>
      <Hero
        eyebrow="Scenarios library"
        title="Framework-aligned scenarios, ready to run."
        subtitle={`${scenarios.length} scenarios across ${frameworkCount} frameworks, authored by people who've sat on the auditor side of the table. Pick one, try it in the demo, or bring it to your next exercise.`}
        primaryCta={{ label: "Try the demo", href: "/demo" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        textOnly
      />

      {/* How scenarios are structured */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">What&apos;s in a scenario</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              Not a Word doc. A session-ready, framework-tagged, decision-scored
              package.
            </h2>
          </div>
          <dl className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-5">
              <dt className="font-serif text-lg font-semibold text-navy">
                A tuned narrative
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                A threat your buyer recognizes — county ransomware, FFIEC wire
                fraud, hospital EHR outage, SMB BEC — written in the language
                of that environment.
              </dd>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <dt className="font-serif text-lg font-semibold text-navy">
                Three constrained decisions
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                Injects arrive with a time box and a bounded option set.
                Atlas captures what your team picks, time-stamps it, and
                scores it against your plan.
              </dd>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <dt className="font-serif text-lg font-semibold text-navy">
                Framework crosswalk
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                Every scenario ships mapped to a primary framework plus every
                other one it touches. NIST CSF 2.0, HSEEP, FFIEC, HIPAA,
                PCI, CJIS, CMMC — crosswalks land in the AAR, not a separate
                spreadsheet.
              </dd>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <dt className="font-serif text-lg font-semibold text-navy">
                HSEEP-conformant AAR
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                The artifact at the end is identical in structure to the one a
                $50K consulting engagement produces. PDF and DOCX. Forward it
                to your auditor, examiner, or carrier.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Browse by segment shortcut */}
      <section className="border-y border-border/60 bg-paper-50 py-12">
        <div className="container-wide">
          <p className="eyebrow mb-3">Browse by segment</p>
          <ul className="flex flex-wrap gap-2">
            {scenariosBySegment.map(({ segment, count }) => (
              <li key={segment.slug}>
                <Link
                  href={`/scenarios?segment=${segment.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-signal hover:text-signal"
                >
                  {segment.shortName}
                  <Badge variant="muted">
                    {count} {count === 1 ? "scenario" : "scenarios"}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Filter bar + grid */}
      <section className="py-12">
        <div className="container-wide">
          <ScenarioFilterBar scenarios={scenarios} />
        </div>
      </section>

      {/* Custom-scenario callout */}
      <section className="bg-paper-50 py-16">
        <div className="container-tight text-center">
          <p className="eyebrow mb-3">Don&apos;t see what you need?</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Request a custom scenario.
          </h2>
          <p className="mx-auto mt-3 max-w-prose text-ink-700">
            We build custom scenarios for design partners, Financial
            Institutions, and enterprise tiers. Tell us the threat model, the
            framework you&apos;re graded on, and the environment — we&apos;ll
            ship a session-ready scenario with crosswalks and sample AAR
            inside two weeks.
          </p>
          <p className="mx-auto mt-4 max-w-prose text-sm text-ink-500">
            Custom scenarios include a free revision round and are yours to
            re-run year over year.
          </p>
        </div>
      </section>

      <CTABlock
        title="Try any scenario in the 90-second demo."
        subtitle="Pick a default for your segment, or swap to one of the 10+ scenarios in the library."
      />
    </>
  );
}
