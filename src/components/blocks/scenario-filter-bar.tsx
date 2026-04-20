"use client";

import { useMemo, useState } from "react";
import { ScenarioCard } from "@/components/blocks/scenario-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Scenario, ScenarioSegment } from "@/lib/content";

const SEGMENT_LABEL: Record<ScenarioSegment | "all", string> = {
  all: "All segments",
  public: "Public sector",
  "financial-institutions": "Financial institutions",
  "regulated-smb": "Regulated SMB",
  msp: "MSP / IR",
  smb: "SMB (general)",
  "non-profit": "Non-profit",
};

const COMPLEXITY_LABEL = {
  all: "Any complexity",
  intro: "Intro",
  intermediate: "Intermediate",
  advanced: "Advanced",
} as const;

type SegmentFilter = ScenarioSegment | "all";
type ComplexityFilter = keyof typeof COMPLEXITY_LABEL;

interface Props {
  scenarios: ReadonlyArray<Scenario>;
  initialSegment?: SegmentFilter;
}

/**
 * Client-side filter bar for /scenarios. IA 3.3 block 2.
 * Filters: segment, framework, threat type, complexity.
 */
export function ScenarioFilterBar({
  scenarios,
  initialSegment = "all",
}: Props) {
  const [segment, setSegment] = useState<SegmentFilter>(initialSegment);
  const [complexity, setComplexity] = useState<ComplexityFilter>("all");
  const [threat, setThreat] = useState<string>("all");
  const [framework, setFramework] = useState<string>("all");

  const threatTypes = useMemo(
    () => Array.from(new Set(scenarios.map((s) => s.threatType))).sort(),
    [scenarios],
  );

  const frameworkOptions = useMemo(
    () =>
      Array.from(new Set(scenarios.flatMap((s) => s.frameworks))).sort(),
    [scenarios],
  );

  const filtered = useMemo(
    () =>
      scenarios.filter((s) => {
        if (segment !== "all" && !s.segments.includes(segment)) return false;
        if (complexity !== "all" && s.complexity !== complexity) return false;
        if (threat !== "all" && s.threatType !== threat) return false;
        if (framework !== "all" && !s.frameworks.includes(framework))
          return false;
        return true;
      }),
    [scenarios, segment, complexity, threat, framework],
  );

  return (
    <div>
      <fieldset className="rounded-lg border border-border bg-card p-4">
        <legend className="px-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
          Filter
        </legend>
        <div className="grid gap-3 md:grid-cols-4">
          <FilterSelect
            id="filter-segment"
            label="Segment"
            value={segment}
            onChange={(v) => setSegment(v as SegmentFilter)}
            options={Object.entries(SEGMENT_LABEL).map(([value, label]) => ({
              value,
              label,
            }))}
          />
          <FilterSelect
            id="filter-framework"
            label="Framework"
            value={framework}
            onChange={(v) => setFramework(v)}
            options={[
              { value: "all", label: "All frameworks" },
              ...frameworkOptions.map((f) => ({ value: f, label: f })),
            ]}
          />
          <FilterSelect
            id="filter-threat"
            label="Threat type"
            value={threat}
            onChange={(v) => setThreat(v)}
            options={[
              { value: "all", label: "All threat types" },
              ...threatTypes.map((t) => ({ value: t, label: t })),
            ]}
          />
          <FilterSelect
            id="filter-complexity"
            label="Complexity"
            value={complexity}
            onChange={(v) => setComplexity(v as ComplexityFilter)}
            options={Object.entries(COMPLEXITY_LABEL).map(([value, label]) => ({
              value,
              label,
            }))}
          />
        </div>
      </fieldset>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-ink-500">
          Showing <span className="font-semibold text-navy">{filtered.length}</span>{" "}
          of {scenarios.length} scenarios
        </p>
        {(segment !== "all" ||
          complexity !== "all" ||
          threat !== "all" ||
          framework !== "all") && (
          <button
            type="button"
            onClick={() => {
              setSegment("all");
              setComplexity("all");
              setThreat("all");
              setFramework("all");
            }}
            className="text-sm font-semibold text-signal hover:text-navy"
          >
            Clear filters
          </button>
        )}
      </div>

      <ul
        aria-live="polite"
        className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.length === 0 ? (
          <li className="col-span-full rounded-lg border border-dashed border-border bg-paper-50 p-10 text-center">
            <p className="text-sm text-ink-700">
              No scenarios match these filters yet.
            </p>
            <Badge variant="muted" className="mt-3">
              Request a custom scenario via the contact form
            </Badge>
          </li>
        ) : (
          filtered.map((s) => (
            <li key={s.slug}>
              <ScenarioCard scenario={s} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-wider text-ink-500"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-navy",
          "focus:border-signal focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
        )}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
