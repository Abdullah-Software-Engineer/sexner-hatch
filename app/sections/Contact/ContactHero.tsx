'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'
import Container from '../../components/ui/Container'
import { getPhoneLink } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
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
      </div>

      <div className="relative z-10 w-full pt-20 pb-16 md:pt-28 md:pb-24">
        <Container className="px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Headline */}
            <div className="text-left pl-4 sm:pl-6 md:pl-8 lg:pl-10">
              <h1 
                className="font-playfair font-medium text-white text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] leading-tight"
                style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}
              >
                GET IN TOUCH WITH
             
                US <span className="text-secondary" style={{ fontFamily: 'var(--font-playfair), serif' }}>TODAY</span>
              </h1>
            </div>

            {/* Right: White card - Contact info + CTA (aligned with design) */}
            <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-0 lg:max-w-xl">
              <div className=" rounded-lg shadow-lg p-6 md:p-8 flex flex-col gap-5 text-left">
                <p className=" text-white font-poppins text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-relaxed">
                  Call us at{' '}
                  <a
                    href={getPhoneLink(SITE_CONFIG.phoneRaw)}
                    className=" text-white font-medium hover:text-secondary transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>{' '}
                  or complete the form below for a free consultation.
                </p>
                <div className="flex justify-start">
                  <Link
                    href={getPhoneLink(SITE_CONFIG.phoneRaw)}
                    className="inline-flex items-center gap-4 pl-1.5 pr-8 py-1.5 rounded-full border border-secondary bg-transparent text-white font-medium hover:bg-secondary hover:text-white transition-colors w-fit shadow-md group h-14"
                    aria-label={`Call us now - ${SITE_CONFIG.phone}`}
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-secondary text-white shrink-0 group-hover:scale-105 transition-transform">
                      <FaPhone className="w-5 h-5 scale-x-[-1]" aria-hidden />
                    </div>
                    <span className="text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-medium tracking-wide">Call us now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
