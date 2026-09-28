# AGENTS.md

Guidance for AI agents and contributors working on this repository.

This is the portfolio of **Cristina Andrés Serra**, a product, UX/UI and graphic designer. The repository belongs to Cristina; her friend Thomas Moser develops it. The site has two audiences at once: **recruiters** (UX/UI and product roles) and **freelance clients** (contact modal, Calendly). Every design and content decision serves both.

Before any design or content work, read [`docs/brief.md`](docs/brief.md): who Cristina is, how she thinks, what she likes, the content inventory and the open questions. It is the single source of truth about her; keep it current.

## Stack

- Next.js 16 App Router, React 19, TypeScript; `proxy.ts` (Next 16's name for middleware).
- Tailwind CSS 4 (`@tailwindcss/postcss`), a native `<dialog>` for contact, `motion` 12. No HeroUI, GSAP, three.js or gallery libraries ([ADR 0001](docs/adr/0001-lean-stack-for-the-redesign.md)).
- Content: the typed module in `content/` (projects, case studies, activities, CV facts; [ADR 0002](docs/adr/0002-typed-content-module.md)), `lib/site.config.ts` (site-wide SEO/GEO metadata, contact, socials). `llms.txt`, `llms-full.txt` and the sitemap are generated from them.
- Images: originals live outside `public/` in `assets/slides/` and `assets/activities/`; `npm run images` crops and recompresses them into `public/images/` and records their sizes.
- Hosting: Vercel, on **Cristina's** account (`cristinadesigns.vercel.app`).

- Tailwind breakpoints are custom (`tailwind.config.ts`): `sm` 320, `md` 480, `lg` 768, `xl` 1024, `2xl` 1440. So `lg:` means tablet and up, not desktop. New folders with Tailwind classes must be listed in the config's `content`.
- Variants (redesign step 4): `variants/<a|b|c>/` each export the views listed in `variants/types.ts`; routes call `getViews()` from `variants/server.ts`. `?variant=` and the switcher work only outside production (`VERCEL_ENV !== 'production'`), where pages stay static.

Commands: `npm run dev`, `npm run build`, `npm run lint` (ESLint 9 flat config), `npm run format` (Prettier: single quotes, width 100), `npm run images`, `npm run test:e2e` (Playwright + axe over the production build).

## Branches and releases

- `main` is production. **Nothing reaches `main` without Cristina's explicit go-ahead**: no direct pushes, and release PRs `dev` → `main` are merged only after she has approved them.
- `dev` is the integration branch and the one to share: its Vercel preview is what Cristina reviews.
- Work on a feature branch (`feat/…`, `fix/…`, `docs/…`), open a PR into `dev`, merge it once it builds and has been checked.
- Conventional commit messages (`feat:`, `fix:`, `docs:`, `chore:`), one topic per commit.

## Redesign playbook

How a redesign (or any sizeable visual change) is done here. Each step leaves an artefact the next one builds on.

1. **Analyse before designing.** Read `docs/brief.md`, the live site at 390 / 768 / 1440 px, her work in `assets/slides/` (look at the images, they are her own design), her CV (`public/pdf/CV.pdf`) and the attached PDFs (`public/attached/`). Facts come from her material, never from assumptions. Update the brief with anything new.
2. **Write the directions in the brief.** Two or three, each a one-line concept plus the evidence from her work that justifies it (cite files). Directions must differ in structure and hierarchy, not only in colour.
3. **Sketch on a Claude Design board.** Mock up each direction on one canvas: home and one case study, desktop and phone. Thomas reviews it there; iterating on the board is cheap. Link the board from the brief.
4. **Build the variants for real on `dev`.** All variants live on the real routes, switchable with `?variant=a|b|c` and a small floating switcher that never renders in production. Same content and routes; only the rendering differs. Each variant meets the quality bar below, because Cristina judges what she sees on her own phone.
5. **Send the `dev` link to Cristina.** She picks one, or mixes ("B's home with C's case studies"). Record the verdict and her reasons in `docs/brief.md` and as an ADR in `docs/adr/`.
6. **Build the chosen design properly.** Remove the losing variants and the switcher from `dev` (keep them on a `prototype/*` branch for reference), polish and test, then open the release PR `dev` → `main` for her go-ahead.

## Quality bar (every variant, every page)

- **Responsive:** designed layouts at 390, 768 and 1440 px; no horizontal scroll. Every entry point (nav, project list) visible at every width.
- **Accessible:** WCAG 2.1 AA contrast, keyboard operable with visible focus, real links and buttons (no `onClick` divs), real headings, meaningful alt text, dialogs that close with Escape and trap focus, `prefers-reduced-motion` respected (including page transitions).
- **Case studies are real pages** at `/work/[slug]`, with text rebuilt as HTML, not flattened slide JPEGs: readable on a phone, indexable, and shareable. Keep `llms.txt` and the sitemap in sync with them.
- **Performance:** images through `next/image` and recompressed (no multi-megabyte JPEGs or CSS background images); no unused heavy dependencies; mobile Lighthouse ≥ 90 as the target.
- Metadata, JSON-LD and OG images stay correct (`lib/site.config.ts` is the source).

## Content accuracy

- Everything the site says about Cristina (projects, roles, dates, clients, tools, languages, location) must trace to her own material: the case-study images, her CV, the attached PDFs, her public profiles. Never invent clients, results, dates or quotes.
- The CV (September 2025) is the most recent source. Where the site and the CV disagree, the CV wins, and the discrepancy goes into the brief.
- Confidential client work (Aqualung) shows only what she already published.
- Keep her voice: honest, grateful, a little playful ("I like pandas a lot, like… a lot"). Fix typos, don't rewrite her personality.
- The site does not publish her phone number.

## Docs

- `docs/brief.md`: who she is, how she thinks, what she likes, content inventory, the current site's problems, directions, open questions, decisions.
- `CONTEXT.md`: the glossary (project, case study, section, slide, figure, direction, variant). Use its words in code, tickets and PRs.
- `docs/adr/`: decisions that are hard to reverse (the chosen design, stack changes), one short file each, numbered `0001-…`.
