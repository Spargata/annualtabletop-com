import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABlock } from "@/components/blocks/cta-block";
import { getAllScenarios, getScenario } from "@/lib/content";

interface Params {
  params: Promise<{ slug: string }>;
}

export const revalidate = 86_400;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllScenarios().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getScenario(slug);
  if (!scenario) return {};
  return {
    title: scenario.title,
    description: scenario.summary,
  };
}

export default async function ScenarioDetailPage({ params }: Params) {
  const { slug } = await params;
  const scenario = getScenario(slug);
  if (!scenario) notFound();

  return (
    <>
      <section className="bg-paper py-16">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-ink-500">
              <li>
                <Link href="/scenarios" className="hover:text-signal">
                  Scenarios
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy">{scenario.title}</li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="muted">{scenario.threatType}</Badge>
            <Badge variant="outline">{scenario.complexity}</Badge>
            <Badge variant="outline">~{scenario.estimatedMinutes} min</Badge>
          </div>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            {scenario.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-700">
            {scenario.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={`/demo?scenario=${scenario.slug}`}>Try in demo</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight grid gap-10 lg:grid-cols-[2fr_1fr]">
          <article className="prose prose-sm max-w-none">
            <h2>Learning objectives</h2>
            <ul>
              {scenario.learningObjectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <h2>Scenario brief</h2>
            <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-ink-700">
              {scenario.body.trim()}
            </pre>
          </article>

          <aside className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-lg font-semibold text-navy">
              Framework crosswalk
            </h2>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {scenario.frameworks.map((f) => (
                <li key={f}>
                  <Badge variant="framework">{f}</Badge>
                </li>
              ))}
            </ul>
            <h2 className="mt-6 font-serif text-lg font-semibold text-navy">
              Built for
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-ink-700">
              {scenario.segments.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <CTABlock title="Bring this scenario to your next exercise." />
    </>
  );
}
