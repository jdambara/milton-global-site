'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { lp, type L } from '@/lib/seo/paths';

export default function BrandsSection() {
  const t = useTranslations('brands');
  const locale = useLocale() as L;

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-h1 font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Milton Prime - Regulated Trading */}
          <Card hover className="p-6 relative">
            <div className="absolute top-6 right-6">
              <Image 
                src="/logos/milton-prime-logo.svg"
                alt="Milton Prime"
                width={140}
                height={45}
                className="opacity-80"
              />
            </div>
            
            <div className="mb-6 pt-4">
              <h3 className="text-h2 font-bold text-gray-900 mb-2">
                {t('miltonPrime.title')}
              </h3>
              <p className="text-body font-semibold text-gray-700 mb-3">
                {t('miltonPrime.subtitle')}
              </p>
              <p className="text-body text-gray-600">
                {t('miltonPrime.description')}
              </p>
            </div>

            <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
              <div className="flex items-center text-small text-gray-700">
                <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t('miltonPrime.features.regulation')}
              </div>
              <div className="flex items-center text-small text-gray-700">
                <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t('miltonPrime.features.platforms')}
              </div>
              <div className="flex items-center text-small text-gray-700">
                <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t('miltonPrime.features.accounts')}
              </div>
              <div className="flex items-center text-small text-gray-700">
                <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t('miltonPrime.features.protection')}
              </div>
            </div>

            <Button href={lp(locale, 'milton-prime')} variant="dark" className="w-full">
              {t('miltonPrime.cta')}
            </Button>
          </Card>

          {/* Milton Markets - Flexible Trading */}
          <Card hover className="p-6 relative">
            <div className="absolute top-6 right-6">
              <Image 
                src="/logos/milton-markets-logo.svg"
                alt="Milton Markets"
                width={140}
                height={45}
                className="opacity-80"
              />
            </div>
            
            <div className="mb-6 pt-4">
              <h3 className="text-h2 font-bold text-gray-900 mb-2">
                {t('miltonMarkets.title')}
              </h3>
              <p className="text-body font-semibold text-gray-700 mb-3">
                {t('miltonMarkets.subtitle')}
              </p>
              <p className="text-body text-gray-600">
                {t('miltonMarkets.description')}
              </p>
            </div>

            <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
              <div className="flex items-center text-small text-gray-700">
                <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t('miltonMarkets.features.flexibility')}
              </div>
              <div className="flex items-center text-small text-gray-700">
                <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t('miltonMarkets.features.platforms')}
              </div>
              <div className="flex items-center text-small text-gray-700">
                <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t('miltonMarkets.features.leverage')}
              </div>
              <div className="flex items-center text-small text-gray-700">
                <svg className="w-4 h-4 mr-2 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t('miltonMarkets.features.instruments')}
              </div>
            </div>

            <Button href="https://miltonmarkets.com" variant="dark" className="w-full" external>
              {t('miltonMarkets.cta')}
            </Button>
          </Card>
        </div>

        {/* Bottom CTA for institutional */}
        <div className="mt-12 text-center">
          <p className="text-body text-gray-600 mb-4">
            {t('institutional.question')}
          </p>
          <Button href={lp(locale, 'contact')} variant="primary">
            {t('institutional.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}