import type { About } from '@/utils/types';
import Image from 'next/image';
import { FadeIn, SlideIn } from '../ui/Transitions';
import LoaderWrapper from './LoaderWrapper';

type HeroProps = {
  about: About;
};

export default function Hero({ about }: HeroProps) {
  return (
    <section className="relative h-svh w-svw overflow-hidden">
      <FadeIn>
        <span className="blob absolute left-0 top-20 size-1/2 blur-[100px]" />
      </FadeIn>

      <LoaderWrapper>
        <div className="relative size-full">
          <div className="flex h-full flex-col items-center justify-center pb-10">
            <FadeIn>
              <Image width={112} height={112} src={about.avatar.url} alt={about.fullName} className="size-28 rounded-full object-cover" />
            </FadeIn>

            <div className="flex flex-col items-center py-6">
              <h2 className="overflow-hidden text-4xl font-bold md:text-7xl">
                <SlideIn>
                  Hello! I&apos;m
                  {' '}
                  {about.firstName}
                </SlideIn>
              </h2>
              <h1 className="overflow-hidden text-3xl md:text-7xl">
                <SlideIn>
                  {about.title}
                </SlideIn>
              </h1>
            </div>

            <FadeIn>
              <p className="mx-auto flex w-10/12 flex-wrap justify-center gap-2 py-4 opacity-70 md:w-2/3 md:text-xl">
                {about.subTitle.split(' ').map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </p>
            </FadeIn>
          </div>
        </div>
      </LoaderWrapper>
    </section>
  );
}
