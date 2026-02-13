'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Container from '../../components/ui/Container'

export default function TeamHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Image
          src="/meet-our team/bg.webp"
          alt="Our Team"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-1" aria-hidden="true" />
      </div>

      <div className="absolute inset-0 z-[5] flex items-end justify-center pointer-events-none">
        <div className="relative w-full max-w-6xl h-full">
          <Image
            src="/meet-our team/team.webp"
            alt=""
            fill
            priority
            quality={90}
            className="object-contain object-bottom"
            sizes="(max-width: 1024px) 100vw, 1152px"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10 w-full pt-20 md:pt-28 flex-1 flex items-start">
        <Container className="px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center pl-4 sm:pl-6 md:pl-8 lg:pl-10">
            <h1
              className="font-playfair font-medium text-white text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] leading-tight mt-10"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}
            >
              MEET OUR{' '}
              <span className="text-secondary" style={{ fontFamily: 'var(--font-playfair), serif' }}>TEAM</span>
            </h1>
          </div>
        </Container>
      </div>

      <div className="relative z-10 w-full mb-[50px]">
        <Container className="px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 pl-8 pr-1.5 py-1.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors w-fit shadow-lg group h-14"
              aria-label="Book an appointment"
            >
              <span className="text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px] font-medium tracking-wide">Book an appointment</span>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-secondary text-white shrink-0 group-hover:translate-x-1 transition-transform">
                <FaArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  )
}
