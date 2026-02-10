'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'

export default function ExperiencedAttorney() {
  return (
    <section className="relative bg-white ">
      {/* Top White Section with Button */}
      <div className="bg-white pt-12 sm:pt-16 md:pt-20  relative z-10">
        <Container>
          

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Text Content - Left Side */}
            <div className="w-full lg:w-[60%] xl:w-[55%]">
              <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-4 sm:mb-5 md:mb-6">
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
                src="/home/home-page/women-pc.webp"
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
      <div className="bg-[#e8dec5] py-12 sm:py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-primary text-white p-10 sm:p-12 rounded-xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300"
              >
                <h3 className="text-2xl font-medium mb-4">
                  Traffic Violation
                </h3>
                <p className="font-poppins text-sm leading-relaxed text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                  Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet,
                  cons.Lorem ipsum dolor sit amet, consecte.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
