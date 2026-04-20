import type { Metadata } from "next";
import { Hero } from "@/components/blocks/hero";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "Annual Tabletop terms of service. Plain-language summary; the final terms supersede this draft after counsel review.",
};

export default function TermsPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Terms of service"
        subtitle="Last updated: pre-launch placeholder. The plain-language summary below is non-binding. Final terms ship after counsel review and supersede this draft."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-ink-700">
          <h2>Plain-language summary</h2>
          <p>
            Annual Tabletop is a subscription B2B product. The paid tiers are
            governed by a signed Master Subscription Agreement. Free trials
            and demo access are governed by these self-serve terms until a
            signed MSA is in place.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You may not use Annual Tabletop to facilitate or rehearse criminal
            activity. You may not attempt to extract scenario content for
            commercial reuse outside the platform. You may not reverse-engineer
            Atlas or attempt to circumvent tenancy isolation.
          </p>

          <h2>Customer data</h2>
          <p>
            You own your customer data, including AARs and session content. We
            process it under the privacy policy and the MSA. See our{" "}
            <a href="/legal/privacy">Privacy policy</a> for the details.
          </p>

          <h2>SLAs</h2>
          <p>
            Service-level commitments are defined in the MSA. Enterprise and
            Public-sector tiers carry contractual uptime; self-serve tiers run
            best-effort on the same infrastructure.
          </p>

          <h2>Cancellation</h2>
          <p>
            Annual contracts pro-rate on cancellation, minus consumed custom
            scenario work. Details in the MSA.
          </p>

          <h2>Governing law</h2>
          <p>
            Placeholder — jurisdiction and venue are defined in the final
            terms. For public-sector contracts, we negotiate to customer
            jurisdiction where procurement rules require.
          </p>

          <hr />
          <p className="text-xs text-ink-500">
            This is a pre-launch draft. The final terms will replace this
            page on launch.
          </p>
        </div>
      </section>
    </>
  );
}
