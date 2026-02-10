'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import Container from '../../components/ui/Container'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-dvh sm:min-h-screen overflow-hidden">
      {/* Background Image with Next.js Image optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/home-page/hero-bg.webp"
          alt="Chicago Criminal Defense Attorneys"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        <Container>
          <div className="flex flex-col justify-between min-h-dvh sm:min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            {/* Heading - responsive typography with entrance animation */}
            <div className="flex items-center justify-center flex-1 pt-16 sm:pt-20 md:pt-24 lg:pt-[100px] xl:pt-[140px] 2xl:pt-[200px]">
              <div className="text-center w-full max-w-[90vw] sm:max-w-none px-2 sm:px-4 md:px-6">
                <motion.h1
                  className="font-playfair font-light text-white leading-tight hyphens-none wrap-break-word
                    text-[36px] md:text-[56px]
                    mb-2 sm:mb-3 md:mb-4"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  CHICAGO CRIMINAL DEFENSE
                </motion.h1>
                <motion.h1
                  className="font-playfair font-bold text-secondary leading-tight hyphens-none
                    text-[36px] md:text-[56px]"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  ATTORNEYS
                </motion.h1>
              </div>
            </div>

            {/* CTA - fade up after headline */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[50px] px-2"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-between gap-3 w-full max-w-[min(100%,320px)] sm:max-w-none sm:w-auto px-5 py-2 lg:px-6 lg:py-2 xl:px-7 xl:py-2 rounded-full bg-secondary text-white no-underline hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                aria-label="Book an appointment"
              >
                <span className="font-medium font-poppins text-[14px] md:text-[16px] whitespace-nowrap">
                  Book an appointment
                </span>
                <div className="w-9 h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 min-w-[36px] min-h-[36px] lg:min-w-[40px] lg:min-h-[40px] xl:min-w-[44px] xl:min-h-[44px] rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 lg:w-[18px] lg:h-[18px] xl:w-5 xl:h-5 text-white"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
