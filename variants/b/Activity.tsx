import Image from 'next/image';
import Link from 'next/link';
import ActivityGallery from '@/components/activities/ActivityGallery';
import { activityImage, animalCrossingLogo, type Activity } from '@/content';
import { siteConfig } from '@/lib/site.config';

export default function IslaActivity({ activity }: { activity: Activity }) {
  const logo = activityImage(animalCrossingLogo);
  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-4 pt-6 lg:gap-8 lg:px-8 lg:pt-10">
      <Link
        href="/activities"
        className="flex min-h-11 items-center self-start rounded-full bg-[#FBF3EA] px-4 text-sm font-medium"
      >
        ← Back to the console
      </Link>
      <header className="flex flex-col items-center gap-3 rounded-[28px] bg-[#A7B4CF] p-6 text-center text-[#1F2433] lg:p-8">
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
          <h1 className="isla-display text-[40px] font-semibold leading-tight lg:text-[52px]">
            Welcome to my 3D corner
          </h1>
        )}
        <p className="text-sm font-medium">{activity.title}</p>
      </header>
      <div className="flex justify-center rounded-3xl bg-[#FBF3EA] p-3 lg:p-5 [&_img]:rounded-2xl">
        <ActivityGallery images={activity.images} />
      </div>
    </div>
  );
}
