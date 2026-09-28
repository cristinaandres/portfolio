import Image from 'next/image';
import Link from 'next/link';
import { activityImage, type Activity } from '@/content';

// Her own words, from the Activities page of the current site.
const intro =
  'This is the space where I show a little bit of who I am, my passions and my tastes. What follows is a collection of projects that I do during my free time. Some of them are more professional and others less, but all of them have a little piece of my heart.';

// Colours drawn from the activities themselves: the pink of her Blender room, the sea green of her island.
const swatches: Record<Activity['slug'], { color: string }> = {
  blender: { color: '#D9ABBA' },
  'animal-crossing': { color: '#6E9A8A' },
};

export default function MuestrarioActivities({ activities }: { activities: readonly Activity[] }) {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 pb-20 pt-8 lg:px-10 lg:pt-14">
      <header className="flex max-w-3xl flex-col gap-5 border-b border-[var(--c-ink)] pb-8">
        <p className="c-label text-[var(--c-muted)]">Personal projects</p>
        <h1 className="c-display text-[44px] font-medium leading-[1] lg:text-[64px]">Activities</h1>
        <p className="text-base leading-relaxed lg:text-[17px]">{intro}</p>
      </header>
      <ul className="grid gap-6 lg:grid-cols-2">
        {activities.map((activity, i) => {
          const card = activityImage(activity.card);
          const swatch = swatches[activity.slug];
          return (
            <li key={activity.slug}>
              <Link
                href={`/activities/${activity.slug}`}
                className="c-swatch group flex flex-col bg-white shadow-[0_1px_0_var(--c-rule)]"
              >
                <div className="relative aspect-[16/10] p-5" style={{ background: swatch.color }}>
                  <div className="relative h-full w-full">
                    <Image
                      src={card.src}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 45vw, 92vw"
                      preload={i === 0}
                      className="object-cover shadow-[0_8px_20px_rgb(0_0_0/0.18)]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <span className="c-label text-[11px] text-[var(--c-muted)]">
                    {String(i + 1).padStart(2, '0')} · {swatch.color}
                  </span>
                  <span className="c-display text-[26px] font-semibold group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                    {activity.title}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
