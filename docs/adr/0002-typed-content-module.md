# Case studies live in a typed content module

`public/json/projets.json` is replaced by a typed TypeScript module (`content/`) that holds every project, its case-study sections (her slide text transcribed to HTML, typos fixed, each section citing its source slide) and its figures (crops of her slides). Pages, the sitemap, `llms.txt` and `llms-full.txt` are all generated from it so they cannot drift. We chose code over a CMS or MDX because one developer maintains the site, the content changes rarely, and the compiler catches a missing field or a broken image path.
