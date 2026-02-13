'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'
import PhoneButton from '../../components/ui/PhoneButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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
          <div className="flex flex-col justify-between min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Heading */}
            <div className="flex items-center justify-center flex-1 pt-12 sm:pt-16 md:pt-20 lg:pt-[120px] xl:pt-[200px]">
              <div className="text-center w-full px-4 sm:px-6">
                <h1 className="text-[36px] md:text-[48px] lg:text-[56px] xl:text-[56px] font-playfair font-light text-white mb-3 sm:mb-4" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}>
                  CHICAGO CRIMINAL DEFENSE
                </h1>
                <h1 className="text-[36px] md:text-[48px] lg:text-[56px] xl:text-[56px] font-playfair font-bold text-secondary" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}>
                  ATTORNEYS
                </h1>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-center pb-8 sm:pb-10 md:pb-12 lg:pb-[50px]">
              <div className="mx-auto">
                <PhoneButton size="md" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
