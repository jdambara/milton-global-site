# Milton Global Website Redesign — Product Requirements Document (PRD)

**Project:** MiltonGlobal.com (Corporate Site)

**Version:** v1.0 — Draft for build & launch

**Owner:** Jun (Milton Global)

**Stakeholders:** Hiro (Strategy), Ihor & Anfisa (Dev), Chat (SEO/i18n), Compliance (TBD)

**Target Launch Window:** iFX EXPO Asia (Hong Kong) — Event window Oct 26–28, 2025 (onsite days may vary by agenda; confirm during content freeze)

---

## 1. Purpose & Background
Milton Global Ltd is the FSA-licensed entity (SD040) that operates a dual-brand retail strategy and institutional infrastructure services. The corporate site must clearly communicate:
- **Corporate structure:** Milton Global as the license holder and infrastructure provider
- **Brand positioning:** Milton Prime (FSA-regulated retail) and Milton Markets (flexible retail, incorporated in St. Lucia)
- **Unified standards:** All brands maintain the same operational standards for fund segregation, KYC/AML, and security
- **Ultency gateway services:** MetaQuotes certified partner offering white-label Ultency integration for other brokers
- **Content hub:** Regulatory, technology, and industry thought leadership in **EN / ES / JA**

---

## 2. Goals (Success Criteria)
### Primary Goals
1. **Corporate Credibility:** Clear licensing (Seychelles FSA), governance, and brand architecture.
2. **Institutional Lead Capture:** Meeting requests and partnership inquiries, especially around the IFX EXPO.
3. **SEO Visibility (Tri‑locale):** Rank for Ultency/MT5 liquidity, FSA topics, and corporate brand terms in EN / ES / JA.

### Secondary Goals
4. **Content Authority:** Publish news and articles that establish expertise (E‑E‑A‑T).
5. **Brand Clarity:** Parent ↔ brand mapping (Milton Prime = institutional; Milton Markets = retail) with correct cross‑links.

### KPIs
- **SEO:**
  - Top‑5 for branded queries: "Milton Global", "ミルトングローバル", "Milton Global FSA" within 14–30 days post‑launch.
  - Page‑1 for target clusters: "Ultency gateway provider / MetaQuotes Ultency partner", "Seychelles FSA securities dealer" within 30–90 days.
- **Performance:** CWV **LCP ≤ 2.5s**, **INP ≤ 200ms**, **CLS ≤ 0.1** on mobile.
- **Leads:** ≥ 25 qualified event meetings / ≥ 10 post‑event partnership inquiries (first 30 days).

---

## 3. Non‑Goals
- Opening brokerage accounts (no direct signup flows here).
- Deep retail education (belongs on MiltonMarkets.com) beyond necessary corporate context.
- Investor relations portal (out of scope for v1).

---

## 4. Target Audiences & Use Cases
- **Institutional prospects** (brokers, white-label partners) seeking Ultency integration services and infrastructure solutions.
- **Retail traders** seeking either FSA-regulated trading (Milton Prime) or flexible trading conditions (Milton Markets).
- **PAMM managers** looking for platforms supporting money management with competitive conditions.
- **Media & analysts** evaluating partnerships, technology stack, and dual-brand strategy.
- **Regulatory/compliance reviewers** checking license clarity and operational standards.

---

## 5. Scope
### 5.1 Pages & URL Architecture (final slugs)
- **/** — Home (long‑scroll hybrid)
- **/about** — Company profile, governance, license overview
- **/milton-prime** — FSA-regulated retail trading brand (MT4/MT5, up to 1:100 leverage)
- **/milton-markets** — Flexible retail trading brand (MT4/MT5/PAMM, up to 1:1000 leverage)
- **/fsa-regulation** — Seychelles FSA overview + our license details
- **/ultency-liquidity-provider** — Key SEO page; Ultency gateway services for brokers
- **/articles/** — Listing with categories (technology, regulation, liquidity)
  - **/articles/[slug]** — Article detail
- **/news/** — Corporate releases & announcements
  - **/news/[slug]** — News detail
- **/leadership/** — Executives (headshots, roles), press boilerplate
- **/compliance/** — Policies index (PDF/HTML), risk disclosures
- **/newsroom/** — Press kit (logos, boilerplate EN/ES/JA), media contact
- **/events/ifx-expo-asia-2025-hong-kong/** — Event landing (meeting form)
- **/contact** — Corporate contact and meeting request

**Locale routing:** `/` (en), `/es/...`, `/ja/...` with path parity across locales.

### 5.2 Redirects (permanent 301)
- `/ultancy-liquidity-provider` → `/ultency-liquidity-provider` (and locale variants)
- Any legacy or mis‑spelled brand/Ultency paths → canonical targets

