'use client'

import Image from 'next/image'
import Section from '../../components/ui/Section'

const partnerImages = [
  { name: 'av-1-3-1.png 1.png', alt: 'AV Preeminent Rating' },
  { name: 'av-11-2.png_1-removebg-preview 1.png', alt: 'Avvo Rating' },
  { name: 'av-12-3.png_1-removebg-preview 1.png', alt: 'Legal Award' },
  { name: 'av-2-1-1.png_1-removebg-preview 1.png', alt: 'Professional Recognition' },
  { name: 'av-3-2.png 1.png', alt: 'Legal Excellence' },
  { name: 'av-4-2.png_1-removebg-preview 1.png', alt: 'Industry Award' },
  { name: 'av-5-2.png 1.png', alt: 'Legal Association' },
  { name: 'avvo_1-removebg-preview 1.png', alt: 'Avvo Top Rated' },
  { name: 'best-Business-of-2024-Three-Best-Rated-300x268 1.png', alt: 'Best Business 2024' },
  { name: 'blue-seal-280-80-bbb-88597979_1-removebg-preview 1.png', alt: 'BBB Accredited' },
  { name: 'mitchell_Sexner_CR_Gold_300 1.png', alt: 'Mitchell Sexner Gold' },
  { name: 'nadc-top-1-percent-badge-300x300 1.png', alt: 'NADC Top 1%' },
]

export default function PartnersMarquee() {
  // Duplicate the array to create seamless loop
  const duplicatedPartners = [...partnerImages, ...partnerImages]

  return (
    <Section className="bg-white overflow-hidden py-10" id="partners">
      <div className="relative w-full overflow-hidden" aria-label="Our partners and affiliations">
        <div 
          className="flex flex-nowrap items-center gap-10 md:gap-[60px] xl:gap-20 animate-marquee-scroll will-change-transform"
          style={{ width: 'max-content' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={`/Home/home-page/partners/${partner.name}`}
                alt={partner.alt}
                width={150}
                height={100}
                className="object-contain h-auto max-w-[150px] md:max-w-[180px] xl:max-w-[200px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
