'use client';

import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/ui/Button';
import { lp, type L } from '@/lib/seo/paths';

export default function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale() as L;

  return (
    <section className="section bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        <div className="max-w-6xl">
          <h2 className="text-h1 font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-body-large text-gray-300 mb-8">
            {t('description')}
          </p>
          <Button href={lp(locale, 'contact')} variant="primary">
            {t('button')}
          </Button>
        </div>
      </div>
    </section>
  );
}

