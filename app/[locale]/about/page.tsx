import { Metadata } from 'next';
import AboutContent from './AboutContent';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });
  
  const metaData = {
    en: {
      title: 'About Us | Milton Global - FSA Licensed Trading Infrastructure Provider',
      description: 'Learn about Milton Global Ltd, an FSA-regulated (SD040) financial services provider established in 2016. Operating Milton Prime & Milton Markets with MetaQuotes Ultency technology for institutional-grade trading.',
      keywords: 'Milton Global about us, FSA regulated broker SD040, Seychelles financial services, MetaQuotes Ultency provider, institutional trading infrastructure, Milton Prime, Milton Markets, established 2016',
    },
    es: {
      title: 'Acerca de Nosotros | Milton Global - Proveedor de Infraestructura Regulado FSA',
      description: 'Conozca Milton Global Ltd, proveedor de servicios financieros regulado por FSA (SD040) establecido en 2016. Operando Milton Prime y Milton Markets con tecnología MetaQuotes Ultency para trading institucional.',
      keywords: 'Milton Global acerca de, broker regulado FSA SD040, servicios financieros Seychelles, proveedor MetaQuotes Ultency, infraestructura trading institucional, Milton Prime, Milton Markets, establecido 2016',
    },
    ja: {
      title: '会社概要 | ミルトングローバル - FSA認可取引インフラプロバイダー',
      description: '2016年設立のFSA規制（SD040）金融サービスプロバイダー、ミルトングローバルLtdについて。MetaQuotes Ultency技術により機関投資家グレードの取引を提供するミルトンプライム＆ミルトンマーケッツを運営。',
      keywords: 'ミルトングローバル会社概要, FSA規制ブローカーSD040, セーシェル金融サービス, MetaQuotes Ultencyプロバイダー, 機関投資家向け取引インフラ, ミルトンプライム, ミルトンマーケッツ, 2016年設立',
    }
  };

  const currentMeta = metaData[locale] || metaData.en;
  const baseUrl = 'https://miltonglobal.com';
  const url = locale === 'en' ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: currentMeta.keywords,
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/about`,
        'es': `${baseUrl}/es/about`,
        'ja': `${baseUrl}/ja/about`,
      },
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: url,
      siteName: 'Milton Global',
      type: 'website',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: locale === 'ja' ? 'ミルトングローバル - 2016年設立' : 'Milton Global - Established 2016',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: ['/images/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }) {
  const { locale } = await params;
  return <AboutContent />;
}