import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Framework } from "@/lib/frameworks";

export function FrameworkCard({ framework }: { framework: Framework }) {
  return (
    <Link
      href={`/frameworks/${framework.slug}`}
      className="block focus:outline-none"
    >
      <Card className="h-full transition-colors hover:border-signal/40 focus-within:border-signal">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline">{framework.issuer}</Badge>
          </div>
          <CardTitle className="mt-2">{framework.short}</CardTitle>
          <p className="text-sm text-ink-500">{framework.name}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-ink-700">{framework.summary}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
