# Milton Global Website

Official website for Milton Global Ltd - FSA-regulated CFD broker and Ultency liquidity provider.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **i18n**: next-intl (EN, ES-ES, JA-JP)
- **Deployment**: Vercel (recommended)

## Features

- 🌐 Multi-language support (English, Spanish, Japanese)
- 📱 Fully responsive design
- ⚡ Optimized for performance (Core Web Vitals)
- 🎨 Design system based on MiltonMarkets.com
- 📰 Articles and News content system
- 🔍 SEO optimized with metadata and structured data
- ♿ Accessible components

## Project Structure

```
milton-global-site/
├── app/
│   ├── [locale]/           # Localized routes
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── milton-prime/   # Institutional brand
│   │   ├── milton-markets/ # Retail brand
│   │   ├── fsa-regulation/ # FSA regulation info
│   │   ├── ultency-liquidity-provider/ # KEY SEO page
│   │   ├── articles/       # Blog-style articles
│   │   ├── news/           # Company news
│   │   └── contact/        # Contact form
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Homepage sections
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── content/            # Articles & news content
│   └── seo/                # SEO utilities
├── messages/               # i18n translations
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development

### Adding New Articles

Edit `/lib/content/articles.ts` and add new articles to the `articles` array:

```typescript
{
  slug: 'your-article-slug',
  title: 'Article Title',
  excerpt: 'Brief description',
  content: 'Full markdown content...',
  category: 'Technology',
  author: 'Author Name',
  date: '2025-01-20',
  readTime: '5 min read',
  keywords: ['keyword1', 'keyword2']
}
```

### Adding News

Edit `/lib/content/news.ts` and add new news items to the `newsItems` array.

### Translations

Edit files in `/messages/` directory:
- `en.json` - English
- `es.json` - Spanish
- `ja.json` - Japanese

## SEO

The site is optimized for the following primary keywords:
- FSA regulated broker
- Seychelles FSA CFD broker
- Ultency liquidity provider
- MetaQuotes Ultency
- Institutional CFD broker

Each page includes:
- Optimized meta titles and descriptions
- Open Graph tags
- Structured data (where appropriate)
- Semantic HTML
- Proper heading hierarchy

## Design System

Based on MiltonMarkets.com design tokens:
- **Brand Red**: #FE0100
- **Font**: Inter (primary), IBM Plex Mono (code)
- **Border Radius**: 4px default
- **Spacing**: 4px base scale
- **Responsive**: Mobile-first (360px → 1120px)

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the static site:

```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set:

```
NEXT_PUBLIC_SITE_URL=https://miltonglobal.com
```

## License

© 2025 Milton Global Ltd. All rights reserved.

## Support

For questions or support, contact: [email protected]
