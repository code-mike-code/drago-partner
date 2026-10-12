import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import { LanguageProvider, type Language } from '@/hooks/useLanguage'
import BlogIndex from '@/pages/BlogIndex'
import BlogPost from '@/pages/BlogPost'

export { articles } from '@/content/blog'
export { validateArticles } from '@/content/blog/validate'

export function render(url: string, lang: Language): { html: string; head: string } {
  const helmetContext: { helmet?: HelmetServerState } = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <LanguageProvider initialLanguage={lang}>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </StaticRouter>
      </LanguageProvider>
    </HelmetProvider>,
  )
  const h = helmetContext.helmet
  if (!h) throw new Error('Helmet context was not populated')
  const head = [h.title, h.meta, h.link, h.script].map((part) => part.toString()).join('\n  ')
  return { html, head }
}
