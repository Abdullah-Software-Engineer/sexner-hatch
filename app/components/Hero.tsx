'use client'

import Image from 'next/image'
import Container from './ui/Container'
import PhoneButton from './ui/PhoneButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Next.js Image optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-page/hero-bg.webp"
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
          <div className="flex flex-col justify-between h-screen min-h-screen">
            {/* Heading */}
            <div className="flex items-start pt-[300px]">
              <div className="text-center w-full">
                <h1 className="text-[38px] leading-[46px] md:text-[42px] md:leading-[52px] xl:text-[74px] xl:leading-[98px] font-playfair font-light text-white mb-4 drop-shadow-lg">
                  CHICAGO CRIMINAL DEFENSE
                </h1>
                <h2 className="text-[46px] leading-[54px] md:text-[52px] md:leading-[60px] xl:text-[98px] xl:leading-[106px] font-playfair font-bold text-secondary drop-shadow-lg">
                  ATTORNEYS
                </h2>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-end pb-[50px]">
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
