'use client';

import type { Variants } from 'motion/react';
import { useVariants } from '@/hooks/useVariants';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

function CustomCursor() {
  const { variant } = useVariants();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        // Update position only on animation frame
        cursorX.set(e.clientX - (variant === 'PROJECT' ? 32 : 8)); // Adjust offset based on variant
        cursorY.set(e.clientY - (variant === 'PROJECT' ? 32 : 8));
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, variant]);

  const variants: Variants = {
    DEFAULT: {
      width: 16,
      height: 16,
      border: '1px solid white',
    },
    PROJECT: {
      height: 100,
      width: 100,
    },
    BUTTON: {
      opacity: 0,
    },
    TEXT: {
      height: 100,
      width: 100,
      backgroundColor: 'transparent',
      border: '1px solid white',
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 grid place-items-center rounded-full bg-white mix-blend-difference max-md:hidden"
      variants={variants}
      animate={variant}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      {variant === 'PROJECT' && <div className="text-black">OPEN</div>}
    </motion.div>
  );
}

export default CustomCursor;
