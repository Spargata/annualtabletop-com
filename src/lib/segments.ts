/**
 * The six buyer segments. Order = wedge strength.
 *
 * v1.0 — four segments (public, msp, smb, non-profit).
 * v1.1 — split the regulated-SMB bucket into:
 *   - financial-institutions  (FFIEC, NCUA, NYDFS 23 NYCRR 500, GLBA)
 *   - regulated-smb           (SOC 2 / HIPAA / PCI / CMMC — non-FI regulated)
 *   - smb                     (general SMB — voluntary, insurance-driven)
 *
 * Cross-reference: Brand_Identity_and_Positioning.docx Section 4 +
 * Site_Map_and_IA.docx Section 3.9.
 */

export type SegmentSlug =
  | "public"
  | "financial-institutions"
  | "regulated-smb"
  | "msp"
  | "smb"
  | "non-profit";

export interface Segment {
  slug: SegmentSlug;
  name: string;
  shortName: string;
  /** What the boss / auditor would call them. The card-level identifying line. */
  identifier: string;
  frameworkHook: string;
  anchorScenarioSlug: string;
  /** Primary CTA on the segment landing. */
  cta: { label: string; href: string };
}

export const SEGMENTS: ReadonlyArray<Segment> = [
  {
    slug: "public",
    name: "Public sector",
    shortName: "Public",
    identifier: "I'm a county / city / state agency",
    frameworkHook: "FEMA HSEEP, CISA CTEPs, NIST 800-84, CJIS v6.0",
    anchorScenarioSlug: "county-election-systems",
    cta: { label: "Try the HSEEP demo", href: "/demo?segment=public" },
  },
  {
    slug: "financial-institutions",
    name: "Financial institutions",
    shortName: "Financial",
    identifier: "I'm at a bank, credit union, or FinTech",
    frameworkHook:
      "FFIEC IT Handbook, FFIEC CAT, NCUA ACET, NYDFS 23 NYCRR §500, GLBA Safeguards",
    anchorScenarioSlug: "fi-wire-fraud-bec",
    cta: {
      label: "Try the FFIEC demo",
      href: "/demo?segment=financial-institutions",
    },
  },
  {
    slug: "regulated-smb",
    name: "Regulated SMB",
    shortName: "Regulated",
    identifier: "I run security for a SOC 2 / HIPAA / PCI / CMMC org",
    frameworkHook:
      "SOC 2 CC7.4/CC7.5, HIPAA §164.308, PCI 12.10, CMMC IR.L2-3.6.3",
    anchorScenarioSlug: "smb-business-email-compromise",
    cta: { label: "Try the HIPAA demo", href: "/demo?segment=regulated-smb" },
  },
  {
    slug: "msp",
    name: "MSPs & IR consultants",
    shortName: "MSP",
    identifier: "I'm an MSP or IR consultant",
    frameworkHook: "White-label, multi-tenant, partner pricing",
    anchorScenarioSlug: "msp-client-ransomware",
    cta: { label: "See the white-label kit", href: "/demo?segment=msp" },
  },
  {
    slug: "smb",
    name: "Small & midsize businesses",
    shortName: "SMB",
    identifier:
      "My carrier, customer, or board is asking me about IR readiness",
    frameworkHook:
      "NIST CSF 2.0 subset, CIS Controls v8 IG1/IG2, cyber-insurance evidence",
    anchorScenarioSlug: "smb-ransomware-readiness",
    cta: { label: "Try the SMB demo", href: "/demo?segment=smb" },
  },
  {
    slug: "non-profit",
    name: "Non-profits",
    shortName: "Non-profit",
    identifier: "I run cybersecurity for a non-profit",
    frameworkHook: "Non-profit cyber-grant frameworks, mission-priced tier",
    anchorScenarioSlug: "non-profit-donor-data-leak",
    cta: { label: "Apply for the non-profit tier", href: "/pricing#non-profit" },
  },
] as const;

export function getSegment(slug: string): Segment | undefined {
  return SEGMENTS.find((s) => s.slug === slug);
}
