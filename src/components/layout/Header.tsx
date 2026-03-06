import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from '@/components/NavLink'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { CTAButton } from '@/components/ui/CTAButton'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/lib/utils'
import logoDark from '@/assets/logo/logo-inline-dark.png'

export function Header() {
  const { t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logoDark} alt="Drago Partner" className="h-14 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <CTAButton href="#contact-form" variant="yellow" size="sm">
              {t('nav.cta')}
            </CTAButton>
            <a
              href="#"
              aria-label="Instagram"
              className="text-grey-mid hover:text-dark transition-colors duration-200 min-h-[44px] flex items-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-grey-mid hover:text-dark transition-colors duration-200 min-h-[44px] flex items-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-dark"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-screen' : 'max-h-0',
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-base py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <LanguageSwitcher className="mt-2" />
          <CTAButton
            href="#contact-form"
            onClick={() => setMobileOpen(false)}
            variant="yellow"
            size="sm"
            className="w-full"
          >
            {t('nav.cta')}
          </CTAButton>
        </div>
      </div>
    </header>
  )
}
