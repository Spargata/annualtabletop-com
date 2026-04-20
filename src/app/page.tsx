import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { TrustStrip } from "@/components/blocks/trust-strip";
import { SegmentCard } from "@/components/blocks/segment-card";
import { HowItWorks } from "@/components/blocks/how-it-works";
import { AARSnippet } from "@/components/blocks/aar-snippet";
import { FounderNote } from "@/components/blocks/founder-note";
import { FAQ } from "@/components/blocks/faq";
import { CapabilityCard } from "@/components/blocks/capability-card";
import { CTABlock } from "@/components/blocks/cta-block";
import { Button } from "@/components/ui/button";
import { SEGMENTS } from "@/lib/segments";
import { SITE } from "@/lib/site";

/**
 * IA 3.1: Home. 12 content blocks, in order.
 */
export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero
        eyebrow="Annual Tabletop by Thagentix"
        title={
          <>
            The AI cybersecurity tabletop platform{" "}
            <span className="text-signal">built for the buyers who need it.</span>
          </>
        }
        subtitle={SITE.tagline}
        primaryCta={SITE.primaryCta}
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={
          <div
            aria-hidden="true"
            className="relative mx-auto aspect-[4/5] max-w-sm rounded-lg border border-paper-200 bg-paper p-6 shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-navy/70">
              After-Action Report
            </p>
            <h3 className="mt-1 font-serif text-xl font-semibold text-navy">
              Sample — County Election Ransomware
            </h3>
            <dl className="mt-3 space-y-2 text-xs text-ink-700">
              <div>
                <dt className="font-semibold text-navy">Decisions</dt>
                <dd>3 captured · 0 skipped</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Frameworks exercised</dt>
                <dd>NIST 800-84 · FEMA HSEEP · CISA CTEPs</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">AAR status</dt>
                <dd>Ready to forward to auditor</dd>
              </div>
            </dl>
          </div>
        }
      />

      {/* 2 — Trust strip */}
      <TrustStrip />

      {/* 3 — Segment self-identification */}
      <section
        aria-labelledby="segments"
        className="border-y border-border/60 bg-paper-50/60 py-20"
      >
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Built for you if…</p>
            <h2
              id="segments"
              className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
            >
              Pick the page that matches your world.
            </h2>
            <p className="mt-3 text-ink-700">
              The product is the same. The framework language, procurement path,
              and AAR samples are tuned to each segment.
            </p>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SEGMENTS.map((s) => (
              <li key={s.slug}>
                <SegmentCard segment={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — How it works */}
      <HowItWorks />

      {/* 5 — Demo invitation */}
      <section className="bg-paper-50 py-20">
        <div className="container-tight text-center">
          <p className="eyebrow mb-3">90-second demo</p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Spend 90 seconds with Atlas. Leave with a sample AAR.
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-ink-700">
            Atlas, our AI exercise director, will walk you through three injects
            on a sample scenario. At the end, download the AAR — the same
            artifact a real exercise produces.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg">
              <Link href="/demo">Try the demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6 — Why Annual Tabletop */}
      <section className="py-20">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Why Annual Tabletop</p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Built where the incumbents aren&apos;t.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <CapabilityCard
              index={1}
              title="Framework-aligned by default"
              body="Every scenario maps to NIST, HSEEP, CTEPs, CSF, CJIS, HIPAA, FFIEC, PCI, and CMMC. Your AAR is graded on the same axes as your audit."
              link={{ label: "See frameworks", href: "/frameworks" }}
            />
            <CapabilityCard
              index={2}
              title="Audit-ready AAR"
              body="HSEEP-conformant, decisions captured, evidence linked, crosswalk built in. PDF + DOCX, ready to forward."
              link={{ label: "Download a sample", href: "/sample-aar.pdf" }}
            />
            <CapabilityCard
              index={3}
              title="Priced for our segments"
              body="Tiers built for counties, MSPs, regulated SMBs, and non-profits — not a single enterprise SKU that prices everyone else out."
              link={{ label: "See pricing", href: "/pricing" }}
            />
          </div>
        </div>
      </section>

      {/* 7 — AAR sample */}
      <AARSnippet />

      {/* 8 — Social proof */}
      <section className="border-y border-border/60 bg-paper-50 py-16">
        <div className="container-wide text-center">
          <p className="eyebrow mb-3">Design partners</p>
          <p className="mx-auto max-w-2xl font-serif text-2xl text-navy">
            We&apos;re working with design partners across county government,
            regional healthcare, financial services, and MSP firms. Logos
            appear here as design-partner agreements clear legal review.
          </p>
        </div>
      </section>

      {/* 9 — Founder note */}
      <FounderNote />

      {/* 10 — FAQ */}
      <FAQ
        items={[
          {
            q: "How much does it cost?",
            a: (
              <p>
                Public pricing lives on{" "}
                <Link href="/pricing" className="text-signal underline">
                  /pricing
                </Link>
                . Tiers run from a non-profit mission price through
                state-agency / enterprise. No gating, no haggling.
              </p>
            ),
          },
          {
            q: "How long does a session take?",
            a: "Most exercises run 45–75 minutes. The home-page demo is a 90-second guided sequence.",
          },
          {
            q: "Which frameworks do you support?",
            a: "NIST CSF 2.0, NIST 800-84, FEMA HSEEP, CISA CTEPs, CJIS v6.0, HIPAA §164.308, FFIEC, PCI 12.10, and CMMC IR.L2-3.6.3 at launch.",
          },
          {
            q: "How do you handle our data?",
            a: (
              <p>
                See{" "}
                <Link href="/security" className="text-signal underline">
                  /security
                </Link>{" "}
                for encryption, hosting, retention, and DPA details.
              </p>
            ),
          },
          {
            q: "Who facilitates the session — you or us?",
            a: "Atlas, our AI exercise director, runs the session. Your team participates. For MSPs, white-label mode strips Annual Tabletop branding so the partner delivers the experience under their own name.",
          },
          {
            q: "Is white-label available?",
            a: (
              <p>
                Yes — on the MSP tier. Full white-label kit details are on{" "}
                <Link href="/for/msp" className="text-signal underline">
                  /for/msp
                </Link>
                .
              </p>
            ),
          },
        ]}
      />

      {/* 11 — Footer CTA */}
      <CTABlock
        title="Make the required hour the most useful one of your year."
        subtitle="Try the 90-second demo, or talk to us about your next exercise."
      />
    </>
  );
}
