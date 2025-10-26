'use client';

import { useTranslations, useLocale } from 'next-intl';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { lp, type L } from '@/lib/seo/paths';

export default function LatestContentSection() {
  const t = useTranslations('latestContent');
  const locale = useLocale() as L;

  // Helper function to get category translation
  const getCategoryTranslation = (category: string) => {
    try {
      return t(`categories.${category}` as any);
    } catch (error) {
      // Fallback to the category name if translation fails
      return category;
    }
  };

  // Mock data - will be replaced with actual content
  const articles = [
    {
      title: t('articles.whatIsUltancy.title'),
      excerpt: t('articles.whatIsUltancy.excerpt'),
      slug: 'whatIsUltancy',
      category: 'Technology',
      date: '2025-10-25'
    },
    {
      title: t('articles.fsaRegulation.title'),
      excerpt: t('articles.fsaRegulation.excerpt'),
      slug: 'fsaRegulation',
      category: 'Regulation',
      date: '2025-09-19'
    },
  ];

  const news = [
    {
      title: t('news.miltonGlobalApproved.title'),
      excerpt: t('news.miltonGlobalApproved.excerpt'),
      slug: 'milton-global-approved-ultancy-provider',
      category: 'Company',
      date: '2025-09-24'
    },
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-h1 font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Articles */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-h2 font-semibold text-gray-900">{t('articlesTitle')}</h3>
              <Link 
                href={lp(locale, 'articles')}
                className="text-body text-brand-red hover:text-brand-600 font-medium"
              >
                {t('viewAll')} →
              </Link>
            </div>
            <div className="space-y-4">
              {articles.map((article) => (
                <Card key={article.slug} hover className="p-6">
                  <Link href={lp(locale, `articles/${article.slug}`)}>
                    <div className="text-small bg-black text-white px-2 py-1 rounded font-medium mb-2 inline-block">
                      {getCategoryTranslation(article.category)}
                    </div>
                    <h4 className="text-body-large font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h4>
                    <p className="text-small text-gray-600 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="text-caption text-gray-500">
                      {new Date(article.date + 'T00:00:00').toLocaleDateString(locale, { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* News */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-h2 font-semibold text-gray-900">{t('newsTitle')}</h3>
              <Link 
                href={lp(locale, 'news')}
                className="text-body text-brand-red hover:text-brand-600 font-medium"
              >
                {t('viewAll')} →
              </Link>
            </div>
            <div className="space-y-4">
              {news.map((item) => (
                <Card key={item.slug} hover className="p-6">
                  <Link href={lp(locale, `news/${item.slug}`)}>
                    <div className="text-small bg-black text-white px-2 py-1 rounded font-medium mb-2 inline-block">
                      {getCategoryTranslation(item.category)}
                    </div>
                    <h4 className="text-body-large font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-small text-gray-600 mb-3">
                      {item.excerpt}
                    </p>
                    <div className="text-caption text-gray-500">
                      {new Date(item.date + 'T00:00:00').toLocaleDateString(locale, { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

