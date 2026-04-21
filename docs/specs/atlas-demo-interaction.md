# Atlas Demo — Interaction Spec (90-second demo)

> Scope: the marketing demo at `/demo`. The real Atlas facilitator that
> runs paid exercises is a separate spec (Phase 3.5). This doc covers
> only the 90-second conversion experience: pick a scenario, walk three
> injects, download a sample AAR stamped with the visitor's actual
> choices.

Status: Draft v0.1 — 2026-04-20. Owner: Thagentix. Unblocks backlog
task #23.

---

## 1. Goals and non-goals

**Goals.**

The demo has to make three things concrete for a first-time visitor in
90 seconds: what the facilitator feels like, what the AAR artifact looks
like, and that both are real (not a video, not a coming-soon page). The
AAR handoff is the conversion event — every other design choice is
subordinate to getting the visitor to click "Download sample AAR" with
their own decisions stamped on it.

**Non-goals.**

The demo is not the product. It does not need real-time LLM calls, a
per-visitor tenant, or persistent state across sessions. It does not
need to cover every scenario in the library — only the six anchor
scenarios (one per segment) get a demo path. It does not capture email
until the AAR download step, and even that is optional.

## 2. End-to-end flow

Three scenes, clearly numbered on the page:

**Scene 1 — Pick a scenario.** Visitor lands on `/demo`. Deep links
(`?segment=X` / `?scenario=X`) pre-select an anchor. Six cards render.
Clicking a card re-routes to `/demo?scenario=X#inject-1` and smooth-
scrolls to Scene 2. This already works today.

**Scene 2 — Atlas walks three injects.** Atlas greets, introduces the
scenario, presents the first inject, offers three constrained choices.
Visitor picks. Atlas responds with a one-line reaction, then advances.
Three injects total. No free text. No branching beyond the three-choice
pick-list per inject.

**Scene 3 — Download the AAR.** Atlas summarizes what just happened,
renders a one-page HSEEP-anchored AAR PDF populated with the visitor's
three decisions, the scenario's framework crosswalk, and the scenario
summary. Visitor downloads. Optional email-capture (non-gating) sits
below the download button: "Also email this to me" → email field →
submit. The PDF is downloadable without email.

## 3. Atlas runtime — decision

**For the marketing demo, Atlas is a scripted flow with streamed
typography, not a live LLM call.**

Why: the demo has to be deterministic, cheap, always-on, and
fast-to-first-token. A real LLM call costs money per visitor,
introduces failure modes we don't want on a marketing surface, and adds
latency. The scripted flow achieves the same "Atlas is facilitating"
feel with zero backend cost and zero failure surface.

How: each scenario's three demo injects ship as MDX frontmatter
(`demoInjects`) with this shape —

```yaml
demoInjects:
  - id: 1
    timestamp: "T+00:22"
    atlasSays: "Your BoE's vendor just confirmed the encryption event..."
    prompt: "Do you..."
    choices:
      - id: a
        label: "Confirm the incident"
        atlasReaction: "Confirmed. That puts you on the CISA 72-hour clock..."
      - id: b
        label: "Acknowledge without confirming"
        atlasReaction: "Fine line. Acknowledging buys you time..."
      - id: c
        label: "Defer to your internal lead"
        atlasReaction: "Reasonable if your lead is reachable..."
```

The frontend streams `atlasSays` character-by-character at ~40 cps to
simulate typing, surfaces the three choice buttons after streaming
completes, captures the pick, streams the matched `atlasReaction`,
advances. Total scene time: ~25-30s per inject. Full demo: ~75-90s.

Real LLM-backed Atlas runs in the paid product. The demo shares
nothing runtime-side with the production facilitator — the two are
deliberately separate concerns.

## 4. Inject content — per anchor scenario

Six scenarios × three injects each = eighteen inject records to
author. Each inject needs: timestamp, Atlas prompt, three choices,
three reactions. Authoring these is the content-heavy piece of task
#23 and should be a distinct sub-task.

Priority order (by segment traffic weight):

