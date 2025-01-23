import { motion } from 'motion/react';

type OpacityTransitionProps = {
  children: string;
};

export function OpacityTransition({ children }: OpacityTransitionProps) {
  return (
    <div className="overflow-hidden ">
      {children.split('').map((char, i) => (
        <motion.span
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          layout
          transition={{ delay: i * 0.03, ease: [0.215, 0.61, 0.355, 1] }}
          exit={{
            y: 0,
            transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
          }}
          key={i}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
