import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { lp, type L } from '@/lib/seo/paths';
import { useTranslations, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { genMeta } from '@/lib/seo/generate';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  return genMeta('/milton-markets', locale);
}

function MiltonMarketsContent() {
  const t = useTranslations('miltonMarketsPage');
  const locale = useLocale() as L;
  
  // Determine the correct partner URL based on locale
  const partnerUrl = locale === 'ja' 
    ? 'https://miltonmarkets.com/ja/partners/contact'
    : 'https://miltonmarkets.com/partners/contact';

  return (
    <div className="min-h-screen">
      {/* Hero - Clean and Professional */}
      <section className="section bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="mb-4 -mt-4">
            <Breadcrumbs locale={locale} />
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded mb-6">
                  {t('hero.badge')}
                </div>
                <h1 className="text-h1 font-bold text-gray-900 mb-4">
                  Milton Markets
                </h1>
                <p className="text-body-large text-gray-600 mb-8">
                  {t('hero.description')}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{t('hero.status.global')}</span>
                  </div>
                  <span>•</span>
                  <span>{t('hero.status.countries')}</span>
                  <span>•</span>
                  <span>{t('hero.status.support')}</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white p-8 rounded border border-gray-100">
                  <Image 
                    src="/logos/milton-markets-logo.svg"
                    alt="Milton Markets"
                    width={220}
                    height={70}
                    className="mb-6"
                  />
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">{t('hero.info.structure.label')}</span>
                      <span className="text-sm font-medium text-gray-900">{t('hero.info.structure.value')}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">{t('hero.info.leverage.label')}</span>
                      <span className="text-sm font-medium text-gray-900">{t('hero.info.leverage.value')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{t('hero.info.rebates.label')}</span>
                      <span className="text-sm font-medium text-gray-900">{t('hero.info.rebates.value')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Platform Features - Bottom of Hero */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded overflow-hidden">
                <div className="bg-white p-6 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">MT4</div>
                  <p className="text-sm text-gray-600">{t('platforms.mt4')}</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">MT5</div>
                  <p className="text-sm text-gray-600">{t('platforms.mt5')}</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">PAMM</div>
                  <p className="text-sm text-gray-600">{t('platforms.pamm')}</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">Mobile</div>
                  <p className="text-sm text-gray-600">{t('platforms.mobile')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Capabilities */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-gray-900 mb-4">{t('operations.title')}</h2>
              <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
                {t('operations.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group">
                <div className="p-6 h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                  <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                    {t('operations.global.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('operations.global.description')}
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="p-6 h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                  <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                    {t('operations.flexibility.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('operations.flexibility.description')}
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="p-6 h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                  <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                    {t('operations.technology.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('operations.technology.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h3 font-bold text-gray-900 mb-4">{t('cta.title')}</h2>
            <p className="text-body-large text-gray-600 mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://miltonmarkets.com" variant="dark" external>
                {t('cta.visitWebsite')}
              </Button>
              <Button href={partnerUrl} variant="primary" external>
                {t('cta.partnershipInquiry')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function MiltonMarketsPage({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }) {
  const { locale } = await params;
  
  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://miltonglobal.com/milton-markets",
    "name": locale === 'ja' ? "ミルトンマーケッツ (Milton Markets)" : "Milton Markets",
    "alternateName": locale === 'ja' ? "Milton Markets" : undefined,
    "description": locale === 'ja' 
      ? "ミルトングローバルが運営するグローバル取引プラットフォーム。最大レバレッジ1:1000、1000種類以上のCFD商品、100カ国以上でサービス提供。"
      : "Global trading platform operated by Milton Global. Leverage up to 1:1000, 1000+ CFD instruments, serving 100+ countries worldwide.",
    "url": `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}milton-markets`,
    "logo": "https://miltonglobal.com/logos/milton-markets-logo.svg",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Milton Global Ltd",
      "url": "https://miltonglobal.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "1000+",
      "highPrice": "1:1000",
      "priceCurrency": "USD",
      "offers": [
        {
          "@type": "Offer",
          "name": locale === 'ja' ? "外国為替" : "Forex",
          "description": locale === 'ja' ? "主要通貨ペア、マイナー通貨ペア" : "Major and minor currency pairs"
        },
        {
          "@type": "Offer",
          "name": locale === 'ja' ? "株式CFD" : "Stock CFDs",
          "description": locale === 'ja' ? "グローバル株式CFD" : "Global equity CFDs"
        },
        {
          "@type": "Offer",
          "name": locale === 'ja' ? "商品CFD" : "Commodity CFDs",
          "description": locale === 'ja' ? "金、銀、原油など" : "Gold, silver, oil and more"
        },
        {
          "@type": "Offer",
          "name": locale === 'ja' ? "暗号通貨CFD" : "Crypto CFDs",
          "description": locale === 'ja' ? "主要暗号通貨CFD" : "Major cryptocurrency CFDs"
        }
      ]
    },
    "areaServed": {
      "@type": "GeoShape",
      "name": "Worldwide",
      "description": locale === 'ja' ? "100カ国以上でサービス提供" : "Serving 100+ countries"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "1250",
      "bestRating": "5"
    },
    "availableChannel": [
      {
        "@type": "ServiceChannel",
        "name": "MT4",
        "serviceUrl": "https://miltonmarkets.com",
        "serviceType": locale === 'ja' ? "クラシック取引" : "Classic Trading"
      },
      {
        "@type": "ServiceChannel",
        "name": "MT5",
        "serviceUrl": "https://miltonmarkets.com",
        "serviceType": locale === 'ja' ? "マルチアセット取引" : "Multi-Asset Trading"
      },
      {
        "@type": "ServiceChannel",
        "name": "PAMM",
        "serviceUrl": "https://miltonmarkets.com",
        "serviceType": locale === 'ja' ? "資金管理" : "Fund Management"
      },
      {
        "@type": "ServiceChannel",
        "name": "Mobile Apps",
        "serviceUrl": "https://miltonmarkets.com",
        "serviceType": "iOS & Android",
        "availableLanguage": ["en", "es", "ja"]
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'ja' ? "取引商品カタログ" : "Trading Instruments Catalog",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Forex",
          "itemListElement": { "@type": "ItemList", "numberOfItems": "50+" }
        },
        {
          "@type": "OfferCatalog",
          "name": "Stocks",
          "itemListElement": { "@type": "ItemList", "numberOfItems": "500+" }
        },
        {
          "@type": "OfferCatalog",
          "name": "Commodities",
          "itemListElement": { "@type": "ItemList", "numberOfItems": "20+" }
        },
        {
          "@type": "OfferCatalog",
          "name": "Indices",
          "itemListElement": { "@type": "ItemList", "numberOfItems": "15+" }
        },
        {
          "@type": "OfferCatalog",
          "name": "Cryptocurrencies",
          "itemListElement": { "@type": "ItemList", "numberOfItems": "30+" }
        }
      ]
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MiltonMarketsContent />
    </>
  );
}