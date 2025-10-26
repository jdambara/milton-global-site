'use client';

import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-h1 font-bold text-gray-900 mb-2">
              {t('title')}
            </h2>
            <p className="text-h2 text-gray-700 mb-6">
              {t('subtitle')}
            </p>
            <p className="text-body-large text-gray-600 max-w-4xl mx-auto">
              {t('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border-0 rounded p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-h3 font-semibold text-gray-900 mb-2">{t('cards.infrastructure.title')}</h3>
              <p className="text-small text-gray-600">
                {t('cards.infrastructure.description')}
              </p>
            </div>

            <div className="bg-gray-50 border-0 rounded p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-h3 font-semibold text-gray-900 mb-2">{t('cards.security.title')}</h3>
              <p className="text-small text-gray-600">
                {t('cards.security.description')}
              </p>
            </div>

            <div className="bg-gray-50 border-0 rounded p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <svg className="w-6 h-6 text-brand-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-h3 font-semibold text-gray-900 mb-2">{t('cards.global.title')}</h3>
              <p className="text-small text-gray-600">
                {t('cards.global.description')}
              </p>
            </div>
          </div>

          {/* Security Promise */}
          <div className="mt-12 p-6 bg-gray-50 rounded text-center border border-gray-200">
            <p className="text-body font-semibold text-gray-900">
              {t('securityPromise.title')}
            </p>
            <p className="text-small text-gray-600 mt-2">
              {t('securityPromise.features')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

