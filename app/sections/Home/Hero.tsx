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
                <h1 className="text-[85px] font-playfair font-light text-white mb-3 sm:mb-4 drop-shadow-lg">
                  CHICAGO CRIMINAL DEFENSE
                </h1>
                <h1 className="text-[115px] font-playfair font-bold text-secondary drop-shadow-lg">
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
