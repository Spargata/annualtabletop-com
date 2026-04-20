/**
 * Frameworks Annual Tabletop maps to. Order matches IA Section 3.4 grid.
 * Trust strip on the home page is greyscale; per IA Section 8, names + logos
 * are nominative use only. We never imply endorsement or certification.
 */

export interface Framework {
  slug: string;
  name: string;
  /** Short, in-product label. */
  short: string;
  issuer: string;
  /** One-line summary of the requirement. */
  summary: string;
}

export const FRAMEWORKS: ReadonlyArray<Framework> = [
  {
    slug: "nist-csf-2",
    name: "NIST Cybersecurity Framework 2.0",
    short: "NIST CSF 2.0",
    issuer: "NIST",
    summary: "Identify-Protect-Detect-Respond-Recover-Govern outcomes.",
  },
  {
    slug: "nist-800-84",
    name: "NIST SP 800-84",
    short: "NIST 800-84",
    issuer: "NIST",
    summary: "Guide to test, training, and exercise programs for IT plans.",
  },
  {
    slug: "fema-hseep",
    name: "FEMA Homeland Security Exercise & Evaluation Program",
    short: "FEMA HSEEP",
    issuer: "FEMA",
    summary:
      "Standardized exercise design, conduct, evaluation, and improvement planning.",
  },
  {
    slug: "cisa-cteps",
    name: "CISA Tabletop Exercise Packages",
    short: "CISA CTEPs",
    issuer: "CISA",
    summary:
      "Pre-built TTX scenarios for critical infrastructure sectors.",
  },
  {
    slug: "cjis-v6",
    name: "CJIS Security Policy v6.0",
    short: "CJIS v6.0",
    issuer: "FBI CJIS",
    summary: "Criminal-justice-system data protection requirements.",
  },
  {
    slug: "hipaa-164-308",
    name: "HIPAA Security Rule §164.308",
    short: "HIPAA §164.308",
    issuer: "HHS",
    summary:
      "Administrative safeguards including contingency plan testing.",
  },
  {
    slug: "ffiec-it-handbook",
    name: "FFIEC IT Examination Handbook",
    short: "FFIEC",
    issuer: "FFIEC",
    summary:
      "Information-security and BCM exam expectations for financial institutions.",
  },
  {
    slug: "pci-dss-12-10",
    name: "PCI DSS 12.10",
    short: "PCI 12.10",
    issuer: "PCI SSC",
    summary: "Incident response plan + annual testing requirement.",
  },
  {
    slug: "cmmc-ir-l2",
    name: "CMMC IR.L2-3.6.3",
    short: "CMMC IR.L2",
    issuer: "DoD CMMC PMO",
    summary: "Test the incident response capability for the organization.",
  },
];

export function getFramework(slug: string): Framework | undefined {
  return FRAMEWORKS.find((f) => f.slug === slug);
}
