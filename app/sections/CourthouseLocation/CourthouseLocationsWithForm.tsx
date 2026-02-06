'use client'

import { useState } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const COURTHOUSE_LOCATIONS = [
  '111th Street Branch Court',
  '26th & California (Criminal)',
  'Daley Center (Civil)',
  '555 W. Harrison (Domestic Violence)',
  'Grand & Central Branch',
  'Skokie Courthouse',
  'Rolling Meadows Courthouse',
  'Maywood Courthouse',
  'Bridgeview Courthouse',
  'Markham Courthouse',
  'Chicago Lawn (63rd) Branch',
  'Harrison (Kedzie) Branch',
  'Leighton Criminal Court',
  'George N. Leighton Courthouse',
  'Richard J. Daley Center',
  'Englewood Branch Court',
  'First Municipal District',
  'Second Municipal District',
  'Third Municipal District',
  'Fourth Municipal District',
]

export default function CourthouseLocationsWithForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Replace with your form submission logic (e.g. API route, third-party service)
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Section: Courthouses */}
          <div className="lg:col-span-8">
            <h2 className="font-playfair text-[26px] md:text-[32px] xl:text-[36px] font-semibold text-primary mb-4 md:mb-6">
              Courthouses in Chicago area
            </h2>
            <div className="space-y-4 mb-6 md:mb-8">
              <p className="font-poppins text-primary/90 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-poppins text-primary/90 text-sm md:text-base leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {COURTHOUSE_LOCATIONS.map((name) => (
                <div
                  key={name}
                  className="bg-white border border-gray-300 rounded py-3 px-4 text-center font-poppins text-primary text-sm md:text-base hover:shadow-md transition-shadow cursor-pointer"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="lg:col-span-4">
            <div className="bg-[#28323C] rounded-lg p-6 md:p-8">
              <h2 className="font-playfair text-[22px] md:text-[26px] font-semibold text-white mb-6">
                Contact us for a free case evaluation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow"
                  disabled={status === 'submitting'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow"
                  disabled={status === 'submitting'}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow"
                  disabled={status === 'submitting'}
                />
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow resize-y min-h-[100px]"
                  disabled={status === 'submitting'}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-lg bg-secondary text-white font-poppins font-semibold hover:bg-secondary/90 disabled:opacity-70 transition-opacity"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </button>
              </form>

              <p className="text-white/90 text-xs md:text-sm leading-relaxed mt-4 pt-4 border-t border-white/10">
                By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may apply. Message frequency may vary. Reply Help to get more assistance / Reply Stop to opt-out of messaging.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

