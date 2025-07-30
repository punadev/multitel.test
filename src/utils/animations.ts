// Animation utility functions for scroll-triggered effects
export const fadeInAnimation = (delay: number = 0): string => {
  return `opacity-0 translate-y-4 motion-safe:animate-fadeIn motion-safe:animate-delay-${delay}`;
};

export const slideInLeftAnimation = (delay: number = 0): string => {
  return `opacity-0 -translate-x-8 motion-safe:animate-slideInLeft motion-safe:animate-delay-${delay}`;
};

export const slideInRightAnimation = (delay: number = 0): string => {
  return `opacity-0 translate-x-8 motion-safe:animate-slideInRight motion-safe:animate-delay-${delay}`;
};

export const pulseAnimation = (): string => {
  return `motion-safe:animate-pulse`;
};

export const floatAnimation = (): string => {
  return `motion-safe:animate-float`;
};