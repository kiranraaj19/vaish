import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function ensureRegistered() {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Masked line-reveal for a headline/pull-quote. Expects `el` to contain one
 * or more direct children (e.g. <span> lines) to animate individually; falls
 * back to animating `el` itself if it has no children.
 */
export function revealLines(
  el: HTMLElement | null,
  opts: {
    trigger?: HTMLElement | null;
    delay?: number;
    start?: string;
    onComplete?: () => void;
  } = {}
) {
  if (!el) return;
  ensureRegistered();

  const targets = el.children.length > 0 ? Array.from(el.children) : [el];

  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0 });
    opts.onComplete?.();
    return;
  }

  gsap.set(targets, { opacity: 0, y: 32 });

  gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.08,
    delay: opts.delay ?? 0,
    onComplete: opts.onComplete,
    scrollTrigger: opts.trigger
      ? {
          trigger: opts.trigger,
          start: opts.start ?? 'top 80%',
          once: true,
        }
      : undefined,
  });
}

/**
 * Staggered fade+rise for a list/grid of items, tied to ScrollTrigger on the
 * container.
 */
export function revealStagger(
  container: HTMLElement | null,
  selector: string,
  opts: { start?: string; stagger?: number; from?: 'left' | 'right' | 'bottom' } = {}
) {
  if (!container) return;
  ensureRegistered();

  const items = container.querySelectorAll<HTMLElement>(selector);
  if (items.length === 0) return;

  if (prefersReducedMotion()) {
    gsap.set(items, { opacity: 1, x: 0, y: 0 });
    return;
  }

  const fromVars =
    opts.from === 'left'
      ? { x: -40, y: 0 }
      : opts.from === 'right'
      ? { x: 40, y: 0 }
      : { x: 0, y: 36 };

  gsap.set(items, { opacity: 0, ...fromVars });

  gsap.to(items, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: opts.stagger ?? 0.12,
    scrollTrigger: {
      trigger: container,
      start: opts.start ?? 'top 80%',
      once: true,
    },
  });
}

/** Scale-draw a hairline rule in from the left as it enters the viewport. */
export function drawRule(el: HTMLElement | null, opts: { start?: string } = {}) {
  if (!el) return;
  ensureRegistered();

  if (prefersReducedMotion()) {
    gsap.set(el, { scaleX: 1 });
    return;
  }

  gsap.set(el, { scaleX: 0 });
  gsap.to(el, {
    scaleX: 1,
    duration: 0.9,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: opts.start ?? 'top 85%',
      once: true,
    },
  });
}

export { gsap, ScrollTrigger };
