import type { Metadata } from 'next';
import { BASE_URL, metaMap } from './metaMap';

export function genMeta(path: string, locale: 'en'|'es'|'ja'): Metadata {
  const m = metaMap[path][locale];
  const canonical = locale === 'en' ? BASE_URL + (path === '/' ? '' : path) : `${BASE_URL}/${locale}${path === '/' ? '' : path}`;
  const langs = {
    'x-default': BASE_URL + (path === '/' ? '' : path),
    en: BASE_URL + (path === '/' ? '' : path),
    es: `${BASE_URL}/es${path === '/' ? '' : path}`,
    ja: `${BASE_URL}/ja${path === '/' ? '' : path}`,
  };
  return {
    metadataBase: new URL(BASE_URL),
    title: m.title,
    description: m.description,
    alternates: { canonical, languages: langs },
    openGraph: { 
      type: 'website', 
      url: canonical, 
      title: m.title, 
      description: m.description, 
      locale: m.ogLocale,
      alternateLocale: ['en_US','es_ES','ja_JP'].filter(l => l !== m.ogLocale),
      images: [{ 
        url: '/og/og-home-1200x630.jpg', 
        width: 1200, 
        height: 630, 
        alt:
          locale === 'ja' ? 'ミルトングローバル（SD040）公式サイト' :
          locale === 'es' ? 'Sitio corporativo de Milton Global (SD040)' :
          'Milton Global corporate site (SD040)' 
      }] 
    },
    twitter: { 
      card: 'summary_large_image', 
      title: m.title, 
      description: m.description, 
      images: ['/og/og-home-1200x630.jpg'] 
    },
    robots: {
      index: process.env.NEXT_PUBLIC_ENV === 'prod',
      follow: process.env.NEXT_PUBLIC_ENV === 'prod',
      googleBot: { 
        index: process.env.NEXT_PUBLIC_ENV === 'prod', 
        follow: process.env.NEXT_PUBLIC_ENV === 'prod',
        'max-image-preview': 'large', 
        'max-snippet': -1, 
        'max-video-preview': -1 
      } 
    },
    verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined },
  };
}
