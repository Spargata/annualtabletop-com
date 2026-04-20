import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Scenario } from "@/lib/content";

const COMPLEXITY_LABEL: Record<Scenario["complexity"], string> = {
  intro: "Intro",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

interface ScenarioCardProps {
  scenario: Scenario;
  className?: string;
}

export function ScenarioCard({ scenario, className }: ScenarioCardProps) {
  return (
    <Card className={cn("flex h-full flex-col", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="muted">{scenario.threatType}</Badge>
          <Badge variant="outline">{COMPLEXITY_LABEL[scenario.complexity]}</Badge>
        </div>
        <CardTitle className="mt-2">
          <Link href={`/scenarios/${scenario.slug}`} className="hover:text-signal">
            {scenario.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <p className="text-sm text-ink-700">{scenario.summary}</p>
        <div>
          <ul className="mb-4 flex flex-wrap gap-1.5">
            {scenario.frameworks.slice(0, 4).map((f) => (
              <li key={f}>
                <Badge variant="framework">{f}</Badge>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" variant="secondary">
            <Link href={`/demo?scenario=${scenario.slug}`}>Try in demo</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
