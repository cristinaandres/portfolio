import Image from 'next/image';
import Link from 'next/link';
import { activityImage, type Activity } from '@/content';

export default function IslaActivities({ activities }: { activities: readonly Activity[] }) {
  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-4 pt-6 lg:px-8 lg:pt-10">
      <header className="flex flex-col gap-4 rounded-[28px] bg-[#A7B4CF] p-5 text-[#1F2433] lg:p-8">
        <p className="text-[13px] font-medium">The console</p>
        <h1 className="isla-display text-[40px] font-semibold leading-none lg:text-[52px]">
          Activities
        </h1>
        <p className="max-w-[60ch] text-base leading-relaxed">
          This is the space where I show a little bit of who I am, my passions and my tastes. What
          follows is a collection of projects that I do during my free time. Some of them are more
          professional and others less, but all of them have a little piece of my heart.
        </p>
      </header>
      <ul className="grid gap-6 lg:grid-cols-2">
        {activities.map((activity) => {
          const card = activityImage(activity.card);
          return (
            <li key={activity.slug}>
              <Link
                href={`/activities/${activity.slug}`}
                className="isla-lift flex flex-col gap-3 rounded-3xl bg-[#FBF3EA] p-3"
              >
                <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={card.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 520px, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="isla-display px-2 pb-2 text-2xl font-semibold">
                  {activity.title} →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
