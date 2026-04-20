import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { FAQ } from "@/components/blocks/faq";
import { CTABlock } from "@/components/blocks/cta-block";
import { CapabilityCard } from "@/components/blocks/capability-card";
import { ScenarioCard } from "@/components/blocks/scenario-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEGMENTS, getSegment, type SegmentSlug } from "@/lib/segments";
import { getSegmentContent } from "@/lib/segment-content";
import { getScenariosForSegment } from "@/lib/content";

interface Params {
  params: Promise<{ segment: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return SEGMENTS.map((s) => ({ segment: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { segment } = await params;
  const seg = getSegment(segment);
  if (!seg) return {};
  const content = getSegmentContent(seg.slug);
  return {
    title: `${seg.name} — Annual Tabletop`,
    description: content.heroSubtitle,
  };
}

/** IA 3.9: Segment landing template. 8 blocks, segment-tuned copy. */
export default async function SegmentLandingPage({ params }: Params) {
  const { segment } = await params;
  const seg = getSegment(segment);
  if (!seg) notFound();

  const slug = seg.slug as SegmentSlug;
  const content = getSegmentContent(slug);
  const scenarios = getScenariosForSegment(slug);

  return (
    <>
      {/* Block 1 — Hero (segment-specific framework hook) */}
      <Hero
        eyebrow={`For ${seg.name}`}
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        primaryCta={seg.cta}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        textOnly
      />

      {/* Block 2 — Their problem in their language */}
      <section className="bg-paper-50 py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">The problem</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            {content.problemHeading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            {content.problemBody}
          </p>
        </div>
      </section>

      {/* Block 3 — Why Annual Tabletop fits this segment (3 cards) */}
      <section className="py-16">
        <div className="container-wide">
          <p className="eyebrow mb-3">Why Annual Tabletop fits</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Built for {seg.name.toLowerCase()} — not retrofitted from an
            enterprise SOC tool.
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {content.benefits.map((b, i) => (
              <li key={b.title}>
                <CapabilityCard index={i + 1} title={b.title} body={b.body} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Block 4 — Segment-specific scenarios */}
      <section className="bg-paper-50 py-16">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Scenarios for {seg.shortName}</p>
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                {scenarios.length > 0
                  ? `${scenarios.length} scenario${scenarios.length === 1 ? "" : "s"} tuned to your environment.`
                  : "Scenarios for your environment land as the library grows."}
              </h2>
              <p className="mt-2 text-sm text-ink-700">
                Framework crosswalks: {seg.frameworkHook}
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href={`/scenarios?segment=${seg.slug}`}>
                Browse the full library
              </Link>
            </Button>
          </div>

          {scenarios.length > 0 ? (
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {scenarios.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <ScenarioCard scenario={s} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 rounded-lg border border-dashed border-border bg-card p-8 text-sm text-ink-700">
              Additional scenarios ship with the content push before launch.
              The MDX library is the source of truth —{" "}
              <Link href="/scenarios" className="text-signal underline">
                see what&apos;s available today
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      {/* Block 5 — Segment-specific AAR sample */}
      <section className="py-16">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-3">Sample AAR</p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              {content.aarCaption}
            </h2>
            <p className="mt-4 text-ink-700">
              The AAR is the artifact. It&apos;s what your{" "}
              {slug === "public"
                ? "state EM coordinator"
                : slug === "financial-institutions"
                  ? "FFIEC / NCUA / NYDFS examiner"
                  : slug === "regulated-smb"
                    ? "SOC 2 / HIPAA / PCI auditor"
                    : slug === "msp"
                      ? "client forwards to their carrier"
                      : slug === "smb"
                        ? "insurance underwriter or customer questionnaire"
                        : "funder"}{" "}
              actually reads. Every Annual Tabletop exercise produces one.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/sample-aar.pdf">Download sample AAR (PDF)</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/platform#aar">How AARs work</Link>
              </Button>
            </div>
          </div>
          <article
            aria-label={`Sample AAR excerpt for ${seg.name}`}
            className="rounded-lg border border-paper-200 bg-paper p-8 shadow-md ring-1 ring-paper-200"
          >
            <header className="border-b border-paper-200 pb-4">
              <p className="eyebrow text-navy/70">After-Action Report</p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-navy">
                {seg.name} — Sample Exercise
              </h3>
              <p className="mt-1 text-xs text-ink-500">
                Conducted via Annual Tabletop · 60 minutes ·{" "}
                {seg.frameworkHook}
              </p>
            </header>
            <dl className="mt-4 space-y-3 text-sm text-ink-700">
              <div>
                <dt className="font-semibold text-navy">Scenario</dt>
                <dd>
                  Constrained-decision injects tuned to a {seg.shortName}{" "}
                  environment.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Decisions captured</dt>
                <dd>
                  Three time-boxed decisions, scored against your plan. Each
                  maps to a framework control in the AAR.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Framework crosswalk</dt>
                <dd className="flex flex-wrap gap-1.5 pt-1">
                  {seg.frameworkHook.split(",").map((f) => (
                    <Badge key={f} variant="framework">
                      {f.trim()}
                    </Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      {/* Block 6 — Segment-specific pricing */}
      <section className="bg-navy py-16 text-paper">
        <div className="container-tight">
          <p className="eyebrow mb-3 text-paper/70">Pricing</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            {content.pricingHeading}
          </h2>
          <p className="mt-3 max-w-2xl text-paper/80">{content.pricingBody}</p>
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              variant="signal"
            >
              <Link href={content.pricingCta.href}>
                {content.pricingCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Block 7 — Segment-specific FAQ */}
      <FAQ
        items={content.faqs}
        title={`${seg.name} — questions we get`}
      />

      {/* Block 8 — Segment-tuned CTA */}
      <CTABlock
        title={content.ctaTitle}
        primary={content.ctaPrimary}
        secondary={content.ctaSecondary}
      />
    </>
  );
}
