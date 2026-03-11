import { useEffect, useRef, useState } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

/**
 * Keeps the animation class always present so the element stays at the "from"
 * keyframe (opacity:0, translateY/scale) via fill-mode:both + paused state.
 * On scroll, we only flip play-state to "running" — no class blink possible.
 */
export function revealText(isVisible: boolean): string {
  return isVisible
    ? 'animate-slide-up [animation-play-state:running]'
    : 'animate-slide-up [animation-play-state:paused]'
}

export function revealImage(isVisible: boolean): string {
  return isVisible
    ? 'animate-scale-in [animation-play-state:running]'
    : 'animate-scale-in [animation-play-state:paused]'
}
