import { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Tag from '@/components/ui/Tag';
import { getAllArticles } from '@/lib/content/articles';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Articles | Milton Global Insights on Trading & Technology',
    description: 'Expert articles on Ultency, FSA regulation, liquidity provision, and institutional trading technology from Milton Global.',
    keywords: 'trading articles, forex insights, Ultency guide, FSA regulation, CFD trading, liquidity provider',
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
              Articles & Insights
            </h1>
            <p className="text-body-large text-gray-600">
              Expert perspectives on trading technology, regulation, and market infrastructure
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
              <Tag>All Articles</Tag>
              {categories.map((category) => (
                <Tag key={category} variant="default">{category}</Tag>
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
                            {article.category}
                          </Tag>
                          <span className="text-caption text-gray-500">{article.readTime}</span>
                        </div>
                        
                        <h2 className="text-h2 font-bold text-gray-900 mb-3 hover:text-brand-red transition-colors">
                          {article.title}
                        </h2>
                        
                        <p className="text-body text-gray-600 mb-4">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-small text-gray-500">
                          <span>{article.author}</span>
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

