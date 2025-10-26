import { Metadata } from 'next';
import Script from 'next/script';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BrandsSection from '@/components/sections/BrandsSection';
import UltencySection from '@/components/sections/UltencySection';
import FSASection from '@/components/sections/FSASection';
import LatestContentSection from '@/components/sections/LatestContentSection';
import CTASection from '@/components/sections/CTASection';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metaData = {
    en: {
      title: 'Milton Global | FSA-Regulated CFD Broker & Ultency Liquidity Provider',
      description: 'Institutional-grade trading infrastructure powered by MetaQuotes Ultency. Seychelles FSA licensed (SD040). Operating Milton Prime and Milton Markets brands. Access 1000+ instruments with tight spreads.',
      keywords: 'FSA regulated broker, Seychelles FSA SD040, Ultency liquidity provider, MetaQuotes Ultency, CFD broker, institutional trading, Milton Prime, Milton Markets, MT4, MT5, PAMM, FIX API',
      ogTitle: 'Milton Global | FSA-Regulated Trading Infrastructure Provider',
      ogDescription: 'Licensed by Seychelles FSA (SD040). Institutional-grade trading with MetaQuotes Ultency technology.',
    },
    es: {
      title: 'Milton Global | Broker CFD Regulado FSA y Proveedor de Liquidez Ultency',
      description: 'Infraestructura de trading institucional impulsada por MetaQuotes Ultency. Licencia FSA de Seychelles (SD040). Operando las marcas Milton Prime y Milton Markets. Acceso a 1000+ instrumentos.',
      keywords: 'broker regulado FSA, FSA Seychelles SD040, proveedor liquidez Ultency, MetaQuotes Ultency, broker CFD, trading institucional, Milton Prime, Milton Markets, MT4, MT5, PAMM',
      ogTitle: 'Milton Global | Proveedor de Infraestructura de Trading Regulado FSA',
      ogDescription: 'Licenciado por FSA Seychelles (SD040). Trading institucional con tecnología MetaQuotes Ultency.',
    },
    ja: {
      title: 'ミルトングローバル | FSA認可CFDブローカー＆ウルテンシー流動性プロバイダー【公式】',
      description: 'MetaQuotes ウルテンシーによる機関投資家グレードの取引インフラ。セーシェルFSAライセンス（SD040）取得。ミルトンプライムとミルトンマーケッツを運営。1000以上の取引商品をタイトスプレッドで提供。',
      keywords: 'FSA規制ブローカー, セーシェルFSA SD040, ウルテンシー流動性プロバイダー, MetaQuotes ウルテンシー, CFDブローカー, 機関投資家向け取引, ミルトンプライム, ミルトンマーケッツ, MT4, MT5, PAMM, FIX API',
      ogTitle: 'ミルトングローバル | FSA認可取引インフラプロバイダー【公式】',
      ogDescription: 'セーシェルFSA（SD040）認可。MetaQuotes ウルテンシー技術による機関投資家グレードの取引。',
    }
  };

  const currentMeta = metaData[locale as keyof typeof metaData] || metaData.en;

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: currentMeta.keywords,
    authors: [{ name: 'Milton Global' }],
    creator: 'Milton Global',
    publisher: 'Milton Global Ltd',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://miltonglobal.com'),
    alternates: {
      canonical: `https://miltonglobal.com/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es',
        'ja': '/ja',
      },
    },
    openGraph: {
      title: currentMeta.ogTitle,
      description: currentMeta.ogDescription,
      type: 'website',
      locale: locale === 'ja' ? 'ja_JP' : locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: ['en_US', 'es_ES', 'ja_JP'],
      url: `https://miltonglobal.com/${locale}`,
      siteName: 'Milton Global',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Milton Global - FSA Licensed Trading Infrastructure',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.ogTitle,
      description: currentMeta.ogDescription,
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
    verification: {
      google: 'google-verification-code',
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://miltonglobal.com/#organization',
        name: 'Milton Global',
        alternateName: locale === 'ja' ? 'ミルトングローバル' : 'Milton Global',
        legalName: 'Milton Global Ltd',
        url: 'https://miltonglobal.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://miltonglobal.com/logos/milton-global-logo.png',
          width: 400,
          height: 100,
        },
        sameAs: [
          'https://www.linkedin.com/company/milton-global',
          'https://twitter.com/miltonglobal',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Office 1, Unit 2, 2nd Floor Dekk House',
          addressLocality: 'Plaisance, Mahé',
          addressCountry: 'SC',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: ['English', 'Spanish', 'Japanese'],
        },
        description: locale === 'ja' 
          ? 'MetaQuotes ウルテンシー技術を活用した機関投資家グレードの取引インフラプロバイダー。セーシェルFSA（SD040）認可。'
          : locale === 'es'
          ? 'Proveedor de infraestructura de trading de grado institucional con tecnología MetaQuotes Ultency. Licenciado por FSA Seychelles (SD040).'
          : 'Institutional-grade trading infrastructure provider powered by MetaQuotes Ultency technology. Licensed by Seychelles FSA (SD040).',
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://miltonglobal.com/#service',
        name: 'Milton Global Trading Services',
        provider: {
          '@id': 'https://miltonglobal.com/#organization',
        },
        areaServed: {
          '@type': 'GeoShape',
          name: 'Worldwide',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Trading Instruments',
          itemListElement: [
            { '@type': 'Offer', name: 'Forex Trading', category: 'Foreign Exchange' },
            { '@type': 'Offer', name: 'Stock CFDs', category: 'Equities' },
            { '@type': 'Offer', name: 'Commodities', category: 'Raw Materials' },
            { '@type': 'Offer', name: 'Indices', category: 'Market Indices' },
            { '@type': 'Offer', name: 'Cryptocurrencies', category: 'Digital Assets' },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://miltonglobal.com/#website',
        url: 'https://miltonglobal.com',
        name: 'Milton Global',
        description: locale === 'ja'
          ? 'ミルトングローバル公式ウェブサイト - FSA認可取引プラットフォーム'
          : locale === 'es'
          ? 'Sitio web oficial de Milton Global - Plataforma de trading regulada por FSA'
          : 'Milton Global Official Website - FSA Regulated Trading Platform',
        publisher: {
          '@id': 'https://miltonglobal.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `https://miltonglobal.com/${locale}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: locale === 'ja' ? 'ja-JP' : locale === 'es' ? 'es-ES' : 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://miltonglobal.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'ja' ? 'ホーム' : locale === 'es' ? 'Inicio' : 'Home',
            item: `https://miltonglobal.com/${locale}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <UltencySection />
      <FSASection />
      <LatestContentSection />
      <CTASection />
    </>
  );
}

