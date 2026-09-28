import type { MetadataRoute } from 'next';
import { getProjects, workPath } from '@/content';
import { absoluteUrl } from '@/lib/site.config';
import { staticPages } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...getProjects().map((p) => ({
      url: absoluteUrl(workPath(p)),
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
