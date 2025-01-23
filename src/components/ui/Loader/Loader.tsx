'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { OpacityTransition, Transition } from '../Transitions';

type PageLoadProps = {
  setHideLoader: (value: boolean) => void;
};

export function Loader({ setHideLoader }: PageLoadProps) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 2);
      } else {
        clearInterval(count);
      }
    }, 25);

    return () => {
      clearInterval(count);
    };
  }, [counter]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 2.5, duration: 1, type: 'tween' }}
      onAnimationComplete={() => setHideLoader(false)}
      className="fixed left-0 top-0 z-[9999] size-full bg-background"
    >
      <div className="flex size-full flex-col p-4 max-md:gap-8 md:justify-between md:p-10">
        <Transition transition={{ delay: 0.2 }}>
          <span className="font-semibold text-white/40">Bishal</span>
        </Transition>
        <div className="flex flex-col max-md:h-full max-md:justify-between">
          <Transition transition={{ delay: 0.4 }}>
            <div className="w-full whitespace-pre-wrap text-3xl md:w-2/5 md:text-5xl">
              <OpacityTransition>
                Turning dreams into reality, once wish at a time. Ready to make yours happen?
              </OpacityTransition>
            </div>
          </Transition>
          <div className="flex items-end justify-between">
            <span className="text-white/30">Loading...</span>
            <motion.span className="text-7xl font-semibold md:text-9xl md:font-bold">
              {counter}
              %
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>

  );
}
