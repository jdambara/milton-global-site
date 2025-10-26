import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Tag from '@/components/ui/Tag';
import NewsletterForm from '@/components/NewsletterForm';
import { getAllLocalizedNews, getAuthorDisplayName } from '@/lib/content/news';
import { generateMetaTags, generateArticleSchema } from '@/lib/seo-utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news.meta' });
  
  const baseUrl = `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}news`;
  
  return generateMetaTags(locale, {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
    url: baseUrl,
    type: 'website',
  });
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' | 'ja' }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  const news = getAllLocalizedNews(locale);

  const getCategoryLabel = (category: string) => {
    return t(`categories.${category}` as any) || category;
  };

  const getCategoryColor = (category: string): 'regulation' | 'ultency' | 'forex' | 'announcement' | 'default' => {
    const colors: Record<string, 'regulation' | 'ultency' | 'forex' | 'announcement' | 'default'> = {
      'announcement': 'announcement',
      'partnership': 'forex',
      'milestone': 'regulation',
      'regulatory': 'regulation'
    };
    return colors[category] || 'default';
  };

  // Generate structured data for news articles
  const newsSchema = news.map(article => generateArticleSchema(locale, {
    title: article.title,
    description: article.excerpt,
    author: article.author,
    datePublished: article.date,
    url: `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}news/${article.slug}`,
  }));

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: t('title'),
            description: t('description'),
            itemListElement: newsSchema.map((schema, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: schema,
            })),
          }),
        }}
      />
      
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="mb-4 -mt-4">
            <Breadcrumbs locale={locale} />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-body-large text-gray-600">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* News Timeline */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {news.map((item, index) => (
                <div key={item.slug} className="bg-gray-50 rounded-lg p-6 md:p-8 hover:bg-gray-100 transition-colors">
                  <Link href={`/${locale === 'en' ? '' : locale + '/'}news/${item.slug}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <Tag variant={getCategoryColor(item.category)}>
                          {getCategoryLabel(item.category)}
                        </Tag>
                        <span className="text-caption text-gray-500">
                          {new Date(item.date + 'T00:00:00').toLocaleDateString(locale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      <h2 className="text-h2 font-bold text-gray-900 mb-3 hover:text-brand-red transition-colors">
                        {item.title}
                      </h2>
                      
                      <p className="text-body text-gray-600 mb-4">
                        {item.excerpt}
                      </p>
                      
                      <div className="text-small text-brand-red font-medium hover:underline">
                        {t('readMore')} →
                      </div>
                    </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="p-12 bg-gray-900 text-white text-center max-w-4xl mx-auto rounded-[4px]">
            <h2 className="text-h2 font-bold mb-4 text-white">{t('newsletter.title')}</h2>
            <p className="text-body-large text-white mb-8">
              {t('newsletter.description')}
            </p>
            <NewsletterForm 
              locale={locale}
              translations={{
                title: t('newsletter.title'),
                description: t('newsletter.description'),
                emailPlaceholder: t('newsletter.emailPlaceholder'),
                subscribeButton: t('newsletter.subscribeButton'),
                subscribingButton: t('newsletter.subscribingButton'),
                successTitle: t('newsletter.successTitle'),
                successMessage: t('newsletter.successMessage'),
                errorRequired: t('newsletter.errorRequired'),
                errorGeneric: t('newsletter.errorGeneric'),
                thankYou: t('newsletter.thankYou')
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

