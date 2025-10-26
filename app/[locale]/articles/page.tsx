import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Card from '@/components/ui/Card';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Tag from '@/components/ui/Tag';
import { getAllArticles } from '@/lib/content/articles';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: t('articles.meta.title'),
    description: t('articles.meta.description'),
    keywords: t('articles.meta.keywords'),
  };
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' | 'ja' }>;
}) {
  const { locale } = await params;
  const articles = getAllArticles();
  
  const categories = Array.from(new Set(articles.map(a => a.category)));
  
  // Get translations for the page content
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="mb-4 -mt-4">
            <Breadcrumbs locale={locale} />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-4">
              {t('articles.title')}
            </h1>
            <p className="text-body-large text-gray-600">
              {t('articles.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              <Tag>{t('articles.title')}</Tag>
              {categories.map((category) => (
                <Tag key={category} variant="default">
                  {t(`articles.categories.${category}` as any)}
                </Tag>
              ))}
            </div>

            {/* Articles List */}
            <div className="space-y-6">
              {articles.map((article) => (
                <Card key={article.slug} hover className="p-6 md:p-8">
                  <Link href={`/${locale === 'en' ? '' : locale + '/'}articles/${article.slug}`}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Tag variant={article.category === 'Technology' ? 'ultency' : 'regulation'}>
                            {t(`articles.categories.${article.category}` as any)}
                          </Tag>
                          <span className="text-caption text-gray-500">{article.readTime}</span>
                        </div>
                        
                        <h2 className="text-h2 font-bold text-gray-900 mb-3 hover:text-brand-red transition-colors">
                          {t(`articles.${article.slug}.title` as any) || article.title}
                        </h2>
                        
                        <p className="text-body text-gray-600 mb-4">
                          {t(`articles.${article.slug}.excerpt` as any) || article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-small text-gray-500">
                          <span>{t(`articles.authors.${article.author.toLowerCase().replace(/\s+/g, '')}` as any) || article.author}</span>
                          <span>{new Date(article.date).toLocaleDateString(locale, { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

