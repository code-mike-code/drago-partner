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
      </Helmet>

      <Header />
      <main>
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
