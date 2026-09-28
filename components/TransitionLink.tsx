'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/** A navigation link that marks the current section. (The page-transition curtain is gone.) */
export default function TransitionLink({
  href,
  label,
  nameColor,
}: {
  href: string;
  label: string;
  nameColor: string;
}) {
  const pathname = usePathname();
  const section = href.split('/')[1];
  const active = section ? pathname.startsWith(`/${section}`) : pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`h-full px-0 py-2 uppercase text-xs tracking-[6px] hover:font-bold flex items-start gap-3 justify-center text-center ${active ? `border-b-4 border-${pathname === '/' ? nameColor : 'black'} font-bold` : 'border-none font-normal'}`}
    >
      {label}
    </Link>
  );
}
