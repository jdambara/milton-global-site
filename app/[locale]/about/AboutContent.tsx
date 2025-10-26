'use client';

import Card from '@/components/ui/Card';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Tag from '@/components/ui/Tag';
import { Shield, Zap, Globe, TrendingUp, Award } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function AboutContent() {
  const locale = useLocale();
  const t = useTranslations('aboutPage');
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="mb-4 -mt-4">
            <Breadcrumbs locale={locale} />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-body-large text-gray-600">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values - Dark Background */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-white mb-4">{t('foundation.title')}</h2>
              <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
                {t('foundation.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-6 h-6 text-brand-red mx-auto mb-4" />
                <h3 className="text-h3 font-semibold text-white mb-3">{t('foundation.compliance.title')}</h3>
                <p className="text-body text-gray-300">
                  {t('foundation.compliance.description')}
                </p>
              </div>

              <div className="text-center">
                <Zap className="w-6 h-6 text-brand-red mx-auto mb-4" />
                <h3 className="text-h3 font-semibold text-white mb-3">{t('foundation.technology.title')}</h3>
                <p className="text-body text-gray-300">
                  {t('foundation.technology.description')}
                </p>
              </div>

              <div className="text-center">
                <Globe className="w-6 h-6 text-brand-red mx-auto mb-4" />
                <h3 className="text-h3 font-semibold text-white mb-3">{t('foundation.global.title')}</h3>
                <p className="text-body text-gray-300">
                  {t('foundation.global.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-h2 font-bold text-gray-900 mb-6">{t('infrastructure.title')}</h2>
                <div className="space-y-4 text-body text-gray-600">
                  <p>{t('infrastructure.description1')}</p>
                  <p>{t('infrastructure.description2')}</p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{t('infrastructure.features.latency')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{t('infrastructure.features.uptime')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{t('infrastructure.features.multiAsset')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{t('infrastructure.features.security')}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-brand-red mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">{t('infrastructure.metrics.instruments')}</div>
                </div>
                
                <div className="text-center">
                  <Globe className="w-6 h-6 text-brand-red mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
                  <div className="text-sm text-gray-600">{t('infrastructure.metrics.countries')}</div>
                </div>
                
                <div className="text-center">
                  <Zap className="w-6 h-6 text-brand-red mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">&lt;1ms</div>
                  <div className="text-sm text-gray-600">{t('infrastructure.metrics.execution')}</div>
                </div>
                
                <div className="text-center">
                  <Award className="w-6 h-6 text-brand-red mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">2016</div>
                  <div className="text-sm text-gray-600">{t('infrastructure.metrics.established')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section - Enhanced Impact */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h1 md:text-[42px] font-bold text-white mb-8">
                {t('commitment.title')}
              </h2>
              
              {/* Three Commitment Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-brand-red mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{t('commitment.pillars.standards.title')}</h3>
                  <p className="text-sm text-gray-300">
                    {t('commitment.pillars.standards.description')}
                  </p>
                </div>
                
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-brand-red mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{t('commitment.pillars.success.title')}</h3>
                  <p className="text-sm text-gray-300">
                    {t('commitment.pillars.success.description')}
                  </p>
                </div>
                
                <div className="text-center">
                  <Zap className="w-6 h-6 text-brand-red mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{t('commitment.pillars.innovation.title')}</h3>
                  <p className="text-sm text-gray-300">
                    {t('commitment.pillars.innovation.description')}
                  </p>
                </div>
              </div>
              
              {/* Supporting Text */}
              <div className="max-w-3xl mx-auto space-y-4 text-gray-300">
                <p className="text-base leading-relaxed">
                  {t('commitment.description2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Footer */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-h3 font-semibold text-gray-900 mb-6">{t('regulatory.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm text-gray-500 mb-2">{t('regulatory.entity')}</div>
                <div className="font-semibold text-gray-900">{t('regulatory.entityName')}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">{t('regulatory.authority')}</div>
                <div className="font-semibold text-gray-900">{t('regulatory.authorityName')}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2">{t('regulatory.license')}</div>
                <div className="font-semibold text-gray-900">{t('regulatory.licenseNumber')}</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                {t('regulatory.address')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}