'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function TestimonialHero() {
  return (
    <section
      role="banner"
      className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/testimonial/hero.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-primary/70 lg:bg-linear-to-r lg:from-primary/85 lg:to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 w-full py-12 md:py-16 lg:py-24">
        <Container className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 max-w-xl">
              <h1 className="font-playfair font-bold text-white text-[36px] leading-tight sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[64px] uppercase">
                WHAT OUR CLIENTS SAY{' '}
                <span className="text-secondary">ABOUT US</span>
              </h1>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 mt-8 px-6 py-3.5 rounded-lg bg-primary border-2 border-secondary text-white font-poppins font-medium hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors w-fit group"
                aria-label="Book an appointment"
              >
                <span>Book an appointment</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-secondary text-secondary shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
