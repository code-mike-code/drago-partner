export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; text: string }

export interface ArticleFaq {
  question: string
  answer: string
}

export interface Article {
  slug: string
  lang: 'pl' | 'en'
  title: string
  description: string
  publishedAt: string // YYYY-MM-DD
  updatedAt: string // YYYY-MM-DD
  readingMinutes: number
  image: string
  imageAlt: string
  blocks: Block[]
  faq?: ArticleFaq[]
  related?: string[]
}
