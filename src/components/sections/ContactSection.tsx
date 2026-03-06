import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { BookingModal } from '@/components/modals/BookingModal'

export function ContactSection() {
  const { t } = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)

  const contactItems = [
    { icon: Phone, value: t('contact.info.phone') },
    { icon: Mail, value: t('contact.info.email') },
    { icon: MapPin, value: t('contact.info.address') },
    { icon: Clock, value: t('contact.info.hours') },
  ]

  return (
    <>
      <section
        id="contact"
        className="py-24 md:py-32 lg:py-40 bg-dark text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* CTA column */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tight mb-6">
                {t('contact.heading')}
              </h2>
              <p className="text-grey-mid text-lg mb-10">
                {t('contact.subheading')}
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                <CTAButton href="#contact-form" variant="yellow">
                  {t('contact.ctaPrimary')}
                </CTAButton>
                <button
                  onClick={() => setModalOpen(true)}
                  className="border border-white/30 text-white text-sm font-bold px-8 py-4 min-h-[44px] flex items-center justify-center hover:border-white/60 transition-colors duration-200"
                >
                  {t('contact.ctaSecondary')}
                </button>
              </div>
            </div>

            {/* Contact info column */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-6">
                {contactItems.map(({ icon: Icon, value }, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-white/5 shrink-0">
                      <Icon size={16} className="text-illuminating" />
                    </div>
                    <span className="text-grey-mid pt-2.5 text-sm">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
