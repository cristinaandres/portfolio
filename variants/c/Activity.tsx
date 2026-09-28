import Image from 'next/image';
import Link from 'next/link';
import ActivityGallery from '@/components/activities/ActivityGallery';
import { activityImage, animalCrossingLogo, type Activity } from '@/content';
import { siteConfig } from '@/lib/site.config';

export default function MuestrarioActivity({ activity }: { activity: Activity }) {
  const logo = activityImage(animalCrossingLogo);
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 pb-20 pt-8 lg:px-10 lg:pt-14">
      <nav aria-label="Breadcrumb">
        <Link
          href="/activities"
          className="c-label flex min-h-11 items-center font-medium hover:text-[var(--c-accent)]"
        >
          ← Activities
        </Link>
      </nav>
      <header className="flex flex-col gap-4 border-b border-[var(--c-ink)] pb-8">
        {activity.slug === 'animal-crossing' ? (
          <h1>
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={`${siteConfig.name}'s Animal Crossing creative space`}
              sizes="(min-width: 768px) 294px, 60vw"
              preload
              className="h-auto w-[60vw] max-w-[294px]"
            />
          </h1>
        ) : (
          <h1 className="c-display text-[40px] font-medium leading-[1.02] lg:text-[64px]">
            Welcome to my <span className="italic">3D corner</span>
          </h1>
        )}
      </header>
      <div className="flex justify-center">
        <ActivityGallery images={activity.images} />
      </div>
    </div>
  );
}
