import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABlock } from "@/components/blocks/cta-block";
import { getFramework, FRAMEWORKS } from "@/lib/frameworks";
import { getFrameworkArticle } from "@/lib/content";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FRAMEWORKS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const framework = getFramework(slug);
  if (!framework) return {};
  return {
    title: framework.short,
    description: framework.summary,
  };
}

export default async function FrameworkDetailPage({ params }: Params) {
  const { slug } = await params;
  const framework = getFramework(slug);
  if (!framework) notFound();

  const article = getFrameworkArticle(slug);

  return (
    <>
      <section className="bg-paper py-16">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-ink-500">
              <li>
                <Link href="/frameworks" className="hover:text-signal">
                  Frameworks
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy">{framework.short}</li>
            </ol>
          </nav>
          <Badge variant="outline">{framework.issuer}</Badge>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            {framework.short}
          </h1>
          <p className="mt-2 text-ink-500">{framework.name}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-700">
            {framework.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={`/demo?framework=${framework.slug}`}>
                Try the {framework.short} demo
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={`/scenarios?framework=${framework.short}`}>
                See matching scenarios
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight">
          {article ? (
            <article className="prose prose-sm max-w-none whitespace-pre-wrap">
              {article.body}
            </article>
          ) : (
            <p className="text-ink-700">
              Full crosswalk and mapping article coming before launch. (Source
              of truth is <code>/src/content/frameworks/{framework.slug}.mdx</code>.)
            </p>
          )}
        </div>
      </section>

      <CTABlock title={`Run a ${framework.short}-aligned exercise.`} />
    </>
  );
}
