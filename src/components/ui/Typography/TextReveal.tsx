'use client';

import { cn } from '@/utils/cn';
import { motion } from 'motion/react';
import { useState } from 'react';

type TextRevealProps = {
  children: string;
  className?: string;

};

export function TextReveal({ children, className }: TextRevealProps) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn('relative overflow-hidden whitespace-pre', className)}
    >
      {/* Container for the primary text animation */}
      <div className="overflow-hidden">
        {children.split('').map((char, i) => (
          <motion.span
            // Initial position of the text characters
            initial={{ y: 0 }}
            // Animate characters upward on hover
            animate={{ y: hover ? '-100%' : 0 }}
            // Automatically layout characters for smooth transitions
            layout
            // Define animation transition with a delay based on the character index
            transition={{ delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
            // Exit animation for cleanup
            exit={{
              y: 0,
              transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
            }}
            // Unique key for each character for efficient rendering
            key={char}
            className="inline-block"
          >
            {char}
            {/* Render each character */}
          </motion.span>
        ))}
      </div>

      {/* Duplicate text for the secondary animation */}
      <motion.div className="absolute left-0 top-0 size-full">
        {children.split('').map((char, i) => (
          <motion.span
            // Initial position of the duplicated characters
            initial={{ y: '100%' }}
            // Animate characters into view on hover
            animate={{ y: hover ? 0 : '100%' }}
            // Automatically layout characters for smooth transitions
            layout
            // Define animation transition with a delay based on the character index
            transition={{ delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
            // Exit animation for cleanup
            exit={{
              y: 0,
              transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
            }}
            // Unique key for each character for efficient rendering
            key={char}
            className="inline-block"
          >
            {char}
            {/* Render each duplicated character */}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
