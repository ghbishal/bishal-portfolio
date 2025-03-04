import type { Portfolio } from '@/utils/types';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  return {
    title: t('home'),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  const portfolioData = (await import('@/data/data.json')).default;

  const { about } = portfolioData as Portfolio;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="relative">
      <Header />
      <Hero about={about} />
    </main>
  );
}
