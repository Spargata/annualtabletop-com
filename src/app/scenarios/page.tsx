import type { Metadata } from "next";
import { Hero } from "@/components/blocks/hero";
import { ScenarioFilterBar } from "@/components/blocks/scenario-filter-bar";
import { CTABlock } from "@/components/blocks/cta-block";
import { getAllScenarios } from "@/lib/content";
import { FRAMEWORKS } from "@/lib/frameworks";

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

  return (
    <>
      <Hero
        eyebrow="Scenarios library"
        title="Framework-aligned scenarios, ready to run."
        subtitle={`${scenarios.length} scenarios across ${frameworkCount} frameworks. Pick one, try it in the demo, or bring it to your next exercise.`}
        primaryCta={{ label: "Try the demo", href: "/demo" }}
        textOnly
      />

      <section className="py-12">
        <div className="container-wide">
          <ScenarioFilterBar scenarios={scenarios} />
        </div>
      </section>

      <section className="bg-paper-50 py-16">
        <div className="container-tight text-center">
          <p className="eyebrow mb-3">Don&apos;t see what you need?</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Request a custom scenario.
          </h2>
          <p className="mx-auto mt-3 max-w-prose text-ink-700">
            We build custom scenarios for design partners and enterprise tiers.
            Tell us the threat, framework, and segment — we&apos;ll ship a
            session-ready scenario + AAR crosswalk.
          </p>
        </div>
      </section>

      <CTABlock title="Try any scenario in the 90-second demo." />
    </>
  );
}
