# Context

Glossary for Cristina Andrés's portfolio. Who she is and what she likes lives in [`docs/brief.md`](docs/brief.md); this file only fixes the words.

## Terms

- **Project**: one piece of her work shown on the site (Aqualung, Punt, Blossom…). Has a slug, a title, a year, a sector, her role, tags, a colour and a case study.
- **Case study**: the page that tells one project's story at `/work/<slug>`. Made of sections; never a slideshow of flattened slides.
- **Section**: one step of a case study (brief, sketches, planimetry, prototype, result…): a heading, her text as HTML, and figures. Each section records the slide it was transcribed from.
- **Slide**: one page of her original portfolio (`Portfolio_cristina_page-00NN.jpg`, `Portfolio_Page_*.jpg`, `aqualung1.png`…). Source material, not something the site displays whole unless no clean crop exists.
- **Figure**: an image cropped from a slide (or a standalone image) with alt text and an optional caption.
- **Direction**: a design concept written in the brief and sketched on the Claude Design board: A Planimetría, B Isla, C Muestrario.
- **Variant**: a direction built for real on `dev`, selected with `?variant=a|b|c`. Same projects, routes and content; different rendering. Variants exist only until Cristina chooses.
- **Switcher**: the floating control that changes variant. Never rendered in production.
- **Activities**: her personal side work (Blender, Animal Crossing), separate from projects.
