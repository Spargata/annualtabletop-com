import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { FAQ } from "@/components/blocks/faq";
import { CTABlock } from "@/components/blocks/cta-block";
import { ScenarioCard } from "@/components/blocks/scenario-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO_LANDINGS, getSeoLanding } from "@/lib/seo-landings";
import { getAllScenarios } from "@/lib/content";

interface Params {
  params: Promise<{ topic: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return SEO_LANDINGS.map((l) => ({ topic: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { topic } = await params;
  const landing = getSeoLanding(topic);
  if (!landing) return {};
  return {
    title: landing.title,
    description: landing.metaDescription,
    alternates: { canonical: `/solutions/${landing.slug}` },
  };
}

/** IA 3.10: SEO landing template. 6 blocks. Keyword-anchored. */
export default async function SolutionLandingPage({ params }: Params) {
  const { topic } = await params;
  const landing = getSeoLanding(topic);
  if (!landing) notFound();

  const allScenarios = getAllScenarios();
  const featured = landing.featuredScenarioSlugs
    .map((slug) => allScenarios.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <>
      {/* Block 1 — Hero */}
      <Hero
        eyebrow={landing.query}
        title={landing.title}
        subtitle={landing.intro}
        primaryCta={{ label: "Try the demo", href: "/demo" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        textOnly
      />

      {/* Block 2 — What you'll get / ToC */}
      <section className="bg-paper-50 py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">What this page covers</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            A practitioner-level guide, not a keyword page.
          </h2>
          <ul className="mt-6 space-y-2 text-ink-700">
            {landing.whatYoullGet.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-l-2 border-signal pl-4"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {landing.frameworks.map((f) => (
              <Badge key={f} variant="framework">
                {f}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Block 3 — Long-form body (prose) */}
      <section className="py-16">
        <div className="container-tight prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-ink-700">
          {landing.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Block 4 — Featured scenarios */}
      <section className="bg-paper-50 py-16">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Recommended scenarios</p>
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
                Start with these.
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/scenarios">Browse the full library</Link>
            </Button>
          </div>

          {featured.length > 0 ? (
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((s) => (
                <li key={s.slug}>
                  <ScenarioCard scenario={s} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 rounded-lg border border-dashed border-border bg-card p-8 text-sm text-ink-700">
              Scenarios for this topic ship with the content push before
              launch.
            </p>
          )}
        </div>
      </section>

      {/* Block 5 — FAQ (high intent for SERP features) */}
      <FAQ
        items={landing.faqs.map((f) => ({ q: f.q, a: f.a }))}
        title="Questions practitioners ask"
      />

      {/* Block 6 — CTA */}
      <CTABlock
        title={landing.ctaTitle}
        primary={{ label: "Try the demo", href: "/demo" }}
        secondary={{ label: "Talk to us", href: "/about#contact" }}
      />
    </>
  );
}
