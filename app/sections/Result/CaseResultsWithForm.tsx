'use client'

import { useState } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const FILTERS = [
  { id: 'dismissed' as const, label: 'Dismissed' },
  { id: 'not-guilty' as const, label: 'Not guilty' },
  { id: 'reduced-charges' as const, label: 'Reduced charges' },
]

const RESULT_CARDS = [
  {
    id: 1,
    title: 'Drug DUI with Injuries Trial',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    id: 2,
    title: 'Drug DUI with Injuries Trial',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  { id: 3, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 4, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 5, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 6, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 7, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 8, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 9, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 10, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 11, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 12, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 13, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 14, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 15, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 16, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 17, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 18, title: 'Drug DUI with Injuries Trial', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
]

export default function CaseResultsWithForm() {
  const [activeFilter, setActiveFilter] = useState<'dismissed' | 'not-guilty' | 'reduced-charges'>('dismissed')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <Section className="bg-[#F5F5F5]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Intro + Filters + Result Cards */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-poppins text-primary text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-poppins text-primary text-base">Filter by</span>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-4 py-2 rounded-full font-poppins text-sm font-medium transition-colors ${
                      activeFilter === f.id
                        ? 'bg-secondary text-white'
                        : 'bg-white text-primary border border-secondary hover:bg-secondary/10'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {RESULT_CARDS.map((card, index) => {
                const imageLeft = index % 2 === 0
                const imagePlaceholder = (
                  <div
                    className="shrink-0 w-[38%] min-w-[140px] aspect-4/3 rounded-xl bg-gray-400"
                    aria-hidden
                  />
                )
                const textBlock = (
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <h3 className="font-playfair font-semibold text-primary text-lg md:text-xl mb-3">
                      {card.title}
                    </h3>
                    <p className="font-poppins text-gray-600 text-sm md:text-base leading-relaxed">
                      {card.summary}
                    </p>
                  </div>
                )
                return (
                  <article
                    key={card.id}
                    className="flex gap-5 md:gap-8 p-5 md:p-6 bg-[#FAFAFA] rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden"
                  >
                    {imageLeft ? (
                      <>
                        {imagePlaceholder}
                        {textBlock}
                      </>
                    ) : (
                      <>
                        {textBlock}
                        {imagePlaceholder}
                      </>
                    )}
                  </article>
                )
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="bg-primary py-6 px-6 text-center">
                <h2 className="font-playfair font-semibold text-white text-xl md:text-2xl">
                  Contact us for a free case evaluation
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="bg-white p-6 space-y-4">
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
              <div className="bg-secondary/90 px-6 py-4">
                <p className="text-white text-xs leading-relaxed">
                  By clicking Submit you consent to receiving SMS messages.
                  Message &amp; data rates may apply. Message frequency may vary.
                  Reply Help for assistance. Reply Stop to opt-out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
