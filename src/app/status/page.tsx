import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/blocks/hero";

export const metadata: Metadata = {
  title: "Status",
  description:
    "Annual Tabletop platform status, current incidents, and uptime history. Public status page goes live with the Atlas runtime in Phase 3.5.",
  robots: { index: false },
};

/** IA Section 11: Status page. v1 stub; live status board ships with Atlas. */
export default function StatusPage() {
  return (
    <>
      <Hero
        eyebrow="Status"
        title="All systems operational."
        subtitle="A full status board with per-component uptime and an RSS feed lands with the Atlas runtime (Phase 3.5). Until then, this page is the canonical place to check."
        textOnly
      />

      <section className="py-16">
        <div className="container-tight">
          <div className="rounded-lg border border-status-success/40 bg-status-success/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-status-success">
              All systems operational
            </p>
            <p className="mt-2 text-sm text-ink-700">
              No active incidents. Last verified manually by the on-call
              engineer.
            </p>
          </div>

          <div className="mt-10 space-y-4 text-sm text-ink-700">
            <h2 className="font-serif text-xl font-semibold text-navy">
              Components
            </h2>
            <ul className="divide-y divide-border rounded-lg border border-border bg-card">
              {[
                { name: "Marketing site (annualtabletop.com)", status: "Operational" },
                { name: "Customer portal", status: "Pre-launch" },
                { name: "Atlas runtime", status: "Pre-launch (Phase 3.5)" },
                { name: "AAR generator", status: "Pre-launch" },
                { name: "Auth (SSO)", status: "Pre-launch" },
              ].map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <span className="font-semibold text-navy">{c.name}</span>
                  <span className="text-ink-500">{c.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-sm text-ink-500">
            For incident reports during a live event, monitor this page or the
            customer-facing email channel from your CSM. Material incidents
            affecting customer data are also disclosed per the{" "}
            <Link href="/security" className="text-signal underline">
              Security
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
