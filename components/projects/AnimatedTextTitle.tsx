import React, { useEffect, useRef, useState } from "react";

type AnimatedTextProps = {
    text: string;
    animate: boolean;
    animationKey: number;
    onClick?: () => void;
    additionalClassName?: string;
};

const AnimatedTextTitle: React.FC<AnimatedTextProps> = ({ text, animate, animationKey, onClick, additionalClassName }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            container.innerHTML = '';

            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.classList.add('letter');
                if (char === ' ') {
                    span.style.width = '0.5em';
                }
                span.style.animationDelay = `${index * 0.02}s`;
                span.innerText = char;
                container.appendChild(span);
            });
        }
    }, [text, animationKey]);

    return (
        <div
            onClick={onClick}
            ref={containerRef}
            className={`font-bodoni text-clampProject uppercase text-center font-bold cursor-pointer hover:text-[#FF73F9] overflow-hidden inline-block py-1 ${animate ? 'slide-in-from-top' : ''} ${additionalClassName}`}
        ></div>
    );
};

export default AnimatedTextTitle
