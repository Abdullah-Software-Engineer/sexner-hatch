'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function ResourcesHero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/result/hero.webp"
          alt="Criminal Law & Your Rights"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="   absolute inset-0  z-[1]" aria-hidden="true" />
      </div>

      <div className="relative z-10 w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl px-4 sm:px-6 md:px-0">
            <h1 className="font-playfair font-bold text-white text-[28px] leading-tight sm:text-[32px] sm:leading-tight md:text-[42px] md:leading-tight lg:text-[52px] lg:leading-tight xl:text-[58px] xl:leading-tight 2xl:text-[64px] 2xl:leading-tight uppercase drop-shadow-lg">
              CRIMINAL LAW & YOUR RIGHTS
            </h1>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-secondary text-white font-poppins text-sm sm:text-base font-medium hover:bg-secondary/90 transition-colors w-full sm:w-fit mt-4 sm:mt-6 justify-center sm:justify-start"
              aria-label="Book an appointment"
            >
              Book an appointment
              <span
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white shrink-0"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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

