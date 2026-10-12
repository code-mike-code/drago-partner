const ROOT_PLACEHOLDER = '<div id="root"></div>'

export function injectPage(template, { html, head, lang }) {
  if (!template.includes('</head>')) throw new Error('template has no </head>')
  if (!template.includes(ROOT_PLACEHOLDER)) throw new Error('template has no empty #root')

  return template
    .replace(/<html lang="[^"]*"/, () => `<html lang="${lang}"`)
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta name="(?:description|keywords|twitter:[^"]*)"[^>]*>\s*/g, '')
    .replace(/<meta property="og:[^"]*"[^>]*>\s*/g, '')
    .replace(/<link rel="canonical"[^>]*>\s*/g, '')
    .replace('</head>', () => `  ${head}\n</head>`)
    .replace(ROOT_PLACEHOLDER, () => `<div id="root">${html}</div>`)
}

export function routeToFile(route) {
  return `${route.replace(/^\/+|\/+$/g, '')}/index.html`
}

export function addToSitemap(xml, entries) {
  if (!xml.includes('</urlset>')) throw new Error('sitemap has no </urlset>')
  const block = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>\n`,
    )
    .join('\n')
  return xml.replace('</urlset>', () => `${block}\n</urlset>`)
}

export function addToLlms(txt, items) {
  const lines = items.map((a) => `- [${a.title}](${a.url}): ${a.description}`)
  return `${txt.trimEnd()}\n\n## Blog\n\n${lines.join('\n')}\n`
}
