'use client';

import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/ui/Button';
import { lp, type L } from '@/lib/seo/paths';

export default function FSASection() {
  const t = useTranslations('fsa');
  const locale = useLocale() as L;

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* FSA Badge/Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>

          {/* License Number */}
          <div className="mb-6">
            <div className="inline-flex items-center bg-gray-100 px-6 py-3 rounded">
              <span className="text-small text-gray-600 mr-2">License</span>
              <span className="text-h3 font-bold text-gray-900">SD040</span>
            </div>
          </div>

          {/* Title & Description */}
          <h2 className="text-h1 font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-body-large text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('description')}
          </p>

          {/* Key Benefits - Horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
            <div className="py-4">
              <svg className="w-6 h-6 text-brand-red mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-small font-semibold text-gray-900">{t('benefits.licensed')}</p>
            </div>
            <div className="py-4">
              <svg className="w-6 h-6 text-brand-red mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-small font-semibold text-gray-900">{t('benefits.segregated')}</p>
            </div>
            <div className="py-4">
              <svg className="w-6 h-6 text-brand-red mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-small font-semibold text-gray-900">{t('benefits.compliant')}</p>
            </div>
            <div className="py-4">
              <svg className="w-6 h-6 text-brand-red mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-small font-semibold text-gray-900">{t('benefits.audited')}</p>
            </div>
          </div>

          {/* Learn More Link */}
          <div>
            <Button href={lp(locale, 'fsa-regulation')} variant="secondary">
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


