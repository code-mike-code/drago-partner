import type { Article } from './types'
import image from '@/assets/img/hero-taxi.webp'

export const zarobkiKierowcy: Article = {
  slug: 'zarobki-kierowcy-uber-bolt-warszawa',
  lang: 'pl',
  title: 'Zarobki kierowcy taxi w Warszawie: Uber i Bolt w 2026 roku',
  description:
    'Ile realnie zarabia kierowca Ubera i Bolta w Warszawie? Z czego składa się zarobek, jakie są koszty i od czego zależy wynik na koniec miesiąca.',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  readingMinutes: 6,
  image,
  imageAlt: 'Kierowca taxi pracujący z Uber i Bolt w Warszawie',
  blocks: [
    {
      type: 'p',
      text: 'Pytanie „ile zarabia kierowca Ubera w Warszawie?” nie ma jednej odpowiedzi. Platformy nie publikują oficjalnych statystyk, a kwoty z ogłoszeń i forów bardzo się różnią. Poniżej wyjaśniamy, z czego składa się zarobek, jakie koszty go zmniejszają i na co patrzeć, zanim zdecydujesz się na współpracę. Szerszy rachunek znajdziesz w artykule [czy praca na taxi się opłaca](/blog/czy-praca-taxi-oplaca-sie-2026-warszawa/).',
    },
    { type: 'h2', text: 'Ile zarabia kierowca taxi w Warszawie' },
    {
      type: 'p',
      text: 'W ofercie Drago Partner podajemy, że średnie wynagrodzenie kierowcy taxi wynosi od 9 000 zł. To kwota informacyjna, a nie gwarancja: zależy od liczby przepracowanych godzin, dni tygodnia, wybranych platform i kosztów samochodu. Kierowca, który jeździ kilka godzin dziennie, zarobi inaczej niż ten, który pracuje na pełny etat.',
    },
    { type: 'h2', text: 'Z czego składa się zarobek' },
    {
      type: 'p',
      text: 'Kwota, którą klient płaci za kurs, nie trafia w całości do kierowcy. Od przychodu odejmujesz:',
    },
    {
      type: 'list',
      items: [
        'prowizję platformy (Uber, Bolt, FreeNow),',
        'część należną partnerowi flotowemu lub opłatę za wynajem samochodu,',
        'paliwo lub ładowanie,',
        'składki i podatki, zależnie od formy rozliczenia.',
      ],
    },
    {
      type: 'callout',
      text: 'Zanim podpiszesz umowę, zapytaj partnera flotowego o zasady rozliczeń na piśmie: jaki procent przychodu zostaje u Ciebie, kiedy są wypłaty i jakie koszty ponosisz sam.',
    },
    { type: 'h2', text: 'Uber, Bolt i FreeNow – co je różni' },
    {
      type: 'p',
      text: 'Uber wymaga, aby kierowca współpracował z partnerem flotowym, który ma firmę i licencje taxi w gminach, gdzie jeździsz, i który odpowiada za rozliczenie Twoich przychodów. Bolt opiera się na podobnym modelu. Wymogi dotyczące auta różnią się: w Warszawie Uber akceptuje samochody z 2005 roku lub nowsze, Bolt – z 2005, a FreeNow – z 2007.',
    },
    {
      type: 'p',
      text: 'Wysokość prowizji platform bywa przedmiotem sporów. Według przedstawiciela protestujących kierowców, cytowanego przez OKO.press w kwietniu 2025 roku, prowizja Bolta wynosi 31%, a Uber stosuje prowizję zmienną, średnio około 30%. Platformy nie podały własnych liczb, dlatego traktuj te dane jako deklarację jednej ze stron, a nie oficjalną stawkę.',
    },
    { type: 'h2', text: 'Przykład z protestu kierowców (2025)' },
    {
      type: 'p',
      text: 'W kwietniu 2025 roku kierowcy protestujący przeciwko warunkom w aplikacjach przedstawili wyliczenie dla kursu za 100 zł. Według ich oświadczenia:',
    },
    {
      type: 'list',
      items: [
        'platforma zatrzymuje około 50 zł,',
        'VAT to około 8 zł,',
        'składki ZUS to około 3 zł,',
        'paliwo to około 5 zł,',
        'wynajem auta (średnio 650 zł tygodniowo) to około 4 zł na kurs,',
        'kierowcy zostaje około 30 zł w najlepszym przypadku.',
      ],
    },
    {
      type: 'p',
      text: 'To wyliczenie jednej ze stron sporu, nie dane platform, ale dobrze pokazuje, dlaczego warunki rozliczeń są ważniejsze niż sama stawka za kurs.',
    },
    { type: 'h2', text: 'Od czego zależy wynik na koniec miesiąca' },
    {
      type: 'list',
      items: [
        'liczba godzin i pora dnia, w których jeździsz,',
        'liczba platform, na których pracujesz jednocześnie,',
        'koszt samochodu: własny, wynajem czy auto z floty,',
        'warunki rozliczeń u partnera flotowego,',
        'koszty paliwa i serwisu.',
      ],
    },
    { type: 'h2', text: 'Jak zwiększyć zarobki' },
    {
      type: 'list',
      items: [
        'Pracuj na kilku platformach jednocześnie – to dozwolone i zwiększa liczbę zleceń.',
        'Wybierz partnera flotowego z przejrzystymi zasadami rozliczeń.',
        'Kontroluj koszty auta i paliwa – to one najczęściej decydują o wyniku.',
        'Śledź zarobki ze wszystkich platform w jednym miejscu. W aplikacji Drago Fleet widzisz historię i bieżące rozliczenia z Ubera, Bolta i FreeNow.',
      ],
    },
  ],
  related: [
    'czy-praca-taxi-oplaca-sie-2026-warszawa',
    'zarobki-kuriera-uber-eats-bolt-food-warszawa',
    'jak-szybko-zaczac-prace-kierowca-taxi',
  ],
  faq: [
    {
      question: 'Ile zarabia kierowca Ubera w Warszawie?',
      answer:
        'Nie ma oficjalnych statystyk platform. Drago Partner podaje średnie wynagrodzenie kierowcy taxi od 9 000 zł, ale realny wynik zależy od godzin pracy, platform i kosztów samochodu.',
    },
    {
      question: 'Czy mogę jeździć w Uber i Bolt jednocześnie?',
      answer:
        'Tak. Możesz pracować na wielu platformach jednocześnie, co pozwala zwiększyć zarobki. Przygotujemy Cię do pracy z każdą z nich.',
    },
    {
      question: 'Czy muszę mieć własny samochód?',
      answer:
        'Nie. Możesz jechać własnym autem spełniającym wymogi platform albo wynająć samochód z floty Drago Partner.',
    },
  ],
}
