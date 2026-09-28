# Design brief: Cristina Andrés

The single source of truth about Cristina for anyone designing or writing this site. Every claim cites her own material; paths are relative to the repository root. Colour values are estimated from her images.

_Last updated 2026-09-28: initial analysis; plan for step 4 settled with Thomas; findings from transcribing all nine case studies; the three variants built on `dev` and ready for Cristina. Slide originals now live in `assets/slides/`, activity originals in `assets/activities/`._

## Who she is

- **Name:** Cristina Andrés Serra (`public/attached/Smartwatch_Poster.pdf`).
- **Positioning:** the site says "Product, UX/UI & Graphic Designer" (`lib/site.config.ts`); her CV (September 2025) says "UX/UI Designer… user-first perspective" (`public/pdf/CV.pdf`); Behance, older, says "Diseñadora Gráfica" with a furniture and product focus.
- **Studies (CV):** Industrial Design Engineering, UPV Valencia (2019–2023); Erasmus at HE-Arc Neuchâtel (2021, industrial design) and Hochschule Augsburg (2023, UX/UI); Máster en Diseño Web, ESDESIGN Barcelona (October 2024–October 2025).
- **Experience (CV):** UX/UI internship at Aqualung Group, Sophia Antipolis (February–August 2025; `assets/slides/aqualung1.png` says internship); freelance UX/UI designer, Strasbourg (October 2023–October 2024), including the Curefab Technologies website; graphic designer at Future Fibres Rigging Systems, Valencia (January–December 2022), marketing material for the racing industry. The site never mentioned Future Fibres; the CV also spells Sophia Antipolis "Sophie Antipolis".
- **Based in:** Antibes (CV).
- **Languages (CV):** Spanish, Catalan and French native; English advanced; German elementary. The site is English only.
- **Tools:** Figma, Photoshop, Lightroom, Illustrator, InDesign, Blender, Canva, SolidWorks (`components/Logos/IconRow.tsx`); Adobe XD, Sketch (CV); Lumion (render watermark in `assets/slides/backgrounds/punt_bg.jpeg`).
- **Audience:** recruiters and freelance clients (confirmed by Thomas), across Spain, France, Switzerland and Germany.
- **Contact:** email, Calendly (30 min), LinkedIn, Behance (`lib/site.config.ts`). The phone number is only in the CV and is not published.

## How she thinks

- **Honest and reflective; she names her constraints.** "I worked in Adobe XD — a tool more limited compared to Figma… requirements changed frequently"; "Due to confidentiality… only a limited selection of images can be shown" (`aqualung3.png`).
- **Grateful and modest.** "I am very grateful to this company for trusting in my abilities even though I was just starting out" (`curefab_1.png`).
- **Respects the client's brand and systems.** "Make sure that their brand identity is present", with the palette and type (Avenir) documented as a system (`curefab_2.png`); "followed the existing design system" (`aqualung2.png`).
- **An engineer's process.** Sketches, then dimensioned drawings, prototypes and renders (Yokohama 2–5); Ciclogreen's "design methodology… analysis (market, flows, forces) within 60 days"; Blossom delivered with a 5-page exploded-view assembly manual (`public/attached/Blossom_Manual_A4.pdf`); a technical sheet for Sakana (`Portfolio_cristina_page-0020.jpg`).
- **Personal, playful voice.** "A curious fact about me is that I like pandas a lot, like… a lot" (`page-0008`); "I thought that such a rare lamp needed an identity of its own" (Blossom); the Activities pages: "all of them have a little piece of my heart" (`app/activities/page.tsx`).
- **Collaborative.** She credits teammates by name: Sakana, "my classmate and friend, Latifa Qatrani" (`page-0018`); Ciclogreen, Irene Badía, Remei Barber, Daniel Albero and Carmen Amorós (`Portfolio_Page_Ciclogreen3.jpg`); Blossom, Francisco Gómez, Esther Killeen, Noelia Montrós and Aitana Sánchez (`Portfolio_Page_Blossom3.jpg`, and the manual). Punt was a group project too ("chosen by the group").
- **Nature as a source** (inferred): Ciclogreen "reminiscent of a tree", the Blossom flower lamp, the Sakana koi.

