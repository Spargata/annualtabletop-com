/**
 * The four buyer segments locked in Brand_Identity_and_Positioning.docx Section 4
 * and routed in Site_Map_and_IA.docx Section 4. Order = wedge strength.
 */

export type SegmentSlug = "public" | "msp" | "smb" | "non-profit";

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
    name: "Regulated SMB",
    shortName: "SMB",
    identifier: "I run security for a SOC 2 / HIPAA / FFIEC org",
    frameworkHook: "SOC 2 CC7.4/CC7.5, HIPAA §164.308, FFIEC, PCI 12.10",
    anchorScenarioSlug: "smb-business-email-compromise",
    cta: { label: "Try the HIPAA demo", href: "/demo?segment=smb" },
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
