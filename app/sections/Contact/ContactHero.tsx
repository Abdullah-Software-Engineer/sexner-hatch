'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import { getPhoneLink } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContactHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden flex items-center">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: Headline */}
            <div>
              <h1 className="font-playfair font-light text-white text-[36px] leading-tight sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[64px] drop-shadow-lg">
                GET IN TOUCH WITH
                <br />
                <span className="text-secondary">US TODAY</span>
              </h1>
            </div>

            {/* Right: Contact info + CTA */}
            <div className="flex flex-col gap-6 max-w-md lg:max-w-none">
              <p className="font-poppins text-white text-base md:text-lg leading-relaxed">
                Call us at{' '}
                <a
                  href={getPhoneLink(SITE_CONFIG.phoneRaw)}
                  className="text-secondary font-medium hover:underline"
                >
                  {SITE_CONFIG.phone}
                </a>{' '}
                or complete the form below for a free consultation.
              </p>
              <Link
                href={getPhoneLink(SITE_CONFIG.phoneRaw)}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border-2 border-white bg-black/30 text-white font-medium hover:bg-white/10 transition-colors w-fit"
                aria-label={`Call us now - ${SITE_CONFIG.phone}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-secondary shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C2.95 22.5 0 19.55 0 16.5V6.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Call us now
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
