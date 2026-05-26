import React, { useEffect, useState, useRef } from 'react';

type AnimatedTextProps = {
  text: string;
  animate: boolean;
  animationKey: number;
  additionalClassName: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  animate,
  animationKey,
  additionalClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.innerHTML = '';

      text.split(' ').forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word');
        wordSpan.style.animationDelay = `${index * 0.04}s`;

        word.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.classList.add('letter');
          charSpan.innerText = char;
          wordSpan.appendChild(charSpan);
        });

        container.appendChild(wordSpan);
        container.appendChild(document.createTextNode(' '));
      });
    }
  }, [text, animationKey]);

  return (
    <div
      ref={containerRef}
      className={` overflow-hidden inline-block py-1 ${animate ? 'slide-in-from-top' : ''} ${additionalClassName}`}
    ></div>
  );
};
export default AnimatedText;
