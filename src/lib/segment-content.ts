import type { SegmentSlug } from "@/lib/segments";
import type { FAQItem } from "@/components/blocks/faq";

/**
 * Per-segment copy that powers the IA 3.9 8-block template at /for/[segment].
 * Voice and framework hooks come straight from Brand_Identity_and_Positioning.docx
 * Section 4 and Site_Map_and_IA.docx Section 3.9.
 */

export interface SegmentBenefit {
  title: string;
  body: string;
}

export interface SegmentContent {
  /** Hero title — segment-specific, framework-anchored. */
  heroTitle: string;
  /** Hero subtitle — what their boss / auditor calls them, in their words. */
  heroSubtitle: string;
  /** Section 2: their problem stated in their own language. */
  problemHeading: string;
  problemBody: string;
  /** Section 3: three reasons Annual Tabletop fits this segment. */
  benefits: ReadonlyArray<SegmentBenefit>;
  /** Section 5: AAR caption — what their AAR is for, who reads it. */
  aarCaption: string;
  /** Section 6: pricing link copy. */
  pricingHeading: string;
  pricingBody: string;
  pricingCta: { label: string; href: string };
  /** Section 7: 4–5 FAQs in their voice. */
  faqs: ReadonlyArray<FAQItem>;
  /** Section 8: closing CTA block title and primary action. */
  ctaTitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const SEGMENT_CONTENT: Record<SegmentSlug, SegmentContent> = {
  public: {
    heroTitle:
      "FEMA HSEEP-conformant tabletops, run by an AI, priced for a county.",
    heroSubtitle:
      "Built for emergency managers, county CIOs, school district CTOs, and small state offices. Every exercise produces an HSEEP After-Action Report and a CISA CTEPs / NIST 800-84 crosswalk.",
    problemHeading:
      "You have a state mandate, a mutual-aid expectation, and a budget that doesn't include $35,000 for a consultant.",
    problemBody:
      "Your CTEPs deadline is in the calendar. The state CISO wants an AAR on file. FEMA wants HSEEP form completion. Your IT director can run the technical side — but they can't facilitate, time-keep, capture decisions, and write the AAR at the same time. Annual Tabletop is the AI exercise director that does the facilitation work, so your team can focus on actually exercising the plan.",
    benefits: [
      {
        title: "HSEEP-conformant by default.",
        body: "Every AAR follows the FEMA HSEEP template. Capability targets, core capabilities, key issues, recommendations — all populated from the session and ready to forward to your state EM coordinator.",
      },
      {
        title: "CTEPs and 800-84 crosswalked.",
        body: "Your AAR carries the CISA CTEPs and NIST SP 800-84 framework crosswalks alongside HSEEP. One exercise, three audit trails. No duplicate documentation work.",
      },
      {
        title: "Procurement-friendly.",
        body: "Cooperative-purchasing eligible. SSO included. Annual contract aligned to your fiscal year. The price on the Pricing page is the price you pay — no haggling, no per-seat surprises.",
      },
    ],
    aarCaption:
      "Sample county-government AAR. HSEEP framework, CTEPs crosswalk, decisions captured against your jurisdiction's actual COOP and ESF #2 plan.",
    pricingHeading: "Public-sector pricing, built for actual public-sector procurement.",
    pricingBody:
      "Municipal / Small Public tier pricing is published. Cooperative-purchasing vehicles and direct procurement both supported. State agency and large public system buyers should look at the Enterprise / State tier.",
    pricingCta: {
      label: "See public-sector pricing",
      href: "/pricing#municipal-small-public",
    },
    faqs: [
      {
        q: "Is this HSEEP-conformant?",
        a: "Yes. AARs follow the FEMA HSEEP template — capability targets, core capabilities, key issues, recommendations, and IPP. We map every captured decision back to a HSEEP capability target so your state EM coordinator gets exactly what they expect.",
      },
      {
        q: "Will it satisfy CISA CTEPs?",
        a: "Yes. Our scenario library uses CISA CTEPs as one of the source taxonomies, and every AAR carries the CTEPs crosswalk so you can demonstrate alignment to CISA-supplied scenario packages.",
      },
      {
        q: "Does it work for CJIS audits?",
        a: "Yes. CJIS Security Policy v6.0 §5.3 (incident response) is one of the framework crosswalks we generate. Run the IR scenario, get an AAR with §5.3 evidence, hand it to your CJIS auditor.",
      },
      {
        q: "How does cooperative purchasing work?",
        a: "We support major cooperative-purchasing vehicles and state contracts. Talk to us with your preferred vehicle and we'll confirm. GSA schedule status is published on the Pricing FAQ.",
      },
      {
        q: "Can my IT director run this without a consultant?",
        a: "That's the entire point. Atlas, our AI exercise director, runs the session — facilitates injects, time-keeps, captures decisions. Your IT director and EM coordinator participate as participants, not as facilitators.",
      },
    ],
    ctaTitle: "Run a HSEEP exercise this quarter — without a consultant.",
    ctaPrimary: { label: "Try the HSEEP demo", href: "/demo?segment=public" },
    ctaSecondary: { label: "See public-sector pricing", href: "/pricing" },
  },
  msp: {
    heroTitle:
      "White-label tabletops you can deliver to every client — under your brand.",
    heroSubtitle:
      "Built for MSPs, MSSPs, and IR consultancies who want to add a productized tabletop offering without building one. Multi-tenant, partner-priced, and white-labeled end to end.",
    problemHeading:
      "Your clients are asking for tabletops. You don't have a way to deliver them at margin.",
    problemBody:
      "Your bigger clients have insurance carriers, auditors, or boards asking when the next exercise is. You can run them yourselves — the senior consultants on your team can. But that means selling consulting hours your clients can't always pay for, against an expectation that this is included. Annual Tabletop gives you a productized offering: the AI runs the exercise, your brand owns the relationship, and you keep the margin.",
    benefits: [
      {
        title: "White-labeled end to end.",
        body: "Your logo on Atlas. Your brand on the AAR. Your domain on the portal. Clients never see the Annual Tabletop name unless you want them to.",
      },
      {
        title: "Multi-tenant by design.",
        body: "Per-tenant scenarios, per-tenant AARs, per-tenant access control. Add a client tenant in minutes. Roll up your full client portfolio into one MSP dashboard.",
      },
      {
        title: "Priced so the margin actually works.",
        body: "Partner pricing on the MSP / Partner tier. Co-marketing kit, dedicated partner manager, and a productized offering you can sell into your existing book without spinning up a consulting practice.",
      },
    ],
    aarCaption:
      "Sample MSP-delivered AAR. Your brand on the cover, your client's environment on the inside. The AAR your client forwards to their carrier.",
    pricingHeading: "Partner-priced. Per-tenant.",
    pricingBody:
      "MSP / Partner tier pricing is per tenant, with partner pricing tiered to your client volume. Includes white-label, dedicated partner manager, and the co-marketing kit.",
    pricingCta: {
      label: "See MSP / Partner pricing",
      href: "/pricing#msp-partner",
    },
    faqs: [
      {
        q: "Can I fully white-label this?",
        a: "Yes. Logo, color, domain, AAR cover, email sender — all configurable per partner. The Annual Tabletop name does not have to appear anywhere your client sees.",
      },
      {
        q: "How do client tenants work?",
        a: "Each client gets a tenant with isolated data, isolated AARs, isolated access control. You and your team see all tenants in the partner dashboard. Clients only see their own.",
      },
      {
        q: "Do I have to commit to a minimum number of tenants?",
        a: "Pricing is tiered, but the minimum is published on the Pricing page. We sized it for a typical regional MSP — not for a national consultancy.",
      },
      {
        q: "Can I run a session live with my client on a call?",
        a: "Yes. Atlas runs the exercise; you can join as a co-facilitator. Many partners use the live session as a relationship touchpoint and bill it as a managed service.",
      },
      {
        q: "What's in the co-marketing kit?",
        a: "Brandable scenario one-pagers, sample partner-led case studies, and a deck template you can take to client QBRs. Updated quarterly.",
      },
    ],
    ctaTitle: "Add a productized tabletop offering to your book — this quarter.",
    ctaPrimary: { label: "See the white-label kit", href: "/demo?segment=msp" },
    ctaSecondary: { label: "Talk to partnerships", href: "/about#contact" },
  },
  smb: {
    heroTitle:
      "The tabletop your SOC 2 / HIPAA / FFIEC auditor is going to ask about.",
    heroSubtitle:
      "Built for security and compliance leads at SOC 2, HIPAA, FFIEC, PCI, and cyber-insurance-driven SMBs. Annual cadence. Audit-ready AAR. The control evidence your auditor wants.",
    problemHeading:
      "You have one annual exercise on the audit calendar, and a stack of frameworks that all expect different evidence.",
    problemBody:
      "SOC 2 CC7.4 / CC7.5 wants tested IR. HIPAA §164.308(a)(7) wants a tested contingency plan. FFIEC wants a documented exercise. PCI 12.10 wants an annual test. Your insurance renewal needs proof. You can run one exercise — but the auditors will each want their own evidence packet. Annual Tabletop runs the one exercise and produces every framework crosswalk in the AAR, so the same session satisfies every checkbox.",
    benefits: [
      {
        title: "Every major SMB framework, crosswalked.",
        body: "SOC 2 CC7.4 / CC7.5, HIPAA §164.308(a)(7), FFIEC IT IR booklet, PCI 12.10, NIST CSF 2.0. Pick your scenario, get the framework crosswalks built into the AAR.",
      },
      {
        title: "Annual cadence aligned to your audit calendar.",
        body: "Annual contracts. Reminder built in 60 days before your audit window. AARs timestamped and signed for evidence purposes — exactly what your QSA / SOC 2 auditor / examiner is asking for.",
      },
      {
        title: "Real injects, not awareness training.",
        body: "Atlas runs constrained-decision injects that exercise your IR plan, your call tree, your decision authority. The AAR captures the gaps. Your auditor sees a tested plan, not a slide deck.",
      },
    ],
    aarCaption:
      "Sample regulated-SMB AAR. SOC 2 / HIPAA / FFIEC crosswalks side by side. The artifact your auditor checks the box on.",
    pricingHeading: "Regulated SMB pricing — annual, predictable, audit-aligned.",
    pricingBody:
      "Regulated SMB tier pricing is published on the Pricing page. Annual contract, SSO, framework-specific AAR templates, and the full scenario library.",
    pricingCta: {
      label: "See Regulated SMB pricing",
      href: "/pricing#regulated-smb",
    },
    faqs: [
      {
        q: "Will my SOC 2 auditor accept the AAR as evidence?",
        a: "Yes — the AAR includes the CC7.4 and CC7.5 crosswalk with timestamps, participants, scenario, and decisions captured. We've designed it to match what Type II auditors look for in IR test evidence.",
      },
      {
        q: "Will my HIPAA / OCR auditor accept it?",
        a: "Yes. The AAR includes the §164.308(a)(7)(ii)(D) crosswalk — testing and revision procedures for contingency plans. The signed, timestamped AAR is the artifact OCR investigators ask for.",
      },
      {
        q: "Can my cyber-insurance carrier use this for renewal?",
        a: "Yes. Carriers increasingly ask for proof of an annual tested IR plan. The AAR is the proof. We've designed the cover sheet specifically to be forward-able to a carrier.",
      },
      {
        q: "How long does an annual exercise take?",
        a: "60–90 minutes. The premise is one hour, once a year, that actually counts.",
      },
      {
        q: "Do I need a consultant?",
        a: "No. Atlas, our AI exercise director, runs the session. Your security lead and the rest of the IR team participate as participants. The AAR writes itself.",
      },
    ],
    ctaTitle: "Run your annual exercise — and get the AAR your auditor wants.",
    ctaPrimary: { label: "Try the HIPAA demo", href: "/demo?segment=smb" },
    ctaSecondary: { label: "See SMB pricing", href: "/pricing" },
  },
  "non-profit": {
    heroTitle:
      "A tabletop that respects your mission — and your budget.",
    heroSubtitle:
      "Built for non-profits with a cyber-grant requirement, an insurance ask, or a board pushing for a tested IR plan. Mission-priced tier. Donor-data scenarios. The AAR your funder accepts.",
    problemHeading:
      "Your funder wants proof. Your insurance carrier wants proof. Your IT volunteer can't write an AAR.",
    problemBody:
      "Cybersecurity grants and insurance underwriters have started asking non-profits the same questions they ask hospitals: do you have a tested IR plan, and where's the proof? But the going rate for a consultant-run tabletop is the same number a hospital pays — which is unworkable when your annual security spend is a fraction of that. Annual Tabletop's mission-priced tier is built for this. Apply, get a price, run the exercise, hand the AAR to your funder.",
    benefits: [
      {
        title: "Mission-priced.",
        body: "Apply for the non-profit tier and we reply within three business days with a price we can both live with. No haggling. No surprise per-seat charges. We size the price to the org, not to the line item.",
      },
      {
        title: "Donor-data and fundraising scenarios.",
        body: "Our library includes scenarios built for non-profit threat models — donor-data leak, fundraising-platform breach, volunteer-credential compromise. Not enterprise SOC fan-fiction.",
      },
      {
        title: "An AAR your funder will accept.",
        body: "The AAR is HSEEP-conformant and carries the framework crosswalks most cybersecurity grants reference. Forward-able to your funder, your underwriter, and your board.",
      },
    ],
    aarCaption:
      "Sample non-profit AAR. Donor-data scenario, NIST CSF 2.0 crosswalk, decisions captured against the resources your org actually has.",
    pricingHeading: "Mission-priced, not negotiated.",
    pricingBody:
      "Tell us about your mission, your cyber-grant or insurance requirement, and the scenarios you need. We reply within three business days with a price.",
    pricingCta: {
      label: "Apply for non-profit pricing",
      href: "/pricing#non-profit",
    },
    faqs: [
      {
        q: "How does mission pricing actually work?",
        a: "You apply with your mission, your scenario need, and your funder requirement. We send back a price. We do not list a number publicly because the right number for a 10-person animal-rescue is not the right number for a 200-person regional housing org. We size to the org.",
      },
      {
        q: "What scenarios are most relevant for non-profits?",
        a: "Donor-data leak, fundraising-platform breach, volunteer credential compromise, ransomware against case-management systems. We can also tune one to your specific threat model.",
      },
      {
        q: "Will the AAR satisfy our cybersecurity grant requirement?",
        a: "In our experience, yes. Most cyber-grant programs ask for a tested IR plan with documented evidence — which is exactly what the AAR is. If your funder has a specific framework requirement, tell us when you apply and we'll confirm the crosswalk is in scope.",
      },
      {
        q: "Can our board attend?",
        a: "Yes. We strongly recommend board IT-committee attendance for non-profit exercises. The AAR makes the case for the next year's security investment in language a board can act on.",
      },
      {
        q: "How long does this take?",
        a: "60–90 minutes for the exercise itself. Application turnaround is three business days.",
      },
    ],
    ctaTitle: "Get the AAR your funder is asking for.",
    ctaPrimary: {
      label: "Apply for the non-profit tier",
      href: "/pricing#non-profit",
    },
    ctaSecondary: { label: "Try the demo", href: "/demo?segment=non-profit" },
  },
};

export function getSegmentContent(slug: SegmentSlug): SegmentContent {
  return SEGMENT_CONTENT[slug];
}
