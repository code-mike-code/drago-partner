import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Block } from '@/content/blog/types'
import { headingId } from '@/content/blog/utils'
import { cn } from '@/lib/utils'

const INLINE_RE = /\[([^\]]+)\]\(([^)]+)\)/g
const LINK_CLASS =
  'font-semibold text-dark underline decoration-illuminating decoration-2 underline-offset-4 hover:bg-illuminating transition-colors'

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(INLINE_RE)) {
    const index = m.index ?? 0
    const [whole, label, href] = m
    if (index > last) nodes.push(text.slice(last, index))
    if (href.startsWith('/') && !href.startsWith('/#')) {
      nodes.push(
        <Link key={index} to={href} className={LINK_CLASS}>
          {label}
        </Link>,
      )
    } else {
      const external = href.startsWith('http')
      nodes.push(
        <a
          key={index}
          href={href}
          className={LINK_CLASS}
          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {label}
        </a>,
      )
    }
    last = index + whole.length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                id={headingId(block.text)}
                className="scroll-mt-24 text-2xl sm:text-3xl font-black text-dark leading-tight tracking-tight mt-14 mb-5"
              >
                {block.text}
              </h2>
            )
          case 'p':
            return (
              <p key={i} className="text-lg leading-relaxed text-dark/80 mb-6">
                {renderInline(block.text)}
              </p>
            )
          case 'list': {
            const Tag = block.ordered ? 'ol' : 'ul'
            return (
              <Tag
                key={i}
                className={cn(
                  'pl-6 mb-6 space-y-2 text-lg leading-relaxed text-dark/80',
                  block.ordered ? 'list-decimal' : 'list-disc',
                )}
              >
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {renderInline(item)}
                  </li>
                ))}
              </Tag>
            )
          }
          case 'callout':
            return (
              <aside
                key={i}
                className="border-l-4 border-illuminating bg-ghost-white p-6 mb-8 text-base leading-relaxed text-dark"
              >
                {renderInline(block.text)}
              </aside>
            )
        }
      })}
    </div>
  )
}
