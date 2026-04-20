/**
 * IA Section 3.10: SEO landing pages. Each topic targets a specific
 * high-intent query the buyers we serve actually type. The template is
 * the same 6-block shape for all topics — we swap the content, the
 * framework hook, and the recommended scenarios.
 *
 * These are distinct from segment landings (/for/[segment]) — SEO landings
 * are keyword-anchored; segment landings are buyer-persona anchored. A
 * single buyer may traffic to both.
 */

export type SeoLandingSlug =
  | "hseep-tabletop-exercises"
  | "hipaa-incident-response-tabletop"
  | "soc-2-incident-response-tabletop"
  | "ransomware-tabletop-exercise";

export interface SeoLanding {
  slug: SeoLandingSlug;
  /** The phrase we're targeting. Used in <title> and H1. */
  query: string;
  /** SEO meta description — also shown on the index list. */
  metaDescription: string;
  /** H1 title on the landing. */
  title: string;
  /** Intro paragraph above the fold. */
  intro: string;
  /** What the visitor wants to learn — used as the "Table of contents" eyebrow. */
  whatYoullGet: ReadonlyArray<string>;
  /** Framework short-codes this landing is anchored to. */
  frameworks: ReadonlyArray<string>;
  /** Slug(s) of scenarios to feature on this landing. */
  featuredScenarioSlugs: ReadonlyArray<string>;
  /** Long-form body copy in plain paragraphs (render as prose). */
  body: ReadonlyArray<string>;
  /** FAQ section — topic-specific, aligned to PAA-style questions. */
  faqs: ReadonlyArray<{ q: string; a: string }>;
  /** Final CTA heading. */
  ctaTitle: string;
}

