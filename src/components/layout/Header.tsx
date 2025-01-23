'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Transition } from '../ui/Transitions';
import { TextReveal } from '../ui/Typography/TextReveal';

export default function Header() {
  return (
    <motion.header className="fixed right-0 top-0 z-20 md:mr-12 md:mt-12">
      <Transition className="fixed left-6 top-6 z-30 md:left-8 md:top-8 ">
        <Link href="/">
          <TextReveal className="font-semibold">
            Bishal
          </TextReveal>
        </Link>
      </Transition>
    </motion.header>
  );
}
