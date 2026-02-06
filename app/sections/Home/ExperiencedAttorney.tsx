'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'

export default function ExperiencedAttorney() {
  return (
    <section className="relative">
      {/* Top White Section */}
      <div className="bg-white pt-20 pb-20 relative z-10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[70%]">
              <h2 className="font-playfair text-[32px] md:text-[42px] xl:text-[52px] leading-tight text-black mb-6">
                Mitchell S. Sexner - <br />
                Experienced Criminal Defense Attorney in Chicago
                <div className="w-[60px] h-1 bg-secondary mt-4"></div>
              </h2>
              <p className="font-poppins text-base md:text-lg text-black/80 leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum
                dolor sit amet, consectetur.
              </p>
            </div>
            {/* Space for image (30%) */}
            <div className="hidden lg:block w-[30%]"></div>
          </div>
        </Container>
        
        {/* Floating Image (Desktop) - Positioned relative to white section */}
        <div className="hidden lg:block absolute top-0 bottom-0 w-[40%] z-20 pointer-events-none p-0 m-0" style={{ marginBottom: '-10px', right: '340px' }}>
          <div className="relative w-full h-full p-0 m-0">
            <Image
              src="/Home/home-page/women-pc.webp"
              alt="Lady Justice"
              fill
              className="object-contain object-right-bottom p-0 m-0"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom Beige Section */}
      <div className="bg-[#EBE4D1] py-[30px] relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-primary rounded-xl p-8 lg:p-10 text-white shadow-lg relative z-30">
                <h3 className="font-poppins text-xl font-medium mb-4 text-center">Traffic Violation</h3>
                <p className="font-poppins text-sm leading-relaxed opacity-90 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                  Lorem ipsum dolor sit amet, cons.
                  Lorem ipsum dolor sit amet, cons.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                  Lorem ipsum dolor sit amet, cons.Lorem ipsum dolor sit amet,
                  consecte.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      
      {/* Mobile Image (visible only on small screens) */}
      <div className="lg:hidden relative h-[400px] w-full bg-white">
         <Image
            src="/Home/home-page/women-pc.webp"
            alt="Lady Justice"
            fill
            className="object-contain object-center"
          />
      </div>
    </section>
  )
}
