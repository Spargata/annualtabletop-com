import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
  /** When true, render a single-column hero (no visual). */
  textOnly?: boolean;
  className?: string;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  visual,
  textOnly = false,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-paper", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-signal to-navy"
      />
      <div className="container-wide py-16 sm:py-20 lg:py-28">
        <div
          className={cn(
            "grid items-center gap-12",
            !textOnly && visual ? "lg:grid-cols-2" : "max-w-3xl",
          )}
        >
          <div>
            {eyebrow ? (
              <p className="eyebrow mb-3">{eyebrow}</p>
            ) : null}
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700">
                {subtitle}
              </p>
            ) : null}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta ? (
                  <Button asChild size="lg">
                    <Link href={primaryCta.href}>{primaryCta.label}</Link>
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button asChild size="lg" variant="secondary">
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                ) : null}
              </div>
            )}
          </div>
          {!textOnly && visual ? (
            <div className="relative">{visual}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
