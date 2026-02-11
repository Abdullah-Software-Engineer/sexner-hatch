'use client'

import { FaStar } from 'react-icons/fa'
import Section from '../../components/ui/Section'
import Container from '../../components/ui/Container'
import Button from '../../components/ui/Button'

const testimonials = [
  {
    id: 1,
    name: 'Client name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
  },
  {
    id: 2,
    name: 'Client name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
  },
  {
    id: 3,
    name: 'Client name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
  },
  {
    id: 4,
    name: 'Client name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
  },
  {
    id: 5,
    name: 'Client name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
  },
]

export default function TestimonialsMarquee() {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <Section className="bg-white overflow-hidden" id="testimonials">
      <Container className="mb-10 md:mb-12 xl:mb-16">
        <div className="text-center">
          <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            Our clients
            <span className="absolute left-8 -translate-x-1/2 -bottom-1.5 w-[70px] h-1 bg-secondary" aria-hidden="true"></span>
          </h2>
        </div>
      </Container>

      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        {/* Row 1 - Scroll Left */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex w-max flex-nowrap gap-4 sm:gap-6 animate-marquee-scroll hover:[animation-play-state:paused] will-change-transform"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((item, idx) => (
              <Card key={`t1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex w-max flex-nowrap gap-4 sm:gap-6 animate-marquee-scroll-reverse hover:[animation-play-state:paused] will-change-transform"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((item, idx) => (
              <Card key={`t2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <Container className="mt-10 md:mt-12 xl:mt-16">
        <div className="flex justify-center">
          <Button
            href="/testimonial"
            variant="primary"
            size="sm"
            ariaLabel="See more testimonials"
          >
            See more testimonials
          </Button>
        </div>
      </Container>
    </Section>
  )
}

function Card({ item }: { item: typeof testimonials[0] }) {
  return (
    <div 
      className="w-[280px] sm:w-[300px] md:w-[350px] lg:w-[510px] xl:w-[650px] flex-shrink-0 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-center text-white flex flex-col items-center justify-center gap-3 sm:gap-4 transition-transform hover:scale-[1.02]"
      style={{ background: 'linear-gradient(90deg, #2C3E50 40%, #C8A24F 99%)' }}
    >
      <h3 className="text-[20px] font-medium text-white">{item.name}</h3>
      <p className="text-[14px] font-poppins leading-relaxed text-white/90">
        "{item.text}"
      </p>
      <div className="flex gap-1.5 text-[#FFC300]">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        ))}
      </div>
    </div>
  )
}
