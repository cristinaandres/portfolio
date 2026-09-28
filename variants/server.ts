import { cache } from 'react';
import { cookies } from 'next/headers';
import {
  DEFAULT_VARIANT,
  VARIANT_COOKIE,
  isVariantId,
  variantsEnabled,
  type VariantId,
} from './config';
import { registry } from './registry';

/**
 * The variant for this request. In production it is always the default and cookies are never
 * read, so pages stay static. Elsewhere the proxy has already copied `?variant=` into the cookie.
 */
export const getVariant = cache(async (): Promise<VariantId> => {
  if (!variantsEnabled()) return DEFAULT_VARIANT;
  const value = (await cookies()).get(VARIANT_COOKIE)?.value;
  return isVariantId(value) ? value : DEFAULT_VARIANT;
});

export async function getViews() {
  return registry[await getVariant()];
}
