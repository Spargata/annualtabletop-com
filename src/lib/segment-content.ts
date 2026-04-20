import type { SegmentSlug } from "@/lib/segments";
import type { FAQItem } from "@/components/blocks/faq";

/**
 * Per-segment copy that powers the IA 3.9 8-block template at /for/[segment].
 * Voice and framework hooks come straight from Brand_Identity_and_Positioning.docx
 * Section 4 and Site_Map_and_IA.docx Section 3.9.
 *
 * v1.1 — six segments. The original 'smb' block was split into:
 *   - regulated-smb (SOC 2 / HIPAA / PCI / CMMC, audit-driven)
 *   - financial-institutions (FFIEC / NCUA / NYDFS / GLBA, examiner-driven)
 *   - smb (general SMB, voluntary / cyber-insurance-driven)
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
    pricingHeading:
      "Public-sector pricing, built for actual public-sector procurement.",
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
  "financial-institutions": {
    heroTitle:
      "The IR exercise your FFIEC, NCUA, or NYDFS examiner is going to ask about.",
    heroSubtitle:
      "Built for community banks, credit unions, and FinTechs. Every exercise produces an AAR with FFIEC IT Handbook, FFIEC CAT, NCUA ACET, NYDFS 23 NYCRR §500, and GLBA Safeguards crosswalks side by side.",
    problemHeading:
      "Your examiner wants documented IR exercises. Your CAT or ACET maturity rating wants Evolving-or-better evidence. Your 72-hour clock doesn't wait.",
    problemBody:
      "FFIEC's Information Security Booklet expects a tested IR plan with documented exercise evidence. NCUA examiners use ACET to score the same. NYDFS §500.16 requires it explicitly, and §500.17(a) gives you 72 hours to notify after a determination. Your insurance underwriter wants proof of an annual exercise. The traditional answer is a $40K consultant once a year. Annual Tabletop is the AI exercise director that produces examiner-ready evidence on your timeline — quarterly if you want — at a fraction of the consultant cost.",
    benefits: [
      {
        title: "Every FI framework crosswalked in one AAR.",
        body: "FFIEC IT Handbook (Information Security, BCM, Architecture & Operations), FFIEC CAT, NCUA ACET maturity domains, NYDFS 23 NYCRR §500.16/500.17, GLBA Safeguards Rule, plus SOC 2 and PCI DSS where they apply. One exercise. Every examiner gets what they need.",
      },
      {
        title: "Designed around the dual-clock reality.",
        body: "Wire-fraud injects exercise the SAR / Reg E recall window and the NYDFS 72-hour notification window in the same session. Your IR team gets repetitions on the decisions that actually matter on the day.",
      },
      {
        title: "Examiner-ready AAR — and AI moves you up the maturity scale.",
        body: "The AAR is built to drop into your CAT/ACET workpapers. Annual cadence puts you at Baseline. Quarterly cadence — affordable for the first time — moves you toward Evolving and Intermediate. Your maturity rating is no longer gated by your facilitation budget.",
      },
    ],
    aarCaption:
      "Sample community-bank AAR. FFIEC + NCUA + NYDFS §500 crosswalks. Decisions captured against your wire-room runbook, your SAR-filing path, and your NYDFS notification timeline.",
    pricingHeading: "FI pricing — examiner-driven, not enterprise-tier-priced.",
    pricingBody:
      "Financial Institutions tier pricing is published. Annual contract, full FFIEC / NCUA / NYDFS framework library, custom inject creation for your wire-room runbook, and the AAR template your examiner asks for.",
    pricingCta: {
      label: "See FI pricing",
      href: "/pricing#financial-institutions",
    },
    faqs: [
      {
        q: "Will my FFIEC examiner accept the AAR as IR exercise evidence?",
        a: "Yes. The AAR is built around the FFIEC IT Examination Handbook Information Security Booklet IR section. Captured decisions, timestamps, participants, and the framework crosswalk are all present. Examiners get exactly what the booklet asks for.",
      },
      {
        q: "Does the FFIEC CAT or NCUA ACET get a real lift from this?",
        a: "Yes — your IR-related declarative statements move from Baseline (no exercise) toward Evolving / Intermediate (regular tested IR with documented improvement). The AAR includes a CAT/ACET-style summary section your team can paste into their next assessment.",
      },
      {
        q: "Does it cover NYDFS 23 NYCRR §500?",
        a: "Yes. §500.16 (IR plan) and §500.17(a) (72-hour notification) are explicitly exercised. Wire-fraud and ransomware scenarios both walk the determination → notification clock so your CISO has muscle memory before the day they need it.",
      },
      {
        q: "What about GLBA Safeguards Rule notifications?",
        a: "The May 2024 amendment requiring notice to FTC for incidents affecting 500+ consumers is in scope. The AAR captures the notification decision and the rationale — exactly what an FTC investigator looks for.",
      },
      {
        q: "Can our cyber-insurance carrier use the AAR for renewal?",
        a: "Yes. Carriers increasingly require an annual tested IR plan, and increasingly require quarterly testing for higher coverage limits. The AAR is the artifact. The cover sheet is built to be forward-able.",
      },
      {
        q: "How long is a session?",
        a: "60–90 minutes for the exercise itself. The AAR is generated in the session — your CISO leaves with the evidence packet in hand.",
      },
    ],
    ctaTitle:
      "Run a FFIEC-conformant exercise this quarter — without the consultant invoice.",
    ctaPrimary: {
      label: "Try the FFIEC demo",
      href: "/demo?segment=financial-institutions",
    },
    ctaSecondary: { label: "See FI pricing", href: "/pricing#financial-institutions" },
  },
  "regulated-smb": {
    heroTitle:
      "The tabletop your SOC 2, HIPAA, PCI, or CMMC auditor is going to ask about.",
    heroSubtitle:
      "Built for security and compliance leads at SOC 2, HIPAA, PCI DSS, and CMMC-bound SMBs. Annual cadence. Audit-ready AAR. The control evidence your auditor wants — without dragging in a consultant.",
    problemHeading:
      "You have one annual exercise on the audit calendar, and a stack of frameworks that all expect their own evidence packet.",
    problemBody:
      "SOC 2 CC7.4 / CC7.5 wants tested IR. HIPAA §164.308(a)(7) wants a tested contingency plan. PCI 12.10 wants an annual test. CMMC IR.L2-3.6.3 wants documented exercise. Your insurance renewal needs proof. You can run one exercise — but the auditors will each want their own evidence. Annual Tabletop runs the one exercise and produces every framework crosswalk in the AAR, so the same session satisfies every checkbox. (FFIEC-bound institutions: see /for/financial-institutions.)",
    benefits: [
      {
        title: "Every regulated-SMB framework, crosswalked.",
        body: "SOC 2 CC7.4 / CC7.5, HIPAA §164.308(a)(7), PCI DSS 12.10, CMMC IR.L2-3.6.3, NIST CSF 2.0. Pick your scenario, get the framework crosswalks built into the AAR.",
      },
      {
        title: "Annual cadence aligned to your audit calendar.",
        body: "Annual contracts. Reminder built in 60 days before your audit window. AARs timestamped and signed for evidence purposes — exactly what your QSA, SOC 2 auditor, OCR auditor, or C3PAO is asking for.",
      },
      {
        title: "Real injects, not awareness training.",
        body: "Atlas runs constrained-decision injects that exercise your IR plan, your call tree, your decision authority. The AAR captures the gaps. Your auditor sees a tested plan, not a slide deck.",
      },
    ],
    aarCaption:
      "Sample regulated-SMB AAR. SOC 2 / HIPAA / PCI / CMMC crosswalks side by side. The artifact your auditor checks the box on.",
    pricingHeading:
      "Regulated SMB pricing — annual, predictable, audit-aligned.",
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
        q: "Does this work for PCI DSS 12.10 and CMMC IR.L2-3.6.3?",
        a: "Yes. PCI 12.10.2 (annual IR test) and CMMC IR.L2-3.6.3 (test the IR capability) both want documented exercise evidence. The AAR includes both crosswalks where the scenario applies.",
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
        q: "What if I'm a bank or credit union?",
        a: "You want the Financial Institutions tier — see /for/financial-institutions. The framework set there (FFIEC, NCUA, NYDFS, GLBA) is different and the pricing reflects the additional inject library and AAR template.",
      },
    ],
    ctaTitle: "Run your annual exercise — and get the AAR your auditor wants.",
    ctaPrimary: {
      label: "Try the HIPAA demo",
      href: "/demo?segment=regulated-smb",
    },
    ctaSecondary: {
      label: "See Regulated SMB pricing",
      href: "/pricing#regulated-smb",
    },
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
      "The tabletop your carrier, your customer, or your board has started asking for.",
    heroSubtitle:
      "Built for small and midsize businesses without a compliance gun to their head — but with an underwriter, a vendor questionnaire, or a leadership ask that wants documented IR readiness. No CISO required.",
    problemHeading:
      "Nobody's auditing you. But your insurance carrier wants proof, your biggest customer's vendor questionnaire wants proof, and your board wants to know what would happen on the day.",
    problemBody:
      "You don't have a compliance regime forcing you into a tabletop. You also don't have a $40K consultant budget to run one. What you have is a cyber-insurance renewal asking for documented IR testing, a vendor questionnaire from your largest customer asking the same question, and a quietly nervous leadership team. Annual Tabletop is the entry-level tier built for exactly this: one hour, once a year, the AI runs the exercise, you walk away with an AAR that answers every one of those questions.",
    benefits: [
      {
        title: "Built for the buyer who isn't compliance-driven.",
        body: "No SOC 2 timeline. No HIPAA auditor. No FFIEC examiner. Just a clear, defensible record of a tested IR plan that satisfies underwriters, customer questionnaires, and board reviews.",
      },
      {
        title: "Aligned to NIST CSF 2.0 and CIS Controls — but not weaponized.",
        body: "Scenarios map to NIST CSF 2.0's RS (Respond) function and CIS Controls v8 IG1/IG2. You get framework alignment without becoming a framework expert.",
      },
      {
        title: "Priced like a SaaS line item, not a consultant invoice.",
        body: "The General SMB tier on the Pricing page is the lowest paid tier we offer. Annual contract. No per-seat charges. No procurement gymnastics. The number is the number.",
      },
    ],
    aarCaption:
      "Sample general-SMB AAR. NIST CSF 2.0 and CIS Controls v8 crosswalks. Cover page designed to drop straight into a carrier renewal packet or a vendor-questionnaire response.",
    pricingHeading: "Entry-tier pricing — built for non-regulated SMBs.",
    pricingBody:
      "The General SMB tier is the most affordable paid tier we offer. Annual contract, full library access, NIST CSF / CIS Controls AAR template, and email support.",
    pricingCta: { label: "See SMB pricing", href: "/pricing#smb-general" },
    faqs: [
      {
        q: "We're not regulated — do we even need this?",
        a: "If your cyber-insurance carrier, your largest customer, or your board has asked about IR readiness, you need it. The exercise produces the documented evidence those three audiences are asking for.",
      },
      {
        q: "Will my insurance carrier accept the AAR?",
        a: "In our experience, yes. Carriers want to see (1) an exercise occurred, (2) it was scenario-based, (3) decisions and gaps were captured, (4) it's signed and dated. The AAR is built around exactly those four things.",
      },
      {
        q: "What's the difference between this and the Regulated SMB tier?",
        a: "The Regulated SMB tier adds SOC 2 / HIPAA / PCI / CMMC framework crosswalks, audit-grade AAR templates, and SSO. If you're not bound by those frameworks, the General SMB tier is the right fit and the right price.",
      },
      {
        q: "Do I need a CISO or security lead to run this?",
        a: "No. Atlas runs the session. Your IT lead, ops lead, and an executive participate. The exercise is designed for teams without a dedicated security function.",
      },
      {
        q: "How long does it take?",
        a: "60 minutes for the exercise itself. AAR is generated in-session.",
      },
    ],
    ctaTitle: "Run an exercise — and answer your carrier, your customer, and your board.",
    ctaPrimary: { label: "Try the SMB demo", href: "/demo?segment=smb" },
    ctaSecondary: { label: "See SMB pricing", href: "/pricing#smb-general" },
  },
  "non-profit": {
    heroTitle: "A tabletop that respects your mission — and your budget.",
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
