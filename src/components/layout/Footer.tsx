import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { NavLink } from '@/components/NavLink'
import { MapPopover } from '@/components/ui/MapPopover'
import logoLight from '@/assets/logo/logo-inline-light.png'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  const [mapOpen, setMapOpen] = useState(false)

  const phone = t('contact.info.phone')
  const email = t('contact.info.email')
  const address = t('contact.info.address')

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <>
      <footer className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/" className="inline-block mb-4">
                <img src={logoLight} alt="Drago Partner" className="h-20 w-auto object-contain" />
              </a>
              <p className="text-sm text-grey-mid leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-grey-mid mb-4">
                {t('footer.links.heading')}
              </p>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      className="text-sm text-grey-mid hover:text-white"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-grey-mid mb-4">
                {t('nav.contact')}
              </p>
              <ul className="space-y-3 text-sm text-grey-mid">
                <li className="flex items-start gap-2">
                  <Phone size={14} className="mt-0.5 shrink-0 text-illuminating" />
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={14} className="mt-0.5 shrink-0 text-illuminating" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-illuminating" />
                  <button
                    onClick={() => setMapOpen(true)}
                    className="text-left hover:text-white transition-colors duration-200"
                  >
                    {address}
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-grey-mid mb-4">
                Social
              </p>
              <div className="flex gap-5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-grey-mid hover:text-white transition-colors duration-200"
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
                  className="text-grey-mid hover:text-white transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-grey-mid">
            <p>{t('footer.copyright').replace('{year}', String(year))}</p>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                {t('footer.legal.privacy')}
              </Link>
              <Link
                to="/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                {t('footer.legal.terms')}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <MapPopover address={address} open={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  )
}
