import type { Article } from './types'
import image from '@/assets/img/hero-company.webp'

export const wymogiPrawne: Article = {
  slug: 'wymogi-prawne-kierowca-taxi-polska',
  lang: 'pl',
  title: 'Wymogi prawne dla kierowcy taxi w Polsce – przewodnik 2026',
  description:
    'Jakie wymogi musi spełnić kierowca taxi w Polsce: licencja i wypis, prawo jazdy, badania, niekaralność, identyfikator i wymagania wobec samochodu.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingMinutes: 7,
  image,
  imageAlt: 'Dokumenty i samochód taxi w Warszawie',
  blocks: [
    {
      type: 'p',
      text: 'Żeby legalnie wozić pasażerów taksówką w Polsce, kierowca musi spełnić kilka wymogów: dotyczących licencji, uprawnień, zdrowia, niekaralności i samochodu. Poniżej zbieramy je w jednym miejscu. Przepisy i wymagania platform mogą się zmieniać, dlatego przed złożeniem dokumentów warto je potwierdzić w naszym biurze. Jak wygląda sam proces, opisujemy w artykule [jak szybko zacząć pracę](/blog/jak-szybko-zaczac-prace-kierowca-taxi/); jeśli jesteś cudzoziemcem, zobacz też [przewodnik po angielsku](/blog/how-to-become-taxi-driver-in-poland-foreigner/).',
    },
    { type: 'h2', text: 'Licencja i wypis z licencji' },
    {
      type: 'p',
      text: 'Podstawą jest ustawa z 6 września 2001 r. o transporcie drogowym, która wymaga licencji na krajowy transport drogowy w zakresie przewozu osób taksówką. W aplikacjach Uber i Bolt kierowca najczęściej pracuje w modelu z partnerem flotowym: to partner ma firmę i licencje w gminach, a kierowca i jego samochód otrzymują wypis z licencji partnera. Uber podaje, że partner flotowy odpowiada też za rozliczenie przychodów kierowcy.',
    },
    { type: 'h2', text: 'Prawo jazdy' },
    {
      type: 'p',
      text: 'Wymagane jest prawo jazdy kategorii B. Uber wskazuje, że musi być posiadane od co najmniej roku, a od 17 czerwca 2024 r. akceptuje wyłącznie polskie prawo jazdy. To wymóg platformy, który obowiązuje obok przepisów.',
    },
    { type: 'h2', text: 'Badania lekarskie i psychologiczne' },
    {
      type: 'p',
      text: 'Kierowca musi mieć orzeczenie o braku przeciwwskazań zdrowotnych oraz psychologicznych do pracy na stanowisku kierowcy. Zaświadczenia są wymagane przy identyfikatorze taxi i w procesie weryfikacji na platformach.',
    },
    { type: 'h2', text: 'Zaświadczenie o niekaralności' },
    {
      type: 'p',
      text: 'Do dokumentów potrzebne jest zaświadczenie o niekaralności, nie starsze niż 30 dni w dniu weryfikacji. Przepisy wykluczają kierowców prawomocnie skazanych m.in. za przestępstwa przeciwko życiu i zdrowiu oraz przeciwko wolności seksualnej i obyczajności, a także za przestępstwa z ustawy o przeciwdziałaniu narkomanii. W Drago Partner wymagamy zaświadczeń polskiego i z kraju obywatelstwa, z tłumaczeniem przysięgłym.',
    },
    { type: 'h2', text: 'Identyfikator kierowcy taxi' },
    {
      type: 'p',
      text: 'Identyfikator wydaje gmina. Uber zaznacza, że nie wszystkie gminy go wymagają, dlatego trzeba sprawdzić zasady w gminie, w której chcesz jeździć. W Warszawie pomagamy przejść cały proces.',
    },
    { type: 'h2', text: 'Wymagania wobec samochodu' },
    {
      type: 'list',
      items: [
        'ważne ubezpieczenie OC i przegląd techniczny,',
        'pieczątka z przeglądu taxi w dowodzie rejestracyjnym,',
        'ważny wypis z licencji taxi partnera,',
        'oznakowanie zgodne z przepisami miasta i lampa TAXI,',
        'koło zapasowe i apteczka pierwszej pomocy,',
        'rocznik zgodny z wymogami platformy (Uber i Bolt: 2005 lub nowszy, FreeNow: 2007 lub nowszy).',
      ],
    },
    { type: 'h2', text: 'Dokumenty w Drago Partner' },
    {
      type: 'list',
      items: [
        'dowód osobisty lub paszport,',
        'polskie prawo jazdy,',
        'orzeczenie lekarskie i psychologiczne,',
        'zaświadczenie o niekaralności – polskie i z kraju obywatelstwa (tłumaczenie przysięgłe), nie starsze niż 30 dni.',
      ],
    },
    {
      type: 'callout',
      text: 'Informacje mają charakter ogólny i nie zastępują porady prawnej. Szczegółowe wymogi mogą się różnić między gminami i platformami – potwierdź je w naszym biurze przed złożeniem dokumentów.',
    },
  ],
  related: [
    'jak-szybko-zaczac-prace-kierowca-taxi',
    'how-to-become-taxi-driver-in-poland-foreigner',
    'czy-praca-taxi-oplaca-sie-2026-warszawa',
  ],
  faq: [
    {
      question: 'Czy potrzebuję własnej licencji taxi?',
      answer:
        'W modelu współpracy z partnerem flotowym licencję posiada partner, a Ty i Twój samochód otrzymujecie wypis z licencji. Pomagamy przejść ten proces.',
    },
    {
      question: 'Jak długo ważne jest zaświadczenie o niekaralności?',
      answer:
        'W procesie weryfikacji zaświadczenie nie może być starsze niż 30 dni.',
    },
    {
      question: 'Czy identyfikator taxi jest zawsze wymagany?',
      answer:
        'Nie wszystkie gminy go wymagają. Zasady zależą od gminy, w której planujesz jeździć. Sprawdzimy je razem z Tobą.',
    },
    {
      question: 'Czy muszę znać język polski?',
      answer:
        'Język polski nie jest obowiązkowy, ale zalecamy znać podstawy dla lepszej komunikacji z klientami.',
    },
  ],
}
