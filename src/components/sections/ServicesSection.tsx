import { useMemo } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Reveal } from '@/components/ui/Reveal'

export function ServicesSection() {
  const { t } = useLanguage()

  const items = useMemo(() => [
    {
      number: t('services.item1.number'),
      title: t('services.item1.title'),
      description: t('services.item1.description'),
    },
    {
      number: t('services.item2.number'),
      title: t('services.item2.title'),
      description: t('services.item2.description'),
    },
    {
      number: t('services.item3.number'),
      title: t('services.item3.title'),
      description: t('services.item3.description'),
    },
    {
      number: t('services.item4.number'),
      title: t('services.item4.title'),
      description: t('services.item4.description'),
    },
    {
      number: t('services.item5.number'),
      title: t('services.item5.title'),
      description: t('services.item5.description'),
    },
  ], [t])

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-ghost-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-black text-dark leading-none tracking-tight mb-4">
              {t('services.heading')}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-base text-grey-mid">
              {t('services.subheading')}
            </p>
          </Reveal>
        </div>

        {/* Numbered items — wave stagger */}
        <div className="border-t border-gray-200">
          {items.map((item, index) => (
            <Reveal key={item.number} delay={index * 90}>
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-12 py-10 border-b border-gray-200">
                <div>
                  <span className="text-4xl font-black text-illuminating leading-none">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-grey-mid leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Promo blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-20">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-black text-dark leading-tight mb-4">
              {t('services.promo1.heading')}
            </h3>
            <p className="text-grey-mid leading-relaxed">
              {t('services.promo1.text')}
            </p>
          </Reveal>
          <Reveal delay={160} className="lg:text-right">
            <h3 className="text-2xl sm:text-3xl font-black text-dark leading-tight mb-4">
              {t('services.promo2.heading')}
            </h3>
            <p className="text-grey-mid leading-relaxed">
              {t('services.promo2.text')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