export const SEO_LANDINGS: ReadonlyArray<SeoLanding> = [
  {
    slug: "hseep-tabletop-exercises",
    query: "HSEEP tabletop exercises",
    metaDescription:
      "Run a FEMA HSEEP-conformant tabletop exercise in 60 minutes. AI-facilitated, AAR built to HSEEP template, CISA CTEPs crosswalked. Built for public-sector buyers.",
    title: "HSEEP tabletop exercises, run by AI, in 60 minutes.",
    intro:
      "FEMA HSEEP is the standard every public-sector emergency preparedness program exercises against. Annual Tabletop runs HSEEP-conformant exercises end-to-end — AI facilitation, HSEEP-template AAR, CISA CTEPs and NIST 800-84 crosswalks generated automatically.",
    whatYoullGet: [
      "What HSEEP actually requires (in practitioner language).",
      "How the Annual Tabletop AAR maps to the HSEEP template.",
      "Which scenarios in our library are HSEEP-anchored.",
      "How public-sector buyers procure this.",
    ],
    frameworks: ["FEMA HSEEP", "CISA CTEPs", "NIST 800-84"],
    featuredScenarioSlugs: ["county-election-systems"],
    body: [
      "The Homeland Security Exercise and Evaluation Program (HSEEP) is FEMA's standard for exercise design and evaluation. State EM coordinators, CISA, and most federal grant programs that touch preparedness expect HSEEP conformance — which means a specific exercise structure, a specific AAR template, and specific capability targets.",
      "Annual Tabletop ships an HSEEP-conformant workflow by default. Atlas, our AI exercise director, runs the exercise using HSEEP-anchored injects. At the end, the AAR is populated with the HSEEP sections your state coordinator expects: capability targets, core capabilities, key issues, recommendations, and an Improvement Planning Package stub.",
      "Beyond HSEEP, every AAR carries the CISA CTEPs crosswalk and the NIST SP 800-84 crosswalk alongside. One exercise, three audit trails. The same session that satisfies HSEEP also demonstrates CTEPs alignment to CISA and §3 exercise documentation to NIST reviewers.",
    ],
    faqs: [
      {
        q: "Is Annual Tabletop officially endorsed by FEMA?",
        a: "FEMA does not endorse tabletop tools. HSEEP is a published standard we conform to — the same way any vendor or jurisdiction uses the HSEEP template. The AAR follows the HSEEP structure; your state EM coordinator reviews against that standard.",
      },
      {
        q: "Does an HSEEP tabletop need a certified exercise controller?",
        a: "HSEEP recommends trained exercise design and control for discussion-based exercises. Atlas plays the Master Scenario Events List (MSEL) role — it drives the exercise through the inject sequence and captures decisions. Your human controller can observe, or participate as a player.",
      },
      {
        q: "How long should an HSEEP tabletop run?",
        a: "HSEEP does not prescribe a duration. Most jurisdictions run 60–180 minutes. Annual Tabletop's default cadence is 60–90 minutes, sized to fit into an IT-committee meeting or an EOC shift.",
      },
      {
        q: "Can I use this to meet my state's mandated annual exercise?",
        a: "In most states, yes. The AAR is HSEEP-conformant and signed/timestamped. State mandates vary — check with your state EM coordinator, but in our experience an HSEEP AAR is the evidence they're looking for.",
      },
    ],
    ctaTitle: "Run a HSEEP exercise this quarter.",
  },
  {
    slug: "hipaa-incident-response-tabletop",
    query: "HIPAA incident response tabletop",
    metaDescription:
      "HIPAA §164.308(a)(7) requires a tested contingency plan. Run a HIPAA incident response tabletop in 60 minutes. AAR timestamped and signed for OCR evidence.",
    title: "HIPAA incident response tabletop — the AAR your OCR auditor wants.",
    intro:
      "HIPAA §164.308(a)(7)(ii)(D) requires testing and revision procedures for contingency plans. Annual Tabletop runs a HIPAA-anchored incident response tabletop in 60 minutes and produces an AAR that carries the §164.308 crosswalk — the evidence OCR investigators look for.",
    whatYoullGet: [
      "What §164.308(a)(7) actually requires, without the jargon.",
      "A HIPAA-anchored scenario library (BEC, PHI ransomware, vendor breach).",
      "An AAR template aligned to what OCR asks for.",
      "How this plugs into SOC 2 if you're under both.",
    ],
    frameworks: ["HIPAA §164.308", "NIST CSF 2.0", "SOC 2 CC7.4/CC7.5"],
    featuredScenarioSlugs: ["smb-business-email-compromise"],
    body: [
      "HIPAA's contingency plan requirements — §164.308(a)(7) — include a testing and revision procedure. OCR's interpretation is consistent: you need a documented, tested IR plan, and you need to be able to show evidence that testing happened.",
      "Annual Tabletop's HIPAA scenarios are built around the threats covered entities and business associates actually face: ePHI ransomware, business email compromise, vendor breaches, insider access misuse. Atlas runs constrained-decision injects that exercise the incident response portion of your contingency plan — the part OCR asks about first.",
      "The AAR is the artifact. Timestamped, signed, and carrying the §164.308(a)(7) crosswalk on the first page. If you're also under SOC 2, the same AAR carries the CC7.4 / CC7.5 crosswalk, so one exercise satisfies both audits.",
    ],
    faqs: [
      {
        q: "Is a tabletop enough to satisfy §164.308(a)(7)?",
        a: "For most covered entities, a tested tabletop plus periodic live drills is the reasonable-and-appropriate standard OCR applies. The rule is scalable — small providers exercise at a different intensity than a large hospital system. The point is that testing happens and is documented.",
      },
      {
        q: "How often should I run this?",
        a: "HIPAA does not prescribe a frequency. OCR guidance consistently recommends at least annually. Our product name is not an accident.",
      },
      {
        q: "Can I hand the AAR directly to OCR if I'm investigated?",
        a: "The AAR is formatted as tabletop exercise evidence — timestamp, participants, scenario, decisions, observations. In our experience with OCR investigators, that's the form they expect. We cannot of course promise OCR's reaction; consult your HIPAA counsel.",
      },
      {
        q: "Does this cover business associates too?",
        a: "Yes. BAs have the same §164.308(a)(7) obligations via contract flowdown. The same scenarios and AAR template apply.",
      },
    ],
    ctaTitle: "Test your HIPAA contingency plan — this quarter.",
  },
  {
    slug: "soc-2-incident-response-tabletop",
    query: "SOC 2 incident response tabletop",
    metaDescription:
      "SOC 2 CC7.4 and CC7.5 require a tested incident response process. Run a SOC 2-anchored tabletop in 60 minutes. Auditor-ready AAR with CC7 crosswalk.",
    title: "SOC 2 incident response tabletop — evidence your Type II auditor accepts.",
    intro:
      "SOC 2 Trust Services Criteria CC7.4 and CC7.5 ask about your incident response capability — how it's designed, how it's tested, and whether it actually operates. Annual Tabletop produces the tested-evidence artifact your Type II auditor asks for.",
    whatYoullGet: [
      "What CC7.4 and CC7.5 actually ask you to demonstrate.",
      "A SOC 2-anchored scenario library.",
      "An AAR structured around CC7 evidence.",
      "How this stacks with HIPAA if you're dual-scope.",
    ],
    frameworks: ["SOC 2 CC7.4/CC7.5", "NIST CSF 2.0", "ISO 27035"],
    featuredScenarioSlugs: ["smb-business-email-compromise"],
    body: [
      "SOC 2 Type II is not the regulation most SMB security leads wake up thinking about, but it's the one that determines whether their bigger customers will renew. The CC7 series — specifically CC7.4 and CC7.5 — asks whether the org has a working incident response process and whether it's tested.",
      "Annual Tabletop's SOC 2 scenario set exercises the portions of IR that auditors focus on: detection hand-off, escalation authority, containment decision-making, and customer notification. Atlas runs constrained-decision injects that force the team to exercise actual decision-making, not paper-drill roleplay.",
      "The AAR is structured to be read by a SOC 2 auditor. Participants, scope, timestamped decisions, gaps identified, remediation actions. The CC7 crosswalk is on the cover so your auditor can check the box without reading the whole document.",
    ],
    faqs: [
      {
        q: "Does SOC 2 require a tabletop specifically?",
        a: "SOC 2 is principle-based. CC7.4 and CC7.5 ask for a tested, operating IR capability. A tabletop is one of the most common ways to demonstrate the test; interviews with your auditor will reveal which forms of evidence they accept.",
      },
      {
        q: "How often?",
        a: "Annually at minimum. Many auditors now expect at least one full tabletop during the observation period, plus lighter-touch drills. The product is designed around that cadence.",
      },
      {
        q: "Does this work for the new 2022 SOC 2 criteria?",
        a: "Yes. The crosswalk tracks the current TSC version.",
      },
      {
        q: "What if I'm also under HIPAA?",
        a: "One exercise covers both. The AAR carries both crosswalks so you don't run duplicate tabletops.",
      },
    ],
    ctaTitle: "Test your IR plan — get the AAR your SOC 2 auditor wants.",
  },
  {
    slug: "ransomware-tabletop-exercise",
    query: "ransomware tabletop exercise",
    metaDescription:
      "Ransomware tabletop exercise, run in 60 minutes by AI. Real injects. Constrained decisions. AAR with framework crosswalks for HIPAA, SOC 2, FFIEC, PCI, HSEEP.",
    title: "Ransomware tabletop exercise — real injects, real decisions, real AAR.",
    intro:
      "Ransomware is the scenario every buyer asks for first, and the one most off-the-shelf tabletops do worst. Annual Tabletop's ransomware scenarios are built around the constrained decisions that actually matter: when to pay, when to isolate, when to call CISA, who talks to the press.",
    whatYoullGet: [
      "Why most ransomware tabletops fail (and how ours are different).",
      "The constrained decisions the exercise forces your team to make.",
      "The framework crosswalks your AAR will carry.",
      "Which segment in our library matches your environment.",
    ],
    frameworks: [
      "NIST CSF 2.0",
      "HIPAA §164.308",
      "SOC 2 CC7.4/CC7.5",
      "FFIEC IT IR",
      "PCI 12.10",
      "HSEEP",
    ],
    featuredScenarioSlugs: [
      "county-election-systems",
      "msp-client-ransomware",
      "smb-business-email-compromise",
    ],
    body: [
      "Most ransomware tabletops are awareness theater — a slide deck where the facilitator reads a story and the room agrees to call the CISO. That's not an exercise. That's a meeting.",
      "Annual Tabletop's ransomware scenarios are built around what IR actually is: a sequence of time-boxed, constrained decisions made under incomplete information. Atlas runs injects that force the team to pick a lane — confirm, acknowledge, or defer — and then makes you live with the consequence in the next inject.",
      "The AAR captures every decision, scores them against your plan, and carries the framework crosswalks your specific environment needs. A county gets an HSEEP / CTEPs AAR. A hospital gets a HIPAA AAR. A regional bank gets an FFIEC AAR. Same exercise engine; segment-tuned artifact.",
    ],
    faqs: [
      {
        q: "Do you cover 'to pay or not to pay'?",
        a: "Yes. That's one of the most instructive injects. We don't give you a right answer — we force the team to articulate theirs, with counsel and leadership in the room.",
      },
      {
        q: "What about double-extortion scenarios?",
        a: "Covered. The scenario escalates if the team chooses containment paths that assume data-only encryption.",
      },
      {
        q: "Is this realistic enough for my IR team?",
        a: "The scenarios are built with practitioners. The injects are grounded in documented incidents. Feedback from our design partners says the constrained-decision format is what separates us from vendors doing slideware.",
      },
      {
        q: "Can you customize to my environment?",
        a: "Custom scenarios are available as an add-on on Enterprise tiers. Most buyers find the stock library covers 80%+ of what they need.",
      },
    ],
    ctaTitle: "Run a ransomware exercise that actually exercises the plan.",
  },
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return SEO_LANDINGS.find((l) => l.slug === slug);
}
