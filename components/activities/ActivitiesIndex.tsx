import Image from 'next/image';
import Link from 'next/link';
import { activityImage, type Activity } from '@/content';

/** The neutral activities index; each variant restyles it. */
export default function ActivitiesIndex({ activities }: { activities: readonly Activity[] }) {
  return (
    <>
      <div className="w-full min-h-[100dvh] bg-[#E2E2DB] pt-28 pb-16 lg:py-32 px-4 md:px-16 lg:px-24 xl:px-36 flex justify-center items-center">
        <div className="w-full max-w-[1144px] flex flex-col justify-center">
          <div className="w-full px-8 md:px-[64px] lg:px-[124px] xl:px-[192px] flex flex-col">
            <h1 className="font-bold text-center text-2xl md:text-3xl">Activities</h1>
            <p className="mt-5 text-center">
              This is the space where I show a little bit of who I am, my passions and my tastes.
              What follows is a collection of projects that I do during my free time. Some of them
              are more professional and others less, but all of them have a little piece of my
              heart.
            </p>
          </div>
          <ul className="flex flex-col lg:flex-row gap-8 mt-11 justify-center items-center">
            {activities.map((activity) => {
              const card = activityImage(activity.card);
              const dark = activity.slug === 'blender';
              return (
                <li key={activity.slug}>
                  <Link
                    href={`/activities/${activity.slug}`}
                    className="relative flex items-end justify-center overflow-hidden rounded-3xl border-4 border-[#E6793B] w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[280px] xl:h-[280px] pb-12 transition-transform duration-200 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
                  >
                    <Image src={card.src} alt="" fill sizes="280px" className="object-cover" />
                    <span
                      className={`relative whitespace-nowrap rounded-full px-4 py-1 text-sm uppercase font-bold tracking-[3px] ${dark ? 'bg-black/60 text-white' : 'bg-[#F3E9C6]/90 text-black'}`}
                    >
                      {activity.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
