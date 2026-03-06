import './BannerSection.css'

function Lightning() {
  return (
    <svg viewBox="0 0 10 16" fill="currentColor" className="h-4 w-auto shrink-0" aria-hidden="true">
      <path d="M6 0L0 9h4.5L3 16L10 7H5.5L6 0Z" />
    </svg>
  )
}

const PARTNERS = [
  {
    id: 'uber',
    content: (
      <span className="text-white font-black text-xl tracking-tight whitespace-nowrap">
        Uber
      </span>
    ),
  },
  {
    id: 'bolt',
    content: (
      <span className="flex items-center gap-1.5 text-white font-black text-xl tracking-tight whitespace-nowrap">
        <Lightning />
        Bolt
      </span>
    ),
  },
  {
    id: 'freenow',
    content: (
      <span className="text-white font-black text-xl tracking-tight whitespace-nowrap">
        FREE NOW
      </span>
    ),
  },
  {
    id: 'ubereats',
    content: (
      <span className="text-white text-xl tracking-tight whitespace-nowrap">
        <strong className="font-black">Uber</strong>
        <span className="font-normal opacity-75"> Eats</span>
      </span>
    ),
  },
  {
    id: 'bolteats',
    content: (
      <span className="flex items-center gap-1.5 text-white text-xl tracking-tight whitespace-nowrap">
        <Lightning />
        <span>
          <strong className="font-black">Bolt</strong>
          <span className="font-normal opacity-75"> Eats</span>
        </span>
      </span>
    ),
  },
]

const TRACK = [...PARTNERS, ...PARTNERS]

export function BannerSection() {
  return (
    <section aria-label="Platformy partnerskie" className="bg-grey-mid py-5 overflow-hidden">
      <div className="marquee-track gap-12" aria-hidden="true">
        {TRACK.map(({ id, content }, i) => (
          <div key={`${id}-${i}`} className="flex items-center gap-12 shrink-0">
            <span className="opacity-80 hover:opacity-100 transition-opacity duration-200">
              {content}
            </span>
            <span className="block w-px h-4 bg-white/25 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  )
}
