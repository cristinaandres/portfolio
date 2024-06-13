// FILE: /components/TransitionLink.tsx

"use client";

import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/utils/animate";
import { useState } from "react";

export default function TransitionLink({
    href,
    label,
    nameColor,
}: {
    href: string;
    label: string;
    nameColor: string;
}) {

    const [textColor, setTextColor] = useState<string>('');
    const pathname = usePathname();


    const isActive = (href: string) => pathname === href;

    const router = useRouter();

    const handleClick = () => {
        animatePageOut(href, router);
    };

    return (
        <button disabled={isActive(href)} onClick={handleClick} className={`cursor-pointer disabled:cursor-default p-0 uppercase text-xs tracking-[6px] hover:font-bold flex items-center justify-center transition-[font-weight] duration-300 ${isActive(href) ? `border-b-3 border-${pathname === '/' ? nameColor : 'black'} font-bold` : 'border-none font-normal'}`}>
            {label}
        </button>

    );
}