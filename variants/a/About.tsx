import Image from 'next/image';
import ContactButton from '@/components/contact/ContactButton';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site.config';
import { buttonDark, buttonLine, container, Label, SheetRule, SpecTable } from './ui';

interface Entry {
  heading: string;
  period: string;
  place: string;
  note?: string;
}

/** Experience and education as rows of a parts list. */
function Register({ id, label, entries }: { id: string; label: string; entries: Entry[] }) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-4">
      <SheetRule id={id} label={label} />
      <ol className="border-[1.5px] border-[#23261F] bg-[#EDEDE6]">
        {entries.map((entry, i) => (
          <li
            key={entry.heading}
            className={`grid gap-1 p-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-6 ${i > 0 ? 'border-t border-[#23261F]' : ''}`}
          >
            <p className="a-mono text-xs uppercase tracking-[0.1em] text-[#4E6558]">
              {entry.period}
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold leading-snug">{entry.heading}</h3>
              <p className="text-sm text-[#3B3F36]">{entry.place}</p>
              {entry.note && <p className="text-[15px] leading-relaxed">{entry.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function PlanimetriaAbout() {
  return (
    <article className={`${container} flex flex-col gap-12 pb-8 pt-8 lg:gap-16 lg:pt-12`}>
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start xl:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] xl:gap-12">
        <div className="flex flex-col gap-5">
          <Label className="text-[#4E6558]">Sheet 02 / About</Label>
          <h1 className="flex flex-col gap-1">
            <span className="text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] lg:text-[56px]">
              {siteConfig.name}
            </span>
            <span className="text-xl font-medium text-[#3B3F36] lg:text-2xl">
              {profile.positioning}
            </span>
          </h1>
          {profile.bio.map((p) => (
            <p key={p} className="max-w-[44rem] text-base leading-relaxed lg:text-lg">
              {p}
            </p>
          ))}
          <blockquote className="max-w-[44rem] border-[1.5px] border-dashed border-[#4E6558] bg-[#EDEDE6] px-4 py-3 italic">
            “{profile.curiousFact}”
          </blockquote>
          <div className="flex flex-wrap gap-3">
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className={buttonDark}>
              Download my CV (PDF)
            </a>
            <ContactButton className={buttonLine} />
          </div>
        </div>
        <figure className="flex flex-col gap-2">
          <Image
            src={profile.photo.src}
            width={profile.photo.width}
            height={profile.photo.height}
            alt={profile.photo.alt}
            sizes="(min-width: 1024px) 22vw, (min-width: 768px) 16rem, 60vw"
            preload
            className="h-auto w-3/5 border-[1.5px] border-[#23261F] grayscale lg:w-full"
          />
        </figure>
      </header>

      <SpecTable
        className="xl:max-w-[60%]"
        specs={[
          { label: 'Based', value: profile.location },
          {
            label: 'Languages',
            value: (
              <ul className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
                {profile.languages.map((l) => (
                  <li key={l.name} className="contents">
                    <span className="font-medium">{l.name}</span>
                    <span className="text-[#3B3F36]">{l.level}</span>
                  </li>
                ))}
              </ul>
            ),
          },
          { label: 'Tools', value: profile.tools.join(' · ') },
        ]}
      />

      <Register
        id="experience"
        label="Experience"
        entries={profile.experience.map((r) => ({
          heading: `${r.title}, ${r.organisation}`,
          period: r.period,
          place: r.place,
          note: r.note,
        }))}
      />
      <Register
        id="education"
        label="Education"
        entries={profile.education.map((s) => ({
          heading: `${s.title}, ${s.school}`,
          period: s.period,
          place: s.place,
          note: s.note,
        }))}
      />
    </article>
  );
}
