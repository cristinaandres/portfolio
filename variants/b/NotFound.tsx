import Link from 'next/link';
import Portrait from './Portrait';

const links = [
  { href: '/', label: 'Back to the room' },
  { href: '/#all-work', label: 'All work' },
  { href: '/about', label: 'About me' },
];

export default function IslaNotFound() {
  return (
    <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6 px-4 pt-16 text-center lg:pt-24">
      <Portrait size={88} />
      <p className="text-[13px] font-medium uppercase tracking-[4px]">Error 404</p>
      <h1 className="isla-display text-[44px] font-semibold leading-none">Page not found</h1>
      <p className="text-base leading-relaxed">
        The page you are looking for has moved, no longer exists, or never existed in the first
        place. Let&apos;s get you back on track.
      </p>
      <nav aria-label="Helpful links">
        <ul className="flex flex-wrap justify-center gap-3">
          {links.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex min-h-11 items-center rounded-full px-5 text-sm font-medium ${i === 0 ? 'bg-[#3A2A33] text-[#FBF3EA]' : 'bg-[#FBF3EA]'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
