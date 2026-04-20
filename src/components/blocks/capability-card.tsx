import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  index: number;
  title: string;
  body: string;
  link?: { label: string; href: string };
  className?: string;
}

export function CapabilityCard({
  index,
  title,
  body,
  link,
  className,
}: CapabilityCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-lg border border-border bg-card p-6",
        className,
      )}
    >
      <p className="eyebrow">Capability 0{index}</p>
      <h3 className="mt-2 font-serif text-xl font-semibold text-navy">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
        {body}
      </p>
      {link ? (
        <Link
          href={link.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal hover:text-navy"
        >
          {link.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  );
}
