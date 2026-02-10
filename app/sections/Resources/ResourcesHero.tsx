'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Container from '../../components/ui/Container'

export default function ResourcesHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden flex items-center">
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
        <div className="absolute inset-0 bg-black/40 z-1" aria-hidden="true" />
      </div>

      <div className="relative z-10 w-full py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h1 
              className="font-playfair font-medium text-white text-[30px] md:text-[48px] leading-tight mb-5"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}
            >
              CRIMINAL LAW &{' '}
              <span className="text-secondary" style={{ fontFamily: 'var(--font-playfair), serif' }}>YOUR RIGHTS</span>
            </h1>
            <div className="flex flex-col gap-5">
              <p className="font-poppins text-white text-[16px] leading-relaxed drop-shadow-md text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 pl-8 pr-1.5 py-1.5 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors w-fit shadow-lg group h-14"
                  aria-label="Book an appointment"
                >
                  <span className="text-[14px] font-medium tracking-wide">Book an appointment</span>
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-white shrink-0 group-hover:translate-x-1 transition-transform">
                    <FaArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
