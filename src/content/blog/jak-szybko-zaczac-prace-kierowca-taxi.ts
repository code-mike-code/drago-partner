import type { Article } from './types'
import image from '@/assets/img/hero-taxi-1.webp'

export const jakSzybkoZaczacPrace: Article = {
  slug: 'jak-szybko-zaczac-prace-kierowca-taxi',
  lang: 'pl',
  title: 'Jak szybko można zacząć pracę jako kierowca taxi z Drago Partner?',
  description:
    'Od formularza do pierwszego kursu: jakie dokumenty przygotować, jak wygląda spotkanie w biurze i co przyspiesza start jako kierowca taxi w Warszawie.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingMinutes: 4,
  image,
  imageAlt: 'Kierowca taxi Drago Partner w Warszawie',
  blocks: [
    {
      type: 'p',
      text: 'Tempo startu jako kierowca taxi w Warszawie zależy głównie od jednego: jak szybko skompletujesz dokumenty. Resztę procesu – licencję, identyfikator i rejestrację w aplikacjach – prowadzimy z Tobą krok po kroku. Poniżej cały proces od pierwszego kontaktu do pierwszego kursu.',
    },
    { type: 'h2', text: 'Krok 1: formularz zgłoszeniowy' },
    {
      type: 'p',
      text: 'Wypełnij [formularz zgłoszeniowy](/#contact-form): podaj imię i nazwisko, e-mail, telefon i miasto oraz zaznacz, czy masz własny samochód, czy chcesz go wynająć. Odpowiadamy w ciągu 24 godzin.',
    },
    { type: 'h2', text: 'Krok 2: komplet dokumentów' },
    {
      type: 'p',
      text: 'To etap, który najczęściej decyduje o tempie. Pełną listę wymogów opisujemy w artykule [wymogi prawne dla kierowcy taxi](/blog/wymogi-prawne-kierowca-taxi-polska/). Przygotuj:',
    },
    {
      type: 'list',
      items: [
        'dowód osobisty lub paszport,',
        'polskie prawo jazdy,',
        'orzeczenie lekarskie i psychologiczne,',
        'zaświadczenie o niekaralności – polskie oraz z kraju obywatelstwa (z tłumaczeniem przysięgłym).',
      ],
    },
    {
      type: 'callout',
      text: 'Zaświadczenia o niekaralności nie mogą być starsze niż 30 dni. Nie zbieraj ich za wcześnie – ale też nie zostawiaj na ostatnią chwilę, bo uzyskanie dokumentu z zagranicy bywa najdłuższym elementem całego procesu.',
    },
    { type: 'h2', text: 'Krok 3: spotkanie w biurze' },
    {
      type: 'p',
      text: 'Gdy masz komplet dokumentów, umawiasz wizytę w naszym biurze przy ul. Modlińskiej 310/312 (Fort Piontek) i przynosisz oryginały oraz kopie. Biuro działa od poniedziałku do piątku, w godzinach 10:00–18:00. Wizytę rezerwuj dopiero po wysłaniu formularza i skompletowaniu dokumentów – inaczej spotkanie nie ruszy dalej.',
    },
    { type: 'h2', text: 'Krok 4: wypis z licencji i identyfikator' },
    {
      type: 'p',
      text: 'Kierowca taxi potrzebuje wypisu z licencji i identyfikatora. Nasze biuro obsługi pomaga skompletować dokumenty i przeprowadza Cię przez cały proces, żebyś mógł zacząć pracę jak najszybciej.',
    },
    { type: 'h2', text: 'Krok 5: rejestracja w aplikacjach i weryfikacja' },
    {
      type: 'p',
      text: 'Następnie zakładasz konto na wybranych platformach (Uber, Bolt, FreeNow) i przechodzisz weryfikację w biurach poszczególnych platform. Możesz pracować na kilku platformach jednocześnie, co zwiększa liczbę zleceń, a my przygotujemy Cię do pracy z każdą z nich.',
    },
    { type: 'h2', text: 'Samochód: własny czy z wynajmu?' },
    {
      type: 'p',
      text: 'Własne auto musi spełniać wymogi platform. W Warszawie Uber akceptuje samochody z 2005 roku lub nowsze, Bolt – z 2005, a FreeNow – z 2007. Do tego potrzebna jest pieczątka z przeglądu taxi w dowodzie rejestracyjnym oraz ważny wypis z licencji taxi partnera. Jeśli nie masz auta lub Twoje nie spełnia wymogów, możesz wynająć nowoczesny samochód z floty Drago Partner – zaznaczasz to w formularzu.',
    },
    { type: 'h2', text: 'Co przyspiesza start' },
    {
      type: 'list',
      items: [
        'komplet dokumentów już na pierwszym spotkaniu (oryginały i kopie),',
        'świeże zaświadczenia o niekaralności (do 30 dni) z tłumaczeniem przysięgłym,',
        'samochód spełniający wymogi platform albo decyzja o wynajmie od razu w formularzu,',
        'szybki kontakt z biurem, gdy zadzwonimy lub napiszemy z pytaniem o brakujący dokument.',
      ],
    },
  ],
  related: [
    'wymogi-prawne-kierowca-taxi-polska',
    'zarobki-kierowcy-uber-bolt-warszawa',
  ],
  faq: [
    {
      question: 'Czy muszę znać język polski, aby zacząć pracę?',
      answer:
        'Język polski nie jest obowiązkowy, ale zalecamy znać podstawy, żeby łatwiej porozumiewać się z klientami.',
    },
    {
      question: 'Czy mogę pracować jednocześnie na kilku platformach?',
      answer:
        'Tak. Możesz pracować na wielu platformach jednocześnie, co pozwala zwiększyć zarobki. Przygotujemy Cię do pracy z każdą z nich.',
    },
    {
      question: 'Czy muszę mieć własny samochód?',
      answer:
        'Nie. Możesz jechać własnym autem spełniającym wymogi platform albo wynająć samochód z floty Drago Partner. Wybór zaznaczasz w formularzu zgłoszeniowym.',
    },
  ],
}
