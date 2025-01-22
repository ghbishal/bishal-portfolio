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
      <div className="overflow-hidden">
        {children.split('').map((char, i) => (
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: hover ? '-100%' : 0 }}
            layout
            transition={{ delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] }}
            exit={{
              y: 0,
              transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
            }}
            key={char}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
