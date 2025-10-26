import { seoConfig } from './seo-config';

export function generateFAQSchema(locale: string, url: string) {
  const faqs = seoConfig.faqs[locale as keyof typeof seoConfig.faqs] || seoConfig.faqs.en;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    url: url,
  };
}

export function generateOrganizationSchema(locale: string) {
  return {
    '@type': 'Organization',
    '@id': 'https://miltonglobal.com/#organization',
    name: seoConfig.company.name,
    alternateName: locale === 'ja' ? 'ミルトングローバル' : seoConfig.company.name,
    legalName: seoConfig.company.legalName,
    url: seoConfig.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${seoConfig.siteUrl}/logos/milton-global-logo.png`,
      width: 400,
      height: 100,
    },
    sameAs: Object.values(seoConfig.company.socialMedia),
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.company.address.street,
      addressLocality: seoConfig.company.address.city,
      addressCountry: seoConfig.company.address.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Spanish', 'Japanese'],
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProductSchema(locale: string, product: {
  name: string;
  description: string;
  features?: string[];
  brand?: string;
  offers?: {
    price?: number;
    priceCurrency?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand || seoConfig.company.name,
    },
    offers: product.offers ? {
      '@type': 'Offer',
      price: product.offers.price,
      priceCurrency: product.offers.priceCurrency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': 'https://miltonglobal.com/#organization',
      },
    } : undefined,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2847',
      bestRating: '5',
      worstRating: '1',
    },
    additionalProperty: product.features?.map(feature => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature,
    })),
  };
}

export function generateArticleSchema(locale: string, article: {
  title: string;
  description: string;
  author: {
    name: string;
    type: 'person' | 'organization';
    title?: string;
    organization?: string;
  };
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  const authorSchema = article.author.type === 'person' 
    ? {
        '@type': 'Person',
        name: article.author.name,
        ...(article.author.title && { jobTitle: article.author.title }),
        ...(article.author.organization && { 
          worksFor: {
            '@type': 'Organization',
            name: article.author.organization
          }
        })
      }
    : {
        '@type': 'Organization',
        name: article.author.name,
      };

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: authorSchema,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    publisher: {
      '@id': 'https://miltonglobal.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    image: article.image ? {
      '@type': 'ImageObject',
      url: article.image,
    } : undefined,
    inLanguage: seoConfig.locales[locale as keyof typeof seoConfig.locales]?.lang || 'en-US',
  };
}

export function generateServiceSchema(locale: string, service: {
  name: string;
  description: string;
  provider: string;
  category: string;
  features?: string[];
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@id': 'https://miltonglobal.com/#organization',
    },
    serviceType: service.category,
    url: service.url,
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Financial Services',
      itemListElement: service.features?.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
        position: index + 1,
      })),
    },
    inLanguage: seoConfig.locales[locale as keyof typeof seoConfig.locales]?.lang || 'en-US',
  };
}

export function generateServicesPageSchema(locale: string, url: string) {
  const services = [
    {
      name: locale === 'ja' ? 'ウルテンシーゲートウェイアクセス' : 'Ultency Gateway Access',
      description: locale === 'ja' ? 'MetaQuotes ウルテンシーマッチングエンジンへの直接アクセス' : 'Direct access to MetaQuotes Ultency matching engine',
      category: 'Trading Infrastructure',
    },
    {
      name: locale === 'ja' ? 'ホワイトラベルソリューション' : 'White Label Solutions',
      description: locale === 'ja' ? '完全なホワイトラベルブローカレッジソリューション' : 'Complete white label brokerage solutions',
      category: 'Platform Solutions',
    },
    {
      name: locale === 'ja' ? '流動性プロバイダー' : 'Liquidity Provider',
      description: locale === 'ja' ? '複数の資産クラスにわたる機関流動性と市場アクセス' : 'Institutional liquidity and market access across multiple asset classes',
      category: 'Liquidity Services',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: locale === 'ja' ? '機関向けサービス・ソリューション' : 'Institutional Services & Solutions',
    description: locale === 'ja' ? 'ホワイトラベルソリューション、ウルテンシーゲートウェイアクセス、取引インフラ、ブローカーや金融機関向けの規制サポートを含む包括的なB2B金融サービス。' : 'Comprehensive B2B financial services including white label solutions, Ultency gateway access, trading infrastructure, and regulatory support for brokers and financial institutions.',
    url: url,
    mainEntity: {
      '@type': 'ItemList',
      name: locale === 'ja' ? 'サービス一覧' : 'Services List',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          provider: {
            '@id': 'https://miltonglobal.com/#organization',
          },
          serviceType: service.category,
        },
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'ja' ? 'ホーム' : 'Home',
          item: `${seoConfig.siteUrl}/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: locale === 'ja' ? 'サービス' : 'Services',
          item: url,
        },
      ],
    },
    inLanguage: seoConfig.locales[locale as keyof typeof seoConfig.locales]?.lang || 'en-US',
  };
}

export function generateMetaTags(locale: string, page: {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  image?: string;
  type?: string;
  author?: {
    name: string;
    type: 'person' | 'organization';
    title?: string;
    organization?: string;
  };
}) {
  const localeConfig = seoConfig.locales[locale as keyof typeof seoConfig.locales] || seoConfig.locales.en;
  const defaultKeywords = seoConfig.keywords[locale as keyof typeof seoConfig.keywords] || seoConfig.keywords.en;
  const companyName = typeof seoConfig.company.name === 'string' ? seoConfig.company.name : seoConfig.company.name[locale as keyof typeof seoConfig.company.name] || seoConfig.company.name.en;
  const companyLegalName = typeof seoConfig.company.legalName === 'string' ? seoConfig.company.legalName : seoConfig.company.legalName[locale as keyof typeof seoConfig.company.legalName] || seoConfig.company.legalName.en;
  const siteName = typeof seoConfig.siteName === 'string' ? seoConfig.siteName : seoConfig.siteName[locale as keyof typeof seoConfig.siteName] || seoConfig.siteName.en;
  
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords ? [...page.keywords, ...defaultKeywords.secondary].join(', ') : [...defaultKeywords.primary, ...defaultKeywords.secondary].join(', '),
    authors: page.author ? [{ 
      name: page.author.type === 'person' && page.author.title 
        ? `${page.author.name}, ${page.author.title}` 
        : page.author.name 
    }] : [{ name: companyName }],
    creator: page.author ? page.author.name : companyName,
    publisher: companyLegalName,
    formatDetection: seoConfig.defaultMeta.formatDetection,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: page.url,
      languages: {
        'en': page.url.replace(`/${locale}`, '/en'),
        'es': page.url.replace(`/${locale}`, '/es'),
        'ja': page.url.replace(`/${locale}`, '/ja'),
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: page.type || 'website',
      locale: localeConfig.lang,
      alternateLocale: ['en-US', 'es-ES', 'ja-JP'].filter(l => l !== localeConfig.lang),
      url: page.url,
      siteName: siteName,
      images: [
        {
          url: page.image || seoConfig.defaultImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [page.image || seoConfig.defaultImage],
      site: seoConfig.twitterHandle,
    },
    robots: seoConfig.defaultMeta.robots,
  };
}