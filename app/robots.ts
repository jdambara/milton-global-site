import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://miltonglobal.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/404',
          '/500',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
    ],
    host: baseUrl,
  };
}


