import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTABlock } from "@/components/blocks/cta-block";
import { SEGMENTS } from "@/lib/segments";
import { getAllScenarios } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Try the demo",
  description:
    "Spend 90 seconds with Atlas, our AI exercise director, on a sample scenario. Download a sample AAR at the end.",
};

/**
 * IA 3.8: Demo. v1 ships a static scenario picker that honors two query
 * params for segment-aware deep links:
 *   - ?segment=financial-institutions → selects the segment's anchor scenario
 *   - ?scenario=county-election-systems → selects that exact scenario
 * Explicit scenario wins over segment. Absent both, we default to the first
 * anchor (public sector).
 *
 * The live Atlas facilitator lands in Phase 3.5 per IA Section 10; until
 * then, the picker's job is to make the segment → demo handoff feel
 * intentional and to get visitors to the sample AAR.
 */
export default async function DemoPage({
  searchParams,
}: {
  searchParams: Promise<{ segment?: string; scenario?: string }>;
}) {
  const params = await searchParams;
  const scenarios = getAllScenarios();
  const anchors = SEGMENTS.map((seg) => ({
    segment: seg,
    scenario: scenarios.find((s) => s.slug === seg.anchorScenarioSlug),
  })).filter(
    (x): x is { segment: typeof x.segment; scenario: NonNullable<typeof x.scenario> } =>
      !!x.scenario,
  );

  // Selection priority: explicit ?scenario beats ?segment; fall back to the
  // first anchor (public sector) if neither resolves.
  const selectedScenarioSlug =
    params.scenario ??
    anchors.find((a) => a.segment.slug === params.segment)?.scenario.slug ??
    anchors[0]?.scenario.slug;

  const selected =
    anchors.find((a) => a.scenario.slug === selectedScenarioSlug) ?? anchors[0];

  const heroSubtitle = params.segment
    ? `Pre-selected for your segment. Walk three injects on ${selected.scenario.title}, then download the AAR.`
    : "You'll walk through three injects on a sample scenario. At the end, download the AAR \u2014 the same artifact a real exercise produces.";

  return (
    <>
      <Hero
        eyebrow="Demo"
        title="Spend 90 seconds with Atlas."
        subtitle={heroSubtitle}
        textOnly
      />

      <section className="py-16">
        <div className="container-wide">
          <p className="eyebrow mb-3">1 · Pick a scenario</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            {params.segment
              ? "We\u2019ve highlighted the scenario for your segment. Swap if you want."
              : "Default is the public-sector anchor. Swap to match your world."}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {anchors.map(({ segment, scenario }) => {
              const isSelected = scenario.slug === selected.scenario.slug;
              return (
                <li key={segment.slug}>
                  <Link
                    href={`/demo?scenario=${scenario.slug}#inject-1`}
                    aria-current={isSelected ? "true" : undefined}
                    className={cn(
                      "block h-full rounded-lg border bg-card p-5 transition-colors hover:border-signal",
                      isSelected
                        ? "border-signal ring-1 ring-signal"
                        : "border-border",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <Badge variant="muted">{segment.shortName}</Badge>
                      {isSelected ? (
                        <Badge variant="signal">Selected</Badge>
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
              );
            })}
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
            Running{" "}
            <strong className="text-navy">{selected.scenario.title}</strong> for
            the {selected.segment.shortName} segment. In v1 the inject surface
            is a stub &mdash; the live Atlas handshake lands in Phase 3.5 (per
            IA Section 10). Until then, this page explains the flow and links
            to the sample AAR so visitors can still see the artifact.
          </p>
          <div
            role="region"
            aria-label="Demo inject placeholder"
            className="mt-6 rounded-lg border border-dashed border-border bg-card p-8"
          >
            <p className="text-sm text-ink-500">
              <strong className="text-navy">Inject 1 of 3 &mdash; </strong>
              T+00:22 &middot; Your first escalation arrives. Do you (a)
              confirm the incident, (b) acknowledge without confirming, or (c)
              defer to your internal lead?
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
              agent ships (Phase 3.5).
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
