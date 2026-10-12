import { test } from 'node:test'
import assert from 'node:assert/strict'
import { injectPage, routeToFile, addToSitemap, addToLlms } from './prerender-utils.mjs'

const TEMPLATE = `<!doctype html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <title>Home</title>
  <meta name="description" content="home desc" />
  <meta name="keywords" content="a,b" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://dragopartner.pl/" />
  <meta property="og:title" content="Home" />
  <meta name="twitter:title" content="Home" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index.js"></script>
</body>
</html>`

test('injectPage replaces page-specific head tags, keeps the rest', () => {
  const out = injectPage(TEMPLATE, {
    html: '<h1>Hi</h1>',
    head: '<title>Art</title><link rel="canonical" href="https://dragopartner.pl/blog/x/" />',
    lang: 'pl',
  })
  assert.equal(out.match(/<title>/g).length, 1)
  assert.match(out, /<title>Art<\/title>/)
  assert.doesNotMatch(out, /home desc/)
  assert.doesNotMatch(out, /og:title" content="Home"/)
  assert.match(out, /<meta name="robots"/)
  assert.match(out, /<meta charset="UTF-8" \/>/)
  assert.match(out, /<div id="root"><h1>Hi<\/h1><\/div>/)
  assert.match(out, /<script type="module" src="\/assets\/index.js">/)
})

test('injectPage sets html lang', () => {
  const out = injectPage(TEMPLATE, { html: 'x', head: '', lang: 'en' })
  assert.match(out, /<html lang="en">/)
})

test('injectPage is safe for $-patterns in html and head', () => {
  const out = injectPage(TEMPLATE, { html: 'cost $& and $1 and $$', head: '<meta x="$&" />', lang: 'pl' })
  assert.ok(out.includes('<div id="root">cost $& and $1 and $$</div>'))
  assert.ok(out.includes('<meta x="$&" />'))
})

test('injectPage throws when the template has no empty root', () => {
  assert.throws(() =>
    injectPage('<html><head></head><body><div id="root">x</div></body></html>', { html: '', head: '', lang: 'pl' }),
  )
})

test('routeToFile maps routes to index.html paths', () => {
  assert.equal(routeToFile('/blog/'), 'blog/index.html')
  assert.equal(routeToFile('/blog/abc/'), 'blog/abc/index.html')
  assert.equal(routeToFile('/blog/abc'), 'blog/abc/index.html')
})

test('addToSitemap appends url entries before </urlset>', () => {
  const xml = '<?xml version="1.0"?>\n<urlset>\n  <url><loc>https://dragopartner.pl/</loc></url>\n</urlset>\n'
  const out = addToSitemap(xml, [
    { loc: 'https://dragopartner.pl/blog/', lastmod: '2026-10-12', changefreq: 'weekly', priority: '0.8' },
  ])
  assert.match(out, /<loc>https:\/\/dragopartner\.pl\/blog\/<\/loc>/)
  assert.match(out, /<lastmod>2026-10-12<\/lastmod>/)
  assert.ok(out.indexOf('/blog/') < out.indexOf('</urlset>'))
  assert.ok(out.indexOf('https://dragopartner.pl/</loc>') < out.indexOf('/blog/'))
})

test('addToLlms appends a Blog section', () => {
  const out = addToLlms('# Drago\n', [{ title: 'T', description: 'D', url: 'https://dragopartner.pl/blog/t/' }])
  assert.match(out, /## Blog/)
  assert.match(out, /- \[T\]\(https:\/\/dragopartner\.pl\/blog\/t\/\): D/)
})
