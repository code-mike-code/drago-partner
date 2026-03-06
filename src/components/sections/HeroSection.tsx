import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { BookingModal } from '@/components/modals/BookingModal'
import heroTaxi from '@/assets/img/hero-taxi.png'
import heroTaxi1 from '@/assets/img/hero-taxi-1.png'
import heroDelivery from '@/assets/img/hero-delivery.png'

const SLIDES = [
  { src: heroTaxi, alt: 'Kierowca taxi' },
  { src: heroTaxi1, alt: 'Kierowca taxi' },
  { src: heroDelivery, alt: 'Kierowca dostawczy' },
]

export function HeroSection() {
  const { t } = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="hero" className="relative min-h-screen bg-white overflow-hidden">
        {/* Yellow accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-illuminating z-10" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Content column */}
          <div className="flex flex-col justify-center pl-8 sm:pl-14 lg:pl-20 pr-8 sm:pr-12 lg:pr-8 pt-24 pb-16 lg:py-32">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-dark mb-6 border border-dark/20 px-3 py-1 self-start">
              {t('hero.badge')}
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark leading-none tracking-tight mb-6">
              {t('hero.title')}
            </h1>

            <p className="text-lg sm:text-xl text-grey-mid max-w-xl leading-relaxed mb-10">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="#contact-form" variant="yellow">
                {t('hero.ctaPrimary')}
              </CTAButton>
              <CTAButton onClick={() => setModalOpen(true)} variant="dark">
                  {t('contact.ctaSecondary')}
              </CTAButton>
            </div>
          </div>

          {/* Carousel column */}
          <ImageCarousel
            slides={SLIDES}
            imgClassName="object-cover py-24 px-12"
            className="hidden lg:block"
          />
        </div>
      </section>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
