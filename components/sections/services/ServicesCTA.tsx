'use client';

import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/ui/Button';
import { lp, type L } from '@/lib/seo/paths';

export default function ServicesCTA() {
  const t = useTranslations('services');
  const locale = useLocale() as L;

  return (
    <section className="section bg-gray-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h1 font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-body-large text-gray-300 mb-8">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={lp(locale, 'contact')} variant="primary">
              {t('cta.primaryButton')}
            </Button>
            <Button href={lp(locale, 'ultency-liquidity-provider')} variant="secondary">
              {t('cta.secondaryButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}