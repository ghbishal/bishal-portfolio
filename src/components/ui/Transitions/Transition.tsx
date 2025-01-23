'use client';

import { type HTMLMotionProps, motion } from 'motion/react';

type TransitionProps = {} & HTMLMotionProps<'div'>;

export function Transition({ initial, whileInView, transition, ...rest }: TransitionProps) {
  const init = initial || { opacity: 0 };
  const inView = whileInView || { opacity: 1 };
  const trans = transition || { duration: 0.8, delay: 0.4 };
  return (
    <motion.div initial={init} animate={inView} transition={trans} {...rest} />
  );
}
