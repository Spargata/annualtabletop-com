import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { CTABlock } from "@/components/blocks/cta-block";
import { Badge } from "@/components/ui/badge";
import { SEO_LANDINGS } from "@/lib/seo-landings";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Topic-specific landing pages for HSEEP, HIPAA, SOC 2, and ransomware tabletop exercises. Each page covers the framework, the scenarios, and the AAR you'll get.",
};

/** Index for the SEO landings under /solutions/[topic]. */
export default function SolutionsIndex() {
  return (
    <>
      <Hero
        eyebrow="Solutions"
        title="A landing for every framework you exercise against."
        subtitle="Pick the regulation, framework, or threat type your audit cycle is built around. Each page maps to scenarios in our library and to the AAR template your auditor reads."
        textOnly
      />

      <section className="py-16">
        <div className="container-wide">
          <ul className="grid gap-6 md:grid-cols-2">
            {SEO_LANDINGS.map((landing) => (
              <li key={landing.slug}>
                <Link
                  href={`/solutions/${landing.slug}`}
                  className="block h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-signal"
                >
                  <p className="eyebrow mb-2">{landing.query}</p>
                  <h2 className="font-serif text-xl font-semibold text-navy">
                    {landing.title}
                  </h2>
                  <p className="mt-3 text-sm text-ink-700">
                    {landing.metaDescription}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {landing.frameworks.map((f) => (
                      <li key={f}>
                        <Badge variant="framework">{f}</Badge>
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABlock title="Pick your framework. Run the demo." />
    </>
  );
}
