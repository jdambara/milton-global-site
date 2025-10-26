'use client';

import { useTranslations, useLocale } from 'next-intl';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { lp, type L } from '@/lib/seo/paths';

export default function UltencySection() {
  const t = useTranslations('ultency');
  const locale = useLocale() as L;

  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center">
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <Tag className="mb-4 inline-block">{t('tag')}</Tag>
              <h2 className="text-h1 font-bold text-gray-900 mb-4">
                {t('title')}
              </h2>
              <p className="text-body-large text-gray-600 max-w-3xl mx-auto mb-4">
                {t('description')}
              </p>
              <p className="text-body text-gray-600 max-w-2xl mx-auto">
                {t('subdescription')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div>
                <svg className="w-6 h-6 text-brand-red mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="text-[32px] font-bold text-gray-900 mb-1">
                  &lt;0.1ms
                </div>
                <div className="text-small text-gray-600">{t('features.latency')}</div>
              </div>

              <div>
                <svg className="w-6 h-6 text-brand-red mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div className="text-[32px] font-bold text-gray-900 mb-1">
                  50+
                </div>
                <div className="text-small text-gray-600">{t('features.liquidity')}</div>
              </div>

              <div>
                <svg className="w-6 h-6 text-brand-red mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="text-[32px] font-bold text-gray-900 mb-1">
                  MT5
                </div>
                <div className="text-small text-gray-600">{t('features.integration')}</div>
              </div>

              <div>
                <svg className="w-6 h-6 text-brand-red mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-[32px] font-bold text-gray-900 mb-1">
                  99.98%
                </div>
                <div className="text-small text-gray-600">{t('features.reliability')}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={lp(locale, 'ultency-liquidity-provider')} variant="dark">
                  {t('ctaPrimary')}
                </Button>
                <Button href={lp(locale, 'contact')} variant="secondary">
                  {t('ctaSecondary')}
                </Button>
              </div>
              <p className="text-caption text-gray-500">
                <span className="text-brand-red">●</span> {t('certification')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

