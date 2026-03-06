import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/hooks/useLanguage'
import logoDark from '@/assets/logo/logo-inline-dark.png'

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('footer.legal.privacy')} – Drago Partner</title>
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
              {t('footer.legal.privacy')}
            </h1>
            <div className="text-sm text-grey-mid space-y-6 leading-relaxed">
              <p>
                Administratorem danych osobowych jest Drago Partner.
                Dane są przetwarzane zgodnie z RODO w celach rekrutacyjnych.
              </p>
              <p>
                Więcej informacji zostanie dodanych wkrótce.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
