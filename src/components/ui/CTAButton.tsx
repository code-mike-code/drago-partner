import { cn } from '@/lib/utils'
import './CTAButton.css'

interface CTAButtonProps {
  href?: string
  external?: boolean
  onClick?: React.MouseEventHandler
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'yellow' | 'dark' | 'grey'
  size?: 'sm' | 'md'
  className?: string
  children: React.ReactNode
}

export function CTAButton({
  href,
  external,
  onClick,
  type = 'button',
  disabled,
  variant = 'yellow',
  size = 'md',
  className,
  children,
}: CTAButtonProps) {
  const classes = cn('cta-btn', `cta-btn--${variant}`, `cta-btn--${size}`, className)

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
