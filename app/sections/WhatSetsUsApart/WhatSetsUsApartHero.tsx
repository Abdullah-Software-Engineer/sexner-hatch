'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function WhatSetsUsApartHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
      {/* Full-width background image - illuminated sign in archway */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/About%20us/Hero.webp"
          alt="Sexner and Associates LLC - illuminated sign, Attorneys at Law"
          fill
          priority
          quality={90}
          className="object-cover object-right"
          sizes="100vw"
        />
        {/* Dark gradient overlay on left for text legibility */}
        <div
          className="absolute inset-0 z-1 bg-linear-to-r from-primary/95 via-primary/70 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Left: Content panel */}
      <div className="relative z-10 flex items-center min-h-[85vh] md:min-h-[90vh] w-full lg:max-w-[50%]">
        <Container className="py-12 md:py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="font-playfair font-light text-[36px] leading-tight sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[64px] text-white/95 uppercase">
              What sets us <span className="text-secondary">apart</span>
            </h1>
            <p className="font-poppins text-white/80 text-base md:text-lg leading-relaxed mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3.5 rounded-full border-2 border-secondary bg-primary/80 text-white font-medium hover:bg-secondary/10 transition-colors w-fit group"
              aria-label="Book an appointment"
            >
              <span>Book an appointment</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary shrink-0 group-hover:bg-secondary/90 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
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
        </Container>
      </div>
    </section>
  )
}
