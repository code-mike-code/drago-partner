# Drago Partner - Driver Recruitment Platform

A modern, responsive web application for Drago Partner - a fleet partner for professional drivers working with Uber, Bolt, and FreeNow in Warsaw, Poland.

![Drago Partner Preview](docs/preview.png)

---

## About

Drago Partner connects professional drivers and couriers with leading ride-hailing and food delivery platforms. The site serves as a lead-generation and recruitment landing page, offering:

- **Recruitment form** - integrated with Google Forms; the entry point for all candidates
- **Office appointment booking** - via an internal CRM system, available after submitting the form
- **Multilingual support** - 5 languages: Polish, English, Ukrainian, Serbian, Georgian
- **Blog / knowledge base** - `/blog/` with SEO articles for drivers and couriers, prerendered to static HTML at build time
- **Cookie consent** - GDPR-compliant banner with Google Analytics opt-in

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite + SWC |
| Styling | Tailwind CSS (custom theme, zero border-radius) |
| Routing | React Router v6 |
| i18n | Custom context-based (`useLanguage` hook) |
| Icons | Lucide React |
| SEO | react-helmet-async |
| Accordion | @radix-ui/react-accordion |

> No component library. All UI is built with plain HTML + Tailwind CSS.

---

## Project Structure

```
src/
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # HeroSection, AboutSection, ServicesSection,
│   │                     # FAQSection, ContactSection, ContactFormSection
│   ├── blog/             # ArticleBody, ArticleCard
│   ├── ui/               # button.tsx, accordion.tsx, MapPopover.tsx
│   ├── LanguageSwitcher.tsx
│   └── NavLink.tsx
├── content/blog/          # Blog articles (typed TS blocks), validator, index
├── pages/
│   ├── Index.tsx          # Landing page
│   ├── BlogIndex.tsx      # /blog/ - article list
│   ├── BlogPost.tsx       # /blog/<slug>/ - single article
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfService.tsx
│   └── NotFound.tsx
├── hooks/
│   └── useLanguage.tsx    # i18n hook + LanguageProvider
├── translations/
│   ├── pl.ts              # Polish
│   ├── en.ts              # English
│   ├── ua.ts              # Ukrainian
│   ├── sr.ts              # Serbian
│   └── gr.ts              # Georgian
├── lib/
│   └── utils.ts           # cn() utility (clsx + tailwind-merge)
├── entry-server.tsx       # SSR entry used by the blog prerender
└── assets/
scripts/                   # prerender.mjs + lib (+ node:test tests)
```

---

## Getting Started

### Requirements

- Node.js v18+
- npm

### Installation

```bash
git clone <repository-url>
cd drago-partner-v0.2
npm install
```

### Development

```bash
npm run dev        # Dev server at http://localhost:8080
npm run build      # Production build + blog prerender → dist/
npm run build:dev  # Dev build with source maps
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm test           # Tests for prerender scripts (node:test)
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_GOOGLE_FORMS_URL=https://docs.google.com/forms/d/YOUR_FORM_ID/viewform
VITE_GOOGLE_CALENDAR_ID=your_calendar_id@group.calendar.google.com
VITE_GOOGLE_API_KEY=your_google_api_key
```

> Variables are embedded at build time by Vite - they do not need to be set on the server.

---

## Internationalisation

Custom i18n system using React Context. Language is stored in `localStorage` and defaults to the browser locale.

```tsx
const { t, language, setLanguage } = useLanguage()
<h1>{t('hero.title')}</h1>
```

Translation files live in `src/translations/`. When adding new copy, add the key to **all 5 files**.

| Language | Code | File |
|---|---|---|
| Polish | pl | `pl.ts` |
| English | en | `en.ts` |
| Ukrainian | ua | `ua.ts` |
| Serbian | sr | `sr.ts` |
| Georgian | gr | `gr.ts` |

---

## Design System

| Token | Value |
|---|---|
| Primary accent | Illuminating Yellow `#f5df4d` |
| Neutral | Ultimate Grey `#939597` |
| Background | Ghost White `#F8F8FF` / White |
| Font | Inter |
| Border radius | **None** — `rounded-*` classes are never used |
| Button min-height | 44px (accessibility) |
| Section spacing | `py-24 md:py-32 lg:py-40` |

---

## Deployment

### Build

```bash
npm run build
```

`npm run build` runs four steps: type-check, client build, SSR build of the blog (`dist-ssr/`), and `scripts/prerender.mjs`, which writes `dist/blog/**/index.html` (full article HTML, meta, canonical, JSON-LD) and appends the blog URLs to `dist/sitemap.xml` and `dist/llms.txt`. Article content is validated during the build (title/description length, unique slugs, valid internal links) - the build fails on errors.

Output goes to `dist/`. `public/.htaccess` is copied into `dist/` automatically (HTTPS redirect, SPA fallback, gzip, cache). If the server already has its own `.htaccess`, merge it instead of overwriting.

### Hosting — idHosting (Plesk)

1. Upload contents of `dist/` (including `.htaccess`) to `httpdocs/`
2. Enable SSL via Plesk → Domains → SSL/TLS Certificates → Let's Encrypt

---

## Blog

Articles live in `src/content/blog/<slug>.ts` as typed blocks (`h2`, `p`, `list`, `callout`) plus optional FAQ and `related` slugs; inline links use `[text](/blog/slug/)`. To add an article: create the file, register it in `src/content/blog/index.ts`, run `npm run build`. Facts and figures should be recorded with sources in `docs/superpowers/blog-verification.md` (local notes).

---

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | `Index.tsx` | Main landing page |
| `/blog/` | `BlogIndex.tsx` | Blog article list |
| `/blog/<slug>/` | `BlogPost.tsx` | Single article (prerendered) |
| `/privacy-policy` | `PrivacyPolicy.tsx` | GDPR privacy & cookie policy |
| `/terms-of-service` | `TermsOfService.tsx` | Terms of service |
| `*` | `NotFound.tsx` | 404 fallback |

---

## Legal

**Operator:** GB+ Spółka z ograniczoną odpowiedzialnością
**NIP:** 5242881811
**Address:** ul. Książkowa 9F/405, 03-134 Warszawa, Poland
**Contact:** biuro@dragopartner.pl · +48 530 181 372

---

**Version:** 0.2.0
**Last updated:** October 2026
**License:** Private - all rights reserved.
