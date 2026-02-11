'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Container from '../../components/ui/Container'

export default function MeetOurTeamHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden flex flex-col justify-between">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/meet-our team/bg.webp"
          alt="Meet Our Team"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-1" aria-hidden="true" />
      </div>

      {/* Team image - bottom aligned over background */}
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

      <div className="relative z-10 w-full pt-[120px] flex-1 flex items-start">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 
              className="font-playfair font-medium text-white text-[42px] leading-tight sm:text-[56px] md:text-[64px] lg:text-[74px]"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}
            >
              MEET OUR{' '}
              <span className="text-secondary" style={{ fontFamily: 'var(--font-playfair), serif' }}>TEAM</span>
            </h1>
          </div>
        </Container>
      </div>

      {/* Button at bottom */}
      <div className="relative z-10 w-full mb-[10px]">
        <Container>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 pl-8 pr-1.5 py-1.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors w-fit shadow-lg group h-14"
              aria-label="Book an appointment"
            >
              <span className="text-lg font-medium tracking-wide">Book an appointment</span>
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
