import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hash = href.startsWith('#') ? href : href.startsWith('/#') ? href.slice(1) : null
    if (hash && (href.startsWith('#') || window.location.pathname === '/')) {
      e.preventDefault()
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
      className={cn(
        'text-lg font-bold text-dark hover:text-grey-mid transition-colors duration-200',
        className,
      )}
    >
      {children}
    </a>
  )
}
