import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArticleCard } from '@/components/blog/ArticleCard'
import { articles } from '@/content/blog'
import { SITE_URL } from '@/content/blog/utils'

export default function BlogIndex() {
  const { t } = useLanguage()
  const url = `${SITE_URL}/blog/`
  const title = t('blog.metaTitle')
  const description = t('blog.metaDescription')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url,
    inLanguage: 'pl',
    isPartOf: { '@type': 'WebSite', name: 'Drago Partner', url: SITE_URL },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/blog/${a.slug}/`,
        name: a.title,
      })),
    },
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Drago Partner" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />
      <main className="pt-16 bg-white">
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-grey-mid mb-4">
              {t('blog.badge')}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-none tracking-tight">
              {t('blog.heading')}
            </h1>
            <div className="w-16 h-1 bg-illuminating mt-8 mb-6" />
            <p className="text-lg text-grey-mid leading-relaxed max-w-2xl">{t('blog.subheading')}</p>
          </div>
        </section>

        <section className="pb-24 md:pb-32 lg:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
