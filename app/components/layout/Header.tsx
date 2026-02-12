'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAVIGATION_LINKS, RESOURCES_DROPDOWN_LINKS, PRACTICE_AREAS_FULL, SITE_CONFIG } from '@/lib/constants'
import { cn, throttle } from '@/lib/utils'
import PhoneButton from '../ui/PhoneButton'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isResourcesMobileOpen, setIsResourcesMobileOpen] = useState(false)
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false)
  const [isPracticeAreasMobileOpen, setIsPracticeAreasMobileOpen] = useState(false)

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
    <>
      <header
        className={cn(
          'fixed left-1/2 -translate-x-1/2 z-[100] bg-primary transition-all duration-300',
          'w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[1470px] lg:max-w-[calc(100%-64px)] xl:max-w-[calc(100%-140px)]',
          'rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[60px]',
          isScrolled ? 'top-2 sm:top-[10px] lg:top-[10px]' : 'top-2 sm:top-4 md:top-5 lg:top-[30px]'
        )}
        role="banner"
      >
        <div className="w-full overflow-visible">
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

              {/* Desktop Navigation - visible from md (tablet) up */}
              <nav
                className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 flex-1 justify-center min-w-0 ml-6 lg:ml-10 xl:ml-14"
                aria-label="Main navigation"
              >
                {NAVIGATION_LINKS.map((link) => {
                  let isActive = link.href === '/' 
                    ? pathname === '/' 
                    : pathname === link.href || pathname.startsWith(link.href + '/')
                  
                  // For Resources, also check if any sub-link is active
                  if (link.label === 'Resources') {
                    isActive = isActive || RESOURCES_DROPDOWN_LINKS.some(
                      subLink => pathname === subLink.href || pathname.startsWith(subLink.href + '/')
                    )
                  }
                  // For Practice Areas, check if on practice-areas or any practice area slug
                  if (link.label === 'Practice Areas') {
                    isActive = pathname === '/practice-areas' || pathname.startsWith('/practice-areas/')
                  }
                  
                  return link.label === 'Practice Areas' ? (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setIsPracticeAreasOpen(true)}
                      onMouseLeave={() => setIsPracticeAreasOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'text-sm lg:text-[15px] xl:text-base font-poppins font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary rounded-lg px-3 py-2 whitespace-nowrap flex items-center gap-1.5 relative',
                          isPracticeAreasOpen ? 'text-secondary' : 'text-white hover:text-secondary',
                          isActive && 'border-b-2 border-secondary pb-1'
                        )}
                      >
                        Practice Areas
                        <svg className={cn('w-4 h-4 transition-transform duration-200', isPracticeAreasOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      <div
                        className={cn(
                          'absolute left-1/2 -translate-x-1/2 top-full pt-2 z-[110] transition-all duration-200 ease-out',
                          isPracticeAreasOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-1'
                        )}
                      >
                        <div className="bg-primary text-white rounded-xl shadow-[0_10px_40px_rgba(42,63,83,0.5)] border border-white/10 overflow-hidden">
                          <div className="grid grid-cols-4 gap-0 min-w-[720px] max-w-[900px]">
                            {[0, 1, 2, 3].map((colIndex) => {
                              const start = colIndex === 0 ? 0 : colIndex === 1 ? 8 : colIndex === 2 ? 16 : 24
                              const end = colIndex === 3 ? 30 : start + 8
                              const colItems = PRACTICE_AREAS_FULL.slice(start, end)
                              return (
                                <div key={colIndex} className="flex flex-col">
                                  {colItems.map((area) => (
                                    <Link
                                      key={area.slug}
                                      href={`/practice-areas/${area.slug}`}
                                      className="block bg-primary px-4 py-3.5 border-b border-white/20 last:border-b-0 hover:bg-white/10 hover:text-secondary transition-colors text-white"
                                    >
                                      <span className="font-poppins text-sm font-semibold uppercase tracking-wide">
                                        {area.title}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : link.label === 'Resources' ? (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                      <button
                        type="button"
                        className={cn(
                          'text-sm lg:text-[15px] xl:text-base font-poppins font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary rounded-lg px-3 py-2 whitespace-nowrap flex items-center gap-1.5 relative',
                          isResourcesOpen ? 'text-secondary' : 'text-white hover:text-secondary',
                          isActive && 'border-b-2 border-secondary pb-1'
                        )}
                        aria-expanded={isResourcesOpen}
                        aria-haspopup="true"
                        onClick={() => setIsResourcesOpen((o) => !o)}
                      >
                        Resources
                        <svg className={cn('w-4 h-4 transition-transform duration-200', isResourcesOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={cn(
                          'absolute left-1/2 -translate-x-1/2 top-full pt-2 z-[110] transition-all duration-200 ease-out',
                          isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-1'
                        )}
                      >
                        <ul className="bg-[#1e2d3d] text-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.25)] border border-white/10 min-w-[240px] overflow-hidden py-1.5">
                          {RESOURCES_DROPDOWN_LINKS.map((item) => (
                            <li key={`${item.href}-${item.label}`} className="border-b border-white/5 last:border-0">
                              <Link
                                href={item.href}
                                className="block font-poppins text-[15px] text-white/95 hover:text-secondary hover:bg-white/5 px-4 py-3 transition-colors duration-150"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-white text-sm lg:text-[15px] xl:text-base font-poppins hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1 whitespace-nowrap relative',
                        isActive && 'border-b-2 border-secondary pb-0'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              {/* Desktop Phone + Mobile Menu Button */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0 ml-6 lg:ml-10 xl:ml-14">
                {/* Phone button - visible from tablet (md) up */}
                <div className="hidden md:block flex-shrink-0">
                  <PhoneButton size="md" />
                </div>
                {/* Mobile menu toggle - only below md */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((o) => !o)}
                  className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white hover:bg-white/10 active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-secondary transition-colors flex-shrink-0"
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


      </header>

      {/* Mobile menu overlay - above header so it covers page */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'md:hidden fixed inset-0 z-[101] bg-black/50 h-[100vh] w-[100vw] backdrop-blur-2xl transition-opacity duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* Mobile menu panel */}
      <div
        className={cn(
          'md:hidden fixed z-[102] bg-primary rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out',
          'left-2 right-2 sm:left-4 sm:right-4',
          isMenuOpen
            ? 'top-[68px] sm:top-[76px] opacity-100 visible translate-y-0'
            : 'top-[60px] opacity-0 invisible -translate-y-4'
        )}
      >
        <nav className="flex flex-col py-2 sm:py-4" aria-label="Mobile navigation">
          {NAVIGATION_LINKS.map((link) => {
            let isActive = link.href === '/' 
              ? pathname === '/' 
              : pathname === link.href || pathname.startsWith(link.href + '/')
            
            // For Resources, also check if any sub-link is active
            if (link.label === 'Resources') {
              isActive = isActive || RESOURCES_DROPDOWN_LINKS.some(
                subLink => pathname === subLink.href || pathname.startsWith(subLink.href + '/')
              )
            }
            if (link.label === 'Practice Areas') {
              isActive = pathname === '/practice-areas' || pathname.startsWith('/practice-areas/')
            }
            
            return link.label === 'Practice Areas' ? (
              <div key={link.href} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setIsPracticeAreasMobileOpen((o) => !o)}
                  className={cn(
                    'w-full text-left font-poppins font-medium text-sm sm:text-base py-3 sm:py-3.5 px-4 sm:px-6 transition-colors flex items-center justify-between rounded-lg mx-2 relative',
                    isPracticeAreasMobileOpen ? 'text-secondary bg-white/10' : 'text-white hover:bg-white/10 hover:text-secondary active:bg-white/15',
                    isActive && 'border-b-2 border-secondary'
                  )}
                  aria-expanded={isPracticeAreasMobileOpen}
                >
                  Practice Areas
                  <svg className={cn('w-5 h-5 transition-transform duration-200', isPracticeAreasMobileOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isPracticeAreasMobileOpen && (
                  <ul className="py-2 pb-3 max-h-[60vh] overflow-y-auto">
                    <li>
                      <Link
                        href="/practice-areas"
                        onClick={() => { setIsMenuOpen(false); setIsPracticeAreasMobileOpen(false); }}
                        className="block font-poppins text-[15px] text-white/90 hover:text-secondary py-2.5 pl-8 pr-4 border-l-2 border-transparent hover:border-secondary hover:bg-white/5 ml-2 mr-2 rounded-r transition-colors duration-150"
                      >
                        All Practice Areas
                      </Link>
                    </li>
                    {PRACTICE_AREAS_FULL.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/practice-areas/${area.slug}`}
                          onClick={() => { setIsMenuOpen(false); setIsPracticeAreasMobileOpen(false); }}
                          className="block font-poppins text-[15px] text-white/90 hover:text-secondary py-2.5 pl-8 pr-4 border-l-2 border-transparent hover:border-secondary hover:bg-white/5 ml-2 mr-2 rounded-r transition-colors duration-150"
                        >
                          {area.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : link.label === 'Resources' ? (
              <div key={link.href} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setIsResourcesMobileOpen((o) => !o)}
                  className={cn(
                    'w-full text-left font-poppins font-medium text-sm sm:text-base py-3 sm:py-3.5 px-4 sm:px-6 transition-colors flex items-center justify-between rounded-lg mx-2 relative',
                    isResourcesMobileOpen ? 'text-secondary bg-white/10' : 'text-white hover:bg-white/10 hover:text-secondary active:bg-white/15',
                    isActive && 'border-b-2 border-secondary'
                  )}
                  aria-expanded={isResourcesMobileOpen}
                >
                  Resources
                  <svg className={cn('w-5 h-5 transition-transform duration-200', isResourcesMobileOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isResourcesMobileOpen && (
                  <ul className="py-2 pb-3">
                    {RESOURCES_DROPDOWN_LINKS.map((item) => (
                      <li key={`${item.href}-${item.label}`}>
                        <Link
                          href={item.href}
                          onClick={() => { setIsMenuOpen(false); setIsResourcesMobileOpen(false); }}
                          className="block font-poppins text-[15px] text-white/90 hover:text-secondary py-2.5 pl-8 pr-4 border-l-2 border-transparent hover:border-secondary hover:bg-white/5 ml-2 mr-2 rounded-r transition-colors duration-150"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'text-white font-poppins text-sm sm:text-base md:text-lg py-2.5 sm:py-3.5 px-4 sm:px-6 hover:bg-white/10 hover:text-secondary active:bg-white/15 transition-colors border-b border-white/10 relative',
                  isActive && 'border-b-2 border-secondary'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          {/* Phone button in mobile menu - visible on mobile and tablet */}
          <div className="p-3 sm:p-4 pt-2 sm:pt-3 md:hidden">
            <PhoneButton size="md" className="w-full justify-center" />
          </div>
        </nav>
      </div></>
  )
}
