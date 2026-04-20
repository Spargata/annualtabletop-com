import Link from "next/link";
import { PRIMARY_NAV, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

/**
 * Top nav, IA Section 2. 6 primary items + primary CTA.
 * Mobile disclosure handled by details/summary for no-JS baseline; a11y-first.
 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-wide flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={`${SITE.name} — home`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-6 w-6 rounded-[4px] bg-navy ring-1 ring-navy/20"
          />
          <span className="font-serif text-lg font-semibold tracking-tight text-navy">
            {SITE.name}
          </span>
          <span className="hidden text-xs text-ink-500 sm:inline">
            by {SITE.parent}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-paper-200/60 hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link href={SITE.primaryCta.href}>{SITE.primaryCta.label}</Link>
          </Button>
        </div>
      </div>

      {/* Mobile nav (no-JS-friendly disclosure) */}
      <details className="group border-t border-border/60 md:hidden">
        <summary className="flex cursor-pointer select-none items-center justify-between px-4 py-3 text-sm font-medium text-ink-700 [&::-webkit-details-marker]:hidden">
          <span>Menu</span>
          <span
            aria-hidden="true"
            className="transition-transform group-open:rotate-180"
          >
            ▾
          </span>
        </summary>
        <nav aria-label="Primary (mobile)" className="pb-3">
          <ul className="flex flex-col">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-ink-700 hover:bg-paper-200/60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </details>
    </header>
  );
}
