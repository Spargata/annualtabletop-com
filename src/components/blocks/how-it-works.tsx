import { cn } from "@/lib/utils";

interface Step {
  index: number;
  title: string;
  body: string;
}

const STEPS: ReadonlyArray<Step> = [
  {
    index: 1,
    title: "Pick a scenario",
    body: "Filter the library by framework, threat type, segment, or complexity. Pick one your auditor will recognize.",
  },
  {
    index: 2,
    title: "Atlas runs the session",
    body: "Our AI exercise director presents injects, captures decisions, and adapts within framework-aligned bounds. In-person or async.",
  },
  {
    index: 3,
    title: "Get an audit-ready AAR",
    body: "An HSEEP-conformant After-Action Report — decisions captured, evidence linked, framework crosswalks built in. PDF + DOCX.",
  },
];

export function HowItWorks({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="how-it-works"
      className={cn("bg-background py-20", className)}
    >
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">How it works</p>
          <h2
            id="how-it-works"
            className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Three steps from sign-up to a finished AAR.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.index}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-serif text-lg font-semibold text-paper">
                {step.index}
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
