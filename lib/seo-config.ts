export const seoConfig = {
  siteName: {
    en: 'Milton Global',
    es: 'Milton Global',
    ja: 'ミルトン・グローバル'
  },
  siteUrl: 'https://miltonglobal.com',
  defaultImage: '/images/og-image.png',
  twitterHandle: '@miltonglobal',
  
  // Company Information
  company: {
    name: {
      en: 'Milton Global',
      es: 'Milton Global',
      ja: 'ミルトン・グローバル'
    },
    legalName: {
      en: 'Milton Global Ltd',
      es: 'Milton Global Ltd',
      ja: 'ミルトン・グローバル・リミテッド'
    },
    license: 'SD040',
    regulator: 'Seychelles FSA',
    address: {
      street: 'Office 1, Unit 2, 2nd Floor Dekk House',
      city: 'Plaisance, Mahé',
      country: 'Seychelles',
      countryCode: 'SC',
    },
    socialMedia: {
      linkedin: 'https://www.linkedin.com/company/milton-global',
      twitter: 'https://twitter.com/miltonglobal',
    },
  },
  
  // Localization
  locales: {
    en: {
      lang: 'en-US',
      name: 'English',
      dateFormat: 'MM/DD/YYYY',
    },
    es: {
      lang: 'es-ES',
      name: 'Español',
      dateFormat: 'DD/MM/YYYY',
    },
    ja: {
      lang: 'ja-JP',
      name: '日本語',
      dateFormat: 'YYYY年MM月DD日',
    },
  },
  
  // Default Meta Tags
  defaultMeta: {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  },
  
  // SEO Keywords by Locale
  keywords: {
    en: {
      primary: [
        'FSA regulated broker',
        'Seychelles FSA SD040',
        'Ultency liquidity provider',
        'MetaQuotes Ultency',
        'CFD broker',
        'institutional trading',
        'Milton Prime',
        'Milton Markets',
      ],
      secondary: [
        'MT4',
        'MT5',
        'PAMM',
        'FIX API',
        'DMA trading',
        'ECN broker',
        'segregated accounts',
        'negative balance protection',
      ],
    },
    es: {
      primary: [
        'broker regulado FSA',
        'FSA Seychelles SD040',
        'proveedor liquidez Ultency',
        'MetaQuotes Ultency',
        'broker CFD',
        'trading institucional',
        'Milton Prime',
        'Milton Markets',
      ],
      secondary: [
        'MT4',
        'MT5',
        'PAMM',
        'FIX API',
        'trading DMA',
        'broker ECN',
        'cuentas segregadas',
        'protección balance negativo',
      ],
    },
    ja: {
      primary: [
        'FSA規制ブローカー',
        'セーシェルFSA SD040',
        'Ultency流動性プロバイダー',
        'MetaQuotes Ultency',
        'CFDブローカー',
        '機関投資家向け取引',
        'ミルトンプライム',
        'ミルトンマーケッツ',
      ],
      secondary: [
        'MT4',
        'MT5',
        'PAMM',
        'FIX API',
        'DMA取引',
        'ECNブローカー',
        '分別管理口座',
        'ネガティブバランス保護',
      ],
    },
  },
  
  // FAQ Content for Schema
  faqs: {
    en: [
      {
        question: 'Is Milton Global regulated?',
        answer: 'Yes, Milton Global Ltd is licensed and regulated by the Seychelles Financial Services Authority (FSA) under Securities Dealer License Number SD040.',
      },
      {
        question: 'What trading platforms does Milton Global offer?',
        answer: 'Milton Global offers MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms, along with PAMM services and FIX API connectivity for institutional clients.',
      },
      {
        question: 'What is Ultency and how does it benefit traders?',
        answer: 'Ultency is MetaQuotes\' premium liquidity aggregation technology that provides institutional-grade trading infrastructure, ensuring tight spreads, deep liquidity, and ultra-fast execution speeds.',
      },
      {
        question: 'How many trading instruments are available?',
        answer: 'Milton Global provides access to over 1000 trading instruments including Forex pairs, Stock CFDs, Commodities, Indices, and Cryptocurrencies.',
      },
      {
        question: 'Are client funds protected?',
        answer: 'Yes, client funds are held in segregated accounts separate from company operational funds, and we offer negative balance protection to ensure clients cannot lose more than their deposited amount.',
      },
    ],
    es: [
      {
        question: '¿Está regulado Milton Global?',
        answer: 'Sí, Milton Global Ltd está licenciada y regulada por la Autoridad de Servicios Financieros de Seychelles (FSA) bajo la Licencia de Distribuidor de Valores Número SD040.',
      },
      {
        question: '¿Qué plataformas de trading ofrece Milton Global?',
        answer: 'Milton Global ofrece las plataformas MetaTrader 4 (MT4) y MetaTrader 5 (MT5), junto con servicios PAMM y conectividad FIX API para clientes institucionales.',
      },
      {
        question: '¿Qué es Ultency y cómo beneficia a los traders?',
        answer: 'Ultency es la tecnología premium de agregación de liquidez de MetaQuotes que proporciona infraestructura de trading de grado institucional, asegurando spreads ajustados, liquidez profunda y velocidades de ejecución ultra rápidas.',
      },
      {
        question: '¿Cuántos instrumentos de trading están disponibles?',
        answer: 'Milton Global proporciona acceso a más de 1000 instrumentos de trading incluyendo pares de Forex, CFDs de acciones, materias primas, índices y criptomonedas.',
      },
      {
        question: '¿Están protegidos los fondos de los clientes?',
        answer: 'Sí, los fondos de los clientes se mantienen en cuentas segregadas separadas de los fondos operativos de la empresa, y ofrecemos protección de balance negativo para garantizar que los clientes no puedan perder más de su cantidad depositada.',
      },
    ],
    ja: [
      {
        question: 'ミルトングローバルは規制されていますか？',
        answer: 'はい、ミルトングローバルLtdは証券ディーラーライセンス番号SD040でセーシェル金融サービス局（FSA）によってライセンスおよび規制されています。',
      },
      {
        question: 'ミルトングローバルはどの取引プラットフォームを提供していますか？',
        answer: 'ミルトングローバルは、MetaTrader 4（MT4）およびMetaTrader 5（MT5）プラットフォームを提供し、機関投資家向けにPAMMサービスとFIX API接続も提供しています。',
      },
      {
        question: 'Ultencyとは何ですか、トレーダーにどのような利益をもたらしますか？',
        answer: 'UltencyはMetaQuotesのプレミアム流動性アグリゲーション技術で、機関投資家グレードの取引インフラを提供し、タイトなスプレッド、深い流動性、超高速の執行速度を保証します。',
      },
      {
        question: '利用可能な取引商品は何種類ありますか？',
        answer: 'ミルトングローバルは、外国為替ペア、株式CFD、商品、指数、暗号通貨を含む1000以上の取引商品へのアクセスを提供しています。',
      },
      {
        question: '顧客資金は保護されていますか？',
        answer: 'はい、顧客資金は会社の運営資金とは別の分別管理口座に保管されており、顧客が預け入れた金額以上を失うことがないようネガティブバランス保護を提供しています。',
      },
    ],
  },
  
  // Page-specific SEO configurations
  pages: {
    home: {
      priority: 1.0,
      changeFrequency: 'daily',
    },
    miltonPrime: {
      priority: 0.95,
      changeFrequency: 'weekly',
    },
    miltonMarkets: {
      priority: 0.95,
      changeFrequency: 'weekly',
    },
    fsaRegulation: {
      priority: 0.9,
      changeFrequency: 'monthly',
    },
    ultency: {
      priority: 0.9,
      changeFrequency: 'monthly',
    },
    about: {
      priority: 0.85,
      changeFrequency: 'monthly',
    },
    services: {
      priority: 0.85,
      changeFrequency: 'weekly',
    },
    articles: {
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    news: {
      priority: 0.8,
      changeFrequency: 'daily',
    },
    contact: {
      priority: 0.7,
      changeFrequency: 'monthly',
    },
  },
};

export type SEOConfig = typeof seoConfig;