import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTABlockProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}

/** Repeating CTA block — IA 3.x: appears at the end of every primary page. */
export function CTABlock({
  title,
  subtitle,
  primary = { label: "Try the demo", href: "/demo" },
  secondary = { label: "Talk to us", href: "/about#contact" },
  className,
}: CTABlockProps) {
  return (
    <section
      aria-labelledby="cta-block"
      className={cn("bg-navy text-paper", className)}
    >
      <div className="container-wide py-16 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2
              id="cta-block"
              className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-paper/80">
                {subtitle}
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" variant="signal">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-paper/30 text-paper hover:bg-paper/10"
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
