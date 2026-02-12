'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'

export default function ResourcesTeamImage() {
  return (
    <section className="bg-white py-0">
      <Container>
        <div className="relative w-full">
          {/* White Top Border */}
          <div className="bg-white h-8 md:h-12 lg:h-16"></div>
          
          {/* Image Container with White Side Borders */}
          <div className="relative w-full bg-white  ">
            <div className="relative w-full h-[650px] overflow-hidden -mb-16 md:-mb-20 lg:-mb-24 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.15),0_0_60px_rgba(0,0,0,0.1)]">
              <Image
                src="/resources-ctaimage.webp"
                alt="Our professional team"
                fill
                priority
                quality={90}
                className="object-cover object-center rounded-xl md:rounded-2xl lg:rounded-3xl"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Gold/Yellow Bottom Section - Full Width */}
      <div className="bg-secondary py-12 sm:py-16 md:py-20 w-full relative z-0 pt-16 md:pt-20 lg:pt-24"></div>
    </section>
  )
}
