'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { generateBreadcrumbs, generateBreadcrumbSchema } from '@/lib/breadcrumbs-config';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  locale: string;
  className?: string;
  showHome?: boolean;
  separator?: React.ReactNode;
}

export default function Breadcrumbs({ 
  locale, 
  className = '',
  showHome = true,
  separator
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname, locale);
  
  // Don't show breadcrumbs on homepage
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  // Generate structured data
  const structuredData = generateBreadcrumbSchema(
    breadcrumbs.map(b => ({ label: b.label, href: b.href }))
  );
  
  const defaultSeparator = (
    <ChevronRight className="h-4 w-4 text-gray-400 mx-2 flex-shrink-0" />
  );
  
  const usedSeparator = separator || defaultSeparator;
  
  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <nav 
        aria-label="Breadcrumb" 
        className={`breadcrumbs-container ${className}`}
      >
        <ol className="flex items-center flex-wrap text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && usedSeparator}
              
              {breadcrumb.isCurrentPage ? (
                <span 
                  className="text-gray-500 font-medium"
                  aria-current="page"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function BreadcrumbsMinimal({ 
  locale, 
  className = '' 
}: { 
  locale: string; 
  className?: string;
}) {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname, locale);
  
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  return (
    <nav aria-label="Breadcrumb" className={`breadcrumbs-minimal ${className}`}>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Link 
          href={`/${locale}`}
          className="hover:text-primary transition-colors"
        >
          <Home className="h-3 w-3" />
        </Link>
        <span>/</span>
        <span className="truncate">{breadcrumbs[breadcrumbs.length - 1].label}</span>
      </div>
    </nav>
  );
}