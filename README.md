# Drago Partner - Platform Rekrutacyjna dla Kierowców

Nowoczesna, responsywna aplikacja webowa dla agencji rekrutacyjnej Drago Partner. Zbudowana w React, TypeScript i Tailwind CSS.

## 🚛 O Projekcie

Drago Partner to profesjonalna platforma dedykowana rekrutacji kierowców zawodowych na przewozy osób wykorzystując platformy takie jak: Uber, Bolt i FreeNow, oferująca:
- **Formularz Zgłoszeniowy** – integracja z Google Forms, pierwszy krok do rejestracji kandydata
- **Rezerwacja Wizyty** – system umawiania spotkań przez Google Calendar z dedykowanymi slotami czasowymi
- **Portal Kierowcy** – strefa dla zalogowanych kierowców *(konfiguracja – implementacja w przyszłości)*
- **Wsparcie Wielojęzyczne** – obsługa 5 języków: Polski, Angielski, Ukraiński, Serbski, Gruziński,

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 z TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui (Radix UI + Tailwind)
- **Routing**: React Router v6
- **Form Management**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Internationalization**: Custom i18n hooks (`useLanguage`)
- **State Management**: TanStack React Query
- **Calendar Integration**: Google Calendar API
- **Form Integration**: Google Forms embed / redirect

## 📦 Struktura Projektu

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Sekcje strony (Hero, O nas, Oferta, itp.)
│   ├── modals/          # Modal potwierdzenia rezerwacji
│   └── ui/              # Reużywalne komponenty shadcn-ui
├── pages/
│   ├── Home.tsx         # Strona główna
│   └── DriverPortal.tsx # Portal kierowcy (placeholder)
├── hooks/
│   ├── useLanguage.ts   # Hook do obsługi i18n
│   └── useBooking.ts    # Logika rezerwacji wizyty
├── lib/                 # Funkcje pomocnicze
├── i18n/
│   ├── pl.ts            # Tłumaczenia PL
│   ├── en.ts            # Tłumaczenia EN
│   ├── uk.ts            # Tłumaczenia UK
│   └── sr.ts            # Tłumaczenia SR
│   └── gr.ts            # Tłumaczenia GR
├── App.tsx
└── main.tsx
```

## 🚀 Pierwsze Kroki

### Wymagania
- Node.js (v16 lub wyżej)
- npm lub yarn

### Instalacja

1. Sklonuj repozytorium:
```bash
git clone <repository-url>
cd drago-partner
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom serwer deweloperski:
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:8080`

## 📝 Dostępne Skrypty

```bash
npm run dev        # Serwer deweloperski z auto-przeładowaniem
npm run build      # Build produkcyjny
npm run build:dev  # Build deweloperski
npm run preview    # Podgląd builda produkcyjnego lokalnie
npm run lint       # Uruchomienie ESLint
```

## 🌐 Internacjonalizacja (i18n)

Projekt obsługuje 4 języki z własnym systemem i18n opartym na hooku `useLanguage`.

| Język      | Kod | Status        |
|------------|-----|---------------|
| Polski     | pl  | ✅ Aktywny    |
| Angielski  | en  | ✅ Aktywny    |
| Ukraiński  | uk  | ✅ Aktywny    |
| Gruziński  | ge  | ✅ Aktywny    |
| Serbski    | sr  | ✅ Aktywny    |

Przełącznik języków dostępny w komponencie `LanguageSwitcher` w nagłówku.

## 📋 Funkcjonalności – Szczegóły

### 1. Formularz Zgłoszeniowy (Google Forms)
- Osadzony formularz Google Forms lub przekierowanie do formularza
- Kandydat wypełnia formularz jako **pierwszy i obowiązkowy krok**
- Brak wcześniejszego wypełnienia formularza blokuje możliwość rezerwacji wizyty

### 2. Rezerwacja Wizyty (Google Calendar)
- Użytkownik może zarezerwować wizytę **wyłącznie po wypełnieniu formularza zgłoszeniowego**
- Przed otwarciem kalendarza wyświetlany jest **modal z ostrzeżeniem**:

  > _„Zarezerwuj wizytę tylko jeśli wypełniłeś/aś formularz zgłoszeniowy i posiadasz komplet dokumentów. W przypadku braku dokumentów skontaktuj się telefonicznie z biurem obsługi."_

- Kalendarz zawiera predefiniowane sloty czasowe ustawione przez administratora w Google Calendar
- Użytkownik wybiera dostępny termin i potwierdza rezerwację

### 3. Portal Kierowcy *(Konfiguracja – przyszła implementacja)*
- Strefa zalogowanych kierowców
- Aktualnie: strona placeholder / szkielet nawigacji
- Planowane funkcje: podgląd statusu aplikacji, dokumenty, harmonogram

## 🔧 Konfiguracja Integracji

### Google Forms
Ustaw URL formularza w pliku konfiguracyjnym lub zmiennej środowiskowej:
```env
VITE_GOOGLE_FORMS_URL=https://docs.google.com/forms/d/YOUR_FORM_ID/viewform
```

### Google Calendar
Ustaw ID kalendarza i klucz API:
```env
VITE_GOOGLE_CALENDAR_ID=your_calendar_id@group.calendar.google.com
VITE_GOOGLE_API_KEY=your_google_api_key
```

## 📱 Responsywność

Aplikacja w pełni responsywna z breakpointami:
- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

## 🔧 Pliki Konfiguracyjne

- `vite.config.ts` – konfiguracja Vite
- `tailwind.config.ts` – kustomizacja Tailwind CSS
- `tsconfig.json` – konfiguracja TypeScript
- `eslint.config.js` – reguły ESLint
- `components.json` – rejestr komponentów shadcn-ui
- `.env` – zmienne środowiskowe (Google API keys)

## 📦 Kluczowe Zależności

- **shadcn-ui** – biblioteka komponentów z Radix UI
- **Tailwind CSS** – utility-first CSS framework
- **React Router** – routing po stronie klienta
- **React Hook Form** – obsługa formularzy
- **Zod** – walidacja schematów runtime
- **TanStack Query** – zarządzanie stanem asynchronicznym
- **Sonner** – powiadomienia toast
- **Lucide React** – biblioteka ikon

## 🚀 Deployment

### 1. Build i weryfikacja
```bash
npm run build
npm run preview
```

### 2. Output
Wyniki builda znajdują się w katalogu `dist/`.

### 3. Konfiguracja SPA Routing
- **Vercel**: obsługiwane automatycznie
- **Netlify**: utwórz plik `public/_redirects`:
  ```
  /*  /index.html  200
  ```
- **GitHub Pages**: wymaga `HashRouter` lub custom `404.html`

## 👨‍💻 Rozwój Projektu

### Jakość Kodu
- ESLint do lintowania
- TypeScript dla bezpieczeństwa typów
- Tailwind CSS dla spójnego stylowania

### Dobre Praktyki
- Kompozycja komponentów zamiast dziedziczenia
- Custom hooks do reużywania logiki
- Semantyczny HTML
- Dostępność (accessibility)
- Optymalizacja wydajności z code splitting

## 🤝 Współpraca

Przy wnoszeniu zmian do projektu:
1. Utwórz branch funkcjonalności (`feature/nazwa`)
2. Wprowadź zmiany
3. Przetestuj dokładnie
4. Wyślij Pull Request

## 📄 Licencja

Projekt jest własnością prywatną i poufny.

## 📞 Wsparcie

W przypadku pytań lub problemów skontaktuj się z zespołem deweloperskim.

---

**Wersja**: 0.1.0  
**Ostatnia aktualizacja**: Marzec 2026
