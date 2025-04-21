import type { MotionProps } from 'motion-v';

export const motionTween = (
  options: { delay?: number; duration?: number } = {}
): Partial<MotionProps<'div'>> => {
  const { delay, duration = 0.5 } = options;

  return {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    inViewOptions: { once: true },
    transition: { delay, duration, type: 'tween' },
  };
};
