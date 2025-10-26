'use client';

import { useTranslations, useLocale } from 'next-intl';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { lp, type L } from '@/lib/seo/paths';

export default function LatestContentSection() {
  const t = useTranslations('latestContent');
  const locale = useLocale() as L;

  // Mock data - will be replaced with actual content
  const articles = [
    {
      title: 'What is Ultency? Complete Guide to MetaQuotes Matching Engine',
      excerpt: 'Discover how Ultency revolutionizes liquidity aggregation with ultra-low latency execution.',
      slug: 'what-is-ultency-complete-guide',
      category: 'Technology',
      date: '2025-01-15'
    },
    {
      title: 'FSA Regulation Explained: Why Seychelles Licensing Matters',
      excerpt: 'Understanding the benefits and requirements of Seychelles FSA regulation for brokers.',
      slug: 'fsa-regulation-explained',
      category: 'Regulation',
      date: '2025-01-10'
    },
  ];

  const news = [
    {
      title: 'Milton Global Approved as Ultency Liquidity Provider',
      excerpt: 'We are proud to announce our approval as an official liquidity provider on the MetaQuotes Ultency platform.',
      slug: 'milton-global-approved-ultency-provider',
      date: '2025-01-20'
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
              <h3 className="text-h2 font-semibold text-gray-900">{t('articles')}</h3>
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
                    <div className="text-small text-blue-600 font-medium mb-2">
                      {article.category}
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
              <h3 className="text-h2 font-semibold text-gray-900">{t('news')}</h3>
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
                    <div className="text-small text-blue-600 font-medium mb-2">
                      Company News
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

