import type { Block, Project } from '@/content';
import { getProjects } from '@/content';

/** "No. 03": a project's place in the swatch book. */
export function swatchNumber(project: Project): string {
  const i = getProjects().findIndex((p) => p.slug === project.slug);
  return `No. ${String(i + 1).padStart(2, '0')}`;
}

/** "2020–2025": the span of years her projects cover. */
export function yearSpan(projects: readonly Project[]): string {
  const years = projects.flatMap((p) => p.year.match(/\d{4}/g) ?? []).map(Number);
  return `${Math.min(...years)}–${Math.max(...years)}`;
}

const firstPerson = /\b(I|I'm|me|my|we|our)\b/;

/**
 * An italic pull-quote, only ever her own words: her first quoted block if the case study has
 * one, otherwise the opening sentence of the first paragraph when she writes it in the first
 * person. Returns the quote and the body with that text taken out, so nothing is said twice.
 */
export function pullQuote(project: Project): {
  quote?: string;
  sections: Project['sections'];
} {
  const sections = project.sections;
  for (let s = 0; s < sections.length; s++) {
    const i = sections[s].body.findIndex((b) => typeof b !== 'string' && 'quote' in b);
    if (i !== -1) {
      const block = sections[s].body[i] as { quote: string };
      return { quote: block.quote, sections: withBody(sections, s, without(sections[s].body, i)) };
    }
  }
  const first = sections[0]?.body[0];
  if (typeof first === 'string') {
    const match = first.match(/^([^]+?[.!?])(\s+|$)([^]*)$/);
    if (match && firstPerson.test(match[1])) {
      const rest = match[3].trim();
      const body = rest ? [rest, ...sections[0].body.slice(1)] : sections[0].body.slice(1);
      return { quote: match[1], sections: withBody(sections, 0, body) };
    }
  }
  return { sections };
}

function without(body: readonly Block[], i: number): Block[] {
  return [...body.slice(0, i), ...body.slice(i + 1)];
}

function withBody(
  sections: Project['sections'],
  index: number,
  body: readonly Block[]
): Project['sections'] {
  return sections.map((s, i) => (i === index ? { ...s, body } : s));
}
