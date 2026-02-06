'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAVIGATION_LINKS, SITE_CONFIG } from '@/lib/constants'
import { cn, throttle } from '@/lib/utils'
import PhoneButton from '../ui/PhoneButton'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 50)
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-1/2 -translate-x-1/2 w-[1470px] max-w-[calc(100%-140px)] z-[100] bg-primary rounded-[60px] transition-all duration-300',
        isScrolled ? 'top-[10px]' : 'top-[30px]'
      )}
      role="banner"
    >
      <div className="w-full">
        <div className="max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-10 py-2 lg:py-3 xl:py-3">
            {/* Logo */}
            <Link
              href="/"
              className=""
              aria-label={`${SITE_CONFIG.name} Home`}
            >
              <Image
                src="/Home/header/sexner-white.png"
                alt={SITE_CONFIG.name}
                width={140}
                height={50}
                priority
              />
            </Link>

            {/* Navigation */}
            <nav
              className="hidden lg:flex items-center gap-8 flex-1 justify-center"
              aria-label="Main navigation"
            >
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-[15px] lg:text-base font-poppins hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Phone Button */}
            <PhoneButton size="md" />
          </div>
        </div>
      </div>
    </header>
  )
}
