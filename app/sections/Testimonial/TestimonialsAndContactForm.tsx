'use client'

import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Section from '../../components/ui/Section'
import Container from '../../components/ui/Container'

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

export default function TestimonialsAndContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <Section className="py-0" id="testimonials-contact">
      <div className="flex flex-col lg:flex-row min-h-0">
        {/* Left: Testimonials column - light background */}
        <div className="flex-1 bg-gray-50 lg:min-h-[600px] py-[60px] md:py-[80px] xl:py-[100px]">
          <Container>
            <div className="max-w-2xl lg:max-w-none pr-0 lg:pr-8 xl:pr-12">
              <div className="flex flex-col gap-6 md:gap-8">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
                  >
                    <h3 className="text-base sm:text-lg font-medium text-primary mb-1">
                      {item.name}
                    </h3>
                    <p className="text-primary/70 text-xs sm:text-sm mb-1">{item.name}</p>
                    <div className="flex gap-1.5 text-[#FFC300] mb-3">
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
          </Container>
        </div>

        {/* Right: Contact form - dark background */}
        <div className="shrink-0 w-full lg:w-[420px] xl:w-[480px] bg-[#28323C] py-[60px] md:py-[80px] xl:py-[100px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-200 rounded-3xl mr-10">
          <div className="max-w-md mx-auto lg:max-w-none">
            <h2 className="font-libre text-[30px] md:text-[48px] font-semibold text-white mb-6 sm:mb-8">
              Contact us for a free case evaluation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-[#28323C] outline-none transition-shadow"
                disabled={status === 'submitting'}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-[#28323C] outline-none transition-shadow"
                disabled={status === 'submitting'}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-[#28323C] outline-none transition-shadow"
                disabled={status === 'submitting'}
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-[#28323C] outline-none transition-shadow resize-y min-h-[120px]"
                disabled={status === 'submitting'}
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-lg bg-secondary text-white font-semibold hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#28323C] disabled:opacity-70 transition-opacity"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit'}
              </button>

              <p className="text-white/80 text-xs leading-relaxed pt-1">
                By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may
                apply. Message frequency may vary. Reply Help to get more assistance | Reply Stop
                to opt-out of messaging.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}
