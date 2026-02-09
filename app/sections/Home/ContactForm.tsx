'use client'

import { useState } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Replace with your form submission logic (e.g. API route, third-party service)
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <Section className="bg-primary m-5 rounded-xl" id="contact-form">
      <Container>
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-[30px] md:text-[48px] font-normal text-white mb-2.5 relative inline-block">
            Get your confidential case evaluation
            <span className="absolute left-0 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
          </h2>
        </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                disabled={status === 'submitting'}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                disabled={status === 'submitting'}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
              disabled={status === 'submitting'}
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow resize-y min-h-[120px]"
              disabled={status === 'submitting'}
            />

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3.5 rounded-lg bg-secondary text-white font-semibold hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-70 transition-opacity"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>

            <p className="text-white/90 text-xs md:text-sm leading-relaxed pt-1">
              By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may apply. / Message frequency may vary. Reply Help to get more assistance / Reply Stop to opt-out of messaging.
            </p>
          </form>
      </Container>
    </Section>
  )
}
