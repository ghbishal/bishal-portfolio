import type { ReactNode } from 'react';
import Loading from '@/app/[locale]/loading';
import { routing } from '@/i18n/i18nNavigation';
import { VariantProvider } from '@/providers/VariantProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';
import '@/styles/globals.css';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <VariantProvider>
          <NextIntlClientProvider messages={messages}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </NextIntlClientProvider>
        </VariantProvider>
      </body>
    </html>
  );
}
