import { IBM_Plex_Mono } from 'next/font/google';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { figureImage, getProjects, type Block, type Figure, type Project } from '@/content';

// Poppins comes from the root layout (--font-poppins); A adds a monospace for labels and specs.
export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-a-mono',
});

export const container = 'mx-auto w-full max-w-[1440px] px-4 lg:px-8 xl:px-16';

/** Two-digit sheet numbers, as on her drawings: 1 → "01". */
export function sheetNumber(n: number): string {
  return String(n).padStart(2, '0');
}

/** A project's sheet number is its place in the register. */
export function projectSheet(project: Project): string {
  return sheetNumber(getProjects().findIndex((p) => p.slug === project.slug) + 1);
}

/** Small uppercase monospace label: "SHEET 03 / PUNT". */
export function Label({
  children,
  className = '',
  as: Tag = 'p',
}: {
  children: ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}) {
  return (
    <Tag className={`a-mono text-[11px] uppercase tracking-[0.18em] lg:text-xs ${className}`}>
      {children}
    </Tag>
  );
}

/** A sheet heading: label (an h2 when `id` is given), rule, count. */
export function SheetRule({
  label,
  aside,
  id,
}: {
  label: ReactNode;
  aside?: ReactNode;
  id?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {id ? (
        <h2
          id={id}
          className="a-mono shrink-0 text-[11px] font-normal uppercase tracking-[0.18em] text-[#4E6558] lg:text-xs"
        >
          {label}
        </h2>
      ) : (
        <Label className="shrink-0 text-[#4E6558]" as="span">
          {label}
        </Label>
      )}
      <span aria-hidden="true" className="h-px min-w-8 grow bg-[#23261F]" />
      {aside && (
        <Label className="basis-full text-[#4B5046] lg:basis-auto" as="span">
          {aside}
        </Label>
      )}
    </div>
  );
}

/** Numbered badge before a section heading, as on her slides. */
export function Badge({ n }: { n: number }) {
  return (
    <span
      aria-hidden="true"
      className="a-mono flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4E6558] text-xs text-[#F4F3EE]"
    >
      {sheetNumber(n)}
    </span>
  );
}

export interface Spec {
  label: string;
  value: ReactNode;
}

/** Bordered label/value grid, like the title block of a drawing. */
export function SpecTable({
  specs,
  className = '',
}: {
  specs: readonly Spec[];
  className?: string;
}) {
  return (
    <dl className={`border-[1.5px] border-[#23261F] bg-[#EDEDE6] text-sm ${className}`}>
      {specs.map((spec, i) => (
        <div
          key={spec.label}
          className={`grid grid-cols-[6.5rem_minmax(0,1fr)] lg:grid-cols-[8rem_minmax(0,1fr)] ${i > 0 ? 'border-t border-[#23261F]' : ''}`}
        >
          <dt className="a-mono border-r border-[#23261F] px-3 py-2.5 text-[11px] uppercase tracking-[0.12em] text-[#4B5046]">
            {spec.label}
          </dt>
          <dd className="px-3 py-2.5">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** The same data as a grid of cells (the case-study header). */
export function SpecGrid({ specs }: { specs: readonly Spec[] }) {
  return (
    <dl className="grid grid-cols-2 border-l-[1.5px] border-t-[1.5px] border-[#23261F] bg-[#EDEDE6] text-sm xl:grid-cols-4">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="flex flex-col gap-1 border-b-[1.5px] border-r-[1.5px] border-[#23261F] px-3 py-2.5"
        >
          <dt className="a-mono text-[10px] uppercase tracking-[0.14em] text-[#4B5046] lg:text-[11px]">
            {spec.label}
          </dt>
          <dd>{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Captions that carry measurements get her dimension-line treatment; others stay plain. */
const MEASURED = /\d\s?(×|x)\s?\d|\bscale\b|\d\s?(mm|cm)\b|Ø/i;

export function Caption({ text }: { text: string }) {
  if (!MEASURED.test(text)) {
    return <figcaption className="mt-2 text-sm text-[#3B3F36]">{text}</figcaption>;
  }
  return (
    <figcaption className="a-mono mt-2 flex items-center gap-2 text-xs text-[#3B3F36]">
      <span aria-hidden="true">|◄</span>
      <span aria-hidden="true" className="h-px min-w-4 grow bg-[#3B3F36]" />
      <span className="text-center">{text}</span>
      <span aria-hidden="true" className="h-px min-w-4 grow bg-[#3B3F36]" />
      <span aria-hidden="true">►|</span>
    </figcaption>
  );
}

export function Plate({
  project,
  figure,
  sizes,
  preload,
  className = '',
}: {
  project: Project;
  figure: Figure;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  const image = figureImage(project, figure);
  return (
    <figure className={className}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        preload={preload}
        className="h-auto w-full border border-[#23261F] bg-white"
      />
      {figure.caption && <Caption text={figure.caption} />}
    </figure>
  );
}

/** Her text: paragraphs, lists and her own quoted words. */
export function Blocks({ blocks }: { blocks: readonly Block[] }) {
  return blocks.map((block, i) => {
    if (typeof block === 'string')
      return (
        <p key={i} className="text-[15px] leading-relaxed text-[#23261F] lg:text-base">
          {block}
        </p>
      );
    if ('list' in block)
      return (
        <ul key={i} className="flex flex-col gap-1.5 text-[15px] leading-relaxed lg:text-base">
          {block.list.map((item) => (
            <li key={item} className="grid grid-cols-[1.25rem_minmax(0,1fr)]">
              <span aria-hidden="true" className="a-mono text-[#4E6558]">
                –
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    return (
      <blockquote
        key={i}
        className="border-[1.5px] border-dashed border-[#4E6558] bg-[#EDEDE6] px-4 py-3 text-[15px] italic leading-relaxed lg:text-base"
      >
        {block.quote}
      </blockquote>
    );
  });
}

export const buttonDark =
  'a-dark inline-flex min-h-11 items-center justify-center gap-2 bg-[#23261F] px-5 text-[15px] font-medium text-[#F4F3EE] hover:bg-[#3B3F36]';
export const buttonLine =
  'inline-flex min-h-11 items-center justify-center gap-2 border-[1.5px] border-[#23261F] px-5 text-[15px] font-medium hover:bg-[#EDEDE6]';
