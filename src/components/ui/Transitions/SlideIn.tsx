'use client';

import { cn } from '@/utils/cn';
import { type HTMLMotionProps, motion } from 'motion/react';

type SlideInProps = HTMLMotionProps<'span'>;

export function SlideIn({
  className,
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: SlideInProps) {
  const init = initial || { opacity: 0, y: '100%' };
  const inView = whileInView || { opacity: 1, y: 0 };
  const trans = transition || { duration: 0.5, delay: 0.3 };

  return (
    <motion.span
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport || { once: true }}
      className={cn('inline-block overflow-hidden', className)}
      {...rest}
    />
  );
};
