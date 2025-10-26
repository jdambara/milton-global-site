'use client';

import { useTranslations } from 'next-intl';

export default function MetricsSection() {
  const t = useTranslations('metrics');

  const metrics = [
    {
      value: '9+',
      label: t('yearsInBusiness'),
      sublabel: t('yearsInBusinessSub'),
    },
    {
      value: '$2.8B',
      label: t('dailyVolume'),
      sublabel: t('dailyVolumeSub'),
    },
    {
      value: '150+',
      label: t('institutionalClients'),
      sublabel: t('institutionalClientsSub'),
    },
    {
      value: '99.98%',
      label: t('uptime'),
      sublabel: t('uptimeSub'),
    },
  ];

  return (
    <section className="section bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-[36px] md:text-[42px] font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-body font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-small text-gray-400">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}