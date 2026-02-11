'use client'

import { FaStar } from 'react-icons/fa'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import ScrollFollowingForm from '../../components/ScrollFollowingForm'

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
  {
    id: 6,
    name: 'Client name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
  },
  {
    id: 7,
    name: 'Client name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
  },
  {
    id: 8,
    name: 'Client name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
  },
]

export default function TestimonialsContent() {
  return (
    <Section className="bg-white" id="testimonials-content">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Left: Testimonials */}
          <div className="flex-1 lg:w-[58.33%] space-y-6">
            <div className="space-y-6 md:space-y-8">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-base sm:text-lg font-medium text-primary mb-1 font-poppins">
                    {item.name}
                  </h3>
                  <p className="text-primary/70 text-xs sm:text-sm mb-3 font-poppins">{item.name}</p>
                  <div className="flex gap-1.5 text-[#FFC300] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base font-poppins text-primary leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form - Sticky */}
          <ScrollFollowingForm />
        </div>
      </Container>
    </Section>
  )
}
