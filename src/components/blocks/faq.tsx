import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: React.ReactNode;
}

/**
 * Native <details>/<summary> for zero-JS, full keyboard accessibility,
 * and built-in screen-reader semantics. WCAG 2.1 AA out of the box.
 */
export function FAQ({
  items,
  title = "Frequently asked questions",
  className,
}: {
  items: ReadonlyArray<FAQItem>;
  title?: string;
  className?: string;
}) {
  return (
    <section
      aria-labelledby="faq-heading"
      className={cn("py-20", className)}
    >
      <div className="container-tight">
        <p className="eyebrow mb-3">FAQ</p>
        <h2
          id="faq-heading"
          className="mb-8 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
        >
          {title}
        </h2>
        <ul className="divide-y divide-border rounded-lg border border-border bg-card">
          {items.map((item) => (
            <li key={item.q}>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-navy transition-colors hover:bg-paper-50 [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="text-signal transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm leading-relaxed text-ink-700">
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
