'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { lp, type L } from '@/lib/seo/paths';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale() as L;

  // Company section (matches mega menu "Company" dropdown)
  const companyLinks = [
    { key: 'about', href: lp(locale, 'about') },
    { key: 'fsaRegulation', href: lp(locale, 'fsa-regulation') },
    { key: 'news', href: lp(locale, 'news') },
    { key: 'articles', href: lp(locale, 'articles') },
  ];

  // Brands section (matches mega menu "Company > Brands")
  const brandLinks = [
    { key: 'miltonPrime', href: lp(locale, 'milton-prime') },
    { key: 'miltonMarkets', href: lp(locale, 'milton-markets') },
  ];

  // Services section (matches mega menu "Services" dropdown)
  const serviceLinks = [
    { key: 'ultency', href: lp(locale, 'ultency-liquidity-provider') },
    { key: 'viewAll', href: lp(locale, 'services') },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-h3 font-bold text-white mb-4">
              Milton Global Ltd
            </div>
            <p className="text-small mb-4">
              {t('description')}
            </p>
            <div className="text-small text-gray-500">
              {t('license')}
            </div>
          </div>

          {/* Company Links - matches mega menu "Company" dropdown */}
          <div>
            <h4 className="text-body font-semibold text-white mb-4">
              {t('company')}
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href}
                    className="text-small hover:text-white transition-colors"
                  >
                    {tNav(link.key as 'home')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Links - matches mega menu "Company > Brands" */}
          <div>
            <h4 className="text-body font-semibold text-white mb-4">
              {tNav('companyMenu.brands')}
            </h4>
            <ul className="space-y-2">
              {brandLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href}
                    className="text-small hover:text-white transition-colors"
                  >
                    {tNav(link.key as 'home')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links - matches mega menu "Services" dropdown */}
          <div>
            <h4 className="text-body font-semibold text-white mb-4">
              {t('services')}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href}
                    className="text-small hover:text-white transition-colors"
                  >
                    {link.key === 'viewAll' ? tNav('servicesMenu.viewAll') : tNav(link.key as 'home')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-small">
              {t('copyright')}
            </div>
            <div className="text-small text-gray-500">
              Milton Global Ltd • FSA License SD040
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

