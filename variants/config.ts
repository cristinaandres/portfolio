// Which variants exist and when switching is allowed. Plain data: proxy, server and client all import it.
// Removing a variant later = delete its directory, its entry here and in registry.ts.

export const variants = {
  a: { name: 'Planimetría' },
  b: { name: 'Isla' },
  c: { name: 'Muestrario' },
} as const;

export type VariantId = keyof typeof variants;

export const DEFAULT_VARIANT: VariantId = 'a';

export const VARIANT_COOKIE = 'variant';

export const VARIANT_PARAM = 'variant';

export function isVariantId(value: unknown): value is VariantId {
  return typeof value === 'string' && value in variants;
}

/** Variants and the switcher exist only outside production (previews, local builds). */
export function variantsEnabled(): boolean {
  return process.env.VERCEL_ENV !== 'production';
}
