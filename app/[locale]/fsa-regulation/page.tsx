import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { lp, type L } from '@/lib/seo/paths';
import { useTranslations, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'fsaPage.meta' });
  
  const url = locale === 'en' 
    ? 'https://miltonglobal.com/fsa-regulation'
    : `https://miltonglobal.com/${locale}/fsa-regulation`;
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: url,
      languages: {
        'en': 'https://miltonglobal.com/fsa-regulation',
        'es': 'https://miltonglobal.com/es/fsa-regulation',
        'ja': 'https://miltonglobal.com/ja/fsa-regulation',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: url,
      siteName: 'Milton Global',
      type: 'website',
      images: [
        {
          url: '/images/fsa-logo.png',
          width: 1200,
          height: 630,
          alt: 'FSA Seychelles - Milton Global License SD040',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/fsa-logo.png'],
    },
  };
}

function FSARegulationContent() {
  const t = useTranslations('fsaPage');
  const locale = useLocale() as L;

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
                  {t('hero.title')}
                </h1>
                <p className="text-body-large text-gray-600 mb-8">
                  {t('hero.description')}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{t('hero.status.active')}</span>
                  </div>
                  <span>•</span>
                  <span>{t('hero.status.jurisdiction')}</span>
                  <span>•</span>
                  <span>{t('hero.status.year')}</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white p-8 rounded border border-gray-100 w-full max-w-sm">
                  <div className="flex items-center justify-center mb-6">
                    <Image 
                      src="/images/fsa-logo.png"
                      alt="FSA Seychelles"
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4 pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600 whitespace-nowrap">{t('hero.info.entity.label')}</span>
                      <span className="text-sm font-medium text-gray-900 text-right">{t('hero.info.entity.value')}</span>
                    </div>
                    <div className="flex justify-between items-start gap-4 pb-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600 whitespace-nowrap">{t('hero.info.license.label')}</span>
                      <span className="text-sm font-medium text-gray-900 text-right">{t('hero.info.license.value')}</span>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-sm text-gray-600 whitespace-nowrap">{t('hero.info.type.label')}</span>
                      <span className="text-sm font-medium text-gray-900 text-right">{t('hero.info.type.value')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Benefits - Bottom of Hero */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded overflow-hidden">
                <div className="bg-white p-6 text-center">
                  <div className="text-sm font-semibold text-gray-900 mb-1">{t('benefits.segregated')}</div>
                  <p className="text-xs text-gray-600">{t('benefits.segregatedDesc')}</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <div className="text-sm font-semibold text-gray-900 mb-1">{t('benefits.audited')}</div>
                  <p className="text-xs text-gray-600">{t('benefits.auditedDesc')}</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <div className="text-sm font-semibold text-gray-900 mb-1">{t('benefits.capital')}</div>
                  <p className="text-xs text-gray-600">{t('benefits.capitalDesc')}</p>
                </div>
                <div className="bg-white p-6 text-center">
                  <div className="text-sm font-semibold text-gray-900 mb-1">{t('benefits.compliant')}</div>
                  <p className="text-xs text-gray-600">{t('benefits.compliantDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About FSA */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-gray-900 mb-4">{t('about.title')}</h2>
              <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
                {t('about.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <svg className="w-6 h-6 text-brand-red mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {t('about.established.title')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('about.established.description')}
                </p>
              </div>

              <div className="text-center">
                <svg className="w-6 h-6 text-brand-red mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {t('about.international.title')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('about.international.description')}
                </p>
              </div>

              <div className="text-center">
                <svg className="w-6 h-6 text-brand-red mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {t('about.protection.title')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('about.protection.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Protection */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-gray-900 mb-4">{t('protection.title')}</h2>
              <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
                {t('protection.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded border border-gray-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-body font-semibold text-gray-900 mb-1">
                      {t('protection.segregated.title')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('protection.segregated.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded border border-gray-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-body font-semibold text-gray-900 mb-1">
                      {t('protection.negative.title')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('protection.negative.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded border border-gray-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-body font-semibold text-gray-900 mb-1">
                      {t('protection.kyc.title')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('protection.kyc.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded border border-gray-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-body font-semibold text-gray-900 mb-1">
                      {t('protection.reporting.title')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('protection.reporting.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h3 font-bold text-gray-900 mb-4">{t('cta.title')}</h2>
            <p className="text-body-large text-gray-600 mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={lp(locale, 'services')} variant="dark">
                {t('cta.services')}
              </Button>
              <Button href="https://fsaseychelles.sc/search-business/holiway-global-ltd" variant="secondary" external>
                {t('cta.fsaWebsite')}
              </Button>
              <Button href={lp(locale, 'contact')} variant="primary">
                {t('cta.contact')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function FSARegulationPage({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }) {
  const { locale } = await params;
  
  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Milton Global Ltd",
    "alternateName": "Milton Global Ltd",
    "url": `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}fsa-regulation`,
    "logo": "https://miltonglobal.com/logos/Milton Global.png",
    "description": "FSA-licensed broker operating under Seychelles Financial Services Authority with license SD040",
    "foundingDate": "2016",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Securities Dealer License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Seychelles Financial Services Authority",
        "url": "https://fsaseychelles.sc"
      },
      "identifier": "SD040"
    },
    "sameAs": [
      "https://fsaseychelles.sc/search-business/holiway-global-ltd"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SC",
      "addressLocality": "Victoria",
      "addressRegion": "Mahé"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://miltonglobal.com",
      "serviceType": "Online Trading Platform",
      "availableLanguage": ["en", "es", "ja"]
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FSARegulationContent />
    </>
  );
}