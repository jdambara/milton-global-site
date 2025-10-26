import { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Tag from '@/components/ui/Tag';
import { getAllNews } from '@/lib/content/news';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Company News | Milton Global Announcements',
    description: 'Latest news and announcements from Milton Global including regulatory updates, partnerships, and company milestones.',
    keywords: 'Milton Global news, company announcements, FSA license, Ultency approval, broker news',
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' | 'ja' }>;
}) {
  const { locale } = await params;
  const news = getAllNews();

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'announcement': 'Company Announcement',
      'partnership': 'Partnership',
      'milestone': 'Milestone',
      'regulatory': 'Regulatory Update'
    };
    return labels[category] || category;
  };

  const getCategoryColor = (category: string): 'regulation' | 'ultency' | 'forex' | 'default' => {
    const colors: Record<string, 'regulation' | 'ultency' | 'forex' | 'default'> = {
      'announcement': 'ultency',
      'partnership': 'forex',
      'milestone': 'regulation',
      'regulatory': 'regulation'
    };
    return colors[category] || 'default';
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-b from-green-50 to-white">
        <div className="container-custom">
          <div className="mb-4 -mt-4">
            <Breadcrumbs locale={locale} />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-4">
              Company News
            </h1>
            <p className="text-body-large text-gray-600">
              Latest announcements, updates, and milestones from Milton Global
            </p>
          </div>
        </div>
      </section>

      {/* News Timeline */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {news.map((item, index) => (
                <div key={item.slug} className="relative">
                  {/* Timeline Line */}
                  {index !== news.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
                  )}
                  
                  <Card hover className="p-6 md:p-8 relative">
                    <Link href={`/${locale === 'en' ? '' : locale + '/'}news/${item.slug}`}>
                      <div className="flex gap-6">
                        {/* Date Badge */}
                        <div className="hidden md:block flex-shrink-0 w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold z-10">
                          {new Date(item.date).getDate()}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <Tag variant={getCategoryColor(item.category)}>
                              {getCategoryLabel(item.category)}
                            </Tag>
                            <span className="text-caption text-gray-500">
                              {new Date(item.date).toLocaleDateString(locale, {
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
                            Read more →
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <Card className="p-12 bg-gradient-to-br from-brand-red to-brand-600 text-white text-center max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold mb-4">Stay Updated</h2>
            <p className="text-body-large text-white/90 mb-8">
              Get the latest news and updates from Milton Global delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded border-0 text-gray-900 focus:ring-2 focus:ring-white outline-none"
              />
              <button className="px-6 py-2.5 bg-white text-brand-red rounded font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

