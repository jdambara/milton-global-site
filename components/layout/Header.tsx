'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { lp, type L } from '@/lib/seo/paths';
import MegaMenu from '@/components/ui/MegaMenu';

export default function Header() {
  const t = useTranslations('nav');
  const tLang = useTranslations('language');
  const locale = useLocale() as L;
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  
  // Mega Menu Structure
  const megaMenuItems = [
    {
      label: t('company'),
      items: [
        {
          title: t('companyMenu.about'),
          links: [
            { label: t('companyMenu.miltonGlobal'), href: lp(locale, 'about') },
            { label: t('companyMenu.fsaRegulation'), href: lp(locale, 'fsa-regulation') },
            { label: t('companyMenu.news'), href: lp(locale, 'news') },
            { label: t('companyMenu.articles'), href: lp(locale, 'articles') },
          ]
        },
        {
          title: t('companyMenu.brands'),
          links: [
            { label: t('companyMenu.miltonPrime'), href: lp(locale, 'milton-prime') },
            { label: t('companyMenu.miltonMarkets'), href: lp(locale, 'milton-markets') },
          ]
        }
      ]
    },
    {
      label: t('services'),
      items: [
        {
          title: t('servicesMenu.ourServices'),
          links: [
            { label: t('servicesMenu.ultency'), href: lp(locale, 'ultency-liquidity-provider') },
            { label: t('servicesMenu.viewAll'), href: lp(locale, 'services') },
          ]
        },
        {
          // Empty column for balance
          links: []
        }
      ]
    },
    {
      label: t('contact'),
      href: lp(locale, 'contact')
    }
  ];

  const languages = [
    { code: 'en', label: tLang('en') },
    { code: 'es', label: tLang('es') },
    { code: 'ja', label: tLang('ja') },
  ];

  const changeLanguage = (newLocale: string) => {
    // Remove current locale prefix if present
    let path = pathname;
    if (locale !== 'en') {
      path = pathname.replace(`/${locale}`, '');
    }
    // Add new locale prefix if not English
    if (newLocale !== 'en') {
      path = `/${newLocale}${path}`;
    }
    setLanguageMenuOpen(false);
    window.location.href = path || '/';
  };

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    if (languageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={lp(locale)} className="flex items-center">
            <Image
              src="/logos/Milton Global.png"
              alt="Milton Global"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation with Mega Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <MegaMenu items={megaMenuItems} locale={locale} />
            
            {/* Language Switcher */}
            <div className="relative" ref={languageMenuRef}>
              <button 
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span className="uppercase font-medium">{locale}</span>
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded border border-gray-200 shadow-md">
                  <div className="p-2">
                    <div className="text-xs text-gray-500 px-2 py-1">{tLang('selector')}</div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="w-full flex items-center justify-between px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                      >
                        <span>{lang.label}</span>
                        {locale === lang.code && (
                          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {/* Company Section */}
              <div>
                <div className="font-semibold text-gray-900 py-2">{t('company')}</div>
                <div className="ml-4 space-y-1">
                  <Link
                    href={lp(locale, 'about')}
                    className="block py-2 text-body text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('companyMenu.miltonGlobal')}
                  </Link>
                  <Link
                    href={lp(locale, 'fsa-regulation')}
                    className="block py-2 text-body text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('companyMenu.fsaRegulation')}
                  </Link>
                  <Link
                    href={lp(locale, 'milton-prime')}
                    className="block py-2 text-body text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('companyMenu.miltonPrime')}
                  </Link>
                  <Link
                    href={lp(locale, 'milton-markets')}
                    className="block py-2 text-body text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('companyMenu.miltonMarkets')}
                  </Link>
                  <Link
                    href={lp(locale, 'news')}
                    className="block py-2 text-body text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('companyMenu.news')}
                  </Link>
                  <Link
                    href={lp(locale, 'articles')}
                    className="block py-2 text-body text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('companyMenu.articles')}
                  </Link>
                </div>
              </div>
              
              {/* Services Section */}
              <div>
                <div className="font-semibold text-gray-900 py-2">{t('services')}</div>
                <div className="ml-4 space-y-1">
                  <Link
                    href={lp(locale, 'ultency-liquidity-provider')}
                    className="block py-2 text-body text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('servicesMenu.ultency')}
                  </Link>
                  <Link
                    href={lp(locale, 'services')}
                    className="block py-2 text-body text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('servicesMenu.viewAll')}
                  </Link>
                </div>
              </div>
              
              {/* Contact */}
              <Link
                href={lp(locale, 'contact')}
                className="block py-2 text-body text-gray-700 hover:text-gray-900 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>
            </div>
            
            {/* Language Switcher */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-xs text-gray-500 mb-2">{tLang('selector')}</div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between py-2 text-body text-gray-700"
                >
                  <span>{lang.label}</span>
                  {locale === lang.code && (
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}