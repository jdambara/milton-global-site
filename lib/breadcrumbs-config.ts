export const breadcrumbsConfig = {
  translations: {
    en: {
      home: 'Home',
      about: 'About',
      'milton-prime': 'Milton Prime',
      'milton-markets': 'Milton Markets',
      'fsa-regulation': 'FSA Regulation',
      'ultency-liquidity-provider': 'Ultency Liquidity Provider',
      services: 'Services',
      articles: 'Articles',
      news: 'News',
      contact: 'Contact',
    },
    es: {
      home: 'Inicio',
      about: 'Acerca de',
      'milton-prime': 'Milton Prime',
      'milton-markets': 'Milton Markets',
      'fsa-regulation': 'Regulación FSA',
      'ultency-liquidity-provider': 'Proveedor de Liquidez Ultency',
      services: 'Servicios',
      articles: 'Artículos',
      news: 'Noticias',
      contact: 'Contacto',
    },
    ja: {
      home: 'ホーム',
      about: '会社概要',
      'milton-prime': 'ミルトンプライム',
      'milton-markets': 'ミルトンマーケッツ',
      'fsa-regulation': 'FSA規制',
      'ultency-liquidity-provider': 'Ultency流動性プロバイダー',
      services: 'サービス',
      articles: '記事',
      news: 'ニュース',
      contact: 'お問い合わせ',
    },
  },
  
  // Define parent-child relationships for multi-level breadcrumbs
  hierarchy: {
    'milton-prime': null,
    'milton-markets': null,
    'fsa-regulation': null,
    'ultency-liquidity-provider': null,
    'services': null,
    'about': null,
    'articles': null,
    'news': null,
    'contact': null,
  },
  
  // Pages that should not show breadcrumbs
  excludedPages: [
    '/404',
    '/500',
  ],
};

export function generateBreadcrumbs(pathname: string, locale: string, articleTitle?: string) {
  const segments = pathname.split('/').filter(Boolean);
  const translations = breadcrumbsConfig.translations[locale as keyof typeof breadcrumbsConfig.translations] || breadcrumbsConfig.translations.en;
  
  // Remove locale from segments if it's not English (since English is at root)
  if (segments[0] === 'es' || segments[0] === 'ja') {
    segments.shift();
  }
  
  // Always start with home
  const homeHref = locale === 'en' ? '/' : `/${locale}`;
  const breadcrumbs = [
    {
      label: translations.home,
      href: homeHref,
      isCurrentPage: segments.length === 0,
    },
  ];
  
  // Build breadcrumb trail
  let currentPath = homeHref === '/' ? '' : homeHref;
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    
    // Handle dynamic routes
    let label = translations[segment as keyof typeof translations] || segment;
    
    // For article/news slugs, use the provided article title or fallback to readable format
    if (segments[index - 1] === 'articles' || segments[index - 1] === 'news') {
      if (articleTitle) {
        label = articleTitle;
      } else {
        label = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      
      // Truncate long titles for breadcrumb display (keep under 50 chars)
      if (label.length > 50) {
        label = label.substring(0, 47) + '...';
      }
    }
    
    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrentPage: isLast,
    });
  });
  
  return breadcrumbs;
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ label: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://miltonglobal.com${item.href}`,
    })),
  };
}