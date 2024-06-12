// FILE: /components/TransitionLink.tsx

"use client";

import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/utils/animate";
import Link from "next/link";

export default function TransitionLink({
    href,
    label,
    nameColor,
}: {
    href: string;
    label: string;
    nameColor: string;
}) {
    let textColor: string;
    const pathname = usePathname();
    if (pathname !== '/') {
        textColor = 'black;'
    }
    else {
        textColor = nameColor;
    }
    const isActive = (href: string) => pathname === href;

    const router = useRouter();

    const handleClick = () => {
        animatePageOut(href, router);
    };

    return (
        <button onClick={handleClick} className={`p-0 uppercase text-xs tracking-[6px] hover:font-bold flex items-center justify-center transition-[font-weight] duration-300 ${isActive(href) ? `border-b-3 border-${pathname === href ? textColor : 'black'} font-bold` : 'border-none font-normal'}`}>
            {label}
        </button>

    );
}