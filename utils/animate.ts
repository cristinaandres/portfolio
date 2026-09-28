import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const animatePageIn = () => {
  const transitionElement = document.getElementById('transition-element');
  const path = document.querySelector('.path');

  if (transitionElement && prefersReducedMotion()) {
    gsap.set(transitionElement, { yPercent: 100 });
    return;
  }

  if (transitionElement && path) {
    const start = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';
    const end = 'M 0 100 V 0 Q 50 10 100 0 V 100 z';

    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 0,
    })
      .to(path, { duration: 0.4, attr: { d: start }, ease: 'power2.in' })
      .to(path, { duration: 0.4, attr: { d: end }, ease: 'power2.out' })
      .to(
        transitionElement,
        {
          yPercent: 100,
          duration: 1.2,
          ease: 'power1.out',
        },
        '<'
      );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  if (prefersReducedMotion()) {
    router.push(href);
    return;
  }

  const animationWrapper = document.getElementById('transition-element');
  const path = document.querySelector('.path');

  if (animationWrapper && path) {
    const start = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
    const end = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    tl.set(animationWrapper, {
      yPercent: 100,
    })
      .to(path, { duration: 0.8, attr: { d: start }, ease: 'power2.in' })
      .to(path, { duration: 0.8, attr: { d: end }, ease: 'power2.out' })
      .to(
        animationWrapper,
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '<'
      );
  }
};
