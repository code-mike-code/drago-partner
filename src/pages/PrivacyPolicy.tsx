import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>{t('footer.legal.privacy')} – Drago Partner</title>
      </Helmet>

      <Header />
      <main className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link
            to="/"
            className="text-sm text-grey-mid hover:text-dark transition-colors mb-10 inline-block"
          >
            ← Powrót
          </Link>
          <h1 className="text-4xl font-black text-dark mb-8">
            {t('footer.legal.privacy')}
          </h1>
          <div className="prose prose-sm text-grey-mid space-y-6">
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
      <Footer />
    </>
  )
}
