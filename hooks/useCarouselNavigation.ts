import { useEffect, useRef } from 'react';

type UseCarouselNavigationOptions = {
  onNext: () => void;
  onPrev: () => void;
  enabled?: boolean;
  /** Absolute |deltaY| (or |deltaX|) sum required to confirm gesture intent. */
  threshold?: number;
  /** Milliseconds of wheel silence that signal "gesture ended". */
  quiescence?: number;
  /** Minimum px of finger travel before a touch swipe counts. */
  touchThreshold?: number;
};

/**
 * Treats one continuous wheel/trackpad gesture as a SINGLE navigation step.
 *
 * - Accumulates `deltaY` (or `deltaX` if dominant) until `threshold` is crossed.
 * - After firing once, locks until `quiescence` ms of wheel silence — which
 *   absorbs the momentum tail that macOS/iOS trackpads emit after release.
 * - Mouse wheel "clicks" are isolated by their natural pauses (≥ 16ms), so each
 *   click is a fresh gesture and fires normally.
 * - Keyboard (Up/Down/Left/Right, PageUp/PageDown) and touch swipes share the
 *   same lock so they cannot fight the wheel handler.
 */
export function useCarouselNavigation({
  onNext,
  onPrev,
  enabled = true,
  threshold = 30,
  quiescence = 180,
  touchThreshold = 50,
}: UseCarouselNavigationOptions) {
  const onNextRef = useRef(onNext);
  const onPrevRef = useRef(onPrev);
  const enabledRef = useRef(enabled);

  useEffect(() => {
    onNextRef.current = onNext;
    onPrevRef.current = onPrev;
    enabledRef.current = enabled;
  });

  useEffect(() => {
    let accumulator = 0;
    let isLocked = false;
    let quiescenceTimer: ReturnType<typeof setTimeout> | null = null;
    let touchStartY = 0;
    let touchEndY = 0;

    const releaseAfterSilence = () => {
      if (quiescenceTimer) clearTimeout(quiescenceTimer);
      quiescenceTimer = setTimeout(() => {
        isLocked = false;
        accumulator = 0;
        quiescenceTimer = null;
      }, quiescence);
    };

    const fire = (direction: 1 | -1) => {
      if (direction > 0) onNextRef.current();
      else onPrevRef.current();
      isLocked = true;
      accumulator = 0;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!enabledRef.current) return;
      event.preventDefault();
      releaseAfterSilence();

      if (isLocked) return;

      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      accumulator += delta;

      if (Math.abs(accumulator) >= threshold) {
        fire(accumulator > 0 ? 1 : -1);
      }
    };

    const isEditableTarget = (target: EventTarget | null): boolean => {
      if (!(target instanceof HTMLElement)) return false;
      if (target.isContentEditable) return true;
      const tag = target.tagName;
      return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
    };

    const handleKey = (event: KeyboardEvent) => {
      if (!enabledRef.current) return;
      if (isEditableTarget(event.target)) return;
      if (isLocked) return;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
          event.preventDefault();
          fire(1);
          releaseAfterSilence();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          event.preventDefault();
          fire(-1);
          releaseAfterSilence();
          break;
        default:
          break;
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!enabledRef.current) return;
      touchStartY = event.touches[0].clientY;
      touchEndY = touchStartY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!enabledRef.current) return;
      event.preventDefault();
      touchEndY = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (!enabledRef.current) return;
      if (isLocked) return;
      const distance = touchStartY - touchEndY;
      if (Math.abs(distance) > touchThreshold) {
        fire(distance > 0 ? 1 : -1);
        releaseAfterSilence();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (quiescenceTimer) clearTimeout(quiescenceTimer);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [threshold, quiescence, touchThreshold]);
}

export default useCarouselNavigation;
