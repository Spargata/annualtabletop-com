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
            The AI cybersecurity tabletop{" "}
            <span className="text-signal">
              your auditor, examiner, or carrier already trusts.
            </span>
          </>
        }
        subtitle="Atlas, our AI exercise director, runs a 60-minute session on your environment. You walk out with an HSEEP-conformant After-Action Report mapped to NIST, FFIEC, HIPAA, PCI, CJIS, and CMMC — ready to forward to whoever&rsquo;s asking."
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
                <dt className="font-semibold text-navy">Duration</dt>
                <dd>62 minutes · 4 participants</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Decisions captured</dt>
                <dd>3 of 3 · 0 skipped · all time-stamped</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Framework crosswalk</dt>
                <dd>NIST 800-84 · FEMA HSEEP · CISA CTEPs · CJIS v6.0</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Status</dt>
                <dd>Ready to forward to state EM coordinator</dd>
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
            <p className="eyebrow mb-3">Six buyers. One platform.</p>
            <h2
              id="segments"
              className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
            >
              Pick the page that matches your world.
            </h2>
            <p className="mt-3 text-ink-700">
              Atlas is the same engine for everyone. The scenario library,
              framework crosswalks, AAR samples, and procurement language are
              tuned to each segment so the page reads like you wrote it.
            </p>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            No sign-up. No sales call. A sample AAR in your inbox.
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-ink-700">
            Pick the scenario closest to your world — county ransomware, bank
            wire fraud, hospital EHR outage, SMB BEC — and Atlas will walk you
            through three constrained decisions in about ninety seconds. At the
            end, download the AAR. It&apos;s the same artifact a real exercise
            produces.
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
            <p className="mt-3 text-ink-700">
              Enterprise SOC platforms run the Fortune 500. CISA CTEPs are a
              PDF. Consultants bill $25-50K for a half-day. Everyone else —
              counties, banks, clinics, manufacturers, MSPs, non-profits — has
              been stuck between a free template and a six-figure engagement.
              We built for the middle.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <CapabilityCard
              index={1}
              title="Framework-aligned by default"
              body="Every scenario maps to NIST CSF 2.0, NIST 800-84, FEMA HSEEP, CISA CTEPs, CJIS v6.0, HIPAA §164.308, FFIEC, PCI 12.10, and CMMC IR.L2-3.6.3. Your AAR is graded on the same axes as your audit."
              link={{ label: "See frameworks", href: "/frameworks" }}
            />
            <CapabilityCard
              index={2}
              title="AAR your auditor already trusts"
              body="HSEEP-conformant. Every decision time-stamped, scored, and mapped to a framework control. PDF and DOCX, ready to forward to your FFIEC examiner, SOC 2 auditor, state EM coordinator, cyber carrier, or board."
              link={{ label: "Download a sample", href: "/sample-aar.pdf" }}
            />
            <CapabilityCard
              index={3}
              title="Priced for the buyer, not the brand"
              body="Seven tiers, published pricing, no haggling. A non-profit tier, a sub-$5K SMB tier, and a partner tier for MSPs who run this for their whole book. No per-seat taxes. No $50K enterprise floor."
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
            Design partners are running real exercises across county
            government, community banks and credit unions, regional healthcare,
            manufacturing, and MSP firms. Logos appear here as design-partner
            agreements clear legal review — we don&apos;t list anyone we
            can&apos;t name.
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
                All seven tiers are published on{" "}
                <Link href="/pricing" className="text-signal underline">
                  /pricing
                </Link>
                . Non-profits start at an apply-only mission tier. General SMB
                runs a flat $4,800/yr. Regulated SMB and Financial
                Institutions sit between $14.5K and $24.5K. Public sector and
                enterprise are quoted from a published anchor. No gating, no
                haggling.
              </p>
            ),
          },
          {
            q: "I&rsquo;m a bank / credit union / FinTech. Which page is mine?",
            a: (
              <p>
                <Link
                  href="/for/financial-institutions"
                  className="text-signal underline"
                >
                  /for/financial-institutions
                </Link>
                . The scenario library, AAR samples, and crosswalks are tuned
                to FFIEC IT Handbook, FFIEC CAT, NCUA ACET, NYDFS 23 NYCRR
                §500, and the GLBA Safeguards Rule. Pricing is its own tier.
              </p>
            ),
          },
          {
            q: "What&rsquo;s the difference between Regulated SMB and General SMB?",
            a: (
              <p>
                <Link
                  href="/for/regulated-smb"
                  className="text-signal underline"
                >
                  Regulated SMB
                </Link>{" "}
                is for orgs whose annual exercise is mandated by SOC 2, HIPAA,
                PCI, or CMMC.{" "}
                <Link href="/for/smb" className="text-signal underline">
                  General SMB
                </Link>{" "}
                is for orgs whose cyber carrier, customer, or board is asking —
                no formal regulatory mandate. Same Atlas, different framework
                language and different price.
              </p>
            ),
          },
          {
            q: "How long does a session take?",
            a: "Most exercises run 45–75 minutes. The home-page demo is a 90-second guided sequence so you can see the artifact before you buy.",
          },
          {
            q: "Which frameworks do you support?",
            a: "NIST CSF 2.0, NIST 800-84, FEMA HSEEP, CISA CTEPs, CJIS v6.0, HIPAA §164.308, FFIEC IT Handbook, PCI DSS 12.10, and CMMC IR.L2-3.6.3 at launch. FFIEC CAT, NCUA ACET, NYDFS 23 NYCRR §500, and GLBA Safeguards crosswalks are bundled into the Financial Institutions tier.",
          },
          {
            q: "How do you handle our data?",
            a: (
              <p>
                Encrypted in transit and at rest. U.S.-only hosting available.
                Decisions and AAR content stay in your tenant. See{" "}
                <Link href="/security" className="text-signal underline">
                  /security
                </Link>{" "}
                for hosting region, retention, DPA, and access control
                details.
              </p>
            ),
          },
          {
            q: "Who facilitates the session — you or us?",
            a: "Atlas, our AI exercise director, runs the session. Your team participates as the players. For MSPs, white-label mode strips Annual Tabletop branding so the partner delivers the experience under their own name. No human consultant needed in the room.",
          },
          {
            q: "Is white-label available?",
            a: (
              <p>
                Yes — on the MSP / Partner tier. Per-tenant AARs, per-tenant
                access control, customer-deliverable in 48 hours. Full
                white-label kit details on{" "}
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
