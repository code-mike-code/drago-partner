import type { Article } from './types'
import { jakSzybkoZaczacPrace } from './jak-szybko-zaczac-prace-kierowca-taxi'

export const articles: Article[] = [jakSzybkoZaczacPrace]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
