import Link from "next/link";
import { cn } from "@/lib/utils";

/** IA 3.1 block 9: trust-transfer block. 2–3 sentences from the founder. */
export function FounderNote({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="founder-note"
      className={cn("bg-paper-50 py-20", className)}
    >
      <div className="container-tight">
        <p className="eyebrow mb-3">From the founder</p>
        <h2
          id="founder-note"
          className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
        >
          We built Annual Tabletop to make the required activity the most useful
          hour of the year — not a checkbox you dread.
        </h2>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-700">
          Annual Tabletop comes out of ThagentixCyber, our cybersecurity
          advisory practice. We&apos;ve facilitated tabletops for counties,
          hospitals, financial services, and MSPs — and watched the same gap
          every time: the framework demands an annual exercise, but the tools
          are built for SOC analysts, not for the people actually being
          audited.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal hover:text-navy"
        >
          Read more on the About page →
        </Link>
      </div>
    </section>
  );
}
