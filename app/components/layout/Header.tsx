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
        'w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[1470px] lg:max-w-[calc(100%-64px)] xl:max-w-[calc(100%-140px)]',
        'rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[60px]',
        isScrolled ? 'top-2 sm:top-[10px] lg:top-[10px]' : 'top-2 sm:top-4 md:top-5 lg:top-[30px]'
      )}
      role="banner"
    >
      <div className="w-full">
        <div className="max-w-[1390px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-10 py-2 sm:py-2.5 lg:py-3 xl:py-3 min-h-[52px] sm:min-h-[60px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 min-w-0"
              aria-label={`${SITE_CONFIG.name} Home`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/home/header/sexner-white.png"
                alt={SITE_CONFIG.name}
                width={140}
                height={50}
                priority
                className="h-7 w-auto sm:h-9 md:h-10 lg:h-[50px] lg:w-[140px] max-w-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-1 justify-center"
              aria-label="Main navigation"
            >
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-white text-sm lg:text-[15px] xl:text-base font-poppins hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1 whitespace-nowrap"
                  >
                    {link.label}
                    {link.items && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.items && (
                    <div className="absolute left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-[#1A2633] rounded-lg shadow-xl overflow-hidden border border-white/10">
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-secondary transition-colors border-b border-white/5 last:border-0"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Phone + Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
              {/* Phone button - visible on tablet and desktop, hidden on mobile (shown in mobile menu) */}
              {/* Use smaller button on md screens, md size on lg+ */}
              <div className="hidden md:block lg:hidden flex-shrink-0">
                <PhoneButton size="sm" />
              </div>
              <div className="hidden lg:block flex-shrink-0">
                <PhoneButton size="md" />
              </div>
              {/* Mobile menu toggle button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen((o) => !o)}
                className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full text-white hover:bg-white/10 active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors flex-shrink-0"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-controls="mobile-nav"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
          'lg:hidden fixed inset-0 z-[101] bg-black/50 backdrop-blur-sm transition-opacity duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* Mobile menu panel */}
      <div
        className={cn(
          'lg:hidden fixed z-[102] bg-primary rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out',
          'left-2 right-2 sm:left-4 sm:right-4',
          isMenuOpen 
            ? 'top-[68px] sm:top-[76px] md:top-[80px] opacity-100 visible translate-y-0' 
            : 'top-[60px] opacity-0 invisible -translate-y-4'
        )}
      >
        <nav className="flex flex-col py-2 sm:py-4" aria-label="Mobile navigation">
          {NAVIGATION_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => !link.items && setIsMenuOpen(false)}
                className="block text-white font-poppins text-sm sm:text-base md:text-lg py-2.5 sm:py-3.5 px-4 sm:px-6 hover:bg-white/10 hover:text-secondary active:bg-white/15 transition-colors border-b border-white/10 last:border-0"
              >
                {link.label}
              </Link>
              {link.items && (
                <div className="bg-black/20">
                  {link.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white/90 font-poppins text-sm sm:text-base py-2.5 pl-8 sm:pl-10 pr-4 hover:text-secondary hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Phone button in mobile menu - visible on mobile and tablet */}
          <div className="p-3 sm:p-4 pt-2 sm:pt-3 md:hidden">
            <PhoneButton size="md" className="w-full justify-center" />
          </div>
        </nav>
      </div>
    </header>
  )
}
