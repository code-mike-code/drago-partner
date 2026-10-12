import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import type { Article } from '@/content/blog/types'

export function ArticleCard({ article }: { article: Article }) {
  const { t } = useLanguage()

  return (
    <Link
      to={`/blog/${article.slug}/`}
      className="group bg-white border border-gray-200 flex flex-col h-full transition-[box-shadow,transform] duration-200 hover:shadow-[-4px_4px_0px_0px_#000] hover:-translate-y-2"
    >
      <div className="aspect-[16/10] overflow-hidden bg-ghost-white">
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 lg:p-8 flex flex-col flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-grey-mid mb-3">
          {article.readingMinutes} {t('blog.minutes')}
        </p>
        <h2 lang={article.lang} className="text-xl lg:text-2xl font-black text-dark leading-tight mb-3">
          {article.title}
        </h2>
        <p lang={article.lang} className="text-grey-mid leading-relaxed flex-1">
          {article.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-dark min-h-[44px]">
          {t('blog.readMore')}
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
