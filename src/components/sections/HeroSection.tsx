import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { WaveText } from '@/components/ui/WaveText'
import { Reveal } from '@/components/ui/Reveal'
import { BookingModal } from '@/components/modals/BookingModal'
import heroTaxi from '@/assets/img/hero-taxi.webp'
import heroTaxi1 from '@/assets/img/hero-taxi-1.webp'
import heroDelivery from '@/assets/img/hero-delivery.webp'

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
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-illuminating z-10" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Content column */}
          <div className="flex flex-col justify-center pl-6 sm:pl-14 lg:pl-20 pr-4 sm:pr-12 lg:pr-8 pt-24 pb-16 lg:py-32">
            <Reveal>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-dark mb-6 border border-dark/20 px-3 py-1 self-start">
                {t('hero.badge')}
              </span>
            </Reveal>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark leading-none tracking-tight mb-6">
              <WaveText text={t('hero.title')} onMount delay={100} charDelay={22} />
            </h1>

            <p className="text-lg sm:text-xl text-grey-mid max-w-xl leading-relaxed mb-10">
              <WaveText text={t('hero.subtitle')} onMount delay={150} charDelay={14} />
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Reveal delay={300}>
                <CTAButton href="#contact-form" variant="yellow">
                  {t('hero.ctaPrimary')}
                </CTAButton>
              </Reveal>

              {/*
              ── PRZYCISK REZERWACJI WIZYTY (Monday CRM) ─────────────────────
              Odkomentuj gdy VITE_MONDAY_BOOKING_URL zostanie skonfigurowany
              w pliku .env i przetestowany z kalendarzem Monday CRM.
              Patrz instrukcja w: src/components/modals/BookingModal.tsx
              ──────────────────────────────────────────────────────────────── */}
              {/* <Reveal delay={420}>
                <CTAButton onClick={() => setModalOpen(true)} variant="dark">
                  {t('contact.ctaSecondary')}
                </CTAButton>
              </Reveal> */}
            </div>
          </div>

          {/* Carousel column */}
          <Reveal variant="right" className="hidden lg:flex">
            <ImageCarousel
              slides={SLIDES}
              imgClassName="object-cover py-24 px-12"
              className="h-full w-full"
              eagerFirst
            />
          </Reveal>
        </div>
      </section>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
