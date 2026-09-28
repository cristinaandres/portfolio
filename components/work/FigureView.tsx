import Image from 'next/image';
import { figureImage, type Figure, type Project } from '@/content';

interface FigureViewProps {
  project: Project;
  figure: Figure;
  sizes?: string;
  preload?: boolean;
  className?: string;
}

export default function FigureView({
  project,
  figure,
  sizes = '(min-width: 1024px) 960px, 100vw',
  preload,
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
        preload={preload}
        className="h-auto w-full"
      />
      {figure.caption && <figcaption className="mt-2 text-sm">{figure.caption}</figcaption>}
    </figure>
  );
}
