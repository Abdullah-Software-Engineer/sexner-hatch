'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

export default function TeamSection() {
  return (
    <Section className="bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="w-full max-w-6xl mx-auto">
          {/* Frame with borders matching the image layout */}
          <div className="relative">
            {/* White padding on top and sides */}
            <div className="pt-[40px] sm:pt-[50px] md:pt-[60px] px-[40px] sm:px-[50px] md:px-[60px] bg-white">
              {/* Image container with dark border effect */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] md:aspect-[16/9] border-4 border-black/20 shadow-lg">
                <Image
                  src="/resources/team-photo.webp"
                  alt="Our Professional Team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  priority
                />
              </div>
            </div>
            {/* Gold border on bottom */}
            <div className="h-[40px] sm:h-[50px] md:h-[60px] bg-secondary w-full"></div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

