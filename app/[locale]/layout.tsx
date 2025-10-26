import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-jp'
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  return {
    icons: {
      icon: '/logos/favicon-64x64.png',
    },
  };
}

export function generateStaticParams() {
  return [{locale:'en'},{locale:'es'},{locale:'ja'}];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Type assertion for known locales
  const typedLocale = locale as 'en'|'es'|'ja';
  
  // Set request locale for static rendering
  setRequestLocale(locale);
  
  // Get messages from next-intl
  const messages = await getMessages();
  
  const fontClass = typedLocale === 'ja' ? notoSansJP.className : inter.className;

  return (
    <html lang={typedLocale}>
      <body className={fontClass}>
        <NextIntlClientProvider locale={typedLocale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
