'use client';

import { useTranslations } from 'next-intl';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface ServicesHeroProps {
  locale: string;
}

export default function ServicesHero({ locale }: ServicesHeroProps) {
  const t = useTranslations('services');

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="mb-4 -mt-4">
          <Breadcrumbs locale={locale} />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
}