## What she likes visually (from her work)

- **Muted, desaturated palettes, each with one warm accent.** Sage `#91A399` and olive `#7E8C6E` (Montezuma); teal-slate `#597177` and deep teal `#33535A` (Sakana); charcoal navy `#1D252D` with brass `#E0A04A` (Ares Domus); dusty rose `#D9ABBA` (Blossom); apricot `#F79E50` (Montezuma); cream `#F3E9C6` and warm greige `#E2E2DB` (the site's base); periwinkle `#A7B4CF` (old "Hello!" slide); aubergine `#321A2B` (`public/images/logo.svg`). Client brand colours (Aqualung navy, Curefab green) are not her own taste.
- **Type:** Poppins in her slides and the site; Libre Bodoni for the site's project titles (`app/layout.tsx`); an outlined retro slab for "Hello!" and "PORTFOLIO" (`page-0001`, `page-0002`); wide-tracked uppercase labels throughout. Brand work names its type: Avenir for Curefab (the client's), Geometria and Addington in the Ares Domus brand book (`page-0005`).
- **Illustration:** her logo is a self-portrait line drawing with bangs, round glasses and freckles (`public/images/logo.svg`); the Montezuma mask mascot; MOCA panda patterns; the koi line drawing; technical line drawings.
- **3D and renders:** SolidWorks and Lumion product renders; a cozy isometric pastel desk room in Blender (`assets/activities/deskroom.png`): pink chair, plants, pale wood.
- **Patterns:** pandas and dots (`page-0008`), Art Deco vertical bars (`page-0004`), seigaiha waves (`page-0019`), a Celtic knot (Smartwatch poster).
- **Layout grammar in her slides:** 2:1 landscape spreads with a centred text column (logo, year, bold title, "● tag ● tag", short paragraph) beside a hero visual; numbered section badges in circles; a thin vertical colour bar before small-over-bold headings (Aqualung, Curefab).
- **Personal world:** Animal Crossing islands (cafés, topiary, a pastel shop) in `assets/activities/`; the site already uses the leaf pattern and pink cloud backgrounds.

## Content inventory

Projects in `public/json/projets.json`, in the site's order:

| # | Project | Sector | Year | Her role | Assets |
|---|---|---|---|---|---|
| 1 | Aqualung Group (Aquasense app, dive computer UI, two web pages) | diving gear; product awarded at CES 2025 | 2025 | sole UI designer, internship | `aqualung1-3.png`, `aqualung.pdf` |
| 2 | Curefab Technologies GmbH | German medtech | 2023–2024 | website redesign, UX/UI (built by Thomas) | `curefab_1-3.png` |
| 3 | Punt, "Yokohama" sideboard | furniture | 2022–2023 (slide; `projets.json` said 2023) | product design, prototyping, self-set brief | `Yokohama1-5.jpg`, `punt_bg.jpeg` |
| 4 | Montezuma (Dreamland) | clothing start-up, class competition | 2022 | marketing, packaging, web survey, campaign | `page-0009` to `page-0013` |
| 5 | Smurfit Kappa, "Pipas" bulk dispenser | packaging | 2022 | packaging and graphic design, competition | `page-0014` to `page-0017` |
| 6 | Ares Domus | invented luxury resort on Mars ("an invented brand for a luxurious resort in Mars", `page-0005`) | 2022 | logo, branding, merchandise | `page-0004` to `page-0006` |
| 7 | Sakana | Swiss watch, HE-Arc (slides headed "Swiss Watch"; Sakana is the name on her logo; the affiche is signed "Andrés Cristina 09.02.2022") | 2022 | product, graphic design, technical drawing | `page-0018` to `page-0020` |
| 8 | Ciclogreen | indoor farming, UPV team of five | 2021 | product design, methodology | `Ciclogreen1-3.jpg` |
| 9 | Blossom | laser-cut flower lamp, team of five | 2020 | product design, prototyping, logo | `Blossom1-4.jpg`, `Blossom_Manual_A4.pdf` |

Available but not listed: MOCA Studio (her personal panda brand, `page-0007`, `page-0008`), Compa-k / Klindo steam iron (`Compak1-3`, `Compa-k_Cartel.pdf`), Rituals smartwatch (`Smartwatch1-4`, `Smartwatch_Poster.pdf`).

