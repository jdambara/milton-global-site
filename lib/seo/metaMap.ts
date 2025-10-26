export const BASE_URL = 'https://miltonglobal.com';

type L = 'en' | 'es' | 'ja';
type Meta = { title: string; description: string; ogLocale: string };

export const metaMap: Record<string, Record<L, Meta>> = {
  '/': {
    en: { 
      title: 'Milton Global | FSA-licensed brokerage infrastructure (SD040)',
      description: 'Milton Global Ltd (SD040) provides end-to-end brokerage infrastructure: MT4/MT5 connectivity and hosting, liquidity and bridge integration, KYC/AML onboarding, risk and reporting, PAMM, and white-label solutions.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Milton Global | Infraestructura de corretaje con licencia FSA (SD040)',
      description: 'Milton Global Ltd (SD040) ofrece infraestructura integral: conectividad y hosting MT4/MT5, integración de liquidez y bridge, onboarding KYC/AML, gestión de riesgo e informes, PAMM y soluciones white-label.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: 'ミルトングローバル｜FSAライセンスのブローカー基盤（SD040）',
      description: 'ミルトングローバル（SD040）は、MT4/MT5 接続・ホスティング、流動性とブリッジ統合、KYC/AML 審査、リスク管理・レポーティング、PAMM、ホワイトラベルまで一気通貫の基盤を提供します。',
      ogLocale: 'ja_JP' 
    },
  },
  '/milton-prime': {
    en: { 
      title: 'Milton Prime | FSA-regulated retail trading brand',
      description: 'Retail trading under FSA license with MT4/MT5 connectivity, operated to Milton Global standards for fund segregation and compliance.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Milton Prime | Marca de trading minorista regulada por FSA',
      description: 'Trading minorista con licencia FSA y conectividad MT4/MT5, operado con estándares de segregación de fondos y compliance de Milton Global.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: 'Milton Prime｜FSA 規制のリテール取引ブランド',
      description: 'FSA ライセンスのもと MT4/MT5 に対応。ミルトングローバル標準の分別管理とコンプライアンスを徹底。',
      ogLocale: 'ja_JP' 
    },
  },
  '/milton-markets': {
    en: { 
      title: 'Milton Markets | Flexible retail trading brand',
      description: 'Flexible trading on MT4/MT5 and PAMM, operated to Milton Global standards for fund segregation and risk controls.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Milton Markets | Marca de trading flexible',
      description: 'Trading flexible en MT4/MT5 y PAMM, con estándares de segregación de fondos y control de riesgos de Milton Global.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: 'Milton Markets｜柔軟な取引ブランド',
      description: 'MT4/MT5 と PAMM に対応。ミルトングローバル標準の分別管理とリスク管理を適用。',
      ogLocale: 'ja_JP' 
    },
  },
  '/about': {
    en: { 
      title: 'About Milton Global | Licensed brokerage infrastructure (SD040)',
      description: 'Governance, FSA oversight, our brands (Milton Prime, Milton Markets), and operating standards for fund segregation and compliance.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Sobre Milton Global | Infraestructura con licencia FSA (SD040)',
      description: 'Gobernanza, supervisión FSA, marcas (Milton Prime, Milton Markets) y estándares de segregación de fondos y compliance.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: '会社概要｜ミルトングローバル（SD040）',
      description: 'ガバナンス、FSA 監督、Milton Prime／Milton Markets、分別管理とコンプライアンスの運用基準。',
      ogLocale: 'ja_JP' 
    },
  },
  '/services': {
    en: { 
      title: 'Services | Brokerage infrastructure for MT4/MT5 brands',
      description: 'Connectivity and hosting, liquidity and bridge integration, KYC/AML onboarding, risk and reporting, PAMM, white-label solutions.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Servicios | Infraestructura de corretaje para marcas MT4/MT5',
      description: 'Conectividad y hosting, liquidez y bridge, onboarding KYC/AML, riesgo e informes, PAMM y white-label.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: 'サービス｜ブローカー基盤（MT4/MT5）',
      description: '接続・ホスティング、流動性・ブリッジ統合、KYC/AML、リスク・レポート、PAMM、ホワイトラベル。',
      ogLocale: 'ja_JP' 
    },
  },
  '/fsa-regulation': {
    en: { 
      title: 'Seychelles FSA regulation | Milton Global SD040',
      description: 'Securities Dealer license SD040, supervision, client protections, restricted jurisdictions, and key regulatory references.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Regulación FSA de Seychelles | Milton Global SD040',
      description: 'Licencia de Dealer de Valores SD040, supervisión, protecciones al cliente, jurisdicciones restringidas y referencias regulatorias.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: 'セーシェル FSA 規制｜ミルトングローバル SD040',
      description: '証券ディーラーライセンス SD040、監督体制、顧客保護、対象外地域、主要な規制情報。',
      ogLocale: 'ja_JP' 
    },
  },
  '/ultency-liquidity-provider': {
    en: { 
      title: 'Ultency liquidity provider integration | Milton Global',
      description: 'Technology integration option for low-latency routing and MT5 connectivity within our infrastructure stack.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Integración del proveedor de liquidez Ultency | Milton Global',
      description: 'Opción de integración tecnológica para enrutamiento de baja latencia y conectividad MT5 dentro de nuestra infraestructura.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: 'Ultency（ウルテンシー）流動性統合｜ミルトングローバル',
      description: '低レイテンシ配信と MT5 接続のための統合オプション（当社インフラの一部として提供）。',
      ogLocale: 'ja_JP' 
    },
  },
  '/articles': {
    en: { 
      title: 'Articles | Technology, regulation, liquidity',
      description: 'Insights on brokerage infrastructure, FSA topics, MT4/MT5 connectivity, liquidity, and risk.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Artículos | Tecnología, regulación y liquidez',
      description: 'Análisis sobre infraestructura de corretaje, temas FSA, conectividad MT4/MT5, liquidez y riesgo.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: '記事｜テクノロジー・規制・流動性',
      description: 'ブローカー基盤、FSA トピック、MT4/MT5 接続、流動性、リスクに関する解説。',
      ogLocale: 'ja_JP' 
    },
  },
  '/news': {
    en: { 
      title: 'News | Corporate updates and releases',
      description: 'Milton Global announcements, brand milestones, and event updates.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Noticias | Actualizaciones y comunicados',
      description: 'Anuncios de Milton Global, hitos de marca y novedades de eventos.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: 'ニュース｜企業情報とお知らせ',
      description: 'ミルトングローバルの最新情報、ブランドの進捗、イベントのお知らせ。',
      ogLocale: 'ja_JP' 
    },
  },
  '/contact': {
    en: { 
      title: 'Contact Milton Global | Meetings and partnerships',
      description: 'Request a meeting or partnership discussion. Share your name, company, role, and preferred time.',
      ogLocale: 'en_US' 
    },
    es: { 
      title: 'Contacto | Reuniones y colaboraciones',
      description: 'Solicite una reunión o conversación de partnership. Indique nombre, empresa, cargo y horario preferido.',
      ogLocale: 'es_ES' 
    },
    ja: { 
      title: 'お問い合わせ｜ミルトングローバル',
      description: '面談やパートナーシップのご相談はこちら。氏名・会社名・役職・希望時間をご記入ください。',
      ogLocale: 'ja_JP' 
    },
  },
};
