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
  return genMeta('/milton-prime', locale);
}

function MiltonPrimeContent() {
  const t = useTranslations('miltonPrimePage');
  const locale = useLocale() as L;

  return (
    <div className="min-h-screen">
      {/* Hero - Clean and Professional */}
      <section className="section bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4 -mt-4">
              <Breadcrumbs locale={locale} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded mb-6">
                  {t('hero.badge')}
                </div>
                <h1 className="text-h1 font-bold text-gray-900 mb-4">
                  Milton Prime
                </h1>
                <p className="text-body-large text-gray-600 mb-8">
                  {t('hero.description')}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{t('hero.status.licensed')}</span>
                  </div>
                  <span>•</span>
                  <span>{t('hero.status.established')}</span>
                  <span>•</span>
                  <span>{t('hero.status.license')}</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white p-8 rounded border border-gray-100">
                  <Image 
                    src="/logos/milton-prime-logo.svg"
                    alt="Milton Prime"
                    width={220}
                    height={70}
                    className="mb-6"
                  />
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">{t('hero.info.entity.label')}</span>
                      <span className="text-sm font-medium text-gray-900">{t('hero.info.entity.value')}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">{t('hero.info.license.label')}</span>
                      <span className="text-sm font-medium text-gray-900">{t('hero.info.license.value')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{t('hero.info.platform.label')}</span>
                      <span className="text-sm font-medium text-gray-900">{t('hero.info.platform.value')}</span>
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
                  <div className="text-xl font-bold text-gray-900 mb-1">API</div>
                  <p className="text-sm text-gray-600">{t('platforms.api')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Showcase */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-gray-900 mb-4">{t('infrastructure.title')}</h2>
              <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
                {t('infrastructure.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group">
                <div className="p-6 h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                  <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                    {t('infrastructure.execution.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('infrastructure.execution.description')}
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="p-6 h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                  <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                    {t('infrastructure.compliance.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('infrastructure.compliance.description')}
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="p-6 h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded hover:border-gray-300 transition-colors">
                  <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                    {t('infrastructure.security.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('infrastructure.security.description')}
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
              <Button href="https://miltonprime.com" variant="dark" external>
                {t('cta.visitWebsite')}
              </Button>
              <Button href={lp(locale, 'contact')} variant="primary">
                {t('cta.partnershipInquiry')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function MiltonPrimePage({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }) {
  const { locale } = await params;
  
  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://miltonglobal.com/milton-prime",
    "name": locale === 'ja' ? "ミルトンプライム (Milton Prime)" : "Milton Prime",
    "alternateName": locale === 'ja' ? "Milton Prime" : undefined,
    "description": locale === 'ja' 
      ? "ミルトングローバルが運営するFSA認可の取引プラットフォーム。MT4/MT5、分別管理口座、機関投資家グレードのインフラを提供。"
      : "FSA-licensed trading platform operated by Milton Global Ltd. Offering MT4/MT5, segregated accounts, and institutional-grade infrastructure.",
    "url": `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}milton-prime`,
    "logo": "https://miltonglobal.com/logos/milton-prime-logo.svg",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Milton Global Ltd",
      "url": "https://miltonglobal.com",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Securities Dealer License",
        "identifier": "SD040",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Seychelles Financial Services Authority"
        }
      }
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "MT4 Platform",
          "description": locale === 'ja' ? "クラシック取引プラットフォーム" : "Classic trading platform"
        },
        {
          "@type": "Offer",
          "name": "MT5 Platform",
          "description": locale === 'ja' ? "アドバンス取引プラットフォーム" : "Advanced trading platform"
        },
        {
          "@type": "Offer",
          "name": "PAMM",
          "description": locale === 'ja' ? "資金管理ソリューション" : "Money management solution"
        },
        {
          "@type": "Offer",
          "name": "FIX API",
          "description": locale === 'ja' ? "ダイレクトマーケットアクセス" : "Direct market access"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "850",
      "bestRating": "5"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://miltonprime.com",
      "serviceType": "Online Trading",
      "availableLanguage": ["en", "es", "ja"],
      "serviceLocation": {
        "@type": "Place",
        "name": "Global",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SC"
        }
      }
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MiltonPrimeContent />
    </>
  );
}