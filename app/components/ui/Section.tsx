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
      className={cn('py-[60px] md:py-[80px] xl:py-[100px]', className)}
    >
      {children}
    </section>
  )
}
