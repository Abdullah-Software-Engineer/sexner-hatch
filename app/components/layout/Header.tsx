'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAVIGATION_LINKS, SITE_CONFIG } from '@/lib/constants'
import { cn, throttle } from '@/lib/utils'
import PhoneButton from '../ui/PhoneButton'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 50)
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        'fixed left-1/2 -translate-x-1/2 z-[100] bg-primary transition-all duration-300',
        'w-[calc(100%-24px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[1470px] lg:max-w-[calc(100%-80px)] xl:max-w-[calc(100%-140px)]',
        'rounded-2xl sm:rounded-3xl lg:rounded-[60px]',
        isScrolled ? 'top-2 sm:top-[10px] lg:top-[10px]' : 'top-3 sm:top-5 lg:top-[30px]'
      )}
      role="banner"
    >
      <div className="w-full">
        <div className="max-w-[1390px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-10 py-2 sm:py-2.5 lg:py-3 xl:py-3 min-h-[56px] sm:min-h-[60px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0"
              aria-label={`${SITE_CONFIG.name} Home`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/Home/header/sexner-white.png"
                alt={SITE_CONFIG.name}
                width={140}
                height={50}
                priority
                className="h-8 w-auto sm:h-9 lg:h-[50px] lg:w-[140px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center"
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

            {/* Desktop Phone + Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:block lg:block">
                <PhoneButton size="md" />
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen((o) => !o)}
                className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-secondary aria-expanded={isMenuOpen}"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-controls="mobile-nav"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay - above header so it covers page */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'lg:hidden fixed inset-0 z-[101] bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* Mobile menu panel */}
      <div
        className={cn(
          'lg:hidden fixed left-4 right-4 z-[102] bg-primary rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-out',
          isMenuOpen ? 'top-[72px] sm:top-[76px] opacity-100 visible' : 'top-[60px] opacity-0 invisible -translate-y-2'
        )}
      >
        <nav className="flex flex-col py-4" aria-label="Mobile navigation">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-poppins text-base sm:text-lg py-3 px-5 hover:bg-white/10 hover:text-secondary transition-colors border-b border-white/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="p-4 pt-2 sm:hidden">
            <PhoneButton size="md" className="w-full justify-center" />
          </div>
        </nav>
      </div>
    </header>
  )
}
