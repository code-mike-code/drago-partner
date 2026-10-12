import type { Article } from './types'
import image from '@/assets/img/hero-delivery.webp'

export const zarobkiKuriera: Article = {
  slug: 'zarobki-kuriera-uber-eats-bolt-food-warszawa',
  lang: 'pl',
  title: 'Zarobki kuriera Uber Eats i Bolt Food w Warszawie (2026)',
  description:
    'Ile zarabia kurier Uber Eats i Bolt Food w Warszawie, jak czytać ogłoszenia z widełkami i jakie koszty trzeba uwzględnić, zanim zaczniesz.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingMinutes: 5,
  image,
  imageAlt: 'Kurier dostarczający jedzenie z Uber Eats i Bolt Food w Warszawie',
  blocks: [
    {
      type: 'p',
      text: 'Praca kuriera Uber Eats lub Bolt Food przyciąga elastycznym grafikiem, ale zarobki bardzo różnią się w zależności od liczby godzin, pory dnia i środka transportu. Poniżej wyjaśniamy, jak realnie ocenić ofertę i na co zwrócić uwagę, zanim zaczniesz.',
    },
    { type: 'h2', text: 'Ile zarabia kurier w Warszawie' },
    {
      type: 'p',
      text: 'W ofercie Drago Partner podajemy, że średnie wynagrodzenie kuriera wynosi od 6 000 zł. To kwota informacyjna, a nie gwarancja. Kto pracuje kilka godzin w tygodniu, zarobi znacznie mniej niż osoba, która jeździ codziennie w godzinach szczytu.',
    },
    { type: 'h2', text: 'Jak czytać ogłoszenia z widełkami' },
    {
      type: 'p',
      text: 'W ogłoszeniach dla kurierów najczęściej widać widełki miesięczne lub tygodniowe, a nie stawkę za pojedynczą dostawę. Te kwoty to deklaracje rekruterów i zakładają dużą liczbę godzin. Zanim je zaakceptujesz, zapytaj:',
    },
    {
      type: 'list',
      items: [
        'na jakiej podstawie jest umowa (zlecenie, współpraca B2B) i kto odprowadza składki,',
        'czy pośrednik pobiera prowizję lub opłatę i ile wynosi,',
        'kiedy i jak często są wypłaty,',
        'jakie koszty ponosisz samodzielnie.',
      ],
    },
    { type: 'h2', text: 'Koszty, które zmniejszają zarobek' },
    {
      type: 'list',
      items: [
        'środek transportu: rower, hulajnoga elektryczna, skuter lub samochód – razem z serwisem i ubezpieczeniem,',
        'paliwo lub ładowanie,',
        'telefon i internet,',
        'składki i podatki, zależnie od formy rozliczenia.',
      ],
    },
    { type: 'h2', text: 'Uber Eats i Bolt Food – można łączyć' },
    {
      type: 'p',
      text: 'Kurier może pracować dla obu platform, co zwiększa liczbę zamówień w godzinach, w których jesteś online. W Drago Partner pomagamy w rejestracji, szkoleniu i codziennej pracy z obiema aplikacjami.',
    },
    { type: 'h2', text: 'Kiedy zamówień jest najwięcej' },
    {
      type: 'p',
      text: 'Popyt na dostawy jedzenia rośnie zwykle w porze obiadowej i wieczorem. Przed wyborem godzin warto sprawdzić w aplikacji, kiedy w Twojej okolicy jest najwięcej zamówień, i planować grafik pod ten rytm.',
    },
    { type: 'h2', text: 'Jak zacząć z Drago Partner' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Wypełnij [formularz zgłoszeniowy](/#contact-form).',
        'Dostarcz dokumenty w naszym biurze (oryginały i kopie).',
        'Przejdź rejestrację i szkolenie z obsługi aplikacji.',
        'Zacznij pracę – wsparcie masz 7 dni w tygodniu.',
      ],
    },
  ],
  related: [
    'zarobki-kierowcy-uber-bolt-warszawa',
    'jak-szybko-zaczac-prace-kierowca-taxi',
  ],
  faq: [
    {
      question: 'Ile zarabia kurier Uber Eats w Warszawie?',
      answer:
        'Drago Partner podaje średnie wynagrodzenie kuriera od 6 000 zł. Rzeczywisty wynik zależy od liczby godzin, pory dnia i środka transportu.',
    },
    {
      question: 'Czy mogę być kurierem Uber Eats i Bolt Food jednocześnie?',
      answer:
        'Tak, kurier może pracować dla obu platform. Pomagamy w rejestracji i szkoleniu do pracy z każdą z nich.',
    },
    {
      question: 'Czy potrzebuję własnego samochodu?',
      answer:
        'Nie zawsze. Środek transportu zależy od platformy i Twojego wyboru. Szczegóły omówimy na spotkaniu w biurze.',
    },
  ],
}
