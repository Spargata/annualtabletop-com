import type { Metadata } from "next";
import { Hero } from "@/components/blocks/hero";
import { CTABlock } from "@/components/blocks/cta-block";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Annual Tabletop is working with design partners across county government, regional healthcare, financial services, and MSP firms. Logos and case studies populate as design-partner agreements clear legal review.",
};

/** IA 3.6: Customers / Proof. */
export default function CustomersPage() {
  return (
    <>
      <Hero
        eyebrow="Customers"
        title="We&apos;re working with design partners across every segment we serve."
        subtitle="Logos and case studies populate here as design-partner agreements clear legal review. Until then, here's what&apos;s coming."
        textOnly
      />

      <section className="py-16">
        <div className="container-wide">
          <p className="eyebrow mb-3">Design partners</p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            {[
              "County government (2 counties)",
              "Regional health system",
              "Community bank (FFIEC)",
              "K-12 district",
              "Regional MSP",
              "Non-profit (donor-data)",
              "Water utility",
              "Municipal court",
            ].map((partner) => (
              <li
                key={partner}
                className="rounded-md border border-dashed border-border bg-paper-50 p-5 text-ink-700"
              >
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-50 py-16">
        <div className="container-tight">
          <p className="eyebrow mb-3">Case studies</p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy">
            Published case studies land here as design partners clear
            publication review.
          </h2>
          <p className="mt-3 text-ink-700">
            Each case study includes sector, scenario, AAR outcome, and the
            before/after time-saved delta.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <p className="eyebrow mb-3">Outcomes</p>
          <ul className="grid gap-6 md:grid-cols-3">
            {[
              { k: "Exercises facilitated", v: "—" },
              { k: "AARs generated", v: "—" },
              { k: "Hours saved vs. DIY", v: "—" },
            ].map((stat) => (
              <li
                key={stat.k}
                className="rounded-lg border border-border bg-card p-8 text-center"
              >
                <p className="font-serif text-4xl font-semibold text-navy">
                  {stat.v}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  {stat.k}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-ink-500">
            Stats populate post-launch as they become truthful.
          </p>
        </div>
      </section>

      <CTABlock title="Be one of the first logos on this page." />
    </>
  );
}
