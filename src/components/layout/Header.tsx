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

  const phone = t('contact.info.phone')

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logoDark} alt="Drago Partner" className="h-14 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 mt-2 tracking-wider">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="relative after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:bg-dark after:-translate-x-1/2 after:transition-[width] after:duration-300 hover:after:w-full"
              >
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

      {/* Mobile menu — full screen overlay */}
      <div
        className={cn(
          'md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-40',
          'flex flex-col overflow-y-auto',
          'transition-transform duration-300',
          mobileOpen ? 'translate-y-0' : '-translate-y-[calc(100%+64px)] pointer-events-none',
        )}
        style={{ height: 'calc(100svh - 64px)' }}
        aria-hidden={!mobileOpen}
      >
        {/* Nav links */}
        <nav className="flex-1 px-6 pt-8 pb-6">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline gap-4 py-4 border-b border-gray-100 text-3xl font-black text-dark hover:text-grey-mid"
                >
                  <span className="text-xl font-semibold text-grey-mid tracking-widest w-6 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom actions */}
        <div className="px-6 pb-8 mb-32 space-y-4">
          {/* CTA */}
          <CTAButton
            href="#contact-form"
            onClick={() => setMobileOpen(false)}
            variant="yellow"
            className="w-full"
          >
            {t('nav.cta')}
          </CTAButton>

          {/* Language + Phone */}
          <div className="flex items-center justify-between">
            <LanguageSwitcher dropdownAlign="left" dropdownLayout="grid" />
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-sm font-medium text-grey-mid hover:text-dark transition-colors duration-200 min-h-[44px] flex items-center"
            >
              {phone}
            </a>
          </div>

          {/* Social — separated by grey line */}
          <div className="border-t border-gray-100 pt-4 flex gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-grey-mid hover:text-dark transition-colors duration-200 min-h-[44px] flex items-center"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
