import Image from 'next/image';
import type { ReactNode } from 'react';
import ContactButton from '@/components/contact/ContactButton';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site.config';

function Row({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="grid gap-4 border-t border-[var(--c-ink)] pt-6 lg:grid-cols-[14rem_1fr] lg:gap-10"
    >
      <h2 id={id} className="c-label font-medium">
        {label}
      </h2>
      <div>{children}</div>
    </section>
  );
}

export default function MuestrarioAbout() {
  return (
    <article className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 pb-20 pt-8 lg:px-10 lg:pt-14">
      <header className="grid gap-8 lg:grid-cols-[1fr_16rem] lg:items-end xl:grid-cols-[1fr_20rem] xl:gap-16">
        <div className="flex flex-col gap-5">
          <p className="c-label text-[var(--c-muted)]">About · {profile.location}</p>
          <h1 className="c-display text-[44px] font-medium leading-[1] lg:text-[64px] xl:text-[80px]">
            {siteConfig.name},<br />
            <span className="italic">{profile.positioning}</span>
          </h1>
          {profile.bio.map((p) => (
            <p key={p} className="max-w-2xl text-base leading-relaxed lg:text-[17px]">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="c-label flex min-h-11 items-center bg-[var(--c-ink)] px-5 font-medium text-[var(--c-ground)] hover:bg-[var(--c-accent)]"
            >
              Download my CV (PDF)
            </a>
            <ContactButton className="c-label flex min-h-11 items-center border border-[var(--c-ink)] px-5 font-medium hover:bg-[var(--c-ink)] hover:text-[var(--c-ground)]" />
          </div>
        </div>
        <Image
          src={profile.photo.src}
          width={profile.photo.width}
          height={profile.photo.height}
          alt={profile.photo.alt}
          sizes="(min-width: 1024px) 20rem, (min-width: 768px) 16rem, 60vw"
          preload
          className="h-auto w-3/5 grayscale lg:w-full"
        />
      </header>

      <figure className="border-l-[3px] border-[#D9ABBA] pl-5">
        <blockquote className="c-display text-[22px] italic leading-snug lg:text-[30px]">
          “{profile.curiousFact}”
        </blockquote>
      </figure>

      <Row id="experience" label="Experience">
        <ol className="flex flex-col gap-6">
          {profile.experience.map((role) => (
            <li
              key={role.organisation + role.period}
              className="grid gap-1 lg:grid-cols-[11rem_1fr] lg:gap-6"
            >
              <p className="c-label text-[11px] text-[var(--c-muted)] lg:pt-1.5">{role.period}</p>
              <div className="flex flex-col gap-1">
                <h3 className="c-display text-xl font-semibold lg:text-2xl">{role.organisation}</h3>
                <p className="text-sm">
                  {role.title} · {role.place}
                </p>
                {role.note && (
                  <p className="text-sm leading-relaxed text-[var(--c-muted)]">{role.note}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Row>

      <Row id="education" label="Education">
        <ol className="flex flex-col gap-6">
          {profile.education.map((study) => (
            <li key={study.school} className="grid gap-1 lg:grid-cols-[11rem_1fr] lg:gap-6">
              <p className="c-label text-[11px] text-[var(--c-muted)] lg:pt-1.5">{study.period}</p>
              <div className="flex flex-col gap-1">
                <h3 className="c-display text-xl font-semibold lg:text-2xl">{study.title}</h3>
                <p className="text-sm">
                  {study.school} · {study.place}
                </p>
                {study.note && (
                  <p className="text-sm leading-relaxed text-[var(--c-muted)]">{study.note}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Row>

      <Row id="languages" label="Languages">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3 xl:grid-cols-5">
          {profile.languages.map((l) => (
            <div key={l.name} className="flex flex-col">
              <dt className="c-display text-lg font-semibold">{l.name}</dt>
              <dd className="text-sm text-[var(--c-muted)]">{l.level}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row id="tools" label="Tools">
        <ul className="flex flex-wrap gap-2">
          {profile.tools.map((tool) => (
            <li key={tool} className="border border-[var(--c-ink)] px-3 py-1 text-sm">
              {tool}
            </li>
          ))}
        </ul>
      </Row>
    </article>
  );
}
