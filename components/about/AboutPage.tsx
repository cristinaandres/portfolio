import Image from 'next/image';
import ContactButton from '@/components/contact/ContactButton';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site.config';

/** The neutral /about rendering; each variant restyles it. */
export default function AboutPage() {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-12 px-4 pb-24 pt-32">
      <header className="grid gap-8 md:grid-cols-[1fr_14rem] md:items-start">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-widest">{profile.location}</p>
          <h1 className="text-4xl font-bold">
            {siteConfig.name}, {profile.positioning}
          </h1>
          {profile.bio.map((p) => (
            <p key={p} className="text-lg">
              {p}
            </p>
          ))}
          <p className="italic">“{profile.curiousFact}”</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center rounded-md bg-black px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Download my CV (PDF)
            </a>
            <ContactButton className="flex min-h-11 items-center rounded-md border border-black px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" />
          </div>
        </div>
        <Image
          src={profile.photo.src}
          width={profile.photo.width}
          height={profile.photo.height}
          alt={profile.photo.alt}
          sizes="(min-width: 768px) 14rem, 60vw"
          preload
          className="h-auto w-3/5 grayscale md:w-full"
        />
      </header>

      <section aria-labelledby="experience" className="flex flex-col gap-4">
        <h2 id="experience" className="text-2xl font-bold">
          Experience
        </h2>
        <ol className="flex flex-col gap-6">
          {profile.experience.map((role) => (
            <li key={role.organisation + role.period} className="flex flex-col gap-1">
              <h3 className="font-bold">
                {role.title}, {role.organisation}
              </h3>
              <p className="text-sm">
                {role.period} · {role.place}
              </p>
              {role.note && <p>{role.note}</p>}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="education" className="flex flex-col gap-4">
        <h2 id="education" className="text-2xl font-bold">
          Education
        </h2>
        <ol className="flex flex-col gap-6">
          {profile.education.map((study) => (
            <li key={study.school} className="flex flex-col gap-1">
              <h3 className="font-bold">
                {study.title}, {study.school}
              </h3>
              <p className="text-sm">
                {study.period} · {study.place}
              </p>
              {study.note && <p>{study.note}</p>}
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-12 sm:grid-cols-2">
        <section aria-labelledby="languages" className="flex flex-col gap-4">
          <h2 id="languages" className="text-2xl font-bold">
            Languages
          </h2>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
            {profile.languages.map((l) => (
              <div key={l.name} className="contents">
                <dt className="font-bold">{l.name}</dt>
                <dd>{l.level}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section aria-labelledby="tools" className="flex flex-col gap-4">
          <h2 id="tools" className="text-2xl font-bold">
            Tools
          </h2>
          <ul className="flex flex-wrap gap-2">
            {profile.tools.map((tool) => (
              <li key={tool} className="rounded-full border border-black px-3 py-1 text-sm">
                {tool}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
