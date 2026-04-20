# annualtabletop.com

The marketing surface for **Annual Tabletop**, an AI-facilitated cybersecurity tabletop exercise platform by [Thagentix](https://thagentix.com).

This repo is the public marketing site — `annualtabletop.com`. The product application (Atlas runtime, customer portal, AAR generator) lives in a separate repo and ships in Phase 3.5. See `Site_Map_and_IA.docx` Section 10 for the phasing.

---

## Stack

| Concern              | Choice                                                  |
| -------------------- | ------------------------------------------------------- |
| Framework            | Next.js 15 (App Router, React 19)                       |
| Language             | TypeScript 5.6 (strict, `noUncheckedIndexedAccess`)     |
| Styling              | Tailwind CSS 3.4 + `@tailwindcss/typography`            |
| Components           | shadcn/ui-style primitives (Radix Slot + CVA)           |
| Content layer        | MDX in repo (`src/content`) via `@next/mdx` + `gray-matter` |
| Icons                | lucide-react                                            |
| Package manager      | pnpm 9.12.3                                             |
| Node                 | 20.11+ (see `.nvmrc`)                                   |
| Hosting              | Vercel                                                  |

The content layer choice is deliberately a swap candidate: the MDX frontmatter schema in `src/lib/content.ts` matches what a future Sanity or Payload instance would expose, so migration is mechanical when the content team needs multi-user editing.

---

## Running locally

```bash
# First time
pnpm install

# Dev (hot reload)
pnpm dev

# Typecheck
pnpm typecheck

# Lint
pnpm lint

# Production build
pnpm build

# Serve the production build locally
pnpm start

# Prettier
pnpm format        # write
pnpm format:check  # verify only
```

Dev server runs on `http://localhost:3000`.

---

## Site map (IA Section 3)

| IA ref | Route                               | File                                         |
| ------ | ----------------------------------- | -------------------------------------------- |
| 3.1    | `/`                                 | `src/app/page.tsx`                           |
| 3.2    | `/platform`                         | `src/app/platform/page.tsx`                  |
| 3.3    | `/scenarios`                        | `src/app/scenarios/page.tsx`                 |
| 3.3    | `/scenarios/[slug]`                 | `src/app/scenarios/[slug]/page.tsx`          |
| 3.4    | `/frameworks`                       | `src/app/frameworks/page.tsx`                |
| 3.4    | `/frameworks/[slug]`                | `src/app/frameworks/[slug]/page.tsx`         |
| 3.5    | `/pricing`                          | `src/app/pricing/page.tsx`                   |
| 3.6    | `/customers`                        | `src/app/customers/page.tsx`                 |
| 3.7    | `/about`                            | `src/app/about/page.tsx`                     |
| 3.8    | `/demo`                             | `src/app/demo/page.tsx`                      |
| 3.9    | `/for/[segment]`                    | `src/app/for/[segment]/page.tsx`             |
| 3.10   | `/solutions` + `/solutions/[topic]` | `src/app/solutions/…`                        |
| 11     | `/security`                         | `src/app/security/page.tsx`                  |
| 11     | `/accessibility`                    | `src/app/accessibility/page.tsx`             |
| 11     | `/status`                           | `src/app/status/page.tsx`                    |
| 11     | `/legal/privacy`                    | `src/app/legal/privacy/page.tsx`             |
| 11     | `/legal/terms`                      | `src/app/legal/terms/page.tsx`               |
| —      | 404                                 | `src/app/not-found.tsx`                      |
| —      | 500 / error boundary                | `src/app/error.tsx`                          |
| —      | `/sitemap.xml`                      | `src/app/sitemap.ts`                         |
| —      | `/robots.txt`                       | `src/app/robots.ts`                          |
| —      | `/.well-known/security.txt`         | `public/.well-known/security.txt`            |

### Dynamic routes

* `/scenarios/[slug]` — `generateStaticParams` enumerates every MDX file under `src/content/scenarios/`, `dynamicParams = false`, ISR `revalidate = 86_400`.
* `/frameworks/[slug]` — enumerated from `FRAMEWORKS` in `src/lib/frameworks.ts`.
* `/for/[segment]` — enumerated from `SEGMENTS` in `src/lib/segments.ts` (4 segments: public, msp, smb, non-profit).
* `/solutions/[topic]` — enumerated from `SEO_LANDINGS` in `src/lib/seo-landings.ts` (4 landings at v1).

---

## Folder structure

```
annualtabletop.com/
├── public/                          # Static assets served at /
│   └── .well-known/security.txt     # Vulnerability disclosure contact
├── src/
│   ├── app/                         # App Router pages + route handlers
│   ├── components/
│   │   ├── blocks/                  # IA-level reusable blocks (Hero, FAQ, CTABlock, cards, etc.)
│   │   ├── site/                    # Global chrome: nav, footer, skip link
│   │   └── ui/                      # shadcn/ui-style primitives: Button, Badge, Card
│   ├── content/
│   │   ├── scenarios/               # Scenario MDX (source of truth for the library)
│   │   └── frameworks/              # Long-form framework-article MDX
│   └── lib/
│       ├── site.ts                  # SITE constants, nav, footer
│       ├── segments.ts              # 4 buyer segments
│       ├── segment-content.ts       # Copy for /for/[segment] landings
│       ├── frameworks.ts            # 9 framework reference list
│       ├── seo-landings.ts          # Copy + config for /solutions/[topic]
│       ├── content.ts               # MDX loader (scenarios + framework articles)
│       └── utils.ts                 # cn() helper
├── mdx-components.tsx               # Global MDX component overrides
├── next.config.mjs                  # Security headers, MDX integration
├── tailwind.config.ts               # Brand tokens (navy, signal, paper, ink…)
└── tsconfig.json                    # Strict TS + path aliases
```

---

## Brand system

The visual language is locked in `Brand_Identity_and_Positioning.docx` and implemented in `tailwind.config.ts` + `src/app/globals.css`:

* **Navy** `#0B1F3A` — the primary brand color.
* **Signal Accent** `#1F6FB5` — secondary / CTA emphasis.
* **Paper** `#F7F5EF` — parchment surface, used for AAR contexts.
* **Ink** — neutral greys for body copy.
* **Serif headings** + **sans body** — the voice of "thorough, not theatrical."

Every surface targets **WCAG 2.1 AA**. Focus-visible is enforced globally; `prefers-reduced-motion` disables all non-essential animation.

---

## Content workflow

Scenarios and framework articles are authored as MDX under `src/content/`. Each file's frontmatter is the structured data that renders in cards, filters, and crosswalks; the MDX body is the long-form article.

To add a scenario:

1. Create `src/content/scenarios/<slug>.mdx` with the full frontmatter schema (`title`, `summary`, `threatType`, `complexity`, `segments`, `frameworks`, `estimatedMinutes`, `learningObjectives`).
2. Write the body with headings, paragraphs, and lists. Markdown → HTML via the MDX pipeline.
3. The scenario auto-joins the library, the `/scenarios/[slug]` page, the sitemap, and any segment landing whose slug is listed in the `segments` array.

To add an SEO landing:

1. Add a new entry to `SEO_LANDINGS` in `src/lib/seo-landings.ts` with the 6-block content fields.
2. The `/solutions/[topic]` route picks it up automatically via `generateStaticParams`.

---

## Roadmap context

* **v1 (this repo, now)**: Marketing site, static scenario library, stubbed `/demo` flow (Atlas integration deferred).
* **v1.1 (pricing pass)**: Live numbers on `/pricing`, VPAT availability noted on `/security`, first case studies on `/customers`.
* **Phase 3.5 (Atlas runtime)**: `/demo` wires to the Atlas AI exercise director. `/status` gains a live component board. Customer portal ships (separate repo).

See `Site_Map_and_IA.docx` Section 10 for the full phasing doc.

---

## License

Proprietary. © Thagentix. All rights reserved.
