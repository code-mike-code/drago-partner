import type { Article } from './types'
import image from '@/assets/img/corolla-right.webp'

export const czyOplacaSie: Article = {
  slug: 'czy-praca-taxi-oplaca-sie-2026-warszawa',
  lang: 'pl',
  title: 'Czy praca na taxi w 2026 roku się opłaca? Warszawa – rachunek',
  description:
    'Czy warto zostać kierowcą taxi w Warszawie w 2026 roku? Plusy, koszty, ryzyka i to, jak sprawdzić, czy oferta partnera flotowego naprawdę się opłaca.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingMinutes: 6,
  image,
  imageAlt: 'Samochód taxi w Warszawie',
  blocks: [
    {
      type: 'p',
      text: 'Krótka odpowiedź: to zależy od tego, ile godzin pracujesz, jakie masz koszty i na jakich warunkach współpracujesz z partnerem flotowym. Poniżej rzetelny rachunek zysków i strat, bez obiecywania gwarantowanych zarobków.',
    },
    { type: 'h2', text: 'Co przemawia za' },
    {
      type: 'list',
      items: [
        'elastyczny grafik – sam ustalasz godziny pracy,',
        'możliwość pracy na kilku platformach jednocześnie (Uber, Bolt, FreeNow),',
        'szybki start z pomocą partnera flotowego w sprawie licencji i dokumentów,',
        'dostęp do auta bez zakupu – wynajem z floty.',
      ],
    },
    {
      type: 'p',
      text: 'Drago Partner podaje średnie wynagrodzenie kierowcy taxi od 9 000 zł. Serwis Freenance szacuje w swoim zestawieniu na 2026 rok, że kierowca Bolta w Warszawie zarabia około 6 000–9 000 zł na rękę po odjęciu paliwa i prowizji platformy, przy pracy około 60 godzin tygodniowo. To szacunek zewnętrzny i wymaga ostrożności.',
    },
    { type: 'h2', text: 'Koszty i ryzyka, o których trzeba pamiętać' },
    {
      type: 'list',
      items: [
        'prowizje platform i opłaty floty, które zmniejszają przychód z kursu,',
        'koszt samochodu: wynajem, rata lub własne auto z serwisem,',
        'paliwo, które przy długich zmianach jest dużą pozycją,',
        'zmienność popytu zależna od pory dnia, dnia tygodnia i sezonu,',
        'zmiany prawne i spory dotyczące statusu kierowców w aplikacjach.',
      ],
    },
    {
      type: 'callout',
      text: 'W kwietniu 2025 roku kierowcy protestowali przeciw warunkom rozliczeń w aplikacjach. Według ich wyliczenia z kursu za 100 zł zostawało im około 30 zł. To stanowisko jednej ze stron sporu, ale pokazuje, że warunki umowy są równie ważne jak sama stawka za kurs.',
    },
    { type: 'h2', text: 'Własny samochód czy wynajem z floty' },
    {
      type: 'p',
      text: 'Własne auto nie wymaga opłat za wynajem, ale musi spełniać wymogi platform i mieć pieczątkę z przeglądu taxi oraz wypis z licencji partnera. Wynajem z floty oznacza stały koszt tygodniowy, za to bez ryzyka przy awarii czy zakupie auta. Policz oba warianty dla swojej liczby godzin. Wymogi wobec auta opisujemy w artykule [wymogi prawne dla kierowcy taxi](/blog/wymogi-prawne-kierowca-taxi-polska/).',
    },
    { type: 'h2', text: 'Jak sprawdzić, czy oferta się opłaca' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Zapytaj partnera flotowego o zasady rozliczeń na piśmie.',
        'Zsumuj miesięczne koszty stałe: wynajem lub rata, ubezpieczenie, serwis.',
        'Oszacuj koszty zmienne: paliwo i składki.',
        'Porównaj wynik z liczbą godzin, które realnie chcesz przepracować.',
      ],
    },
    { type: 'h2', text: 'Dla kogo to dobry wybór' },
    {
      type: 'p',
      text: 'Praca taxi najczęściej sprawdza się u osób, które cenią elastyczny grafik, są gotowe pracować w godzinach największego popytu i mają jasny plan kosztów. Jeśli szukasz stałej pensji i gwarantowanej kwoty, to rozwiązanie wymaga większej samodzielności.',
    },
    {
      type: 'p',
      text: 'Chcesz policzyć to dla siebie? [Wypełnij formularz](/#contact-form), a opowiemy, jak wyglądają warunki współpracy w Drago Partner.',
    },
  ],
  related: [
    'zarobki-kierowcy-uber-bolt-warszawa',
    'wymogi-prawne-kierowca-taxi-polska',
    'jak-szybko-zaczac-prace-kierowca-taxi',
  ],
  faq: [
    {
      question: 'Czy w 2026 roku warto zostać kierowcą taxi w Warszawie?',
      answer:
        'To zależy od liczby godzin, kosztów samochodu i warunków rozliczeń z partnerem flotowym. Policz koszty przed decyzją.',
    },
    {
      question: 'Czy lepiej mieć własne auto, czy wynająć?',
      answer:
        'Własne auto eliminuje opłatę za wynajem, ale musi spełniać wymogi platform. Wynajem z floty daje stały koszt i brak ryzyka zakupu.',
    },
    {
      question: 'Czy zarobki są gwarantowane?',
      answer:
        'Nie. Podawane kwoty mają charakter informacyjny, a wynik zależy od Twojej pracy, kosztów i popytu.',
    },
  ],
}
