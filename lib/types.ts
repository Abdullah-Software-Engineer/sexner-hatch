// ============================================
// Component Props Types
// ============================================

export interface NavLink {
  href: string
  label: string
  items?: NavLink[]
}

export interface PracticeArea {
  id: string
  title: string
  description: string
  slug: string
}

export interface Stat {
  id: string
  label: string
  value: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  ariaLabel?: string
}

export interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'default' | 'full'
}
