// The content model, in the words of CONTEXT.md: a Project has a case study made of
// Sections, and each Section shows Figures cropped from her Slides.
// Relative imports only: the image script runs this module directly with Node.

/** A slide file of her original portfolio, relative to the slides folder. */
export type Slide = string;

/** A crop as fractions of the slide: [left, top, width, height], each 0–1. */
export type Crop = readonly [number, number, number, number];

export interface Figure {
  /** Unique within the project; names the generated file. */
  id: string;
  slide: Slide;
  /** Omit to use the whole slide. */
  crop?: Crop;
  alt: string;
  caption?: string;
}

/** One block of her text. Strings are paragraphs. */
export type Block = string | { list: readonly string[] } | { quote: string };

export type SectionKind =
  | 'brief'
  | 'research'
  | 'sketches'
  | 'planimetry'
  | 'prototype'
  | 'renders'
  | 'identity'
  | 'interface'
  | 'packaging'
  | 'campaign'
  | 'result';

export interface Section {
  kind: SectionKind;
  heading: string;
  body: readonly Block[];
  figures: readonly Figure[];
  /** The slides this section was transcribed from, so every sentence can be checked. */
  sources: readonly Slide[];
}

export interface Download {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  /** Short name used in lists: "Punt". */
  title: string;
  /** Full name used as the case study's h1: "Yokohama sideboard for Punt". */
  name: string;
  /** Display string, as on her slides: "2022–2023". */
  year: string;
  sector: string;
  role: string;
  tags: readonly string[];
  tools?: readonly string[];
  /** The project's colour (the swatch) and a text colour that reaches AA on it. */
  color: string;
  ink: string;
  /** One sentence for lists, metadata and llms.txt. */
  summary: string;
  /** The lead image: the project's picture in lists and at the top of its case study. */
  cover: Figure;
  sections: readonly Section[];
  downloads?: readonly Download[];
}
