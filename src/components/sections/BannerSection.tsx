import './BannerSection.css'

import uberLogo from '@/assets/brand-logo/uber.png'
import boltLogo from '@/assets/brand-logo/bolt.png'
import freenowLogo from '@/assets/brand-logo/freenow.png'
import uberFoodsLogo from '@/assets/brand-logo/uber-foods.png'
import boltFoodLogo from '@/assets/brand-logo/bolt-food.png'

const PARTNERS = [
  { id: 'uber',     src: uberLogo,      alt: 'Uber' },
  { id: 'bolt',     src: boltLogo,      alt: 'Bolt' },
  { id: 'freenow',  src: freenowLogo,   alt: 'FREE NOW' },
  { id: 'ubereats', src: uberFoodsLogo, alt: 'Uber Eats' },
  { id: 'boltfood', src: boltFoodLogo,  alt: 'Bolt Food' },
]

// 4 copies → animation moves -50% = exactly 2 sets.
// At reset point (−50%) the visible content is identical to position 0 → seamless loop.
// 4 copies ensures there are always enough items to fill any viewport width.
const TRACK = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS]

export function BannerSection() {
  return (
    <section
      aria-label="Platformy partnerskie"
      className="bg-white py-5 overflow-hidden"
    >
      <div className="marquee-track" aria-hidden="true">
        {TRACK.map(({ id, src, alt }, i) => (
          <div key={`${id}-${i}`} className="flex items-center shrink-0 px-10">
            <img
              src={src}
              alt={alt}
              className="h-32 w-auto object-contain select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