- **About** (currently hidden, see below): bio, CV button, software icons, experience, studies, languages, grayscale photo (`components/About/*`, `public/images/cristina.jpeg`). Its text predates Aqualung and the master's.
- **Activities:** Blender (one render) and Animal Crossing (seven screenshots).

## What's wrong with the current site

_Status, 2026-09-28: everything below is fixed on `dev` by the redesign foundation (#9–#14): case studies are pages, `/about` is back, the carousel, curtain, HeroUI, three.js and gallery libraries are gone, `public/` went from 110 MB to 6 MB, and a Playwright + axe suite guards the quality bar._


- **Broken:** `/about` is a soft 404 (`proxy.ts` still rewrites it; it's in the sitemap and linked from the 404 page); `?project=` deep links advertised in `llms.txt` open nothing; the Aqualung case renders a PDF through `<Image>` (broken image, HTTP 400).
- **Content:** Punt slides 2–5 are headed "SmartWatch"; typos ("Flower-shaoed", "Design of a amazing brand"); a MOCA slide headed "2 Ares Domus"; case-study text is baked into slide JPEGs (not selectable, not indexable).
- **UX:** the home page is one full-screen colour card per project with only a title, so recruiters see no work until they click; thumbnails appear only when hovering the bottom 80 px; no visible navigation at 768 px; the GSAP curtain delays every navigation by about 1.8 s; the fixed footer covers content on Activities.
- **Accessibility:** reduced motion is ignored; the project title is an `onClick` div filled with innerHTML; sr-only links get focus without a visible ring; Animal Crossing images lack alt text; the modal doesn't close with Escape or trap focus; the hamburger has no label.
- **Performance and tech debt:** `public/` weighs 109 MB, slide JPEGs are 1–8 MB, `punt_bg.jpeg` (9.4 MB) is a CSS background; about 1.7 MB of JS per page; three/R3F/drei unused; `console.log` calls; backup files (`*~`), a committed `.idea/`, unused `Card.tsx`, `utils/photos.ts`, `useRippleEffect`; a hotlinked image in `globals.css`; boilerplate README.
- **Already fixed in May 2026:** dependencies, trackpad scrolling, responsiveness overflow, 404 page, metadata, JSON-LD, sitemap, `llms.txt`, alt text on project images.

## Design directions

Three directions with different structures, each grounded in her work. All three share: a real `/about` from the current CV, case studies at `/work/[slug]`, Aqualung and Curefab first, recompressed images.

- **A. "Planimetría", the technical sheet as case study.** Each project reads like her engineering documentation: brief, sketches, dimensioned drawing, prototype, render, result. Greige drafting-paper grid, thin rules, numbered section badges, Poppins with a monospace for specs, one sage accent; the Blossom exploded view as a hero motif. _Evidence:_ Yokohama planimetry, the Sakana technical sheet, the Blossom manual, Ciclogreen's method, Aqualung's frank constraints. _Best for:_ recruiters who want process.
- **B. "Isla", a cozy pastel world.** The home page is a small isometric room in her Blender and Animal Crossing aesthetic; projects are objects in it (lamp = Blossom, sideboard = Punt, watch = Sakana, dive computer = Aqualung), with a plain "all work" list always one click away. Dusty rose, cream, sage and pale wood; rounded cards; her self-portrait as the guide. _Evidence:_ `Deskroom.png`, the Animal Crossing islands, pandas, pink clouds, "a little piece of my heart". The one direction where a 3D scene earns its place (compressed model, static poster, reduced-motion fallback). _Risk:_ whimsy can crowd out the work for recruiters.
- **C. "Muestrario", a colour-swatch index with an editorial serif.** Her habit of giving each project its own muted palette becomes the navigation: the home page is a grid of swatch tiles (sage, teal-slate, charcoal and brass, rose, apricot) under her logo; each opens a long-scroll case study with one palette strip, like her Curefab palette slide. Libre Bodoni display with Poppins. _Evidence:_ the per-project colours in `projets.json`, the Curefab palette slide, her patterns as tile textures. _Keeps:_ the current site's best idea (per-project colour cards and Bodoni titles) and makes it a visible grid.

Claude Design board (private to Thomas; share it from its Share menu): https://claude.ai/artifact/LJH7JdQYud8MbWBd1ZbvRr. One row per direction: desktop home and a phone case study (A: Punt, B: Blossom, C: Curefab), built from her own slides and words. In C, the chip colours for Punt (`#B89B7A`), Smurfit Kappa (`#E8DCC4`) and Ciclogreen (`#3F5A3A`) were picked from their images; the others come from `projets.json` or the client brand.

## The variants on `dev` (step 4)

Preview: https://portfolio-git-dev-cristinaandres-projects.vercel.app. Add `?variant=a`, `?variant=b` or `?variant=c` to any page, or use the switcher in the bottom-right corner. The choice is remembered from page to page. Production ignores both and would show A.

All three share the same routes, content, case studies, /about and contact dialog. They differ in structure, not just colour:

- **A, Planimetría** (her engineering documentation):
  - Greige drafting-paper grid, 1.5 px rules, a monospace for labels, one sage accent.
  - Home is a title block, a spec table of her CV and a numbered "project register" with thumbnails: the whole portfolio on one screen, like a drawing index.
  - Case studies are "sheets" with a spec grid and numbered section badges; measurements get dimension-line captions.
  - The most sober option, and the quickest to scan for recruiters.
- **B, Isla** (her own world):
  - Dusty rose, cream and a rounded display face.
  - Home is her Blender desk room with links placed over the objects (screen → UX/UI, shelf → products, wall → brands, console → activities, window → about), plus an "All work" grid always on the page.
  - Case studies are soft cards with her quotes beside her self-portrait.
  - The most personal option; the work is one scroll further down.
- **C, Muestrario** (her palettes):
  - Warm off-white and Libre Bodoni.
  - Home is a swatch book: one colour tile per project with its cover, number and hex.
  - Each case study opens in the project's colour, with one of her own sentences as a pull-quote.
  - The most editorial option; it keeps the current site's best idea (per-project colour, Bodoni titles).

Measured on 2026-09-28 (Lighthouse, mobile profile, deployed preview, home and /work/punt):

| | A | B | C |
|---|---|---|---|
| Performance | 98 / 91 | 97 / 97 | 95 / 96 |
| Accessibility | 100 / 100 | 100 / 100 | 100 / 100 |
| Best practices | 100 | 100 | 100 |

A's case study scored 91 because of a layout shift (0.116) under its cover; that is fixed (0). SEO shows 69 on previews only, because Vercel sends `noindex` there. The Playwright suite (211 checks: every route × variant × 390/768/1440, axe, reduced motion, content, redirects, and a production-mode run) is green locally and against the deployed preview.

**For step 6** (after she chooses):
- Delete the losing variants' folders and CSS, the switcher, and `variants/neutral` pieces nobody uses. Every variant's CSS and fonts load on every page today.
- Self-host the chosen variant's fonts with `next/font/local`. Google Fonts failed to download twice during local builds.
- Collapse the header, menu and footer into the chosen variant's shell.
- If she picks C, add Curefab's palette as data so the swatch strip can show it.

## Copy she didn't write

Text on the site that is ours, not hers, to list in the message to Cristina. Case-study body text is always her own words from the slides (typos fixed).

- **Titles** where her slide has none: "Yokohama sideboard for Punt", "Curefab Technologies website", "Sakana, a Swiss watch", "Ciclogreen, an indoor farming system" (from her logo's "Indoor farming system"), "Blossom, a flower-shaped lamp".
- **Summaries:** the one-line summary of each project (lists, metadata, `llms.txt`), condensed from her slide intros.
- **Section headings** where her slide has none: "The brief" (Punt, Montezuma, Smurfit Kappa, Ares Domus, Sakana, Ciclogreen, Blossom), "The internship" (Aqualung), "The project", "Brand identity", "The result" (Curefab, whose slides all say "Website Redesign"), "Merchandise" (Ares Domus).
- **Captions:**
  - Punt: "Concept sketches around the selected design."; "Aparador Punt 1: 190 × 76.5 cm, scale 1:10.", read off her drawing.
  - Aqualung: "The two new pages on desktop.", "And on mobile.", "Dive computer screens.", "Aquasense app: profile and home."
  - Curefab: "Brand colours and typography.", "The home page on tablet and phone."
  - Sakana: "Technical sheet: Ø 41.8 mm case, 7 mm high.", read off her sheet.
- **Alt text:** all of it.
- **/about:** the bio (adapted from her CV summary and the old site bio); the note under the freelance role ("Including the website redesign for Curefab Technologies, working closely with developers"); the tagline "…from dimensioned drawings to dive-computer interfaces"; the labels "Download my CV (PDF)", "Contact me", "Share this page".
- **Variant A:** the headline "Designing where form meets function.", "See the work ↓", and the sheet and spec labels ("Sheet 00 / Index", "Project register", "Fig. NN"…).
- **Variant B:** the headline "Hi, I'm Cristina. Come in!", the room intro ("Every object in my room opens a part of my work…"), the five hotspot labels, the grid headings ("On the screen: interfaces"…), "From the shelf/screen/wall", "The window", "The console", "Skip the tour", "Back to the room", "Say hi".
- **Variant C:** the headline "Every project has its own colour.", "Swatch book · 2020–2025", "Selected work · 9 projects", "Personal projects".

## Open questions

For Cristina (to ask with the variants link):

3. Aqualung: which images can be shown (she noted confidentiality)?
4. Should MOCA, Compa-k and the Rituals smartwatch come back?
5. Languages: English only, or also Spanish and French?
6. Smurfit Kappa's text starts "Last year, I was lucky enough…" for a 2022 project: keep, or change to "In 2022"?
7. Sakana's technical specifications are in French, as on her sheet: keep, or translate?
8. The variants' headlines are placeholder copy, not her words (A "Designing where form meets function.", B "Hi, I'm Cristina. Come in!", C "Every project has its own colour."): keep, edit or replace?
9. Which variant, or which mix ("B's home with C's case studies")? And, in B, is grouping the work by the room's corners fine, or should it stay newest first?

Resolved with Thomas: hiding `/about` was a leftover (it gets rebuilt from the CV); positioning is "UX/UI & Product Designer" (see Decisions).

## Decisions

- 2026-09-28 (Thomas): redesign with three variants on `dev` for Cristina to choose; directions sketched on a Claude Design board first.
- 2026-09-28 (Thomas): branches and PRs into `dev` are free; nothing reaches `main` without Cristina's go-ahead.
- 2026-09-28 (Thomas), plan for step 4, from a grilling session:
  - `/about` comes back, rebuilt from the September 2025 CV, including Future Fibres.
  - Positioning: "UX/UI & Product Designer", industrial design engineering as the differentiator, graphic design as a discipline tag.
  - The nine listed projects only; MOCA, Compa-k and the Smartwatch wait for Cristina. Aqualung shows only `aqualung1-3.png`, not the PDF.
  - Case-study text is transcribed faithfully from her slides (typos and wrong headings fixed), each section citing its slide; visuals are cropped from the slides. Content lives in a typed module ([ADR 0002](adr/0002-typed-content-module.md)); sitemap and `llms` files are generated from it; `/?project=<title>` redirects to `/work/<slug>`.
  - Slugs: `aqualung`, `curefab`, `punt`, `montezuma`, `smurfit-kappa`, `ares-domus`, `sakana`, `ciclogreen`, `blossom`.
  - Variants: `?variant=a|b|c` sets a cookie; switcher and param active only outside production; default A; each variant is its own component tree over shared routes and content.
  - Stack trimmed: no GSAP curtain, HeroUI, three/R3F, share and lightbox libraries; one native `<dialog>` for contact ([ADR 0001](adr/0001-lean-stack-for-the-redesign.md)). Isla uses the static `Deskroom.png` with real links over it.
  - Quality checks: Playwright + axe suite over every route × variant × 390/768/1440 px, run before each merge and in a GitHub Action on PRs into `dev`.
  - The `dev` preview is public (Vercel SSO disabled by Thomas; previews stay `noindex`): https://portfolio-git-dev-cristinaandres-projects.vercel.app
- 2026-09-28: the three variants are on `dev` (#15–#17) and the final pass is done (#18); next is Cristina's choice (playbook step 5).
