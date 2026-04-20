import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Segment } from "@/lib/segments";

interface SegmentCardProps {
  segment: Segment;
  className?: string;
}

/** IA 3.1 block 3: segment self-identification. Card per segment, single CTA. */
export function SegmentCard({ segment, className }: SegmentCardProps) {
  return (
    <Card className={cn("group flex h-full flex-col", className)}>
      <CardHeader>
        <p className="eyebrow">{segment.shortName}</p>
        <CardTitle>{segment.identifier}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-6">
        <p className="text-sm text-ink-700">{segment.frameworkHook}</p>
        <Link
          href={`/for/${segment.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-signal transition-colors hover:text-navy"
        >
          See the {segment.shortName} page
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </CardContent>
    </Card>
  );
}
