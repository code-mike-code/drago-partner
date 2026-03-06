import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage, type Language } from '@/hooks/useLanguage'
import { cn } from '@/lib/utils'

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'uk', flag: '🇺🇦', label: 'Українська' },
  { code: 'sr', flag: '🇷🇸', label: 'Srpski' },
  { code: 'ge', flag: '🇬🇪', label: 'ქართული' },
]

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = LANGUAGES.find((l) => l.code === language)!

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-xs font-semibold text-grey-mid hover:text-dark transition-colors duration-200 min-h-[44px] px-1"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <Globe size={15} strokeWidth={1.75} />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown
          size={12}
          strokeWidth={2}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-100 shadow-lg z-50 py-1"
        >
          {LANGUAGES.map(({ code, flag, label }) => (
            <button
              key={code}
              role="option"
              aria-selected={language === code}
              onClick={() => { setLanguage(code); setOpen(false) }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150',
                language === code
                  ? 'text-dark font-semibold bg-gray-50'
                  : 'text-grey-mid hover:text-dark hover:bg-gray-50',
              )}
            >
              <span className="text-base leading-none">{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
