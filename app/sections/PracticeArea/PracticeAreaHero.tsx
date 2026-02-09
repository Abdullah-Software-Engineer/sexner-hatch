'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function PracticeAreaHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
      {/* Background: blurred library/legal theme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/result/hero.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center blur-[4px] scale-105"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-primary/85"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex items-center min-h-[85vh] md:min-h-[90vh] w-full">
        <Container className="py-12 md:py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Headline + CTA */}
            <div className="lg:col-span-6 max-w-xl">
              <h1 className="font-playfair font-light text-white text-[32px] leading-tight sm:text-[38px] md:text-[48px] lg:text-[54px] xl:text-[60px] uppercase">
                Criminal Law & Your
              </h1>
              <h2 className="font-libre font-bold text-secondary text-[40px] leading-tight sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[72px] uppercase mt-1">
                Rights
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 mt-8 px-6 py-3.5 rounded-xl bg-[#B8953E] text-white font-poppins font-medium hover:bg-[#A68536] transition-colors w-fit group"
                aria-label="Book an appointment"
              >
                <span>Book an appointment</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shrink-0 group-hover:bg-primary/90 transition-colors">
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

            {/* Right: Gavel / legal imagery placeholder */}
        
          </div>
        </Container>
      </div>
    </section>
  )
}
