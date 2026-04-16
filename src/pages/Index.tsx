import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { BannerSection } from '@/components/sections/BannerSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { WhatsAppWidget } from '@/components/ui/WhatsAppWidget'

export default function Index() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href="https://dragopartner.pl/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dragopartner.pl/" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://dragopartner.pl/og-image.jpg" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Drago Partner" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="https://dragopartner.pl/og-image.jpg" />

        {/* JSON-LD: EmploymentAgency + LocalBusiness */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["EmploymentAgency", "LocalBusiness"],
          "@id": "https://dragopartner.pl/#organization",
          "name": "Drago Partner",
          "description": "Drago Partner to sprawdzony partner flotowy z niemal 10-letnim doświadczeniem. Rekrutujemy i wspieramy kierowców taxi oraz kurierów współpracujących z Uber, Bolt, FreeNow, Uber Eats i Bolt Food w Warszawie.",
          "url": "https://dragopartner.pl",
          "logo": {
            "@type": "ImageObject",
            "url": "https://dragopartner.pl/logo.webp",
            "width": 300,
            "height": 80
          },
          "image": "https://dragopartner.pl/og-image.jpg",
          "telephone": "+48530181372",
          "email": "biuro@dragopartner.pl",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Modlińska 310/312 lok. 2",
            "addressLocality": "Warszawa",
            "postalCode": "03-152",
            "addressRegion": "Mazowieckie",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.3102,
            "longitude": 20.9947
          },
          "areaServed": [
            { "@type": "State", "name": "Mazowieckie" },
            { "@type": "Country", "name": "Polska" }
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.instagram.com/dragopartnertaxi",
            "https://www.facebook.com/share/1CYoKHcnMd/"
          ]
        })}</script>

        {/* JSON-LD: OfferCatalog */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Rekrutacja i wsparcie kierowców taxi i kurierów",
          "provider": {
            "@type": "Organization",
            "name": "Drago Partner",
            "@id": "https://dragopartner.pl/#organization"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Oferta Drago Partner",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Kierowca Taxi",
                "description": "Zostań kierowcą Uber, Bolt lub FreeNow w Warszawie z pełnym wsparciem Drago Partner. Pomożemy Ci uzyskać licencję taxi, skompletować dokumenty i szybko rozpocząć legalną pracę."
              },
              {
                "@type": "Offer",
                "name": "Kurier",
                "description": "Pracuj jako kurier Uber Eats lub Bolt Food w Warszawie – elastyczny grafik i atrakcyjne wynagrodzenie z pełnym wsparciem Drago Partner."
              },
              {
                "@type": "Offer",
                "name": "Wynajem samochodów",
                "description": "Wynajem samochodów dla kierowców Uber, Bolt i FreeNow w Warszawie z własnej, nowoczesnej floty Drago Partner."
              }
            ]
          }
        })}</script>

        {/* JSON-LD: BreadcrumbList */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Strona główna",
              "item": "https://dragopartner.pl/"
            }
          ]
        })}</script>

        {/* JSON-LD: FAQPage — pytania zsynchronizowane z FAQ widocznym na stronie */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Jakich dokumentów potrzebuję, aby pracować jako kierowca taxi w Polsce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Polskie prawo jazdy. Samochód osobowy z wypisem z licencji spełniającym wymagania poszczególnych platform. Komplet dokumentów: dowód osobisty lub paszport, polskie prawo jazdy, orzeczenie lekarskie i psychologiczne, zaświadczenie o niekaralności – polskie oraz kraju obywatelstwa (tłumaczenie przysięgłe), nie starsze niż 30 dni. Rejestracja konta na platformach i przejście weryfikacji w biurach poszczególnych platform."
              }
            },
            {
              "@type": "Question",
              "name": "Jak rozpocząć współpracę?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "1. Wypełnij formularz zgłoszeniowy, aby rozpocząć współpracę i nawiązać z nami kontakt. 2. Umów się na spotkanie w celu dostarczenia dokumentów – oryginały oraz kopie."
              }
            },
            {
              "@type": "Question",
              "name": "Wymagania dotyczące pojazdu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Uber: samochód z 2005 roku lub nowszy, zarejestrowany w Polsce, ważne ubezpieczenie i przegląd techniczny, pieczątka z przeglądu taxi, 4–5 drzwi, minimum 5 miejsc. Bolt: samochód z 2005 roku lub nowszy, zarejestrowany w Polsce, pieczątka z przeglądu taxi. FreeNow: samochód z 2007 roku lub nowszy, zarejestrowany w Polsce, pieczątka z przeglądu taxi."
              }
            },
            {
              "@type": "Question",
              "name": "Czy muszę znać język polski, aby rozpocząć pracę?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Język polski nie jest obowiązkowy, ale zalecamy znać podstawy języka dla lepszej komunikacji z klientami."
              }
            },
            {
              "@type": "Question",
              "name": "Jak wygląda proces uzyskania wypisu z licencji i identyfikatora?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Skontaktuj się z naszym biurem obsługi w celu skompletowania niezbędnych dokumentów. Pomożemy Ci przejść przez cały proces rejestracji, abyś mógł rozpocząć pracę jak najszybciej."
              }
            },
            {
              "@type": "Question",
              "name": "Czy mogę pracować jednocześnie na kilku platformach?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, możesz pracować na wielu platformach jednocześnie, co pozwoli Ci zwiększyć zarobki. Przygotujemy Cię do pracy z każdą platformą."
              }
            }
          ]
        })}</script>
      </Helmet>

      <Header />
      <main id="main-content">
        <HeroSection />
        <BannerSection />
        <AboutSection />
        <ContactFormSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