1. `county-election-systems` (public) — already the default anchor.
2. `fi-wire-fraud-bec` (financial-institutions).
3. `smb-business-email-compromise` (smb).
4. `msp-client-ransomware` (msp).
5. `hospital-ehr-outage` (regulated-smb).
6. `non-profit-donor-data-leak` (non-profit).

Each inject script should be ~60-80 words of Atlas prose, three choices
of 4-8 words each, three reactions of ~30 words each. Tone: calm,
unshowy, practitioner — matching the brand voice. No hedge words
("might," "possibly"). No emojis.

## 5. State captured during the demo

Per session, in-memory only (no persistence unless email is entered):

- `scenarioSlug` — which anchor they picked.
- `decisions` — `[{injectId, choiceId}]`, 3 entries when complete.
- `startedAt`, `completedAt` — ISO timestamps for demo telemetry.

If the visitor enters an email at the AAR step, we persist:

- `{ email, scenarioSlug, decisions, startedAt, completedAt, consented }`
  to a marketing contacts table.

Email capture is explicit opt-in (unchecked-by-default checkbox
labeled "Also email me the AAR and a follow-up in 7 days"). No email,
no row written. The PDF downloads regardless of email choice.

## 6. AAR generation

**Template.** Extend the existing `build_sample_aar.py` generator to
accept a `--scenario` flag and a `--decisions` JSON blob. Output a
one-page PDF with these elements:

1. Header rule + UNCLASSIFIED // DEMO-ONLY banner.
2. Scenario title + summary (pulled from MDX frontmatter).
3. "Your three decisions" section — three rows with timestamp, prompt
   excerpt, choice label.
4. Framework crosswalk table — pulled from the scenario's `frameworks`
   frontmatter; each framework gets the relevant control-to-action
   mapping lifted from `src/lib/frameworks.ts`.
5. Footer: "This is a demo AAR. The production AAR includes full
   narrative analysis, strengths/improvements, an improvement plan, and
   sign-off blocks. See `/sample-aar.pdf` for the canonical format."

**Rendering.** Two options. Pick (a) for v1:

- (a) Pre-render the scenario-specific header/crosswalk at build time,
  then overlay the decisions at download time using a simple PDF
  templating lib (`pdf-lib`) in a Next.js API route. ~200ms P50.
- (b) Generate the whole PDF on demand with ReportLab in a Python
  micro-service. More flexible, more infra. Save for the real-AAR
  build, not the demo.

**File naming.** `annual-tabletop-demo-aar-{scenarioSlug}-{yyyymmdd}.pdf`
so the visitor's Downloads folder has a self-describing filename.

## 7. Telemetry events

Fire Vercel Analytics custom events at each boundary:

- `demo_scenario_selected` — `{scenarioSlug, source: "deep-link"|"card-click"}`
- `demo_inject_answered` — `{scenarioSlug, injectId, choiceId}`
- `demo_completed` — `{scenarioSlug, durationSeconds}`
- `demo_aar_downloaded` — `{scenarioSlug, withEmail: boolean}`
- `demo_aar_emailed` — `{scenarioSlug}` (fires once if email submitted)

No PII in event payloads. Email capture is a separate store, not a
telemetry event field.

## 8. Accessibility requirements

- Streaming text must not retrigger screen readers on every character.
  Render the final text into an `aria-live="polite"` region once
  streaming completes, not during. Wire a "Skip streaming" button
  (visible when streaming, focusable, announces "Skip Atlas's
  response").
- Choice buttons are reachable via keyboard, use `<button>` (not
  `<div onClick>`), and carry an `aria-describedby` pointing to the
  inject prompt.
- Each inject scene has a landmark `<section aria-labelledby>` with
  the Atlas prompt as label.
- The AAR PDF must open with the title metadata populated so screen
  readers announce it correctly.

Target: WCAG 2.1 AA on the demo, same as every other surface.

## 9. Failure modes and fallbacks

- Scenario MDX missing `demoInjects` → the scenario is still selectable
  but the inject scene renders a respectful stub: "This scenario's
  demo walk-through is being authored. Download the generic sample AAR
  while we finish." Link to `/sample-aar.pdf`.
- AAR API route 500s → client falls back to the pre-built
  `/sample-aar.pdf` with a subtle toast: "Couldn't build your
  personalized AAR — here's the template version." Fire
  `demo_aar_fallback` event.
- Visitor closes tab mid-demo → no state persists. Next visit starts
  fresh. This is fine; the demo is lightweight by design.

## 10. Build sequence for #23

This spec implies the following sub-tasks, in order:

1. Add `demoInjects` field to the scenario MDX frontmatter schema.
   Update `src/lib/content.ts` types.
2. Author the six anchor scenarios' demo inject scripts (priority
   order from §4). Brand-voice review each one before merging.
