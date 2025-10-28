'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { lp, type L } from '@/lib/seo/paths';

export default function HeroSection() {
  const t = useTranslations('hero');
  const m = useTranslations('metrics');
  const locale = useLocale() as L;

  const metrics = ['a', 'b', 'c', 'd'].map(k => ({
    value: m(`${k}.value`),
    label: m(`${k}.label`),
    sublabel: m.raw(`${k}.sub` as any) || '',
  }));

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] section">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="/images/milton-global-hero.png"
          alt="Milton Global Trading Platform"
          fill
          className="object-cover object-right hidden md:block"
          priority
        />
        {/* Mobile Image */}
        <Image
          src="/images/milton-global-hero-mobile.png"
          alt="Milton Global Trading Platform"
          fill
          className="object-cover object-right md:hidden"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col justify-between min-h-[600px] md:min-h-[700px] py-12">
        <div className="max-w-6xl">
          {/* Main Heading */}
          <h1 className="text-h1 md:text-[56px] md:leading-[64px] font-bold text-white mb-4">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <h2 className="text-h2 md:text-[28px] md:leading-[36px] text-white/90 mb-6">
            {t('subtitle')}
          </h2>

          {/* Description */}
          <p className="text-body-large text-white/80 mb-8 max-w-2xl">
            {t('description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-16">
            <Button href={lp(locale, 'services')} variant="secondary">
              {t('ctaSecondary')}
            </Button>
            <Button href={lp(locale, 'contact')} variant="primary">
              {t('ctaPrimary')}
            </Button>
          </div>
        </div>

        {/* Metrics Bar at Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/20 pt-8">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-[28px] md:text-[36px] font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-small font-semibold text-white/90 mb-0.5">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="text-caption text-white/60">
                  {metric.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}