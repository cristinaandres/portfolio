// The site's static pages, shared by the sitemap and the llms files. Case studies come from
// the content module.

export interface StaticPage {
  path: string;
  name: string;
  description: string;
  priority: number;
  changeFrequency: 'monthly' | 'yearly';
  /** Personal side work, listed under Activities in llms-full.txt. */
  activity?: boolean;
}

export const staticPages: readonly StaticPage[] = [
  {
    path: '/',
    name: 'Home / Selected work',
    description: 'All projects with covers.',
    priority: 1,
    changeFrequency: 'monthly',
  },
  {
    path: '/about',
    name: 'About',
    description: 'Biography, experience, education, languages, tools and CV.',
    priority: 0.9,
    changeFrequency: 'yearly',
  },
  {
    path: '/activities',
    name: 'Activities',
    description: 'Personal creative projects.',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/activities/blender',
    name: '3D Modeling in Blender',
    description: 'Personal 3D experiments.',
    priority: 0.6,
    changeFrequency: 'monthly',
    activity: true,
  },
  {
    path: '/activities/animal-crossing',
    name: 'Animal Crossing',
    description: 'Animal Crossing island design showcase.',
    priority: 0.6,
    changeFrequency: 'monthly',
    activity: true,
  },
];
