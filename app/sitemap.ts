import type { MetadataRoute } from 'next';
import { getProjects } from '@/content';
import { siteConfig } from '@/lib/site.config';

/** Static routes that exist today; /about joins once it is rebuilt. */
const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/activities', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/activities/blender', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/activities/animal-crossing', priority: 0.6, changeFrequency: 'monthly' },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: `${siteConfig.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...getProjects().map((p) => ({
      url: `${siteConfig.url}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
