import Image from 'next/image';
import ActivityGallery from '@/components/activities/ActivityGallery';
import { activityImage, animalCrossingLogo, type Activity } from '@/content';
import { siteConfig } from '@/lib/site.config';

/** The neutral page for one activity; each variant restyles it. */
export default function ActivityPage({ activity }: { activity: Activity }) {
  const backdrop = activityImage(activity.backdrop);
  if (activity.slug === 'animal-crossing') {
    const logo = activityImage(animalCrossingLogo);
    const animalCrossing = activity;
    return (
      <>
        <div className="relative flex min-h-[100dvh] flex-col items-center gap-10 overflow-hidden bg-[#6E9A8A] px-4 pb-40 pt-28 lg:px-12 lg:pt-36">
          <Image
            src={backdrop.src}
            alt=""
            width={backdrop.width}
            height={backdrop.height}
            sizes="100vw"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
          />
          <h1 className="relative">
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={`${siteConfig.name}'s Animal Crossing creative space`}
              sizes="(min-width: 1024px) 294px, 60vw"
              className="h-auto w-[60vw] max-w-[294px]"
              preload
            />
          </h1>
          <div className="relative flex w-full justify-center">
            <ActivityGallery images={animalCrossing.images} />
          </div>
        </div>
      </>
    );
  }
  const blender = activity;
  return (
    <>
      <div className="relative flex min-h-[100dvh] flex-col items-center gap-12 overflow-hidden bg-white px-4 pb-48 pt-28 lg:px-12 lg:pt-36">
        <Image
          src={backdrop.src}
          alt=""
          width={backdrop.width}
          height={backdrop.height}
          sizes="100vw"
          className="pointer-events-none absolute bottom-0 left-0 h-auto w-full"
        />
        <h1 className="relative font-inter font-bold text-3xl sm:text-4xl lg:text-[56px] leading-tight max-w-[20ch] text-center">
          Welcome to my 3D corner
        </h1>
        <div className="relative flex w-full justify-center">
          <ActivityGallery images={blender.images} />
        </div>
      </div>
    </>
  );
}
