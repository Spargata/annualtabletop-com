import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  /** Display string. Real numbers locked in pricing-model spec. */
  price: string;
  cadence: string;
  blurb: string;
  includes: ReadonlyArray<string>;
  cta: { label: string; href: string };
  highlight?: boolean;
}

export function PricingTierCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col",
        tier.highlight ? "border-signal ring-1 ring-signal" : undefined,
      )}
    >
      <CardHeader>
        <p className="eyebrow">{tier.name}</p>
        <CardTitle className="mt-2 text-3xl">
          {tier.price}
          <span className="ml-1 text-sm font-normal text-ink-500">
            {tier.cadence}
          </span>
        </CardTitle>
        <p className="text-sm text-ink-700">{tier.blurb}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-6">
        <ul className="space-y-2">
          {tier.includes.map((line) => (
            <li key={line} className="flex items-start gap-2 text-sm">
              <Check
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-signal"
              />
              <span className="text-ink-700">{line}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          variant={tier.highlight ? "default" : "secondary"}
          className="w-full"
        >
          <Link href={tier.cta.href}>{tier.cta.label}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
