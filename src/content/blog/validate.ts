import type { Article } from './types'
import { headingId } from './utils'

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const BLOG_LINK_RE = /\]\(\/blog\/([a-z0-9-]+)\/?\)/g

export function validateArticles(articles: Article[]): string[] {
  const errors: string[] = []
  const slugs = new Set(articles.map((a) => a.slug))
  const seen = new Set<string>()

  for (const a of articles) {
    const at = `[${a.slug}]`
    if (!SLUG_RE.test(a.slug)) errors.push(`${at} invalid slug`)
    if (seen.has(a.slug)) errors.push(`${at} duplicate slug`)
    seen.add(a.slug)

    if (a.title.length > 70) errors.push(`${at} title is ${a.title.length} chars (max 70)`)
    if (a.description.length < 70 || a.description.length > 160) {
      errors.push(`${at} description is ${a.description.length} chars (need 70-160)`)
    }
    if (!DATE_RE.test(a.publishedAt) || !DATE_RE.test(a.updatedAt)) {
      errors.push(`${at} dates must be YYYY-MM-DD`)
    } else if (a.updatedAt < a.publishedAt) {
      errors.push(`${at} updatedAt is before publishedAt`)
    }
    if (a.readingMinutes < 1) errors.push(`${at} readingMinutes must be >= 1`)
    if (!a.image || !a.imageAlt) errors.push(`${at} image and imageAlt are required`)

    const h2s = a.blocks.flatMap((b) => (b.type === 'h2' ? [b.text] : []))
    if (h2s.length < 3) errors.push(`${at} needs at least 3 h2 headings (has ${h2s.length})`)
    const ids = h2s.map(headingId)
    if (new Set(ids).size !== ids.length) errors.push(`${at} duplicate h2 ids`)
    if (ids.some((id) => id === '')) errors.push(`${at} h2 with empty id`)

    for (const rel of a.related ?? []) {
      if (rel === a.slug || !slugs.has(rel)) errors.push(`${at} invalid related slug "${rel}"`)
    }

    const texts = a.blocks.flatMap((b) => (b.type === 'list' ? b.items : [b.text]))
    for (const text of texts) {
      for (const m of text.matchAll(BLOG_LINK_RE)) {
        if (!slugs.has(m[1])) errors.push(`${at} link to unknown article "${m[1]}"`)
      }
    }

    ;(a.faq ?? []).forEach((f, i) => {
      if (!f.question.trim() || !f.answer.trim()) errors.push(`${at} faq[${i}] is empty`)
    })
  }
  return errors
}
