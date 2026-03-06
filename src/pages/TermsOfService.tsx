import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/hooks/useLanguage'
import logoDark from '@/assets/logo/logo-inline-dark.png'

export default function TermsOfService() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('footer.legal.terms')} – Drago Partner</title>
      </Helmet>

      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="inline-block">
            <img src={logoDark} alt="Drago Partner" className="h-12 w-auto object-contain" />
          </a>
        </header>

        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-black text-dark mb-8">
              {t('footer.legal.terms')}
            </h1>
            <div className="text-sm text-grey-mid space-y-6 leading-relaxed">
              <p>
                Korzystanie z serwisu Drago Partner oznacza akceptację niniejszego regulaminu.
              </p>
              <p>
                Pełna treść regulaminu zostanie dodana wkrótce.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
