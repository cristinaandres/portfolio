import Image from 'next/image';
import { activityImage, type ActivityImage } from '@/content';

/** A plain grid of an activity's images; each opens full size in a new view. */
export default function ActivityGallery({ images }: { images: readonly ActivityImage[] }) {
  const single = images.length === 1;
  return (
    <ul
      className={`grid w-full gap-4 ${single ? 'max-w-3xl' : 'max-w-6xl sm:grid-cols-2 lg:grid-cols-3'}`}
    >
      {images.map((image, i) => {
        const { src, width, height, alt } = activityImage(image);
        return (
          <li key={image.id}>
            <a
              href={src}
              className="block rounded-lg focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                sizes={
                  single
                    ? '(min-width: 768px) 768px, 100vw'
                    : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                }
                preload={i === 0}
                className="h-auto w-full rounded-lg"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