3. Build the `<AtlasInject>` client component: streaming text,
   choice buttons, advance logic, accessibility affordances per §8.
4. Replace the stubbed placeholder in `/demo` Scene 2 with the real
   component. Wire state management (React context is fine — no
   redux needed).
5. Add the `/api/demo-aar` Next.js route that takes
   `{scenarioSlug, decisions[]}` and returns a templated PDF per §6.
6. Wire the telemetry events in §7.
7. QA pass: keyboard-only, screen reader (VoiceOver + NVDA), reduced-
   motion preference respected, Lighthouse a11y ≥95.
8. Ship behind a feature flag (`NEXT_PUBLIC_DEMO_V2=1`) so we can
   roll back instantly if anything regresses.

Estimated effort, rough: 6-10 hours of focused build, plus
brand-voice authoring time for the eighteen inject scripts. Authoring
is the long pole, not the code.

## 11. Out of scope (explicitly)

- Multi-user / collaborative demo runs.
- Saved demo history. The demo is stateless by design.
- Internationalization. v1 is English-only; the paid product handles
  locale.
- The full paid facilitator behavior (Atlas with real LLM reasoning,
  open-ended prompts, dynamic inject generation). Separate spec.
- Video or audio of Atlas. Text streaming only.

---

## Appendix A — Concrete inject example (county-elections, inject 2)

This is the authoring shape every scenario's three injects need to
match.

```yaml
- id: 2
  timestamp: "T+00:22"
  atlasSays: |
    Your state CISO is on the line. She wants to know if you've
    notified CISA yet. It's been twenty-two minutes since the vendor's
    confirmation. The CISA reporting clock is 72 hours under the
    Cyber Incident Reporting for Critical Infrastructure Act, but
    you haven't determined yet whether this is a "covered cyber
    incident" under the rule.
  prompt: "How do you respond to the state CISO?"
  choices:
    - id: a
      label: "Tell her you've notified CISA"
      atlasReaction: |
        Be careful — "notified" has a specific meaning. If you haven't
        actually filed, you're creating a record that will be
        disclosed in any follow-on audit. Prefer "we're assessing
        reportability now."
    - id: b
      label: "Tell her you're assessing reportability"
      atlasReaction: |
        That's the defensible answer. It acknowledges the clock is
        running without committing to a status you can't back up.
        Note this in your log — auditors will look for it.
    - id: c
      label: "Ask her to hold while you loop in counsel"
      atlasReaction: |
        Reasonable if counsel is reachable in under fifteen minutes.
        If not, you're creating a silence the state CISO will
        interpret as "they don't have an answer." Offer a callback
        window.
```

## Appendix B — Open questions for Thagentix

These don't block the spec but should get a decision before build:

1. **Email capture at AAR step — opt-in or opt-out default?** Spec
   currently says opt-in unchecked. Opt-out gets more emails but
   slightly worse CAN-SPAM / GDPR posture. Recommend keeping opt-in.
2. **Do we brand the demo AAR with the visitor's company if they
   provide an email?** Could pull from email domain (e.g.,
   acme.com → "Prepared for: Acme"). Nice touch. Small effort. Do it
   in v1.1, not v1.
3. **Should the "Selected" scenario card auto-scroll into view when
   deep-linked?** Currently the page scrolls to `#inject-1`. The card
   for the selected scenario is above it. Consider scrolling to the
   card instead, so the visitor sees their pre-selected option.
4. **Is Statcounter the right place to fire these events, or do we
   want a dedicated product-analytics tool (PostHog) before v1 ships?**
   Vercel Analytics handles page-view; the custom events need a real
   product analytics target. Decide before task #23 starts so the
   instrumentation goes to the right place the first time.
