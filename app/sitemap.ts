import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/content/articles';
import { getAllNews } from '@/lib/content/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://miltonglobal.com';
  const locales = ['en', 'es', 'ja'];
  
  // Static pages with SEO priorities
  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/milton-prime', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/milton-markets', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/fsa-regulation', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/ultancy-liquidity-provider', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/articles', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/news', priority: 0.8, changeFrequency: 'daily' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  // Generate static page entries for all locales
  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map((page) => {
      const url = locale === 'en' 
        ? `${baseUrl}${page.path}` 
        : `${baseUrl}/${locale}${page.path}`;
      
      return {
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l, 
              l === 'en' ? `${baseUrl}${page.path}` : `${baseUrl}/${l}${page.path}`
            ])
          ),
        },
      };
    })
  );

  // Generate article entries
  const articles = getAllArticles();
  const articleEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    articles.map((article) => {
      const url = locale === 'en' 
        ? `${baseUrl}/articles/${article.slug}` 
        : `${baseUrl}/${locale}/articles/${article.slug}`;
      
      return {
        url,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l, 
              l === 'en' ? `${baseUrl}/articles/${article.slug}` : `${baseUrl}/${l}/articles/${article.slug}`
            ])
          ),
        },
      };
    })
  );

  // Generate news entries
  const news = getAllNews();
  const newsEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    news.map((item) => {
      const url = locale === 'en' 
        ? `${baseUrl}/news/${item.slug}` 
        : `${baseUrl}/${locale}/news/${item.slug}`;
      
      return {
        url,
        lastModified: new Date(item.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l, 
              l === 'en' ? `${baseUrl}/news/${item.slug}` : `${baseUrl}/${l}/news/${item.slug}`
            ])
          ),
        },
      };
    })
  );

  return [...staticEntries, ...articleEntries, ...newsEntries];
}


