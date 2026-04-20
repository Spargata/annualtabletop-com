import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";
import { CTABlock } from "@/components/blocks/cta-block";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Annual Tabletop is a product of Thagentix. Founded by the team behind ThagentixCyber, a cybersecurity advisory practice.",
};

/** IA 3.7: About / Founder. */
export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="Annual Tabletop makes the required hour the most useful hour of your year."
        subtitle="We&apos;re a product of Thagentix, built by the team behind ThagentixCyber, a cybersecurity advisory practice."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div
            aria-hidden="true"
            className="mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-navy to-signal"
          />
          <div>
            <p className="eyebrow mb-3">Founder note</p>
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Built by the people who run these exercises for a living.
            </h2>
            <p className="mt-3 text-ink-700">
              Annual Tabletop comes out of ThagentixCyber, our cybersecurity
              advisory practice. For years we ran tabletop exercises the way
              the industry expected us to: a Word template, a printed inject
              packet, a conference room, four hours of senior-consultant time
              billed by the hour, and a 40-page AAR that took another week to
              write. Counties paid for it once a year because they had to.
              Banks paid for it because their examiner asked. SMBs and
              non-profits mostly skipped it.
            </p>
            <p className="mt-3 text-ink-700">
              The work was good. The economics were terrible. The same
              practitioner-grade exercise that a Fortune 500 SOC paid a
              boutique six figures for was the exercise a county or a credit
              union or a regional MSP needed &mdash; at a price they could
              fit into their actual security budget. The market was missing
              a product, not more consultants.
            </p>
            <p className="mt-3 text-ink-700">
              Annual Tabletop is the product we wished existed when we were
              the ones flying out to facilitate. Atlas, our AI exercise
              director, runs the room. The AAR generates with the framework
              crosswalk already in it. The same artifact your auditor or
              examiner or carrier expects &mdash; produced by the team
              actually doing the work, not by a contractor reading
              someone else&apos;s template.
            </p>
            <p className="mt-3 text-ink-700">
              Background on the practice and the team:{" "}
              <Link href="https://thagentix.com" className="text-signal underline">
                thagentix.com
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">Why we built Annual Tabletop</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Because every tabletop tool on the market is built for someone
            else.
          </h2>
          <p className="mt-3 text-ink-700">
            The existing AI tabletop platforms target commercial enterprise
            SOCs. The static-template libraries require a senior consultant to
            run. The DIY route costs the equivalent of a junior FTE. Our
            buyers — counties, MSPs, regulated SMBs, non-profits — are left
            choosing between a bad fit and a bad price. Annual Tabletop is the
            third option: an AI-facilitated platform priced and built for the
            buyers the incumbents skip.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Parent company</p>
            <h2 className="font-serif text-xl font-semibold text-navy">
              Annual Tabletop is a product of Thagentix.
            </h2>
            <p className="mt-2 text-sm text-ink-700">
              ThagentixCyber, our advisory practice, gives the platform
              practitioner credibility. The platform gives the practice a
              SaaS halo.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="https://thagentix.com">Visit Thagentix</Link>
          </Button>
        </div>
      </section>

      <section id="contact" className="bg-paper py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">Direct contact</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Public-sector buyers expect to reach the founder directly.
          </h2>
          <p className="mt-3 text-ink-700">
            Book time on the founder&apos;s calendar, or send a note. We reply
            within three business days.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="mailto:hello@annualtabletop.com">
                Email the founder
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="https://cal.com/thagentix/intro">
                Book an intro call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABlock title="See Atlas run a scenario. 90 seconds." />
    </>
  );
}
