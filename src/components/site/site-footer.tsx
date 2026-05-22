import Link from "next/link";
import { FOOTER_COLUMNS, SITE } from "@/lib/site";
import { PrivacyChoicesButton } from "@/components/site/privacy-choices-button";

/**
 * Footer, IA Section 2: 3 columns. Includes compliance/attribution block per Section 8.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/60 bg-navy text-paper">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-6 w-6 rounded-[4px] bg-paper"
              />
              <span className="font-serif text-lg font-semibold tracking-tight">
                {SITE.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-paper/70">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-xs text-paper/60">
              Annual Tabletop is a product of{" "}
              <a
                href="https://thagentix.com"
                className="underline underline-offset-2 hover:text-paper"
              >
                {SITE.parent}
              </a>
              .
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/80 hover:text-paper hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-paper/10 pt-6">
          <p className="text-xs text-paper/60">
            Framework names and logos referenced on this site are the property
            of their respective issuers (NIST, FEMA, CISA, HHS, FFIEC, PCI SSC,
            FBI CJIS, DoD CMMC PMO). Display does not imply endorsement or
            certification.
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-3 text-xs text-paper/60 md:flex-row md:items-center">
            <p>
              © {year} {SITE.parent}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link
                  href="/legal/privacy"
                  className="hover:text-paper hover:underline underline-offset-4"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-paper hover:underline underline-offset-4"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="hover:text-paper hover:underline underline-offset-4"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-paper hover:underline underline-offset-4"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="hover:text-paper hover:underline underline-offset-4"
                >
                  Status
                </Link>
              </li>
              <li>
                <PrivacyChoicesButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
