import Image from 'next/image';
import ContactButton from '@/components/contact/ContactButton';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site.config';
import Portrait from './Portrait';

function Card({
  id,
  title,
  children,
  className = '',
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      aria-labelledby={id}
      className={`flex flex-col gap-4 rounded-3xl bg-[#FBF3EA] p-5 lg:p-7 ${className}`}
    >
      <h2 id={id} className="isla-display text-[26px] font-semibold">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function IslaAbout() {
  return (
    <article className="mx-auto flex max-w-[1100px] flex-col gap-6 px-4 pt-6 lg:gap-8 lg:px-8 lg:pt-10">
      <header className="grid gap-6 rounded-[28px] bg-[#D9ABBA] p-5 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-center lg:gap-10 lg:p-8">
        <div className="flex flex-col gap-4">
          <p className="text-[13px] font-medium">The window · {profile.location}</p>
          <h1 className="isla-display text-[40px] font-semibold leading-none lg:text-[52px]">
            {siteConfig.name}
          </h1>
          <p className="isla-display text-xl">{profile.positioning}</p>
          {profile.bio.map((p) => (
            <p key={p} className="text-base leading-relaxed">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center rounded-full bg-[#3A2A33] px-5 text-sm font-medium text-[#FBF3EA] hover:bg-[#8C4A62]"
            >
              Download my CV (PDF)
            </a>
            <ContactButton className="flex min-h-11 items-center rounded-full bg-[#FBF3EA] px-5 text-sm font-medium">
              Say hi
            </ContactButton>
          </div>
        </div>
        <Image
          src={profile.photo.src}
          width={profile.photo.width}
          height={profile.photo.height}
          alt={profile.photo.alt}
          sizes="(min-width: 768px) 16rem, 60vw"
          preload
          className="h-auto w-3/5 justify-self-center rounded-[24px] lg:w-full"
        />
      </header>

      <figure className="flex items-start gap-4 rounded-3xl bg-[#FBF3EA] p-5">
        <Portrait size={56} />
        <blockquote className="text-base leading-relaxed">“{profile.curiousFact}”</blockquote>
      </figure>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Card id="experience" title="Experience">
          <ol className="flex flex-col gap-5">
            {profile.experience.map((role) => (
              <li key={role.organisation + role.period} className="flex flex-col gap-1">
                <h3 className="font-semibold">
                  {role.title}, {role.organisation}
                </h3>
                <p className="text-sm text-[#6B4F5B]">
                  {role.period} · {role.place}
                </p>
                {role.note && <p className="text-[15px] leading-relaxed">{role.note}</p>}
              </li>
            ))}
          </ol>
        </Card>
        <Card id="education" title="Education">
          <ol className="flex flex-col gap-5">
            {profile.education.map((study) => (
              <li key={study.school} className="flex flex-col gap-1">
                <h3 className="font-semibold">
                  {study.title}, {study.school}
                </h3>
                <p className="text-sm text-[#6B4F5B]">
                  {study.period} · {study.place}
                </p>
                {study.note && <p className="text-[15px] leading-relaxed">{study.note}</p>}
              </li>
            ))}
          </ol>
        </Card>
        <Card id="languages" title="Languages">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
            {profile.languages.map((l) => (
              <div key={l.name} className="contents">
                <dt className="font-semibold">{l.name}</dt>
                <dd>{l.level}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Card id="tools" title="Tools">
          <ul className="flex flex-wrap gap-2">
            {profile.tools.map((tool) => (
              <li key={tool} className="rounded-full bg-[#F6E3E5] px-3 py-1.5 text-sm font-medium">
                {tool}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </article>
  );
}
