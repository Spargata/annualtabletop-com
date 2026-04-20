import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { CTABlock } from "@/components/blocks/cta-block";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Annual Tabletop is built to WCAG 2.1 AA across every surface. VPAT / Section 508 available on request. Our accessibility practices, known limitations, and reporting path.",
};

export default function AccessibilityPage() {
  return (
    <>
      <Hero
        eyebrow="Accessibility"
        title="WCAG 2.1 AA. Every page. No exceptions."
        subtitle="Public-sector buyers require accessibility. So do the users who work at those buyers. We built Annual Tabletop to meet WCAG 2.1 AA from day one — the product, the marketing site, the AAR export."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight space-y-10 text-ink-700">
          <Section heading="Conformance target">
            <p>
              WCAG 2.1 Level AA. We test against this standard on every release
              and publish audit results on request. Section 508 conformance is
              the natural consequence of the same work.
            </p>
          </Section>

          <Section heading="VPAT / Section 508">
            <p>
              A VPAT 2.5 is available on request to public-sector buyers and
              procurement teams during evaluation.{" "}
              <Link href="/about#contact" className="text-signal underline">
                Request one
              </Link>{" "}
              — we reply within three business days.
            </p>
          </Section>

          <Section heading="What we test">
            <p>
              Keyboard-only navigation on every page. Screen reader testing
              (NVDA + VoiceOver) on primary flows. Color contrast audits on
              every component. Focus-visible state on every interactive
              element. Reduced-motion preference respected in every animation.
              Form-error announcement on every input.
            </p>
          </Section>

          <Section heading="Known limitations">
            <p>
              The Atlas live-session UI (Phase 3.5) is under accessibility
              review as we build it; conformance will be verified before the
              Atlas agent ships. Scenario authoring tools (internal) are not
              customer-facing and are audited separately.
            </p>
          </Section>

          <Section heading="Reporting an issue">
            <p>
              Email{" "}
              <a
                href="mailto:accessibility@annualtabletop.com"
                className="text-signal underline"
              >
                accessibility@annualtabletop.com
              </a>{" "}
              with the page, browser, assistive technology, and what you
              observed. We acknowledge within two business days and aim to fix
              AA-level defects within the next release cycle.
            </p>
          </Section>
        </div>
      </section>

      <CTABlock title="Found a barrier? Tell us directly." />
    </>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-xl font-semibold text-navy">{heading}</h2>
      <div className="mt-2 leading-relaxed">{children}</div>
    </div>
  );
}
