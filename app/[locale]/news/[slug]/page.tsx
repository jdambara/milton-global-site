import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { getLocalizedNewsBySlug, getAllLocalizedNews, getAuthorDisplayName } from '@/lib/content/news';
import { generateMetaTags, generateArticleSchema } from '@/lib/seo-utils';

export async function generateStaticParams() {
  const news = getAllLocalizedNews('en'); // Use English as base for slugs
  const locales = ['en', 'es', 'ja'];
  
  return locales.flatMap((locale) =>
    news.map((item) => ({
      locale,
      slug: item.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' | 'ja'; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const news = getLocalizedNewsBySlug(slug, locale);
  
  if (!news) {
    return {
      title: 'News Not Found',
    };
  }

  const baseUrl = `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}news/${slug}`;
  
  return generateMetaTags(locale, {
    title: `${news.title} | Milton Global News`,
    description: news.excerpt,
    keywords: [`Milton Global news`, news.title, news.category],
    url: baseUrl,
    type: 'article',
    image: `https://miltonglobal.com/images/news/${slug}-og.jpg`,
    author: news.author,
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' | 'ja'; slug: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  const news = getLocalizedNewsBySlug(slug, locale);
  
  if (!news) {
    notFound();
  }

  const relatedNews = getAllLocalizedNews(locale)
    .filter(n => n.slug !== news.slug)
    .slice(0, 2);

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

  // Generate structured data for the article
  const articleSchema = generateArticleSchema(locale, {
    title: news.title,
    description: news.excerpt,
    author: news.author,
    datePublished: news.date,
    url: `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}news/${slug}`,
  });

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      
      {/* News Header */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Breadcrumbs locale={locale} />
            </div>

            <div className="flex items-center space-x-3 mb-3">
              <Tag variant={getCategoryColor(news.category)}>
                {getCategoryLabel(news.category)}
              </Tag>
              <span className="text-caption text-gray-500">
                {new Date(news.date + 'T00:00:00').toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-caption text-gray-500">
                {getAuthorDisplayName(news.author)}
              </span>
            </div>

            <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-3">
              {news.title}
            </h1>

            <p className="text-body-large text-gray-600 mb-6">
              {news.excerpt}
            </p>

            {/* Hero Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img
                src="/images/liquidity-provider-news-hero.png"
                alt="Milton Global liquidity provider partnership announcement"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-4 sm:py-6">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-8">
              <article>
                <div 
                  className="text-body text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: news.content.split('\n').map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-h1 font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`;
                    } else if (line.startsWith('## ')) {
                      return `<h2 class="text-h2 font-bold text-gray-900 mt-6 mb-3">${line.substring(3)}</h2>`;
                    } else if (line.startsWith('### ')) {
                      return `<h3 class="text-h3 font-semibold text-gray-900 mt-4 mb-2">${line.substring(4)}</h3>`;
                    } else if (line.startsWith('**') && line.endsWith('**')) {
                      return `<p class="font-bold text-gray-900">${line.replace(/\*\*/g, '')}</p>`;
                    } else if (line.startsWith('- ')) {
                      return `<li class="ml-4">${line.substring(2)}</li>`;
                    } else if (line.startsWith('---')) {
                      return '<hr class="my-8 border-gray-200" />';
                    } else if (line.trim() === '') {
                      return '<br />';
                    } else {
                      // Handle inline links and bold text
                      const processed = line
                        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-red hover:underline">$1</a>')
                        .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');
                      return `<p>${processed}</p>`;
                    }
                  }).join('') }}
                />
              </article>

              {/* Share */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-small font-semibold text-gray-900 mb-1">{t('publishedBy')}</div>
                    <div className="text-body text-gray-600">{getAuthorDisplayName(news.author)}</div>
                  </div>
                  <div>
                    <div className="text-small font-semibold text-gray-900 mb-1">{t('date')}</div>
                    <div className="text-body text-gray-600">
                      {new Date(news.date + 'T00:00:00').toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-6 sm:py-8 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-h2 font-bold text-gray-900 mb-6 text-center">{t('moreNews')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedNews.map((related) => (
                  <Card key={related.slug} hover className="p-6">
                    <Link href={`/${locale === 'en' ? '' : locale + '/'}news/${related.slug}`}>
                      <Tag variant={getCategoryColor(related.category)} className="mb-3">
                        {getCategoryLabel(related.category)}
                      </Tag>
                      <h3 className="text-body-large font-semibold text-gray-900 mb-2 hover:text-brand-red transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-small text-gray-600 mb-3">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-caption text-gray-500">
                        <span>
                          {new Date(related.date + 'T00:00:00').toLocaleDateString(locale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span>{getAuthorDisplayName(related.author)}</span>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 sm:py-16 border-t border-gray-200 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h3 font-bold text-gray-900 mb-4">{t('learnMore')}</h2>
            <p className="text-body-large text-gray-600 mb-8">
              {t('learnMoreDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`/${locale === 'en' ? '' : locale + '/'}about`} variant="primary">
                {t('aboutUs')}
              </Button>
              <Button href={`/${locale === 'en' ? '' : locale + '/'}contact`} variant="dark">
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

