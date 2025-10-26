import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import { generateMetaTags, generateOrganizationSchema, generateServicesPageSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoConfig } from '@/lib/seo-config';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  
  const pageUrl = `${seoConfig.siteUrl}/${locale}/services`;
  const pageData = {
    title: `${t('meta.title')} | Milton Global`,
    description: t('meta.description'),
    keywords: [
      'institutional services',
      'white label broker',
      'Ultency gateway',
      'trading infrastructure',
      'MT5 hosting',
      'liquidity provider',
      'FSA regulated',
      'MetaQuotes Ultency',
      'brokerage solutions',
      'financial technology'
    ],
    url: pageUrl,
    image: `${seoConfig.siteUrl}/images/services-og-image.png`,
    type: 'website',
  };

  return generateMetaTags(locale, pageData);
}

export default async function ServicesPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  const pageUrl = `${seoConfig.siteUrl}/${locale}/services`;
  
  // Generate structured data
  const organizationSchema = generateOrganizationSchema(locale);
  const servicesPageSchema = generateServicesPageSchema(locale, pageUrl);
  const faqSchema = generateFAQSchema(locale, pageUrl);
  
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <ServicesHero locale={locale} />
      <ServicesGrid />
      <ServicesCTA />
    </>
  );
}