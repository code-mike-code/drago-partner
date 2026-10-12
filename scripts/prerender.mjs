import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { injectPage, routeToFile, addToSitemap, addToLlms } from './lib/prerender-utils.mjs'

const DIST = 'dist'
const SITE = 'https://dragopartner.pl'

const ssr = await import(pathToFileURL(join(process.cwd(), 'dist-ssr', 'entry-server.js')).href)

const errors = ssr.validateArticles(ssr.articles)
if (errors.length) {
  console.error(`Blog content errors:\n${errors.map((e) => ` - ${e}`).join('\n')}`)
  process.exit(1)
}

const template = await readFile(join(DIST, 'index.html'), 'utf8')
const pages = [
  { route: '/blog/', lang: 'pl' },
  ...ssr.articles.map((a) => ({ route: `/blog/${a.slug}/`, lang: a.lang })),
]

for (const { route, lang } of pages) {
  const { html, head } = ssr.render(route, lang)
  const file = join(DIST, routeToFile(route))
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, injectPage(template, { html, head, lang }))
  console.log(`prerendered ${route}`)
}

const latest = ssr.articles.map((a) => a.updatedAt).sort().at(-1)
const sitemapPath = join(DIST, 'sitemap.xml')
const sitemap = await readFile(sitemapPath, 'utf8')
await writeFile(
  sitemapPath,
  addToSitemap(sitemap, [
    { loc: `${SITE}/blog/`, lastmod: latest, changefreq: 'weekly', priority: '0.8' },
    ...ssr.articles.map((a) => ({
      loc: `${SITE}/blog/${a.slug}/`,
      lastmod: a.updatedAt,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ]),
)

const llmsPath = join(DIST, 'llms.txt')
const llms = await readFile(llmsPath, 'utf8')
await writeFile(
  llmsPath,
  addToLlms(
    llms,
    ssr.articles.map((a) => ({ title: a.title, description: a.description, url: `${SITE}/blog/${a.slug}/` })),
  ),
)
console.log('sitemap.xml and llms.txt updated')
