'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/lib/types'

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className,
  ariaLabel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-poppins font-medium transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-secondary text-white hover:-translate-y-0.5 hover:shadow-lg focus:ring-secondary',
    secondary: 'bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg focus:ring-primary',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px]',
    md: 'px-6 py-3 text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px]',
    lg: 'px-8 py-4 text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px]',
  }
  
  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )
  
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  )
}
