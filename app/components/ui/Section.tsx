import { cn } from '@/lib/utils'
import type { SectionProps } from '@/lib/types'

export default function Section({
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen py-[60px] md:py-[80px] xl:py-[100px] px-6 sm:px-10 md:px-12 lg:px-16',
        className
      )}
    >
      {children}
    </section>
  )
}
