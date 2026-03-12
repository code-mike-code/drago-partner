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
        <title>Drago Partner – {t('footer.tagline')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href="https://dragopartner.pl/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dragopartner.pl/" />
        <meta property="og:title" content={`Drago Partner – ${t('footer.tagline')}`} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://dragopartner.pl/og-image.jpg" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Drago Partner" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Drago Partner – ${t('footer.tagline')}`} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="https://dragopartner.pl/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Drago Partner",
          "description": "Partner flotowy Uber, Bolt i FreeNow w Warszawie. Wynajem aut, licencje taxi, szkolenia i wsparcie kierowców.",
          "url": "https://dragopartner.pl",
          "telephone": "+48790780827",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Modlińska 310/312 lok. 2",
            "addressLocality": "Warszawa",
            "postalCode": "03-152",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.3102,
            "longitude": 20.9947
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "sameAs": [
            "https://www.instagram.com/dragopartnertaxi",
            "https://www.facebook.com/share/1CYoKHcnMd/"
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
