/**
 * Single source of truth for site-level metadata, nav, footer, and CTAs.
 * Edit here, propagates everywhere.
 *
 * Cross-reference: Site_Map_and_IA.docx Sections 2 (nav) and 8 (trust).
 */

export const SITE = {
  name: "Annual Tabletop",
  parent: "Thagentix",
  tagline:
    "AI-facilitated tabletops, framework-aligned AARs, priced for the buyers who actually need them.",
  description:
    "The AI cybersecurity tabletop platform built for public-sector agencies, MSPs, regulated SMBs, and non-profits. Mapped to NIST CSF, FEMA HSEEP, CISA CTEPs, CJIS, HIPAA, FFIEC, and the rest.",
  url: "https://annualtabletop.com",
  domain: "annualtabletop.com",
  twitter: "@annualtabletop",
  primaryCta: {
    label: "Try the demo",
    href: "/demo",
  },
  secondaryCta: {
    label: "Talk to us",
    href: "/about#contact",
  },
} as const;

/** Top nav, IA Section 2: 6 items. 'Try the demo' is rendered as a primary CTA, not a nav link. */
export const PRIMARY_NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Platform", href: "/platform" },
  { label: "Scenarios", href: "/scenarios" },
  { label: "Frameworks", href: "/frameworks" },
  { label: "Pricing", href: "/pricing" },
  { label: "Customers", href: "/customers" },
  { label: "About", href: "/about" },
];

/** Footer columns, IA Section 2: 3 columns. */
export const FOOTER_COLUMNS: ReadonlyArray<{
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}> = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Scenarios", href: "/scenarios" },
      { label: "Frameworks", href: "/frameworks" },
      { label: "Pricing", href: "/pricing" },
      { label: "Try the demo", href: "/demo" },
    ],
  },
  {
    title: "For",
    links: [
      { label: "Public sector", href: "/for/public" },
      { label: "MSPs & IR consultants", href: "/for/msp" },
      { label: "Regulated SMBs", href: "/for/smb" },
      { label: "Non-profits", href: "/for/non-profit" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Security", href: "/security" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Status", href: "/status" },
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
    ],
  },
];
