import { FRAMEWORKS } from "@/lib/frameworks";

/**
 * IA Section 8: greyscale framework name strip. No logos until cleared by counsel.
 * This block ships text-only at v1; swap in greyscale SVG logos in v1.1.
 */
export function TrustStrip() {
  return (
    <section
      aria-label="Frameworks Annual Tabletop maps to"
      className="border-y border-border/60 bg-paper-50"
    >
      <div className="container-wide py-8">
        <p className="eyebrow mb-4 text-center">Built for the frameworks our buyers are graded on</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {FRAMEWORKS.map((f) => (
            <li
              key={f.slug}
              className="text-sm font-medium uppercase tracking-wider text-ink-500"
            >
              {f.short}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
