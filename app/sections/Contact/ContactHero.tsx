'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'
import Container from '../../components/ui/Container'
import { getPhoneLink } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact-us/Hero.webp"
          alt="Get in touch with us"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Headline */}
            <div className="text-left">
              <h1 
                className="font-playfair font-medium text-white text-[30px] md:text-[48px] leading-tight"
                style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}
              >
                GET IN TOUCH WITH
             
                US <span className="text-secondary" style={{ fontFamily: 'var(--font-playfair), serif' }}>TODAY</span>
              </h1>
            </div>

            {/* Right: Contact info + CTA */}
            <div className="flex flex-col gap-5 lg:pl-12 max-w-xl lg:ml-auto">
              <p className="font-poppins text-white text-[16px] leading-relaxed drop-shadow-md text-left lg:text-right">
                Call us at{' '}
                <a
                  href={getPhoneLink(SITE_CONFIG.phoneRaw)}
                  className="text-white font-medium hover:text-secondary transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>{' '}
                or complete the form below for a free consultation.
              </p>
              <div className="flex justify-start lg:justify-end">
                <Link
                  href={getPhoneLink(SITE_CONFIG.phoneRaw)}
                  className="inline-flex items-center gap-4 pl-1.5 pr-8 py-1.5 rounded-full border border-secondary bg-transparent text-white font-medium hover:bg-transparent transition-colors w-fit shadow-lg backdrop-blur-sm group h-14"
                  aria-label={`Call us now - ${SITE_CONFIG.phone}`}
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-secondary text-white shrink-0 group-hover:scale-105 transition-transform">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <span className="text-[14px] font-medium tracking-wide">Call us now</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
