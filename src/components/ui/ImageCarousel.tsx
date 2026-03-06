import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Slide {
  src: string
  alt: string
}

interface ImageCarouselProps {
  slides: Slide[]
  interval?: number
  imgClassName?: string
  className?: string
}

export function ImageCarousel({
  slides,
  interval = 4500,
  imgClassName = 'object-cover',
  className,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [slides.length, interval])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className={cn('w-full h-full', imgClassName)}
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              'h-2 transition-all duration-300',
              i === current
                ? 'w-6 bg-illuminating'
                : 'w-2 bg-white/60 hover:bg-white',
            )}
          />
        ))}
      </div>
    </div>
  )
}
