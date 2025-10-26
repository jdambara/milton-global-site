import { Metadata } from 'next';
import Script from 'next/script';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Tag from '@/components/ui/Tag';
import { generateOrganizationSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-utils';
import { genMeta } from '@/lib/seo/generate';

export async function generateMetadata({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }): Promise<Metadata> {
  const { locale } = await params;
  return genMeta('/ultency-liquidity-provider', locale);
}

export default async function UltencyPage({ params }: { params: Promise<{ locale: 'en' | 'es' | 'ja' }> }) {
  const { locale } = await params;
  
  // Generate structured data
  const baseUrl = 'https://miltonglobal.com';
  const pageUrl = locale === 'en' 
    ? `${baseUrl}/ultency-liquidity-provider`
    : `${baseUrl}/${locale}/ultency-liquidity-provider`;
  
  const organizationSchema = generateOrganizationSchema(locale);
  const productSchema = generateProductSchema(locale, {
    name: locale === 'en' ? 'Ultency Liquidity Provider Services' :
          locale === 'es' ? 'Servicios de Proveedor de Liquidez Ultency' :
          'ウルテンシー流動性プロバイダーサービス',
    description: locale === 'en' ? 'Institutional-grade liquidity services through MetaQuotes Ultency matching engine' :
                  locale === 'es' ? 'Servicios de liquidez de grado institucional a través del motor de emparejamiento Ultency de MetaQuotes' :
                  'MetaQuotesウルテンシーマッチングエンジンによる機関投資家グレードの流動性サービス',
    features: [
      locale === 'en' ? 'Ultra-low latency execution' :
      locale === 'es' ? 'Ejecución de ultra baja latencia' :
      '超低レイテンシー執行',
      locale === 'en' ? 'Institutional liquidity access' :
      locale === 'es' ? 'Acceso a liquidez institucional' :
      '機関投資家流動性アクセス',
      locale === 'en' ? 'MetaQuotes approved provider' :
      locale === 'es' ? 'Proveedor aprobado por MetaQuotes' :
      'MetaQuotes認定プロバイダー'
    ],
    brand: 'Milton Global'
  });
  
  const faqSchema = generateFAQSchema(locale, pageUrl);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'en' ? 'Home' : locale === 'es' ? 'Inicio' : 'ホーム', url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}` },
    { name: locale === 'en' ? 'Ultency Liquidity Provider' : locale === 'es' ? 'Proveedor de Liquidez Ultency' : 'ウルテンシー流動性プロバイダー', url: pageUrl }
  ]);

  return (
    <>
      {/* Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <div className="min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="mb-4 -mt-4">
            <Breadcrumbs locale={locale} />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <Tag variant="ultency" className="mb-6">
              {locale === 'en' ? 'Approved by MetaQuotes' : 
               locale === 'es' ? 'Aprobado por MetaQuotes' : 
               'MetaQuotes認定'}
            </Tag>
            <h1 className="text-h1 md:text-[48px] md:leading-[56px] font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Ultency Liquidity Provider' : 
               locale === 'es' ? 'Proveedor de Liquidez Ultency' : 
               'ウルテンシー流動性プロバイダー'}
            </h1>
            <p className="text-body-large text-gray-600 mb-8">
              {locale === 'en' ? 
                'Milton Global is an approved liquidity provider on the MetaQuotes Ultency Matching Engine, delivering ultra-low latency execution, deep institutional liquidity, and advanced risk management to brokers worldwide.' :
               locale === 'es' ?
                'Milton Global es un proveedor de liquidez aprobado en el Motor de Emparejamiento Ultency de MetaQuotes, ofreciendo ejecución de ultra baja latencia, liquidez institucional profunda y gestión avanzada de riesgos a brokers en todo el mundo.' :
                'ミルトングローバルはMetaQuotesウルテンシーマッチングエンジンの認定流動性プロバイダーとして、世界中のブローカーに超低レイテンシー執行、深い機関投資家流動性、高度なリスク管理を提供しています。'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`/${locale === 'en' ? '' : locale + '/'}contact`} variant="primary">
                {locale === 'en' ? 'Partner With Us' : 
                 locale === 'es' ? 'Asociarse con Nosotros' : 
                 'パートナーシップ'}
              </Button>
              <Button href={`/${locale === 'en' ? '' : locale + '/'}services`} variant="secondary">
                {locale === 'en' ? 'View All Services' : 
                 locale === 'es' ? 'Ver Todos los Servicios' : 
                 'サービス一覧'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ultency */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-gray-900 mb-6 text-center">
              {locale === 'en' ? 'What is Ultency?' : 
               locale === 'es' ? '¿Qué es Ultency?' : 
               'ウルテンシーとは？'}
            </h2>
            <Card className="p-8 md:p-12 bg-gray-50 border-0 shadow-lg">
              <div className="space-y-4 text-body text-gray-600">
                <p>
                  {locale === 'en' ? 
                    'Ultency is MetaQuotes\' revolutionary ultra-low latency matching engine designed specifically for the MetaTrader 5 platform. As a native MT5 solution, Ultency provides brokers with built-in liquidity aggregation, order matching, and comprehensive risk management capabilities - all integrated seamlessly into the platform architecture.' :
                   locale === 'es' ?
                    'Ultency es el revolucionario motor de emparejamiento de ultra baja latencia de MetaQuotes diseñado específicamente para la plataforma MetaTrader 5. Como solución nativa de MT5, Ultency proporciona a los brokers agregación de liquidez integrada, emparejamiento de órdenes y capacidades de gestión de riesgos integrales, todo integrado perfectamente en la arquitectura de la plataforma.' :
                    'ウルテンシーはMetaQuotesがMetaTrader 5プラットフォーム向けに特別に設計した革新的な超低レイテンシーマッチングエンジンです。ネイティブMT5ソリューションとして、ウルテンシーはブローカーに内蔵の流動性アグリゲーション、オーダーマッチング、包括的なリスク管理機能を提供し、すべてがプラットフォームアーキテクチャにシームレスに統合されています。'
                  }
                </p>
                <p>
                  {locale === 'en' ? 
                    'The Ultency Matching Engine enables reliable connection to multiple liquidity providers simultaneously, consolidating their prices and execution to deliver the best possible trading conditions. The system is highly customizable to meet the unique requirements of each broker, offering a comprehensive suite of risk management and reporting tools.' :
                   locale === 'es' ?
                    'El Motor de Emparejamiento Ultency permite conexión confiable a múltiples proveedores de liquidez simultáneamente, consolidando sus precios y ejecución para ofrecer las mejores condiciones de trading posibles. El sistema es altamente personalizable para satisfacer los requisitos únicos de cada broker, ofreciendo un conjunto integral de herramientas de gestión de riesgos y reportes.' :
                    'ウルテンシーマッチングエンジンは複数の流動性プロバイダーへの同時接続を可能にし、価格と執行を統合して最高の取引条件を提供します。システムは各ブローカーの独自要件を満たすために高度にカスタマイズ可能で、包括的なリスク管理とレポートツールを提供します。'
                  }
                </p>
                <p>
                  {locale === 'en' ? 
                    'As an approved Ultency liquidity provider, Milton Global delivers institutional-grade liquidity directly through the Ultency infrastructure, ensuring sub-10ms execution times and transparent pricing for brokers and their clients.' :
                   locale === 'es' ?
                    'Como proveedor de liquidez aprobado de Ultency, Milton Global ofrece liquidez de grado institucional directamente a través de la infraestructura Ultency, garantizando tiempos de ejecución sub-10ms y precios transparentes para brokers y sus clientes.' :
                    '認定ウルテンシー流動性プロバイダーとして、ミルトングローバルはウルテンシーインフラを通じて機関投資家グレードの流動性を直接提供し、ブローカーとそのクライアントに10ms未満の執行時間と透明な価格設定を保証しています。'
                  }
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ultency Matching Engine Visual */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-h2 font-bold text-gray-900 mb-4">
                {locale === 'en' ? 'Ultency Matching Engine' : 
                 locale === 'es' ? 'Motor de Emparejamiento Ultency' : 
                 'ウルテンシーマッチングエンジン'}
              </h2>
              <p className="text-body text-gray-600 max-w-3xl mx-auto">
                {locale === 'en' ? 
                  'Experience the power of MetaQuotes\' revolutionary matching engine technology through our comprehensive visual overview.' :
                 locale === 'es' ?
                  'Experimenta el poder de la tecnología revolucionaria del motor de emparejamiento de MetaQuotes a través de nuestra visión general visual integral.' :
                  '包括的なビジュアル概要を通じて、MetaQuotesの革新的なマッチングエンジンテクノロジーの力を体験してください。'
                }
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/ultency-milton-global.png" 
                alt={locale === 'en' ? 'Ultency Matching Engine Overview' : 
                      locale === 'es' ? 'Resumen del Motor de Emparejamiento Ultency' : 
                      'ウルテンシーマッチングエンジン概要'}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-h2 font-bold text-gray-900 mb-8 text-center">
              {locale === 'en' ? 'Ultency Key Features' : 
               locale === 'es' ? 'Características Clave de Ultency' : 
               'ウルテンシーの主要機能'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hover className="p-6">
                <div className="mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {locale === 'en' ? 'Ultra-Low Latency' : 
                   locale === 'es' ? 'Ultra Baja Latencia' : 
                   '超低レイテンシー'}
                </h3>
                <p className="text-small text-gray-600">
                  {locale === 'en' ? 
                    'Sub-10ms order execution through highly efficient internal data transfer protocols' :
                   locale === 'es' ?
                    'Ejecución de órdenes sub-10ms a través de protocolos de transferencia de datos internos altamente eficientes' :
                    '高効率な内部データ転送プロトコルによる10ms未満のオーダー執行'
                  }
                </p>
              </Card>

              <Card hover className="p-6">
                <div className="mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {locale === 'en' ? 'Multiple LPs' : 
                   locale === 'es' ? 'Múltiples PLs' : 
                   '複数LP'}
                </h3>
                <p className="text-small text-gray-600">
                  {locale === 'en' ? 
                    'Access multiple liquidity providers through an intuitive gallery and connect in clicks' :
                   locale === 'es' ?
                    'Accede a múltiples proveedores de liquidez a través de una galería intuitiva y conéctate en clics' :
                    '直感的なギャラリーを通じて複数の流動性プロバイダーにアクセスし、クリックで接続'
                  }
                </p>
              </Card>

              <Card hover className="p-6">
                <div className="mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {locale === 'en' ? 'Lower Spreads' : 
                   locale === 'es' ? 'Spreads Más Bajos' : 
                   '狭いスプレッド'}
                </h3>
                <p className="text-small text-gray-600">
                  {locale === 'en' ? 
                    'Reduce spreads by accessing multiple liquidity sources for competitive pricing' :
                   locale === 'es' ?
                    'Reduce spreads accediendo a múltiples fuentes de liquidez para precios competitivos' :
                    '複数の流動性ソースにアクセスして競争力のある価格設定でスプレッドを削減'
                  }
                </p>
              </Card>

              <Card hover className="p-6">
                <div className="mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {locale === 'en' ? 'Risk Management' : 
                   locale === 'es' ? 'Gestión de Riesgos' : 
                   'リスク管理'}
                </h3>
                <p className="text-small text-gray-600">
                  {locale === 'en' ? 
                    'Comprehensive risk management tools with A-Book, B-Book, and C-Book execution' :
                   locale === 'es' ?
                    'Herramientas integrales de gestión de riesgos con ejecución A-Book, B-Book y C-Book' :
                    'A-Book、B-Book、C-Book執行を含む包括的なリスク管理ツール'
                  }
                </p>
              </Card>

              <Card hover className="p-6">
                <div className="mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {locale === 'en' ? 'Clear Costs' : 
                   locale === 'es' ? 'Costos Claros' : 
                   '明確なコスト'}
                </h3>
                <p className="text-small text-gray-600">
                  {locale === 'en' ? 
                    'Save on infrastructure by avoiding individual connections to each provider' :
                   locale === 'es' ?
                    'Ahorra en infraestructura evitando conexiones individuales a cada proveedor' :
                    '各プロバイダーへの個別接続を避けることでインフラコストを削減'
                  }
                </p>
              </Card>

              <Card hover className="p-6">
                <div className="mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                  {locale === 'en' ? 'Native MT5' : 
                   locale === 'es' ? 'MT5 Nativo' : 
                   'ネイティブMT5'}
                </h3>
                <p className="text-small text-gray-600">
                  {locale === 'en' ? 
                    'Seamlessly integrated into MetaTrader 5 with no external systems required' :
                   locale === 'es' ?
                    'Integrado perfectamente en MetaTrader 5 sin sistemas externos requeridos' :
                    '外部システム不要でMetaTrader 5にシームレスに統合'
                  }
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Milton Global as LP */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-purple-50 to-blue-50">
              <div className="text-center mb-8">
                <h2 className="text-h2 font-bold text-gray-900 mb-4">
                  {locale === 'en' ? 'Milton Global on Ultency' : 
                   locale === 'es' ? 'Milton Global en Ultency' : 
                   'ウルテンシー上のミルトングローバル'}
                </h2>
                <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
                  {locale === 'en' ? 
                    'As an approved Ultency liquidity provider, Milton Global delivers institutional-grade liquidity with transparent pricing and ultra-fast execution to brokers worldwide.' :
                   locale === 'es' ?
                    'Como proveedor de liquidez aprobado de Ultency, Milton Global ofrece liquidez de grado institucional con precios transparentes y ejecución ultra rápida a brokers en todo el mundo.' :
                    '認定ウルテンシー流動性プロバイダーとして、ミルトングローバルは透明な価格設定と超高速執行で機関投資家グレードの流動性を世界中のブローカーに提供しています。'
                  }
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-h1 font-bold text-brand-red mb-2">&lt;10ms</div>
                  <div className="text-small text-gray-600">
                    {locale === 'en' ? 'Execution Time' : 
                     locale === 'es' ? 'Tiempo de Ejecución' : 
                     '執行時間'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-h1 font-bold text-brand-red mb-2">Tier 1</div>
                  <div className="text-small text-gray-600">
                    {locale === 'en' ? 'Liquidity' : 
                     locale === 'es' ? 'Liquidez' : 
                     '流動性'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-h1 font-bold text-brand-red mb-2">24/7</div>
                  <div className="text-small text-gray-600">
                    {locale === 'en' ? 'Availability' : 
                     locale === 'es' ? 'Disponibilidad' : 
                     '可用性'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-h1 font-bold text-brand-red mb-2">99.99%</div>
                  <div className="text-small text-gray-600">
                    {locale === 'en' ? 'Uptime' : 
                     locale === 'es' ? 'Tiempo de Actividad' : 
                     '稼働率'}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits for Brokers */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-gray-900 mb-8 text-center">
              {locale === 'en' ? 'Benefits for Brokers' : 
               locale === 'es' ? 'Beneficios para Brokers' : 
               'ブローカーへのメリット'}
            </h2>
            <div className="space-y-4">
              <Card hover className="p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                      {locale === 'en' ? 'Simplified Infrastructure' : 
                       locale === 'es' ? 'Infraestructura Simplificada' : 
                       '簡素化されたインフラ'}
                    </h3>
                    <p className="text-small text-gray-600">
                      {locale === 'en' ? 
                        'Connect to multiple liquidity providers through a single Ultency connection, eliminating the need for individual bridge setups and reducing technical complexity.' :
                       locale === 'es' ?
                        'Conecta a múltiples proveedores de liquidez a través de una sola conexión Ultency, eliminando la necesidad de configuraciones de bridge individuales y reduciendo la complejidad técnica.' :
                        '単一のウルテンシー接続を通じて複数の流動性プロバイダーに接続し、個別のブリッジ設定の必要性を排除し、技術的複雑さを軽減します。'
                      }
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                      {locale === 'en' ? 'Best Price Execution' : 
                       locale === 'es' ? 'Mejor Ejecución de Precios' : 
                       '最良価格執行'}
                    </h3>
                    <p className="text-small text-gray-600">
                      {locale === 'en' ? 
                        'Ultency automatically aggregates prices from all connected LPs including Milton Global, ensuring your clients receive the best available pricing on every trade.' :
                       locale === 'es' ?
                        'Ultency agrega automáticamente precios de todos los LPs conectados incluyendo Milton Global, asegurando que tus clientes reciban los mejores precios disponibles en cada operación.' :
                        'ウルテンシーはミルトングローバルを含むすべての接続されたLPから価格を自動的に集約し、お客様のクライアントがすべての取引で利用可能な最良の価格を受け取ることを保証します。'
                      }
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                      {locale === 'en' ? 'Advanced Risk Controls' : 
                       locale === 'es' ? 'Controles Avanzados de Riesgo' : 
                       '高度なリスク管理'}
                    </h3>
                    <p className="text-small text-gray-600">
                      {locale === 'en' ? 
                        'Manage risk with sophisticated tools for position monitoring, automatic hedging, exposure limits, and flexible A-Book/B-Book routing based on client profiles.' :
                       locale === 'es' ?
                        'Gestiona el riesgo con herramientas sofisticadas para monitoreo de posiciones, cobertura automática, límites de exposición y enrutamiento flexible A-Book/B-Book basado en perfiles de clientes.' :
                        'ポジション監視、自動ヘッジング、エクスポージャー制限、クライアントプロファイルに基づく柔軟なA-Book/B-Bookルーティングの高度なツールでリスクを管理します。'
                      }
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-body-large font-semibold text-gray-900 mb-2">
                      {locale === 'en' ? 'Reduced Operating Costs' : 
                       locale === 'es' ? 'Costos Operativos Reducidos' : 
                       '運用コスト削減'}
                    </h3>
                    <p className="text-small text-gray-600">
                      {locale === 'en' ? 
                        'Lower your infrastructure and maintenance costs by consolidating liquidity connections through Ultency\'s centralized platform architecture.' :
                       locale === 'es' ?
                        'Reduce tus costos de infraestructura y mantenimiento consolidando conexiones de liquidez a través de la arquitectura de plataforma centralizada de Ultency.' :
                        'ウルテンシーの集中型プラットフォームアーキテクチャを通じて流動性接続を統合することで、インフラとメンテナンスコストを削減します。'
                      }
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-h2 font-bold text-gray-900 mb-8 text-center">
              {locale === 'en' ? 'Technical Specifications' : 
               locale === 'es' ? 'Especificaciones Técnicas' : 
               '技術仕様'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-body-large font-semibold text-gray-900 mb-4">
                  {locale === 'en' ? 'Platform Integration' : 
                   locale === 'es' ? 'Integración de Plataforma' : 
                   'プラットフォーム統合'}
                </h3>
                <ul className="space-y-2 text-small text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Native MetaTrader 5 integration' : 
                       locale === 'es' ? 'Integración nativa de MetaTrader 5' : 
                       'ネイティブMetaTrader 5統合'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'No external bridges required' : 
                       locale === 'es' ? 'No se requieren bridges externos' : 
                       '外部ブリッジ不要'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Efficient internal data protocols' : 
                       locale === 'es' ? 'Protocolos de datos internos eficientes' : 
                       '効率的な内部データプロトコル'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Centralized configuration in MT5' : 
                       locale === 'es' ? 'Configuración centralizada en MT5' : 
                       'MT5での集中設定'}
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-body-large font-semibold text-gray-900 mb-4">
                  {locale === 'en' ? 'Execution Performance' : 
                   locale === 'es' ? 'Rendimiento de Ejecución' : 
                   '執行パフォーマンス'}
                </h3>
                <ul className="space-y-2 text-small text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Sub-10ms order processing' : 
                       locale === 'es' ? 'Procesamiento de órdenes sub-10ms' : 
                       '10ms未満のオーダー処理'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Real-time price aggregation' : 
                       locale === 'es' ? 'Agregación de precios en tiempo real' : 
                       'リアルタイム価格集約'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Intelligent price filtering' : 
                       locale === 'es' ? 'Filtrado inteligente de precios' : 
                       'インテリジェント価格フィルタリング'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Market depth visualization' : 
                       locale === 'es' ? 'Visualización de profundidad de mercado' : 
                       'マーケット深度可視化'}
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-body-large font-semibold text-gray-900 mb-4">
                  {locale === 'en' ? 'Risk Management' : 
                   locale === 'es' ? 'Gestión de Riesgos' : 
                   'リスク管理'}
                </h3>
                <ul className="space-y-2 text-small text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'A-Book, B-Book, C-Book routing' : 
                       locale === 'es' ? 'Enrutamiento A-Book, B-Book, C-Book' : 
                       'A-Book、B-Book、C-Bookルーティング'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Automatic position coverage' : 
                       locale === 'es' ? 'Cobertura automática de posiciones' : 
                       '自動ポジションカバレッジ'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Exposure limits and alerts' : 
                       locale === 'es' ? 'Límites de exposición y alertas' : 
                       'エクスポージャー制限とアラート'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Client group profiling' : 
                       locale === 'es' ? 'Perfilado de grupos de clientes' : 
                       'クライアントグループプロファイリング'}
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-body-large font-semibold text-gray-900 mb-4">
                  {locale === 'en' ? 'Monitoring & Reporting' : 
                   locale === 'es' ? 'Monitoreo y Reportes' : 
                   '監視・レポート'}
                </h3>
                <ul className="space-y-2 text-small text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Real-time performance dashboard' : 
                       locale === 'es' ? 'Dashboard de rendimiento en tiempo real' : 
                       'リアルタイムパフォーマンスダッシュボード'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Comprehensive execution reports' : 
                       locale === 'es' ? 'Reportes integrales de ejecución' : 
                       '包括的執行レポート'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'P&L analysis by LP/client' : 
                       locale === 'es' ? 'Análisis P&L por LP/cliente' : 
                       'LP/クライアント別P&L分析'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    <span>
                      {locale === 'en' ? 'Markup and commission tracking' : 
                       locale === 'es' ? 'Seguimiento de markup y comisiones' : 
                       'マークアップ・手数料追跡'}
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-8">
        <div className="container-custom">
          <Card className="p-12 bg-gray-100 text-gray-900 text-center">
            <h2 className="text-h2 font-bold mb-4">
              {locale === 'en' ? 'Connect to Milton Global on Ultency' : 
               locale === 'es' ? 'Conecta con Milton Global en Ultency' : 
               'ウルテンシーでミルトングローバルに接続'}
            </h2>
            <p className="text-body-large text-gray-600 mb-8 max-w-2xl mx-auto">
              {locale === 'en' ? 
                'Partner with an approved Ultency liquidity provider and deliver institutional-grade execution to your clients.' :
               locale === 'es' ?
                'Asóciate con un proveedor de liquidez Ultency aprobado y ofrece ejecución de grado institucional a tus clientes.' :
                '認定ウルテンシー流動性プロバイダーと提携し、お客様のクライアントに機関投資家グレードの執行を提供してください。'
              }
            </p>
            <Button href={`/${locale === 'en' ? '' : locale + '/'}contact`} variant="primary">
              {locale === 'en' ? 'Contact Liquidity Team' : 
               locale === 'es' ? 'Contactar Equipo de Liquidez' : 
               '流動性チームに連絡'}
            </Button>
          </Card>
        </div>
      </section>
    </div>
    </>
  );
}

