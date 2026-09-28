import type { Project } from '@/content';

/** Where a project sits in the room, read from its disciplines: screen, shelf or wall. */
export type Corner = 'screen' | 'shelf' | 'wall';

export const corners: readonly { id: Corner; anchor: string; heading: string }[] = [
  { id: 'screen', anchor: 'on-the-screen', heading: 'On the screen: interfaces' },
  { id: 'shelf', anchor: 'on-the-shelf', heading: 'On the shelf: products' },
  { id: 'wall', anchor: 'on-the-wall', heading: 'On the wall: brands and packaging' },
];

export function cornerOf(project: Project): Corner {
  const tags = project.tags.join(' ').toLowerCase();
  if (/ux|ui|website|app/.test(tags)) return 'screen';
  if (/brand|logo|packaging|marketing/.test(tags)) return 'wall';
  return 'shelf';
}
