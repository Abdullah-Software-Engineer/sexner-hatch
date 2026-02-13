'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: ReactNode
  featured?: boolean
}

const DefaultIcon = () => (
  <div className="w-12 h-12 shrink-0 rounded-lg bg-[#4a5568] flex items-center justify-center" aria-hidden>
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  </div>
)

export default function ServiceCard({ title, description, href, icon, featured }: ServiceCardProps) {
  const content = (
    <div className="flex gap-4">
      {icon ?? <DefaultIcon />}
      <div className="min-w-0 flex-1">
        <h3 className="font-libre font-bold text-[#374151] text-[20px] md:text-[20px] lg:text-[20px] xl:text-[20px] mb-2">
          {title}
        </h3>
        <p className="font-poppins text-[#4b5563] text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )

  return (
    <Link
      href={href}
      className="block p-4 md:p-5 rounded-xl border border-[#e5e7eb] bg-white hover:bg-[#CBA048] hover:border-[#CBA048] transition-colors no-underline focus:outline-none focus:ring-2 focus:ring-[#C8A24F] focus:ring-offset-2 focus:ring-offset-white"
    >
      {content}
    </Link>
  )
}
