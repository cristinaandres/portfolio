import Image from 'next/image';
import Link from 'next/link';
import { activityImage, type Activity, type ActivityImage } from '@/content';
import { container, Label, sheetNumber } from './ui';

/** Her introduction to the Activities pages, in her words. */
const intro =
  'This is the space where I show a little bit of who I am, my passions and my tastes. What follows is a collection of projects that I do during my free time. Some of them are more professional and others less, but all of them have a little piece of my heart.';

export function PlanimetriaActivities({ activities }: { activities: readonly Activity[] }) {
  return (
    <div className={`${container} flex flex-col gap-10 pb-8 pt-8 lg:pt-12`}>
      <header className="flex max-w-[46rem] flex-col gap-4">
        <Label className="text-[#4E6558]">Sheet 03 / Activities</Label>
        <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] lg:text-[56px]">
          Activities
        </h1>
        <p className="text-base leading-relaxed lg:text-lg">{intro}</p>
      </header>
      <ul className="grid gap-4 lg:grid-cols-2">
        {activities.map((activity, i) => {
          const card = activityImage(activity.card);
          return (
            <li key={activity.slug}>
              <Link
                href={`/activities/${activity.slug}`}
                className="group flex flex-col border-[1.5px] border-[#23261F] bg-[#EDEDE6] hover:bg-[#DCE3DC]"
              >
                <Image
                  src={card.src}
                  width={card.width}
                  height={card.height}
                  alt=""
                  sizes="(min-width: 768px) 50vw, 100vw"
                  preload={i === 0}
                  className="aspect-[16/9] h-auto w-full border-b-[1.5px] border-[#23261F] object-cover"
                />
                <span className="flex items-center justify-between gap-3 p-4">
                  <span className="text-xl font-semibold group-hover:underline">
                    {activity.title}
                  </span>
                  <Label as="span" className="text-[#4E6558]">
                    03.{sheetNumber(i + 1)} →
                  </Label>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Gallery({ images }: { images: readonly ActivityImage[] }) {
  const single = images.length === 1;
  return (
    <ul className={`grid gap-4 ${single ? 'max-w-4xl' : 'lg:grid-cols-2 xl:grid-cols-3'}`}>
      {images.map((image, i) => {
        const { src, width, height, alt } = activityImage(image);
        return (
          <li key={image.id}>
            <figure className="flex flex-col gap-2">
              <a href={src} className="block">
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                  sizes={
                    single
                      ? '(min-width: 768px) 896px, 100vw'
                      : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                  }
                  preload={i === 0}
                  className="h-auto w-full border border-[#23261F] bg-white"
                />
              </a>
              <figcaption className="a-mono text-[11px] uppercase tracking-[0.14em] text-[#4B5046]">
                Fig. {sheetNumber(i + 1)}
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}

export function PlanimetriaActivity({ activity }: { activity: Activity }) {
  return (
    <div className={`${container} flex flex-col gap-8 pb-8 pt-8 lg:pt-12`}>
      <header className="flex flex-col gap-3">
        <Link
          href="/activities"
          className="a-mono inline-flex min-h-11 w-fit items-center text-xs uppercase tracking-[0.14em] text-[#4B5046] hover:text-[#23261F]"
        >
          ← Sheet 03 / Activities
        </Link>
        <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] lg:text-[56px]">
          {activity.title}
        </h1>
      </header>
      <Gallery images={activity.images} />
    </div>
  );
}
