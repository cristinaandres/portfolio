import { views as a } from './a';
import { views as b } from './b';
import { views as c } from './c';
import type { VariantId } from './config';
import type { VariantViews } from './types';

export const registry: Record<VariantId, VariantViews> = { a, b, c };
