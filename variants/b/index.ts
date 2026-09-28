import { neutralViews } from '../neutral';
import type { VariantViews } from '../types';

// Variant B (Isla). Replace neutral views one by one with this variant's own.
export const views: VariantViews = {
  ...neutralViews,
};
