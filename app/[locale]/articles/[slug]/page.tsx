import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { getArticleBySlug, getAllArticles } from '@/lib/content/articles';
import { generateMetaTags, generateArticleSchema } from '@/lib/seo-utils';

export async function generateStaticParams() {
  const articles = getAllArticles();
  const locales = ['en', 'es', 'ja'];
  
  return locales.flatMap((locale) =>
    articles.map((article) => ({
      locale,
      slug: article.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' | 'ja'; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  // Get translated metadata based on slug
  let translatedTitle = article.title;
  let translatedExcerpt = article.excerpt;
  let translatedAuthor = article.author;

  if (slug === 'what-is-ultancy-complete-guide') {
    // We need to get translations here too
    const t = await getTranslations({ locale, namespace: 'articles' });
    translatedTitle = t('whatIsUltancy.title');
    translatedExcerpt = t('whatIsUltancy.excerpt');
    translatedAuthor = article.author === 'Milton Global Research Team' ? t('authors.miltonGlobalResearchTeam') : article.author;
  } else if (slug === 'fsa-regulation-explained-seychelles-licensing') {
    const t = await getTranslations({ locale, namespace: 'articles' });
    translatedTitle = t('fsaRegulation.title');
    translatedExcerpt = t('fsaRegulation.excerpt');
    translatedAuthor = article.author === 'Milton Global Research Team' ? t('authors.miltonGlobalResearchTeam') : article.author;
  }

  const baseUrl = `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}articles/${slug}`;
  
  // Get localized site name for title
  const siteName = locale === 'ja' ? 'ミルトン・グローバル' : 'Milton Global';
  const articlesText = locale === 'ja' ? '記事' : locale === 'es' ? 'Artículos' : 'Articles';
  
  return generateMetaTags(locale, {
    title: `${translatedTitle} | ${siteName} ${articlesText}`,
    description: translatedExcerpt,
    keywords: [`Milton Global articles`, translatedTitle, article.category],
    url: baseUrl,
    type: 'article',
    image: `https://miltonglobal.com/images/articles/${slug}-og.jpg`,
    author: {
      name: translatedAuthor,
      type: 'organization',
    },
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' | 'ja'; slug: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'articles' });
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  // Get translated content based on slug
  let translatedContent = '';
  let translatedTitle = article.title;
  let translatedExcerpt = article.excerpt;

  if (slug === 'what-is-ultancy-complete-guide') {
    translatedTitle = t('whatIsUltancy.title');
    translatedExcerpt = t('whatIsUltancy.excerpt');
    translatedContent = t('whatIsUltancy.content');
  } else if (slug === 'fsa-regulation-explained-seychelles-licensing') {
    translatedTitle = t('fsaRegulation.title');
    translatedExcerpt = t('fsaRegulation.excerpt');
    translatedContent = t('fsaRegulation.content');
  }

  const relatedArticles = getAllArticles()
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  const getCategoryLabel = (category: string) => {
    return t(`categories.${category}` as any) || category;
  };

  const getCategoryColor = (category: string): 'regulation' | 'ultency' | 'forex' | 'announcement' | 'default' => {
    const colors: Record<string, 'regulation' | 'ultency' | 'forex' | 'announcement' | 'default'> = {
      'Technology': 'ultency',
      'Regulation': 'regulation',
      'Trading': 'forex',
      'Announcement': 'announcement'
    };
    return colors[category] || 'default';
  };

  // Generate structured data for the article
  const translatedAuthor = article.author === 'Milton Global Research Team' ? t('authors.miltonGlobalResearchTeam') : article.author;
  const articleSchema = generateArticleSchema(locale, {
    title: translatedTitle,
    description: translatedExcerpt,
    author: {
      name: translatedAuthor,
      type: 'organization',
    },
    datePublished: article.date,
    url: `https://miltonglobal.com/${locale === 'en' ? '' : locale + '/'}articles/${slug}`,
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
      
      {/* Article Header */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4">
              <Breadcrumbs locale={locale} articleTitle={translatedTitle} />
            </div>

            <div className="flex items-center space-x-3 mb-3">
              <Tag variant={getCategoryColor(article.category)}>
                {getCategoryLabel(article.category)}
              </Tag>
              <span className="text-caption text-gray-500">
                {new Date(article.date + 'T00:00:00').toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-caption text-gray-500">
                {article.author === 'Milton Global Research Team' ? t('authors.miltonGlobalResearchTeam') : article.author}
              </span>
            </div>

            <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-3">
              {translatedTitle}
            </h1>

            <p className="text-body-large text-gray-600 mb-6">
              {translatedExcerpt}
            </p>

            {/* Hero Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img
                src={slug === 'what-is-ultancy-complete-guide' ? "/images/what-is-ultency.png" : "/images/milton-global-hero.png"}
                alt={article.title}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-4 sm:py-6">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <article>
              <div 
                className="text-body text-gray-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: (translatedContent || article.content).split('\n').map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-h1 font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`;
                  } else if (line.startsWith('## ')) {
                    return `<h2 class="text-h2 font-bold text-gray-900 mt-6 mb-3">${line.substring(3)}</h2>`;
                  } else if (line.startsWith('### ')) {
                    return `<h3 class="text-h3 font-semibold text-gray-900 mt-4 mb-2">${line.substring(4)}</h3>`;
                  } else if (line.match(/^\*\*[^*]+\*\*$/)) {
                    return `<p class="font-bold text-gray-900 mb-3">${line.replace(/\*\*/g, '')}</p>`;
                  } else if (line.startsWith('- ')) {
                    return `<li class="ml-4 mb-2 flex items-start"><span class="text-brand-red mr-2 mt-1">•</span><span>${line.substring(2)}</span></li>`;
                  } else if (line.startsWith('---')) {
                    return '<hr class="my-8 border-gray-200" />';
                  } else if (line.trim() === '') {
                    return '<br />';
                  } else {
                    // Handle inline links and bold text
                    const processed = line
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-red hover:underline">$1</a>')
                      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
                    return `<p class="mb-3">${processed}</p>`;
                  }
                }).join('') }}
              />
            </article>

            {/* Article Meta */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-small font-semibold text-gray-900 mb-1">{t('publishedBy')}</div>
                  <div className="text-body text-gray-600">
                    {article.author === 'Milton Global Research Team' ? t('authors.miltonGlobalResearchTeam') : article.author}
                  </div>
                </div>
                <div>
                  <div className="text-small font-semibold text-gray-900 mb-1">{t('date')}</div>
                  <div className="text-body text-gray-600">
                    {new Date(article.date + 'T00:00:00').toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-6 sm:py-8 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-h2 font-bold text-gray-900 mb-6 text-center">{t('moreArticles')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((related) => (
                  <Card key={related.slug} hover className="p-6">
                    <Link href={`/${locale === 'en' ? '' : locale + '/'}articles/${related.slug}`}>
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
                        <span>{related.author}</span>
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
              <Button href={`/${locale === 'en' ? '' : locale + '/'}about`} variant="dark">
                {t('aboutUs')}
              </Button>
              <Button href={`/${locale === 'en' ? '' : locale + '/'}contact`} variant="primary">
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

