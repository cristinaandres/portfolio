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
        <button disabled={isActive(href)} onClick={handleClick} className={`h-full cursor-pointer disabled:cursor-default px-0 py-2 uppercase text-xs tracking-[6px] hover:font-bold flex items-start gap-3 justify-center transition-[font-weight] duration-300 text-center ${isActive(href) ? `border-b-4 border-${pathname === '/' ? nameColor : 'black'} font-bold` : 'border-none font-normal'}`}>
            {label}
        </button>

    );
}