### 5.3 Navigation
- **Top Nav:** About, Brands (Prime/Markets), FSA Regulation, Ultency, Articles, News, Leadership, Compliance, Newsroom, Events, Contact
- **Footer:** Entities, license note (SD040), privacy, terms, social, press kit

---

## 6. Internationalization & Naming Rules
- **Locales:** `en`, `es`, `ja`. `x-default` points to `en` URLs.
- **Japanese naming (canonical):**
  - **Ultency:** `Ultency（ウルテンシー）` — first mention shows both; thereafter natural use.
  - **Milton Global:** `ミルトングローバル（Milton Global Ltd.）`
  - **Milton Prime:** `Milton Prime（ミルトンプライム）` — FSA規制取引
  - **Milton Markets:** `Milton Markets（ミルトンマーケッツ）` — 柔軟な取引条件
  - Standard technical terms: 流動性プロバイダー / マッチングエンジン / 超低レイテンシ / セーシェル金融庁（FSA） / 証券ディーラー / ライセンス番号 SD040 / PAMM口座
- **Slug policy:** Romaji slugs for JA; ASCII without diacritics for ES.
- **Typography (JA):** full‑width punctuation with consistent 「。」; `line-break: strict; word-break: normal;`.
- **ES tone:** formal, neutral (usted); metric units; localized numerals.

A small shared glossary file will be maintained for translators and QA (JP/ES keyword pairs).

---

## 7. SEO Requirements
### 7.1 Metadata & Hreflang
- Next.js **metadata API** per page + per locale.
- Self‑referential canonical per locale.
- Hreflang matrix for `en`, `es`, `ja`, plus `x-default`.
- Preserved path on language switch; no home‑fallback.

### 7.2 Sitemaps & Robots
- Sitemap index + per‑locale sitemaps including `<xhtml:link rel="alternate" ...>`.
- `robots.txt`: allow all prod paths; disallow staging/test.

### 7.3 Structured Data
- **Organization** (localized `name`, `alternateName: ["ミルトングローバル"]`).
- **WebSite** with `SearchAction`.
- **NewsArticle** and **BlogPosting** on detail pages.
- **Event** schema on the IFX page.
- **BreadcrumbList** across all templates.
- **WebPage** on `/ultency-liquidity-provider/` with `about` referencing SoftwareApplication `Ultency` and alternateName `ウルテンシー`.

### 7.4 Content Strategy (initial)
- Articles (10–15): Ultency/MT5 liquidity, FSA verification, latency measurement, A‑Book vs B‑Book, risk controls, failover.
- News (3–5): Ultency provider announcement, license note, brand milestones.

### 7.5 Acceptance (SEO)
- Valid hreflang for all core pages.
- Rich Results Test passes for Organization, Event, NewsArticle.
- No duplicate titles/descriptions; localized OG tags.

---

## 8. Functional Requirements
- **Language switcher:** preserves current path and query.
- **Event meeting form:** name, company, email, role, preferred time; spam‑safe (honeypot + rate limit), optional reCAPTCHA.
- **Search (optional v1.1):** client‑side filter for Articles/News.
- **Assets:** localized alt text; caption support for diagrams.
- **Downloads:** compliance PDFs hosted under `/public/compliance/` with checksum logging.

---

## 9. Non‑Functional Requirements
- **Performance:** CWV targets above; `next/font` for Inter + Noto Sans JP; lazy images; `priority` only for first hero; no layout shift in hero.
- **Accessibility:** WCAG 2.2 AA; keyboard focus, ARIA labels, contrast ≥ 4.5:1.
- **Security:** CSP (script/img/font/frame directives), HTTPS only, HSTS, no inline scripts except nonce‑bound JSON‑LD.
- **Privacy:** Minimal PII; privacy policy link on forms; data retention 12 months unless extended by legal.
- **Reliability:** Static ISR where possible; 99.9% uptime target during event window.

---

## 10. Design System & Components
- Tailwind **v3 for launch** (v4 evaluation post‑event).
- Design tokens: brand red `#FE0100`, monochrome scale, 4px radius.
- Components: Header, Footer, LanguageSwitcher, Hero, BrandCards, ProofPoints, ArticleCard, NewsCard, Form, Badge (Ultency/FSA), Breadcrumbs.

---

## 11. Technical Architecture
- **Framework:** Next.js 15 (App Router, TypeScript).
- **i18n:** next‑intl with `en`, `es`, `ja` message bundles.
- **Content:** MD/MDX for Articles/News; localized frontmatter (`title`, `description`, `date`, `locale`, `tags`).
- **SEO helpers:** typed generators for metadata, alternates, and JSON‑LD.
- **Build/Deploy:** Vercel; prod env vars for base URL and analytics.
- **Redirects:** in `next.config.ts` for all "ultancy" → "ultency" routes.

