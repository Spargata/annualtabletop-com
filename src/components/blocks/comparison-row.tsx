import { Check, Minus, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Cell = "yes" | "partial" | "no" | string;

export interface ComparisonRow {
  capability: string;
  cells: ReadonlyArray<Cell>;
}

interface ComparisonTableProps {
  columns: ReadonlyArray<string>;
  rows: ReadonlyArray<ComparisonRow>;
  caption?: string;
  className?: string;
}

function CellMark({ value }: { value: Cell }) {
  if (value === "yes")
    return (
      <Check
        className="mx-auto h-5 w-5 text-status-success"
        aria-label="Supported"
      />
    );
  if (value === "no")
    return (
      <X
        className="mx-auto h-5 w-5 text-status-danger"
        aria-label="Not supported"
      />
    );
  if (value === "partial")
    return (
      <Minus
        className="mx-auto h-5 w-5 text-status-warning"
        aria-label="Partial"
      />
    );
  return <span className="text-sm text-ink-700">{value}</span>;
}

export function ComparisonTable({
  columns,
  rows,
  caption,
  className,
}: ComparisonTableProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        {caption ? (
          <caption className="mb-3 text-left text-sm text-ink-500">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="border-b border-border">
            <th
              scope="col"
              className="py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-ink-500"
            >
              Capability
            </th>
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className="py-3 px-4 text-center text-xs font-semibold uppercase tracking-wider text-ink-500"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.capability} className="border-b border-border/60">
              <th
                scope="row"
                className="py-3 pr-4 font-medium text-navy"
              >
                {row.capability}
              </th>
              {row.cells.map((cell, i) => (
                <td
                  key={`${row.capability}-${i}`}
                  className="py-3 px-4 text-center"
                >
                  <CellMark value={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
