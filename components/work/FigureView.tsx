import Image from 'next/image';
import { figureImage, type Figure, type Project } from '@/content';

interface FigureViewProps {
  project: Project;
  figure: Figure;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export default function FigureView({
  project,
  figure,
  sizes = '(min-width: 1024px) 960px, 100vw',
  priority,
  className,
}: FigureViewProps) {
  const image = figureImage(project, figure);
  return (
    <figure className={className}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
      {figure.caption && <figcaption className="mt-2 text-sm">{figure.caption}</figcaption>}
    </figure>
  );
}
