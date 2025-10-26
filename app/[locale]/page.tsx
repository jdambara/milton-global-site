import { Metadata } from 'next';
import Script from 'next/script';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BrandsSection from '@/components/sections/BrandsSection';
import UltencySection from '@/components/sections/UltencySection';
import FSASection from '@/components/sections/FSASection';
import LatestContentSection from '@/components/sections/LatestContentSection';
import CTASection from '@/components/sections/CTASection';
import { genMeta } from '@/lib/seo/generate';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params;
  return genMeta('/', locale as 'en'|'es'|'ja');
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
        identifier: {
          '@type': 'PropertyValue',
          name: 'Seychelles FSA Securities Dealer License',
          value: 'SD040',
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
            urlTemplate: locale === 'en' 
              ? 'https://miltonglobal.com/search?q={query}'
              : `https://miltonglobal.com/${locale}/search?q={query}`,
          },
          'query-input': 'required name=query',
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
            item: locale === 'en' 
              ? 'https://miltonglobal.com'
              : `https://miltonglobal.com/${locale}`,
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

