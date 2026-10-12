# Blog / baza wiedzy — design

Data: 2026-10-12

## Cel

Zwiększyć widoczność dragopartner.pl w wynikach wyszukiwania (Google, boty AI) przez blog z artykułami pod frazy kierowców i kurierów w Warszawie. Artykuły prowadzą do formularza zgłoszeniowego (lead generation). Start: 6 artykułów.

## Ograniczenia

- Strona to SPA (React 18, Vite, React Router v6, react-helmet-async), hosting klasyczny (idHosting, statyczne pliki, Apache). Brak SSR.
- Design zgodny ze stroną główną: zero border-radius, Inter, żółty akcent `#f5df4d`, sekcje `py-24 md:py-32 lg:py-40`, przyciski min. 44px.
- Bez nowych zależności.
- Miniaturki wyłącznie z istniejących assetów (`src/assets/img/*`).
- Przełącznik języka zmienia tekst na tym samym URL, więc tłumaczenia artykułów nie dają SEO.

## Struktura URL

| URL | Strona |
|---|---|
| `/blog` | lista artykułów |
| `/blog/<slug>` | artykuł |

Artykuły:

1. `zarobki-kierowcy-uber-bolt-warszawa`
2. `zarobki-kuriera-uber-eats-bolt-food-warszawa`
3. `czy-praca-taxi-oplaca-sie-2026-warszawa`
4. `wymogi-prawne-kierowca-taxi-polska`
5. `jak-szybko-zaczac-prace-kierowca-taxi`
6. `how-to-become-taxi-driver-in-poland-foreigner` (po angielsku, osobny URL, bez polskiego odpowiednika na start; wersja UA możliwa później)

Menu: nowy link wewnętrzny „Blog" (klucz `nav.blog` w 5 plikach tłumaczeń). Istniejące linki `#about`, `#services`, `#faq`, `#contact` zmienione na `/#...`, aby działały z podstron; `NavLink` obsługuje scroll, gdy jesteśmy już na `/`.

## Treść

- `src/content/blog/<slug>.ts` + `src/content/blog/index.ts` (lista, kolejność wg daty).
- Typ `Article`: `slug`, `lang` (`pl`|`en`), `title`, `description`, `publishedAt`, `updatedAt`, `readingMinutes`, `image`, `imageAlt`, `blocks`, `faq?`.
- Bloki: `h2`, `p`, `list` (ul/ol), `callout`, `cta`. Bez Markdowna.
- Źródła faktów: dane ze strony (taxi od 9 000 zł, kurier od 6 000 zł, wymogi pojazdów Uber/Bolt/FreeNow, dokumenty, proces startu) + research ze źródłami dla prawa i rynku. Każda liczba/przepis z datą „stan na"; lista pozycji do weryfikacji przez właściciela przed publikacją.
- Linkowanie wewnętrzne między artykułami; na końcu każdego CTA do `/#contact-form`.
- Miniaturki: `hero-taxi`, `hero-delivery`, `about-*`, `corolla-*`.

## Komponenty

- `pages/BlogIndex.tsx`, `pages/BlogPost.tsx` (Header + Footer jak reszta).
- `components/blog/ArticleCard.tsx`, `components/blog/ArticleBody.tsx` (render bloków), opcjonalnie spis treści (desktop).
- Trasy w `App.tsx` nad `*`. Nieznany slug → `NotFound`.
- Klucze UI bloga (nagłówek listy, „Czytaj dalej", „Zaktualizowano", CTA) w 5 plikach tłumaczeń; treść artykułów nie jest tłumaczona.

## SEO / prerender

- `Helmet` per strona: title, description, canonical, OG/Twitter, `og:locale`.
- JSON-LD: `Article` + `BreadcrumbList`; `FAQPage`, gdy artykuł ma FAQ.
- Skrypt po buildzie (`scripts/prerender.*`, podpięty do `npm run build`): `vite build --ssr` małego entry z `react-dom/server` + `StaticRouter` + `HelmetProvider` (kontekst) → zapis `dist/blog/index.html` i `dist/blog/<slug>/index.html` z gotową treścią w `#root` i head z Helmet. Klient montuje się `createRoot` jak dotąd.
- Język przy prerenderze wymuszony: PL (artykuł EN: EN). Lista /blog: PL.
- Ten sam skrypt generuje wpisy w `sitemap.xml` (lastmod z `updatedAt`) i dopisuje artykuły do `public/llms.txt`.
- `public/.htaccess`: fallback SPA (`/privacy-policy`, `/terms-of-service`), gzip, cache assetów. Przed wdrożeniem sprawdzić, czy na serwerze nie ma istniejącego `.htaccess`.

## Wygląd

Zero border-radius, żółta linia akcentowa, karty w siatce rozdzielonej liniami 1px (jak Services), artykuł w wąskiej kolumnie (jak FAQ), duże odstępy, mobile-first.

## Ryzyka

- `LanguageProvider` używa API przeglądarki → SSR może wymagać guardów. Fallback: ręczne generowanie HTML z bloków.
- Wypełnienie `#root` przed `createRoot` powoduje krótki re-render (brak hydracji) — akceptowalne.
- Merytoryka (prawo, stawki) wymaga weryfikacji właściciela.

## Weryfikacja

`npm run build` bez błędów; `dist/blog/**/index.html` zawierają treść i meta; sitemap zawiera 7 nowych URL; lint czysty; ręczny przegląd `/blog` i artykułu na mobile i desktop.
