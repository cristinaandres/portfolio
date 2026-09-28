import type { Project } from '../types.ts';
import { aqualung } from './aqualung.ts';
import { curefab } from './curefab.ts';
import { punt } from './punt.ts';
import { montezuma } from './montezuma.ts';
import { smurfitKappa } from './smurfit-kappa.ts';
import { aresDomus } from './ares-domus.ts';
import { sakana } from './sakana.ts';
import { ciclogreen } from './ciclogreen.ts';
import { blossom } from './blossom.ts';

/** Site order: most recent professional work first. */
export const projects: readonly Project[] = [
  aqualung,
  curefab,
  punt,
  montezuma,
  smurfitKappa,
  aresDomus,
  sakana,
  ciclogreen,
  blossom,
];
