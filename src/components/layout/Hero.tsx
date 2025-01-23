import { Transition } from '@/components/ui/Transitions';
import LoaderWrapper from './LoaderWrapper';

export default function Hero() {
  return (
    <section className="relative min-h-svh w-svw overflow-hidden">
      <Transition>
        <span className="blob absolute left-0 top-20 size-1/2 blur-[100px]" />
      </Transition>

      <LoaderWrapper>
        Hello
      </LoaderWrapper>

    </section>
  );
}
