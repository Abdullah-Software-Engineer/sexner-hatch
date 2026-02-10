'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, useState, useEffect, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Parse stat value like "30+" or "20,000+" into number and suffix
function parseCounterValue(value: string): { end: number; suffix: string } {
  const match = value.match(/^([\d,]+)(.*)$/)
  if (!match) return { end: 0, suffix: value }
  const numStr = match[1].replace(/,/g, '')
  return { end: parseInt(numStr, 10) || 0, suffix: match[2] }
}

type AnimatedCounterProps = {
  value: string
  className?: string
  duration?: number
  amount?: number
}

export function AnimatedCounter({
  value,
  className,
  duration = 1500,
  amount = 0.2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount })
  const { end, suffix } = parseCounterValue(value)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime: number
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
    const animate = (time: number) => {
      if (!startTime) startTime = time
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuart(progress)
      setDisplay(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={cn(className)}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

const defaultFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
  },
}

type FadeUpProps = {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}

export function FadeUp({ children, className, delay = 0, amount = 0.2 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={defaultFadeUpVariants}
      custom={delay}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

type StaggerChildrenProps = {
  children: ReactNode
  className?: string
  stagger?: number
  amount?: number
}

export function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  amount = 0.1,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.05,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
