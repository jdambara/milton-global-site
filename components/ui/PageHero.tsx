import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  locale: string;
  children?: React.ReactNode;
  className?: string;
  showBreadcrumbs?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  locale,
  children,
  className = '',
  showBreadcrumbs = true,
}: PageHeroProps) {
  return (
    <section className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {showBreadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs locale={locale} />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-300 max-w-3xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}