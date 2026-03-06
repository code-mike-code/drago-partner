import { useLanguage } from '@/hooks/useLanguage'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import about1 from '@/assets/img/about-1.jpg'
import about2 from '@/assets/img/about-2.jpg'
import about3 from '@/assets/img/about-3.jpg'
import about4 from '@/assets/img/about-4.jpg'
import about5 from '@/assets/img/about-5.jpg'
import about6 from '@/assets/img/about-6.jpg'

const ABOUT_SLIDES = [
  { src: about1, alt: '' },
  { src: about2, alt: '' },
  { src: about3, alt: '' },
  { src: about4, alt: '' },
  { src: about5, alt: '' },
  { src: about6, alt: '' },
]

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { value: t('about.stat1.value'), label: t('about.stat1.label') },
    { value: t('about.stat2.value'), label: t('about.stat2.label') },
    { value: t('about.stat3.value'), label: t('about.stat3.label') },
  ]

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tight">
              {t('about.heading')}
            </h2>
          </div>
          <div>
            <p className="text-lg text-grey-mid leading-relaxed">
              {t('about.text')}
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-gray-100">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="py-10 sm:px-8 border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0"
            >
              <p className="text-4xl font-black text-dark mb-2">{stat.value}</p>
              <p className="text-sm text-grey-mid">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column layout: text + carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20">
          <div>
            <p className="text-lg text-grey-mid leading-relaxed">
              {t('about.desc')}
            </p>
          </div>
          <ImageCarousel
            slides={ABOUT_SLIDES}
            interval={5000}
            imgClassName="object-cover"
            className="h-80 lg:h-96"
          />
        </div>
      </div>
    </section>
  )
}
