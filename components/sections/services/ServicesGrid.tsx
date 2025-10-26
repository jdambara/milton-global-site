'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';

export default function ServicesGrid() {
  const t = useTranslations('services');

  const serviceCategories = [
    {
      id: 'infrastructure',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      services: [
        'ultency_gateway',
        'mt5_hosting',
        'mt4_hosting',
        'fix_api',
        'bridge_solutions',
        'aggregation',
        'risk_management',
        'dedicated_servers',
        'colocation'
      ]
    },
    {
      id: 'whitelabel',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      services: [
        'full_whitelabel',
        'branded_platforms',
        'mobile_apps',
        'web_trader',
        'crm_integration',
        'ib_programs',
        'pamm_mam',
        'copy_trading',
        'social_trading'
      ]
    },
    {
      id: 'liquidity',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      services: [
        'prime_liquidity',
        'institutional_pricing',
        'crypto_liquidity',
        'precious_metals',
        'cfd_instruments',
        'custom_instruments',
        'liquidity_aggregation',
        'smart_routing',
        'stp_execution'
      ]
    },
    {
      id: 'regulatory',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      services: [
        'regulatory_umbrella',
        'license_consulting',
        'compliance_support',
        'kyc_solutions',
        'aml_monitoring',
        'transaction_reporting',
        'regulatory_hosting',
        'audit_support'
      ]
    },
    {
      id: 'operations',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      services: [
        'backoffice_solutions',
        'payment_processing',
        'banking_relationships',
        'customer_support',
        'multilingual_support',
        'marketing_tools',
        'lead_generation',
        'reporting_analytics',
        'api_integration'
      ]
    },
    {
      id: 'consulting',
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      services: [
        'business_consulting',
        'market_entry',
        'product_development',
        'technology_advisory',
        'partnership_facilitation',
        'training_education'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, index) => (
            <div key={category.id} className={index > 0 ? 'mt-16' : ''}>
              <div className="flex items-center mb-8">
                <div className="mr-4">{category.icon}</div>
                <div>
                  <h2 className="text-h2 font-bold text-gray-900">
                    {t(`categories.${category.id}.title`)}
                  </h2>
                  <p className="text-body text-gray-600 mt-1">
                    {t(`categories.${category.id}.description`)}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service) => (
                  <Card key={service} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-brand-red mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="text-body font-semibold text-gray-900 mb-1">
                          {t(`services.${service}.title`)}
                        </h3>
                        <p className="text-small text-gray-600">
                          {t(`services.${service}.description`)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}