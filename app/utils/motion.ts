import type { MotionProps } from 'motion-v';

export const fade = (
  options: { delay?: number; duration?: number; once?: boolean } = {}
): Partial<MotionProps<'div'>> => {
  const { delay = 0.1, duration = 0.8, once = false } = options;

  return {
    initial: { opacity: 0, filter: 'blur(24px)', y: 12 },
    whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
    inViewOptions: { once },
    transition: {
      delay,
      duration,
      ease: [0.22, 1, 0.36, 1],
      type: 'tween',
    },
  };
};