**Directory sketch** matches current implementation with `/app/[locale]/...`, `/components`, `/lib/seo`, `/messages`.

### 11.1 Routing & i18n Policy
To ensure stable, predictable locale behavior across all environments:

- **Locales:** `en` (default at root), `es`, `ja`.
- **Prefix policy:** `localePrefix: 'as-needed'` — English pages are unprefixed (e.g., `/about`), while Spanish and Japanese use explicit prefixes (`/es/about`, `/ja/about`).
- **Locale detection:** `localeDetection: false` — **no automatic redirects** from `/` based on browser `Accept-Language` headers or `NEXT_LOCALE` cookies. Users who want ES/JA must explicitly navigate to `/es` or `/ja` (or use the language switcher).
- **Cookies:** The `NEXT_LOCALE` cookie is set but **not used for routing decisions**. Language switching navigates explicitly to `/es` or `/ja` URLs.
- **Message loading:** Messages are loaded via `i18n/request.ts` using `getRequestConfig` with `requestLocale` parameter. The locale layout calls `setRequestLocale(locale)` for static rendering optimization and loads messages via `getMessages()`.
- **Middleware:** Uses `next-intl/middleware` with the centralized routing config from `i18n/routing.ts`.
- **Legacy redirects:** Only for correcting old paths (e.g., `es-es` → `es`, `ultancy` → `ultency`). **No `/en` → `/` redirects** — `/en` explicitly redirects to `/` since English is unprefixed.

**Rationale:** This configuration prevents the "disappearing English" issue where users with non-English browser settings would be auto-redirected away from `/`. With `localeDetection: false`, the root path is **always English** and stable across all users and environments.

---

## 12. Analytics & Telemetry
- **GA4:** page views per locale; events for language switch, form submit, outbound brand clicks.
- **GSC:** three properties (root + /es/ + /ja/) with sitemaps submitted.
- **Log monitoring:** Vercel analytics; 404/5xx alerts; redirect hits for “ultancy”.

---

## 13. Compliance & Legal
- Clear statement of licensing and restricted jurisdictions (copy reviewed by Compliance).
- Risk disclosure page linked footer‑wide.
- Cookie notice if required in target regions (banner light).

---

## 14. Milestones & Timeline
1. **M0 — Build Unblock (Today):** Tailwind v3 downgrade; green build on staging.
2. **M1 — SEO/I18n Wiring (48h):** metadata/hreflang/sitemaps; JSON‑LD scaffolds; redirects live.
3. **M2 — Content Freeze (T‑5 days):** 2 EN articles + 2 JA + 1 ES; 3 news posts localized; event page finalized.
4. **M3 — Pre‑Launch QA (T‑3 days):** performance, a11y, hreflang, structured data.
5. **M4 — Go Live (T‑2 days):** DNS cutover, GSC fetch/render, sitemap submit.
6. **M5 — Event Window:** add photos/press mentions; daily sanity checks.
7. **M6 — Post‑Event (T+3 days):** recap news, lead follow‑ups, backlog prioritization.

---

## 15. Risks & Mitigations
- **Tailwind v4 incompat:** Ship v3; schedule v4 migration.
- **Hreflang errors:** Centralized alt map; automated tests.
- **JP typography inconsistency:** linting pass + visual QA checklist.
- **Over‑claiming protections:** Legal review of FSA copy; precise wording only.
- **Event date variance:** Keep dates in config; verify during content freeze.

---

## 16. Acceptance Criteria (per area)
- **Build/Deploy:** Staging and Production builds pass with zero type/lint errors.
- **SEO:** All core pages have valid `alternates.languages`; Rich Results pass; sitemaps include alternates; 301s verified.
- **I18n:** Language switcher preserves path; messages load; jp/es number/date formats correct.
- **Performance:** CWV lab checks meet targets on mobile; hero no CLS.
- **A11y:** Keyboard nav complete; landmarks present; form labels/aria valid.
- **Content:** First mention of `Ultency（ウルテンシー）` and `ミルトングローバル` present where relevant; glossary terms used consistently.

---

## 17. Launch Checklist
- [ ] Tailwind v3 live; no @apply build errors
- [ ] Redirect map for "ultancy" → "ultency" active (all locales)
- [ ] Metadata per page/locale; OG/Twitter localized
- [ ] Sitemap index + locale sitemaps submitted to GSC
- [ ] Organization + Event + Article JSON‑LD valid
- [ ] Forms tested (spam + success + email receipt)
- [ ] Footer license line + restricted countries note
- [ ] 404/500 pages localized
- [ ] Monitoring and alerts configured

