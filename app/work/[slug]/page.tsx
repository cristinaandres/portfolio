import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudy from '@/components/work/CaseStudy';
import { JsonLd, breadcrumbSchema, projectSchema } from '@/components/seo/JsonLd';
import { figureImage, getAdjacent, getProject, getProjects } from '@/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const image = figureImage(project, project.thumbnail);
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: 'article',
      url: `/work/${project.slug}`,
      title: project.name,
      description: project.summary,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: { card: 'summary_large_image', title: project.name, description: project.summary },
  };
}

export default async function WorkPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const { previous, next } = getAdjacent(project.slug);
  return (
    <>
      <JsonLd id="ld-work" data={projectSchema(project)} />
      <JsonLd
        id="ld-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Work', path: '/' },
          { name: project.title, path: `/work/${project.slug}` },
        ])}
      />
      <CaseStudy project={project} previous={previous} next={next} />
    </>
  );
}
