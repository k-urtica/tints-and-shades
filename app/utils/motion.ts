import type { MotionProps } from 'motion-v';

export const fade = (
  options: { delay?: number; duration?: number } = {}
): Partial<MotionProps<'div'>> => {
  const { delay, duration = 0.4 } = options;

  return {
    initial: { opacity: 0, filter: 'blur(12px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(12px)' },
    transition: { delay, duration, type: 'tween' },
  };
};
