'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function ResultHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/result/hero.webp"
          alt="Case results - legal outcomes and success"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-1" aria-hidden="true" />
      </div>

      <div className="relative z-10 w-full py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-playfair font-bold text-white text-[36px] leading-tight uppercase sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[64px] drop-shadow-lg">
              CASE{' '}
              <span className="text-secondary">RESULTS</span>
            </h1>
            <p className="font-poppins text-white text-base md:text-lg leading-relaxed mt-4 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-secondary text-white font-poppins font-medium hover:bg-secondary/90 transition-colors w-fit"
              aria-label="Book an appointment"
            >
              Book an appointment
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shrink-0"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
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
