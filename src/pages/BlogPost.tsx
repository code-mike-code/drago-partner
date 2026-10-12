import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArticleBody } from '@/components/blog/ArticleBody'
import { CTAButton } from '@/components/ui/CTAButton'
import NotFound from '@/pages/NotFound'
import { getArticle } from '@/content/blog'
import { SITE_URL, formatDate, headingId } from '@/content/blog/utils'

export default function BlogPost() {
  const { slug = '' } = useParams()
  const { t, language, setLanguage } = useLanguage()
  const article = getArticle(slug)
  const articleLang = article?.lang

  useEffect(() => {
    if (articleLang) setLanguage(articleLang)
  }, [articleLang, setLanguage])

  if (!article) return <NotFound />

  const url = `${SITE_URL}/blog/${article.slug}/`
  const imageUrl = article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`
  const pageTitle = `${article.title} | Drago Partner`
  const ogLocale = article.lang === 'en' ? 'en_GB' : 'pl_PL'
  const h2s = article.blocks.flatMap((b) => (b.type === 'h2' ? [b.text] : []))
  const related = (article.related ?? []).flatMap((s) => {
    const r = getArticle(s)
    return r ? [r] : []
  })

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      image: imageUrl,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: article.lang,
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'Drago Partner', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'Drago Partner',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.webp` },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t('blog.breadcrumbHome'), item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  ]
  if (article.faq?.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:site_name" content="Drago Partner" />
        <meta property="article:published_time" content={article.publishedAt} />
        <meta property="article:modified_time" content={article.updatedAt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={imageUrl} />
        {jsonLd.map((block, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(block)}
          </script>
        ))}
      </Helmet>

      <Header />
      <main className="pt-16 bg-white">
        <article className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" lang={article.lang}>
            <nav aria-label="Breadcrumb" className="text-sm text-grey-mid mb-8 flex flex-wrap gap-2">
              <Link to="/" className="hover:text-dark transition-colors">
                {t('blog.breadcrumbHome')}
              </Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog/" className="hover:text-dark transition-colors">
                Blog
              </Link>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight tracking-tight">
              {article.title}
            </h1>
            <div className="w-16 h-1 bg-illuminating mt-8 mb-6" />
            <p className="text-sm text-grey-mid mb-10">
              {t('blog.published')}: {formatDate(article.publishedAt, language)}
              {article.updatedAt !== article.publishedAt &&
                ` · ${t('blog.updated')}: ${formatDate(article.updatedAt, language)}`}
              {` · ${article.readingMinutes} ${t('blog.minutes')}`}
            </p>

            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full aspect-[16/9] object-cover mb-12"
            />

            {h2s.length >= 3 && (
              <nav aria-label={t('blog.tocHeading')} className="border border-gray-200 p-6 mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-grey-mid mb-4">
                  {t('blog.tocHeading')}
                </p>
                <ol className="space-y-2 list-decimal pl-5 text-dark">
                  {h2s.map((text) => (
                    <li key={text}>
                      <a href={`#${headingId(text)}`} className="hover:underline underline-offset-4">
                        {text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <ArticleBody blocks={article.blocks} />

            {article.faq && article.faq.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl sm:text-3xl font-black text-dark leading-tight tracking-tight mb-8">
                  {t('blog.faqHeading')}
                </h2>
                <div className="divide-y divide-gray-200 border-y border-gray-200">
                  {article.faq.map((f) => (
                    <div key={f.question} className="py-6">
                      <h3 className="text-lg font-bold text-dark mb-2">{f.question}</h3>
                      <p className="text-dark/80 leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <p className="text-sm text-grey-mid mt-12">{t('blog.disclaimer')}</p>
          </div>
        </article>

        <section className="bg-dark text-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight">
              {t('blog.ctaHeading')}
            </h2>
            <p className="text-grey-mid leading-relaxed mt-4 mb-8 max-w-xl">{t('blog.ctaText')}</p>
            <CTAButton href="/#contact-form" variant="yellow">
              {t('blog.ctaButton')}
            </CTAButton>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-black text-dark leading-tight tracking-tight mb-8">
                {t('blog.relatedHeading')}
              </h2>
              <ul className="divide-y divide-gray-200 border-y border-gray-200">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/blog/${r.slug}/`}
                      lang={r.lang}
                      className="block py-5 font-bold text-dark hover:text-grey-mid transition-colors"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
