import gsap from 'gsap'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 0,
      borderBottomLeftRadius: "0vh",
      borderBottomRightRadius: "0vh",
    })
      .to(transitionElement, {
        yPercent: 100,
        duration: 1,
        ease: "power1.out",
      })
      .to(
        transitionElement,
        {
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          duration: 1,
          ease: "power1.out",
        },
        "<"
      );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      yPercent: 100,
      borderTopRightRadius: "0",
      borderTopLeftRadius: "0",
      borderBottomRightRadius: "0",
      borderBottomLeftRadius: "0",
    })
      .to(animationWrapper, {
        yPercent: 0,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: "0",
          borderTopLeftRadius: "0",
          duration: 0.4,
          ease: "power3.out",
        },
        "<"
      );
  }
};