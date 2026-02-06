'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'

export default function ExperiencedAttorney() {
  return (
    <section className="relative bg-white">
      {/* Top White Section with Button */}
      <div className="bg-white pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 relative z-10">
        <Container>
          

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Text Content - Left Side */}
            <div className="w-full lg:w-[60%] xl:w-[55%]">
              <h2 className="font-playfair text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[52px] leading-tight text-black mb-4 sm:mb-5 md:mb-6">
                Mitchell S. Sexner - <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Experienced Criminal <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Defense Attorney in Chicago
                <div className="w-[50px] sm:w-[60px] h-0.5 sm:h-1 bg-secondary mt-3 sm:mt-4"></div>
              </h2>
              <p className="font-poppins text-sm sm:text-base md:text-lg text-black/80 leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum
                dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>

            {/* Image - Right Side (Desktop) */}
            <div className="hidden lg:block w-[40%] xl:w-[45%] relative h-[450px] lg:h-[500px] xl:h-[600px] shrink-0">
              <Image
                src="/Home/home-page/women-pc.webp"
                alt="Lady Justice"
                fill
                className="object-contain object-right"
                sizes="(max-width: 1024px) 0vw, 40vw"
                priority
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Beige Strip */}
     
    </section>
  )
}
