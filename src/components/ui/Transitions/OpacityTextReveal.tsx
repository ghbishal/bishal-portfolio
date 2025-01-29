'use client';

import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type HTMLAttributes, useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const OpacityTextReveal = (props: HTMLAttributes<HTMLSpanElement>) => {
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(textRef.current, {
        backgroundPositionX: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 1,
          start: 'top bottom',
          end: 'bottom center',
        },
      });
    },
    { revertOnUpdate: true },
  );

  return (
    <span
      {...props}
      ref={textRef}
      className={cn('text-reveal', props.className)}
    />
  );
};
