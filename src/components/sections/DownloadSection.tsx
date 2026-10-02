import { Wallet, Car, Phone, Gift } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

const PORTAL_URL = 'https://portal.dragopartner.pl/login'
const APP_STORE_URL = 'https://apps.apple.com/app/id6814448060'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=pl.dragofleet.app'

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.63c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.1 8.79.73 1.06 1.6 2.25 2.74 2.21 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.15.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.3-.88-2.32-3.54zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.65-1.05 1.69-.92 2.68.97.08 1.96-.49 2.56-1.23z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path fill="#00D7FE" d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.7-9.7z" />
      <path fill="#00F076" d="M16.5 15.2l-3.2-3.2 3.2-3.2 3.9 2.2c1.1.6 1.1 1.6 0 2.2z" />
      <path fill="#FF3A44" d="M16.5 15.2L13.3 12 3.6 21.7c.4.4.9.4 1.6.1z" />
      <path fill="#FFD500" d="M16.5 8.8L5.2 2.2c-.7-.4-1.2-.3-1.6.1L13.3 12z" />
    </svg>
  )
}

export function DownloadSection() {
  const { t } = useLanguage()

  const features = [
    { icon: Wallet, key: 'f1' },
    { icon: Car, key: 'f2' },
    { icon: Phone, key: 'f3' },
    { icon: Gift, key: 'f4' },
  ]

  const stores = [
    { href: APP_STORE_URL, icon: <AppleIcon />, label: t('download.appStore'), name: t('download.appStoreName') },
    { href: PLAY_STORE_URL, icon: <PlayIcon />, label: t('download.googlePlay'), name: t('download.googlePlayName') },
  ]

  return (
    <section id="download" className="py-24 md:py-32 lg:py-40 bg-ghost-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info column */}
          <div>
            <Reveal>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-dark mb-6 border border-dark/20 px-3 py-1">
                {t('download.badge')}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tight mb-6">
                {t('download.heading')}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-grey-mid text-lg leading-relaxed mb-10 max-w-xl">
                {t('download.subheading')}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-xs font-semibold uppercase tracking-widest text-dark mb-4">
                {t('download.getIt')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                {stores.map(({ href, icon, label, name }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-dark text-white px-5 py-3 min-h-[56px] hover:bg-grey-mid transition-colors duration-200"
                  >
                    {icon}
                    <span className="flex flex-col leading-tight text-left">
                      <span className="text-[11px] text-white/70">{label}</span>
                      <span className="text-lg font-bold">{name}</span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={380}>
              <p className="text-sm text-grey-mid mb-3">{t('download.portalNote')}</p>
              <CTAButton href={PORTAL_URL} external variant="yellow">
                {t('hero.ctaPortal')}
              </CTAButton>
            </Reveal>
          </div>

          {/* Features column */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-dark/10 self-center border border-dark/10">
            {features.map(({ icon: Icon, key }, index) => (
              <Reveal key={key} delay={150 + index * 90}>
                <li className="bg-white p-6 sm:p-8 h-full">
                  <div className="w-10 h-10 flex items-center justify-center bg-illuminating mb-5">
                    <Icon size={18} className="text-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{t(`download.${key}.title`)}</h3>
                  <p className="text-sm text-grey-mid leading-relaxed">{t(`download.${key}.text`)}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
