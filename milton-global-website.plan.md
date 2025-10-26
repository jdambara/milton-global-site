# Milton Global Website Redesign & Build

## Tech Stack
- **Framework**: Next.js 14/15 (App Router) with TypeScript
- **Styling**: Tailwind CSS (using MiltonMarkets design tokens)
- **i18n**: next-intl (EN, ES-ES, JA-JP support)
- **SEO**: Next.js metadata API, structured data, sitemap generation
- **Performance**: Image optimization, lazy loading, Core Web Vitals focus

## Site Architecture

### Homepage (Long-Scroll Hybrid)
Single-page experience with key sections that can deep-link:
1. **Hero Section** - Milton Global brand introduction with FSA trust badge
2. **About Section** - Who we are, regulatory credentials
3. **Dual Brands Showcase** - Milton Prime (institutional) & Milton Markets (retail) with CTAs to brand pages
4. **Ultancy Highlight** - Approved liquidity provider badge with brief explanation
5. **FSA Regulation Trust** - Regulatory compliance, client protection
6. **Latest Content** - Featured articles and recent news
7. **CTA Section** - Contact/partnership opportunities

### Core Pages
- `/about` - Detailed company information, history, mission
- `/milton-prime` - Institutional trading brand page
- `/milton-markets` - Retail trading brand page (cross-link to miltonmarkets.com)
- `/fsa-regulation` - Deep dive into Seychelles FSA licensing, regulatory framework
- `/ultancy-liquidity-provider` - **KEY SEO PAGE** - What is Ultancy, approval announcement, technical advantages
- `/articles` - Blog-style educational/industry content with categories
- `/news` - Company announcements, press releases
- `/contact` - Contact form and information

## Design System Implementation
Import and adapt MiltonMarkets.com design tokens:
- Strategic brand red (#FE0100) for CTAs
- Monochromatic gray hierarchy
- 4px base border radius
- Inter font (primary), IBM Plex Mono (monospace)
- Mobile-first responsive (360px → 1120px)
- Floating tab navigation pattern
- Clean dropdown system

## Content Strategy & SEO

### Primary Keywords to Target
1. **FSA regulated broker** / **FSA license broker**
2. **Seychelles FSA CFD broker**
3. **Ultancy liquidity provider** / **MetaQuotes Ultancy**
4. **Institutional CFD broker**
5. **MetaTrader 5 liquidity**

### Articles Section Topics (10-15 initial articles)
- What is Ultancy? Complete guide to MetaQuotes' matching engine
- FSA regulation explained: Why Seychelles licensing matters
- Liquidity provider vs. broker: Understanding the difference
- How ultra-low latency impacts trading performance
- A-Book vs. B-Book execution models
- MetaTrader 5 liquidity aggregation guide
- Choosing an FSA-regulated broker: A complete guide
- Risk management for CFD brokers
- The future of forex liquidity technology

### News Section (Initial Entries)
- Milton Global approved as Ultancy liquidity provider
- FSA license SD040 granted to Milton Global Ltd
- Company milestones and achievements
- Partnership announcements

## Project Structure
```
milton-global-site/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx (homepage)
│   │   ├── about/page.tsx
│   │   ├── milton-prime/page.tsx
│   │   ├── milton-markets/page.tsx
│   │   ├── fsa-regulation/page.tsx
│   │   ├── ultancy-liquidity-provider/page.tsx
│   │   ├── articles/
│   │   │   ├── page.tsx (listing)
│   │   │   └── [slug]/page.tsx (article detail)
│   │   ├── news/
│   │   │   ├── page.tsx (listing)
│   │   │   └── [slug]/page.tsx (news detail)
│   │   └── contact/page.tsx
│   ├── layout.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/ (Header, Footer, Navigation)
│   ├── sections/ (Hero, Brands, Ultancy, etc.)
│   └── ui/ (Buttons, Cards, Tags, etc.)
├── lib/
│   ├── content/ (Article/news content files)
│   └── seo/ (Metadata generators)
├── messages/ (i18n translations)
└── public/
```

## Key Differentiators from MiltonMarkets.com
- **Corporate focus** vs. trader focus
- **B2B positioning** alongside B2C
- **Liquidity provider credentials** prominently featured
- **Dual-brand architecture** (parent company showcasing two brands)
- **Regulatory/compliance emphasis** (FSA licensing front and center)

## Content Deliverables
- 10-15 SEO-optimized articles (1000-1500 words each)
- 3-5 initial news posts
- All page copy (EN, ES, JA)
- Meta descriptions, titles, OG tags
- Structured data (Organization, Article schemas)

## To-dos
- [ ] Initialize Next.js 14 project with TypeScript, Tailwind, next-intl configuration
- [ ] Import MiltonMarkets design tokens and create base component library (buttons, cards, typography)
- [ ] Build Header, Footer, Navigation with language switcher
- [ ] Create homepage sections (Hero, About, Brands, Ultancy, FSA, Latest Content, CTA)
- [ ] Build static pages (About, Milton Prime, Milton Markets, FSA Regulation, Contact)
- [ ] Create dedicated Ultancy Liquidity Provider page with SEO optimization
- [ ] Set up Articles and News listing/detail pages with filtering and search
- [ ] Write 10-15 SEO-optimized articles focused on Ultancy, FSA regulation, liquidity topics
- [ ] Write 3-5 company news posts including Ultancy approval announcement
- [ ] Implement metadata API, structured data, sitemap, robots.txt
- [ ] Translate all content to Spanish and Japanese following voice/tone guidelines
- [ ] Test and optimize for mobile-first responsiveness across all pages


