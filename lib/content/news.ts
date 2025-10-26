export interface NewsAuthor {
  name: string;
  type: 'person' | 'organization';
  title?: string; // For person authors (e.g., "Managing Partner")
  organization?: string; // For person authors, which organization they represent
}

export interface News {
  slug: string;
  title: {
    en: string;
    es: string;
    ja: string;
  };
  excerpt: {
    en: string;
    es: string;
    ja: string;
  };
  content: {
    en: string;
    es: string;
    ja: string;
  };
  date: string;
  author: NewsAuthor;
  category: 'announcement' | 'partnership' | 'milestone' | 'regulatory';
}

export const newsItems: News[] = [
  {
    slug: 'milton-global-approved-ultancy-provider',
    title: {
      en: 'Milton Global Listed as Liquidity Provider in Ultency Matching Engine (LD4)',
      es: 'Milton Global Listado como Proveedor de Liquidez en Ultency Matching Engine (LD4)',
      ja: 'Ultency Matching Engine（LD4）でミルトングローバルが流動性プロバイダーとして利用可能に'
    },
    excerpt: {
      en: 'Brokers using Ultency can now add Milton Global as a venue within their MT5 setup and manage routing, markups, and risk according to their framework.',
      es: 'Los brokers que utilizan Ultency ahora pueden agregar Milton Global como un venue dentro de su configuración MT5 y gestionar el enrutamiento, márgenes y riesgo según su marco de trabajo.',
      ja: 'Ultency を利用するMT5ブローカーは、ミルトングローバルを既存の設定に追加し、銘柄やクライアントグループ単位でのマークアップやルーティング、リスク管理を行えます。'
    },
    category: 'announcement',
    author: {
      name: 'Milton Global Editorial Team',
      type: 'organization'
    },
    date: '2025-09-24',
    content: {
      en: `
# Milton Global Listed as Liquidity Provider in Ultency Matching Engine (LD4)

**September 24, 2025** - Milton Global Ltd is pleased to announce that we are now available as a liquidity provider within the [Ultency Matching Engine](https://www.ultency.com) for MetaTrader 5. This listing enables brokers using Ultency to route flow to Milton Global with low-latency connectivity from London LD4 and other supported hubs.

## Press Release

Brokers using Ultency can now add Milton Global as a venue within their MT5 setup and manage routing, markups, and risk according to their framework.

Milton Global is now available as a liquidity provider within the Ultency Matching Engine for MetaTrader 5. This listing enables brokers using Ultency to route flow to Milton Global with low-latency connectivity from London LD4 and other supported hubs. Learn more about our [Ultency liquidity provider services](/ultency-liquidity-provider).

Ultency allows brokers to aggregate quotes, define routing rules, and control markups per instrument and client group. With Milton Global in the catalog, brokers can add our pricing as a new venue inside their existing Ultency setup and manage A/B/C-book logic according to their risk framework.

"Ultency offers a straightforward path to consistent pricing and reliable fills with tight MT5 integration. We are pleased to be available to brokers who prioritize stability and efficient connectivity."

— Hironobu Kawashima, Managing Partner, Milton Global

## Highlights

- Available in the Ultency LP catalog for MT5 brokers
- Low latency connectivity from LD4 and additional supported hubs
- Per-instrument markups and client-group routing
- Fits A, B, and C-book operating models

This enables Ultency brokers to add our pricing and execution without major configuration changes, implementing routing and risk management aligned with their operational policies.

## What is Ultency Matching Engine?

[Ultency](https://www.ultency.com) is a MT5-native matching and routing layer that aggregates quotes from multiple liquidity providers, applies per-instrument and client-group rules, and executes using broker-defined A/B/C-book policies. Brokers typically deploy it close to trading hubs (e.g., LD4) to minimize latency.

## Connectivity and Routing

With Milton Global in the Ultency catalog, brokers can add our venue to their existing setup, apply instrument-level markups, and enforce price-sanity and routing filters. Availability from LD4 supports low-latency quote/exec paths; additional hubs can be discussed during onboarding.

## Onboarding Flow

1. Request test credentials from our technical desk
2. Add Milton Global as a venue in Ultency and map symbols
3. Set markups/routing by instrument or client group
4. Validate fills in demo and go live

## About Milton Global

Milton Global Ltd. is a liquidity provider and trading brand operator serving regulated brokers and professional counterparties. Milton Global Ltd. is regulated by the Seychelles Financial Services Authority as a Securities Dealer (License No. SD040). This notice is informational and does not constitute an offer where prohibited.

## Technical Contact

For integration details or test access: technical-administrator@miltonglobal.com

---

**About Milton Global Ltd**  
Milton Global Ltd is a Seychelles FSA-regulated CFD broker (License SD040) providing institutional-grade trading solutions through [Milton Prime](/milton-prime) and [Milton Markets](/milton-markets) brands. As an approved Ultency liquidity provider, we deliver ultra-low latency execution and deep institutional liquidity to brokers worldwide. [Learn more about Milton Global](/about).
      `,
      es: `
# Milton Global Listado como Proveedor de Liquidez en Ultency Matching Engine (LD4)

**24 de septiembre de 2025** - Milton Global Ltd se complace en anunciar que ahora estamos disponibles como proveedor de liquidez dentro del [Ultency Matching Engine](https://www.ultency.com) para MetaTrader 5. Esta inclusión permite a los brokers que utilizan Ultency enrutar flujo hacia Milton Global con conectividad de baja latencia desde Londres LD4 y otros hubs soportados.

## Comunicado de Prensa

Los brokers que utilizan Ultency ahora pueden agregar Milton Global como un venue dentro de su configuración MT5 y gestionar el enrutamiento, márgenes y riesgo según su marco de trabajo.

Milton Global ahora está disponible como proveedor de liquidez dentro del Ultency Matching Engine para MetaTrader 5. Esta inclusión permite a los brokers que utilizan Ultency enrutar flujo hacia Milton Global con conectividad de baja latencia desde Londres LD4 y otros hubs soportados. Más información sobre nuestros [servicios de proveedor de liquidez Ultency](/ultency-liquidity-provider).

Ultency permite a los brokers agregar cotizaciones, definir reglas de enrutamiento y controlar márgenes por instrumento y grupo de clientes. Con Milton Global en el catálogo, los brokers pueden agregar nuestros precios como un nuevo venue dentro de su configuración Ultency existente y gestionar la lógica A/B/C-book según su marco de riesgo.

"Ultency ofrece un camino directo hacia precios consistentes y ejecuciones confiables con integración estrecha de MT5. Nos complace estar disponibles para brokers que priorizan la estabilidad y conectividad eficiente."

— Hironobu Kawashima, Managing Partner, Milton Global

## Destacados

- Disponible en el catálogo LP de Ultency para brokers MT5
- Conectividad de baja latencia desde LD4 y hubs adicionales soportados
- Márgenes por instrumento y enrutamiento por grupo de clientes
- Se adapta a modelos operativos A, B y C-book

Esto permite a los brokers de Ultency agregar nuestros precios y ejecución sin cambios de configuración importantes, implementando enrutamiento y gestión de riesgo alineados con sus políticas operativas.

## ¿Qué es Ultency Matching Engine?

[Ultency](https://www.ultency.com) es una capa de matching y enrutamiento nativa de MT5 que agrega cotizaciones de múltiples proveedores de liquidez, aplica reglas por instrumento y grupo de clientes, y ejecuta usando políticas A/B/C-book definidas por el broker. Los brokers típicamente lo despliegan cerca de hubs de trading (ej. LD4) para minimizar la latencia.

## Conectividad y Enrutamiento

Con Milton Global en el catálogo de Ultency, los brokers pueden agregar nuestro venue a su configuración existente, aplicar márgenes a nivel de instrumento y hacer cumplir filtros de sanidad de precios y enrutamiento. La disponibilidad desde LD4 soporta rutas de cotización/ejecución de baja latencia; hubs adicionales pueden ser discutidos durante el onboarding.

## Flujo de Onboarding

1. Solicitar credenciales de prueba a nuestro escritorio técnico
2. Agregar Milton Global como venue en Ultency y mapear símbolos
3. Establecer márgenes/enrutamiento por instrumento o grupo de clientes
4. Validar ejecuciones en demo y pasar a producción

## Acerca de Milton Global

Milton Global Ltd. es un proveedor de liquidez y operador de marca de trading que sirve a brokers regulados y contrapartes profesionales. Milton Global Ltd. está regulado por la Autoridad de Servicios Financieros de Seychelles como Securities Dealer (Licencia No. SD040). Este aviso es informativo y no constituye una oferta donde esté prohibido.

## Contacto Técnico

Para detalles de integración o acceso de prueba: technical-administrator@miltonglobal.com

---

**Acerca de Milton Global Ltd**  
Milton Global Ltd es un broker CFD regulado por FSA de Seychelles (Licencia SD040) que proporciona soluciones de trading de grado institucional a través de las marcas [Milton Prime](/milton-prime) y [Milton Markets](/milton-markets). Como proveedor de liquidez aprobado por Ultency, entregamos ejecución de ultra-baja latencia y liquidez institucional profunda a brokers en todo el mundo. [Conozca más sobre Milton Global](/about).
      `,
      ja: `
# Ultency Matching Engine（LD4）でミルトングローバルが流動性プロバイダーとして利用可能に

**2025年9月24日** - ミルトングローバルは、MetaTrader 5向け[Ultency Matching Engine](https://www.ultency.com)の流動性プロバイダーとして利用可能になったことを発表いたします。この掲載により、Ultencyを利用するブローカーは、ロンドンLD4およびその他のサポート拠点からの低遅延接続でミルトングローバルにフローをルーティングできます。

## プレスリリース

Ultency を利用するMT5ブローカーは、ミルトングローバルを既存の設定に追加し、銘柄やクライアントグループ単位でのマークアップやルーティング、リスク管理を行えます。

ミルトングローバルは Ultency Matching Engine の流動性プロバイダーとして掲載されました。LD4などの拠点から低遅延で接続でき、銘柄別やクライアントグループ別のポリシー設定を通じて、マークアップやルーティングを細かく管理できます。既存のUltency環境に当社の価格配信と約定先を組み込み、Aブック・Bブック・Cブックの運用方針に合わせて活用いただけます。[Ultency流動性プロバイダーサービス](/ultency-liquidity-provider)の詳細。

「Ultency は MT5 に密接に統合された安定的な接続経路を提供します。安定した価格と信頼性の高い約定を重視するブローカーの皆さまに選択肢を提供できることを嬉しく思います。」

— カワシマ ヒロノブ（Hironobu Kawashima）｜ミルトングローバル マネージング・パートナー

## 主なポイント

- Ultency のLPカタログに掲載
- LD4 からの低遅延接続
- 銘柄別マークアップとクライアントグループ別ルーティング
- Aブック・Bブック・Cブックの運用に対応

これにより、Ultency を利用中のブローカーは既存設定を大きく変えずに当社の価格配信と約定先を追加でき、運用方針に沿ったルーティングとリスク管理を実装できます。

## Ultency Matching Engine について

[Ultency](https://www.ultency.com) は MT5 と緊密に連携するマッチング／ルーティング基盤です。複数 LP の見積りを集約し、銘柄別・クライアントグループ別のポリシーを適用して、ブローカーの運用方針（A/B/C ブック）に沿って約定させます。レイテンシ低減のため、LD4 などの取引ハブ近接で運用されるケースが一般的です。

## 接続とルーティング

ミルトングローバルを Ultency のカタログに追加することで、既存設定のまま当社の配信・約定先を組み込めます。銘柄単位のマークアップ、価格サニティチェック、ルーティング条件を設定でき、LD4 からの低遅延パスに対応します。その他の拠点はオンボーディング時にご相談ください。

## オンボーディング手順

1. 技術窓口へテスト用の接続情報をリクエスト
2. Ultency で当社を約定先として追加し、シンボルをマッピング
3. 銘柄／グループ単位でマークアップ・ルーティングを設定
4. テスト環境で約定を検証し、本番化

## ミルトングローバルについて

ミルトングローバルは、規制ブローカーおよびプロ向けの流動性提供と取引ブランド運営を行っています。Seychelles Financial Services Authority（FSA） の Securities Dealer（ライセンス番号：SD040） として登録されています。※本記事は告知目的であり、法令により提供が制限される地域における勧誘を意図するものではありません。

## 技術窓口

technical-administrator@miltonglobal.com

---

**ミルトングローバルについて**  
ミルトングローバルは、Seychelles FSA規制のCFDブローカー（ライセンスSD040）として、[Milton Prime](/milton-prime)および[Milton Markets](/milton-markets)ブランドを通じて機関投資家レベルの取引ソリューションを提供しています。承認されたUltency流動性プロバイダーとして、超低遅延実行と深い機関投資家流動性を世界中のブローカーに提供しています。[ミルトングローバルについて](/about)の詳細。
      `
    }
  }
  // Temporarily hidden articles:
  /*
  },
  {
    slug: 'fsa-license-sd040-granted',
    title: 'Milton Global Granted Seychelles FSA License SD040',
    excerpt: 'Milton Global Ltd has been officially licensed by the Seychelles Financial Services Authority under license number SD040.',
    category: 'regulatory',
    author: 'Milton Global',
    date: '2024-12-01',
    content: `
# Milton Global Granted Seychelles FSA License SD040

**December 1, 2024** - Milton Global Ltd is proud to announce that we have been officially licensed by the Seychelles Financial Services Authority (FSA) under Securities Dealer License number SD040.

## Regulatory Milestone

This license represents a significant milestone in our company's development and demonstrates our commitment to operating under credible regulatory oversight while maintaining the highest standards of client protection and operational transparency.

## License Details

**License Holder**: Milton Global Ltd  
**License Number**: SD040  
**License Type**: Securities Dealer License  
**Regulator**: Seychelles Financial Services Authority  
**Jurisdiction**: Republic of Seychelles

## Authorized Services

Our FSA license authorizes us to provide:

- CFD trading services across multiple asset classes
- Forex trading services
- Derivatives trading and execution
- Liquidity provision services to other brokers
- Institutional trading solutions

## Our Commitment to Compliance

Obtaining FSA licensure required demonstrating:

### Financial Stability
We maintain capital reserves significantly above regulatory minimums, ensuring we can meet all client obligations and operational requirements.

### Client Protection
All client funds are held in segregated accounts with internationally recognized banks, keeping client money completely separate from our operational capital.

### Compliance Infrastructure
We have implemented comprehensive compliance, AML, and KYC procedures that meet international standards and FSA requirements.

### Professional Standards
Our management team and compliance officers hold the necessary qualifications and experience required by FSA regulations.

## What This Means for Clients

Our FSA license provides clients with:

- **Regulatory Protection**: FSA oversight ensures we operate transparently and ethically
- **Fund Safety**: Segregated accounts protect client funds
- **Transparent Operations**: Clear pricing, fair execution, and comprehensive disclosure
- **Dispute Resolution**: Access to regulatory channels for complaint resolution

## Operating Standards

As an FSA-licensed broker, we commit to:

- Regular financial reporting to the FSA
- Ongoing compliance with capital adequacy requirements
- Continuous improvement of our compliance and AML procedures
- Regular independent audits of our operations
- Maintaining professional indemnity insurance
- Transparent communication with clients and regulators

## Looking Forward

"Receiving our FSA license is just the beginning," the Milton Global team stated. "We will continue to invest in our infrastructure, expand our service offerings, and maintain the highest standards of regulatory compliance and client service."

## Our Brands

Under FSA License SD040, we operate two brands:

### Milton Prime
Institutional trading solutions for hedge funds, professional traders, and institutional clients requiring direct market access and premium execution.

### Milton Markets
Retail CFD and forex trading services with competitive spreads, zero-cut protection, and the advanced MT5 platform.

## Future Plans

With our FSA license secured, we are now focused on:

- Expanding our liquidity provider network
- Enhancing our technological infrastructure
- Growing our institutional and retail client bases
- Pursuing approval as a liquidity provider on major platforms like Ultancy
- Continuously improving our service offerings

## Contact Us

For more information about Milton Global and our FSA-regulated services, please contact:

**General Inquiries**: info@miltonglobal.com  
**Institutional Services**: institutional@miltonglobal.com  
**Partnerships**: partners@miltonglobal.com

---

**About Milton Global Ltd**  
Milton Global Ltd (FSA License SD040) is a Seychelles-regulated CFD broker specializing in institutional-grade trading infrastructure. We operate Milton Prime for institutional clients and Milton Markets for retail traders, providing advanced execution technology and competitive trading conditions.

**Regulatory Information**  
Milton Global Ltd is licensed and regulated by the Seychelles Financial Services Authority (FSA) under Securities Dealer License SD040. All client funds are held in segregated accounts.
    `
  },
  {
    slug: 'milton-global-launches-dual-brand-strategy',
    title: 'Milton Global Launches Dual-Brand Strategy',
    excerpt: 'Introducing Milton Prime for institutional clients and Milton Markets for retail traders under the Milton Global umbrella.',
    category: 'announcement',
    author: 'Milton Global',
    date: '2024-11-15',
    content: `
# Milton Global Launches Dual-Brand Strategy

**November 15, 2024** - Milton Global Ltd is excited to announce the launch of our dual-brand strategy, introducing Milton Prime for institutional clients and Milton Markets for retail traders.

## Strategic Vision

Our dual-brand approach allows us to serve two distinct client segments with tailored solutions, infrastructure, and service levels appropriate to each market:

### Milton Prime: Institutional Trading Solutions

Milton Prime is designed exclusively for institutional clients including:
- Hedge funds and investment managers
- Professional traders and prop trading firms
- Banks and other financial institutions
- High-net-worth individuals requiring DMA

**Key Features:**
- Direct Market Access (DMA) to Tier 1 liquidity
- Ultra-low latency execution infrastructure
- Dedicated relationship managers
- Custom APIs and reporting solutions
- Volume-based pricing and custom commission structures
- Institutional-grade risk management tools

**Minimum Deposit**: $100,000 USD

### Milton Markets: Retail Trading Excellence

Milton Markets serves retail traders with competitive conditions and user-friendly platforms:

**Key Features:**
- Spreads from 0.0 pips on major pairs
- Zero-cut protection system
- MetaTrader 5 platform
- Multiple account types (Flex, Smart, Elite)
- 24/7 multilingual support
- Educational resources and analysis

**Minimum Deposit**: $100 USD

## Why Dual Brands?

Separating our institutional and retail operations allows us to:

1. **Optimize Infrastructure**: Each brand has infrastructure optimized for its client segment
2. **Tailored Service**: Dedicated support teams with expertise in each market
3. **Appropriate Pricing**: Commission structures and pricing models suited to each segment
4. **Brand Positioning**: Clear market positioning for each brand

## Unified Standards

While operating distinct brands, both Milton Prime and Milton Markets benefit from:

- FSA regulation and oversight (License SD040)
- Segregated client fund protection
- Milton Global's institutional infrastructure
- Access to our Ultancy liquidity provision
- Commitment to transparency and fair execution

## Technology Infrastructure

Both brands leverage Milton Global's institutional-grade technology:

- Co-located servers for minimal latency
- 99.99% uptime guarantee
- Advanced risk management systems
- Real-time monitoring and reporting
- Redundant failover systems

## Leadership and Expertise

Our management team brings decades of combined experience from:
- Major investment banks
- Retail and institutional brokerage
- Trading technology and infrastructure
- Regulatory compliance and risk management

## Launch Timeline

- **Milton Prime**: Accepting institutional client applications now
- **Milton Markets**: Full retail platform launching Q1 2025
- **Ultancy Integration**: Liquidity provision services available upon approval

## Getting Started

### For Institutional Clients (Milton Prime)
Contact our institutional team at institutional@miltonglobal.com to discuss your requirements and begin the onboarding process.

### For Retail Traders (Milton Markets)
Visit [miltonmarkets.com](https://miltonmarkets.com) to learn more about our retail offering and account types.

## Our Commitment

"This dual-brand strategy represents Milton Global's commitment to serving both institutional and retail markets with excellence," the team stated. "By maintaining separate brands with appropriate infrastructure and service levels, we can deliver superior experiences to all our clients."

## About Milton Global

Milton Global Ltd is a Seychelles FSA-regulated CFD broker (License SD040) specializing in institutional-grade trading infrastructure. Through our Milton Prime and Milton Markets brands, we serve institutional and retail clients worldwide with advanced execution technology, competitive pricing, and comprehensive client protection.

---

For more information about Milton Global and our brands, visit [miltonglobal.com](https://miltonglobal.com) or contact us at info@miltonglobal.com.
    `
  }
  */
];

export function getNewsBySlug(slug: string): News | undefined {
  return newsItems.find(news => news.slug === slug);
}

export function getAllNews(): News[] {
  return newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsByCategory(category: string): News[] {
  return newsItems
    .filter(news => news.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Helper functions for localized content
export function getLocalizedNews(news: News, locale: 'en' | 'es' | 'ja') {
  return {
    ...news,
    title: news.title[locale],
    excerpt: news.excerpt[locale],
    content: news.content[locale],
    author: news.author
  };
}

// Helper function to get author display name
export function getAuthorDisplayName(author: NewsAuthor): string {
  if (author.type === 'person' && author.title) {
    return `${author.name}, ${author.title}`;
  }
  return author.name;
}

export function getAllLocalizedNews(locale: 'en' | 'es' | 'ja') {
  return getAllNews().map(news => getLocalizedNews(news, locale));
}

export function getLocalizedNewsBySlug(slug: string, locale: 'en' | 'es' | 'ja') {
  const news = getNewsBySlug(slug);
  return news ? getLocalizedNews(news, locale) : undefined;
}


