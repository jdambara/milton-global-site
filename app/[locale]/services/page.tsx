import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import { generateOrganizationSchema, generateServicesPageSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoConfig } from '@/lib/seo-config';
import { genMeta } from '@/lib/seo/generate';
import { SeoOfferCatalog } from './Seo';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params;
  return genMeta('/services', locale as 'en'|'es'|'ja');
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
      
      {/* OfferCatalog structured data */}
      <SeoOfferCatalog />
      
      <ServicesHero locale={locale} />
      <ServicesGrid />
      <ServicesCTA />
    </>
  );
}