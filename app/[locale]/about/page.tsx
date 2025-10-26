import { Metadata } from 'next';
import AboutContent from './AboutContent';
import { genMeta } from '@/lib/seo/generate';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  return genMeta('/about', locale);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }) {
  const { locale } = await params;
  return <AboutContent />;
}