import Header from '@/components/layout/Header';
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

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Header />
    </main>
  );
}
