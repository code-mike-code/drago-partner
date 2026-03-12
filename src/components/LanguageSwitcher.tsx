import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage, type Language } from '@/hooks/useLanguage'
import { cn } from '@/lib/utils'

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'ua', flag: '🇺🇦', label: 'Українська' },
  { code: 'sr', flag: '🇷🇸', label: 'Srpski' },
  { code: 'gr', flag: '🇬🇪', label: 'ქართული' },
]

interface LanguageSwitcherProps {
  className?: string
  dropdownAlign?: 'left' | 'right'
  dropdownLayout?: 'list' | 'grid'
}

export function LanguageSwitcher({ className, dropdownAlign = 'right', dropdownLayout = 'list' }: LanguageSwitcherProps) {
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
          className={cn(
            'absolute top-full mt-1 bg-white border border-gray-100 shadow-lg z-50',
            dropdownAlign === 'right' ? 'right-0' : 'left-0',
            dropdownLayout === 'grid' ? 'grid grid-cols-3 p-1 w-40' : 'w-44 py-1',
          )}
        >
          {LANGUAGES.map(({ code, flag }) => (
            <button
              key={code}
              role="option"
              aria-selected={language === code}
              onClick={() => { setLanguage(code); setOpen(false) }}
              className={cn(
                'flex items-center transition-colors duration-150',
                dropdownLayout === 'grid'
                  ? cn(
                      'flex-col gap-1 p-2 text-xs font-semibold justify-center',
                      language === code
                        ? 'text-dark bg-gray-50'
                        : 'text-grey-mid hover:text-dark hover:bg-gray-50',
                    )
                  : cn(
                      'w-full gap-3 px-4 py-2.5 text-sm',
                      language === code
                        ? 'text-dark font-semibold bg-gray-50'
                        : 'text-grey-mid hover:text-dark hover:bg-gray-50',
                    ),
              )}
            >
              <span className="text-base leading-none">{flag}</span>
              <span>{code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
