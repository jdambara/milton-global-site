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
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'mask-icon', url: '/logos/favicon-64x64.png', color: '#000000' },
      ],
    },
    manifest: '/manifest.json',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    themeColor: '#FE0100',
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
