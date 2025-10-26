import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import { getArticleBySlug, getAllArticles } from '@/lib/content/articles';

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
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Milton Global`,
    description: article.excerpt,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' | 'ja'; slug: string }>;
}) {
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  const relatedArticles = getAllArticles()
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              href={`/${locale === 'en' ? '' : locale + '/'}articles`}
              className="inline-flex items-center text-body text-gray-600 hover:text-brand-red mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>

            <div className="flex items-center space-x-3 mb-4">
              <Tag variant={article.category === 'Technology' ? 'ultency' : 'regulation'}>
                {article.category}
              </Tag>
              <span className="text-caption text-gray-500">{article.readTime}</span>
            </div>

            <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            <div className="flex items-center justify-between text-body text-gray-600 mb-6">
              <span>By {article.author}</span>
              <span>{new Date(article.date).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>

            <p className="text-body-large text-gray-600">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <article className="prose prose-gray max-w-none">
                <div 
                  className="text-body text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: article.content.split('\n').map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-h1 font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`;
                    } else if (line.startsWith('## ')) {
                      return `<h2 class="text-h2 font-bold text-gray-900 mt-6 mb-3">${line.substring(3)}</h2>`;
                    } else if (line.startsWith('### ')) {
                      return `<h3 class="text-h3 font-semibold text-gray-900 mt-4 mb-2">${line.substring(4)}</h3>`;
                    } else if (line.startsWith('- ')) {
                      return `<li class="ml-4">${line.substring(2)}</li>`;
                    } else if (line.trim() === '') {
                      return '<br />';
                    } else {
                      return `<p>${line}</p>`;
                    }
                  }).join('') }}
                />
              </article>

              {/* Keywords */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-small font-semibold text-gray-900 mb-3">Related Topics</div>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((keyword) => (
                    <Tag key={keyword} variant="default">{keyword}</Tag>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-h2 font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((related) => (
                  <Card key={related.slug} hover className="p-6">
                    <Link href={`/${locale === 'en' ? '' : locale + '/'}articles/${related.slug}`}>
                      <Tag variant="ultency" className="mb-3">{related.category}</Tag>
                      <h3 className="text-body-large font-semibold text-gray-900 mb-2 hover:text-brand-red transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-small text-gray-600 mb-3">
                        {related.excerpt}
                      </p>
                      <div className="text-caption text-gray-500">
                        {new Date(related.date).toLocaleDateString(locale, {
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
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <Card className="p-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold mb-4">Interested in Milton Global Services?</h2>
            <p className="text-body-large text-gray-300 mb-8">
              Learn more about our institutional trading solutions and Ultency liquidity provision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href={`/${locale === 'en' ? '' : locale + '/'}ultency-liquidity-provider`} variant="primary">
                Ultency Services
              </Button>
              <Button href={`/${locale === 'en' ? '' : locale + '/'}contact`} variant="secondary">
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