---

## 18. Post‑Launch
- Weekly SEO report (rank + crawl stats + 404s).
- Content cadence: 1–2 articles/week with ES/JA parity lag ≤ 7 days.
- A/B test hero copy per locale; track impact on meeting requests.

---

## 19. Appendices
### A) Corporate Structure & Positioning
**Milton Global Ltd** 
- Seychelles FSA licensed entity (SD040)
- Operates institutional infrastructure and Ultency gateway
- Parent company for both retail brands

**Milton Prime**
- Retail trading under FSA license
- MT4 & MT5 platforms
- Leverage up to 1:100
- $500 minimum deposit
- Full regulatory protections

**Milton Markets**
- Incorporated in St. Lucia
- MT4, MT5 & PAMM solutions
- Leverage up to 1:1000
- $100 minimum deposit
- Enhanced promotions and flexibility
- Maintains Milton Global operational standards

### B) JP/ES Keyword Mini‑Glossary (authoritative forms)
- Ultency — **Ultency（ウルテンシー）** / ES: Ultency
- Milton Global — **ミルトングローバル（Milton Global Ltd.）** / ES: Milton Global
- Milton Prime — **Milton Prime（ミルトンプライム）** / ES: Milton Prime
- Milton Markets — **Milton Markets（ミルトンマーケッツ）** / ES: Milton Markets
- 流動性プロバイダー / Proveedor de liquidez / Liquidity provider
- マッチングエンジン / Motor de emparejamiento / Matching engine
- セーシェル金融庁（FSA） / Autoridad de Servicios Financieros de Seychelles (FSA)
- PAMM口座 / Cuentas PAMM / PAMM accounts

### B) Redirect Map (initial)
- `/ultancy-liquidity-provider` → `/ultency-liquidity-provider`
- `/ja/ultancy-liquidity-provider` → `/ja/ultency-liquidity-provider`
- `/es/ultancy-proveedor-liquidez` → `/es/ultency-proveedor-liquidez`

### C) Sample Metadata (Ultency page)
- **EN Title:** Ultency Liquidity Provider | Milton Global
- **ES Title:** Proveedor de liquidez con Ultency | Milton Global
- **JA Title:** Ultency（ウルテンシー）による流動性提供 | ミルトングローバル
- **Descriptions:** Localized 140–160 chars; mention MT5 connectivity.

### D) JSON‑LD Templates (pseudocode)
- **Organization:** `{ name: "Milton Global", alternateName: ["ミルトングローバル"], url, logo, brand: [...] }`
- **Event:** `{ name: "iFX EXPO Asia 2025", startDate, endDate, eventAttendanceMode: OfflineEventAttendanceMode, location: AsiaWorld‑Expo, organizer, offers: Free/Registration }`
- **WebPage (Ultency):** `{ about: [{ SoftwareApplication: Ultency, alternateName: ウルテンシー }] }`

### E) QA Checklists
- **Hreflang:** all core pages have 4 entries (x‑default + 3 locales).
- **JP typography:** full‑width punctuation, no double spaces, no mixed periods.
- **ES style:** usted tone, decimal/thousand separators, no Latin American idioms.
- **Images:** localized alts; width/height attributes set; no CLS on hero.

### F) Locale QA Checklist (Routing Stability)
Run these tests to verify `localeDetection: false` is working correctly:

```bash
# Test 1: Root always serves English (no Accept-Language influence)
curl -I http://localhost:3000/
# Expected: 200 OK, set-cookie: NEXT_LOCALE=en, NO location header

curl -I -H "Accept-Language: ja" http://localhost:3000/
# Expected: 200 OK, set-cookie: NEXT_LOCALE=en, NO location header (no redirect)

curl -I -H "Accept-Language: es" http://localhost:3000/
# Expected: 200 OK, set-cookie: NEXT_LOCALE=en, NO location header (no redirect)

# Test 2: Explicit locale paths work
curl -I http://localhost:3000/es
# Expected: 200 OK

curl -I http://localhost:3000/ja
# Expected: 200 OK

# Test 3: Verify HTML lang attribute
curl -s http://localhost:3000/ | grep '<html lang='
# Expected: <html lang="en"

curl -s http://localhost:3000/es | grep '<html lang='
# Expected: <html lang="es"

curl -s http://localhost:3000/ja | grep '<html lang='
# Expected: <html lang="ja"
```

**Pass criteria:** All requests to `/` return English regardless of browser language settings or cookies. No 307 redirects from root.

---

**End of PRD v1.0**

