import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTABlock } from "@/components/blocks/cta-block";
import { SEGMENTS } from "@/lib/segments";
import { getAllScenarios } from "@/lib/content";

export const metadata: Metadata = {
  title: "Try the demo",
  description:
    "Spend 90 seconds with Atlas, our AI exercise director, on a sample scenario. Download a sample AAR at the end.",
};

/** IA 3.8: Demo. v1 ships a static scenario picker; v1.1 wires Atlas (Phase 3.5). */
export default function DemoPage() {
  const scenarios = getAllScenarios();
  const anchors = SEGMENTS.map((seg) => ({
    segment: seg,
    scenario: scenarios.find((s) => s.slug === seg.anchorScenarioSlug),
  })).filter((x): x is { segment: typeof x.segment; scenario: NonNullable<typeof x.scenario> } => !!x.scenario);

  return (
    <>
      <Hero
        eyebrow="Demo"
        title="Spend 90 seconds with Atlas."
        subtitle="You&apos;ll walk through three injects on a sample scenario. At the end, download the AAR — the same artifact a real exercise produces."
        textOnly
      />

      <section className="py-16">
        <div className="container-wide">
          <p className="eyebrow mb-3">1 · Pick a scenario</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Default is the public-sector anchor. Swap to match your world.
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {anchors.map(({ segment, scenario }, idx) => (
              <li key={segment.slug}>
                <Link
                  href={`#inject-1?scenario=${scenario.slug}`}
                  className="block h-full rounded-lg border border-border bg-card p-5 transition-colors hover:border-signal"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="muted">{segment.shortName}</Badge>
                    {idx === 0 ? (
                      <Badge variant="signal">Default</Badge>
                    ) : null}
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-navy">
                    {scenario.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">
                    {scenario.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="inject-1" className="bg-paper-50 py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">2 · Atlas presents three injects</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Each inject ends with a constrained decision.
          </h2>
          <p className="mt-3 text-ink-700">
            In v1 the demo surface is a stub: the Atlas handshake lands in
            Phase 3.5 (per IA Section 10). Until then, this page explains the
            flow and links to the sample AAR so visitors can still see the
            artifact.
          </p>
          <div
            role="region"
            aria-label="Demo inject placeholder"
            className="mt-6 rounded-lg border border-dashed border-border bg-card p-8"
          >
            <p className="text-sm text-ink-500">
              <strong className="text-navy">Inject 1 of 3 — </strong>
              T+00:22 · State CISO calls. Do you (a) confirm the incident, (b)
              acknowledge without confirming, or (c) defer to your county IT
              director?
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button size="sm" disabled>
                Confirm
              </Button>
              <Button size="sm" variant="secondary" disabled>
                Acknowledge
              </Button>
              <Button size="sm" variant="secondary" disabled>
                Defer
              </Button>
            </div>
            <p className="mt-4 text-xs text-ink-500">
              Decision capture + Atlas response will activate when the Atlas
              agent ships (Task #9 in the Atlas build).
            </p>
          </div>
        </div>
      </section>

      <section id="aar" className="py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">3 · Download the sample AAR</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            The artifact is the conversion event.
          </h2>
          <p className="mt-3 text-ink-700">
            Visitors leave with a branded, 1-page AAR PDF containing their
            actual decisions from the demo plus the framework crosswalk.
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/sample-aar.pdf">Download the sample AAR (PDF)</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABlock
        title="Want to run a real exercise on your environment?"
        primary={{ label: "See pricing", href: "/pricing" }}
        secondary={{ label: "Talk to us", href: "/about#contact" }}
      />
    </>
  );
}
