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
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Left: Intro + Filters + Result Cards */}
          <div className="flex-1 lg:w-[58.33%] space-y-6 min-w-0">
            <p className="font-poppins text-primary text-[14px] md:text-[16px] leading-relaxed">
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
                    <h3 className="font-libre font-semibold text-primary text-[20px] mb-3">
                      {card.title}
                    </h3>
                    <p className="font-poppins text-gray-600 text-[14px] leading-relaxed">
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

          {/* Right: Contact Form - Sticky Sidebar */}
          <aside className="w-full lg:w-[41.67%] lg:flex-shrink-0 lg:sticky lg:top-32 lg:self-start" style={{ position: '-webkit-sticky' } as any}>
              <div className="bg-gradient-to-b from-[#1a2b3c] to-[#b89553] p-8 rounded-xl shadow-2xl border border-white/10">
                <h3 className="font-libre text-white text-[28px] text-center mb-6 leading-tight">
                  Contact us for a free case evaluation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full bg-[#f8f9fa] border-0 rounded px-4 py-3.5 text-primary placeholder:text-[#555] focus:ring-2 focus:ring-secondary outline-none transition-shadow"
                    disabled={status === 'submitting'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="w-full bg-[#f8f9fa] border-0 rounded px-4 py-3.5 text-primary placeholder:text-[#555] focus:ring-2 focus:ring-secondary outline-none transition-shadow"
                    disabled={status === 'submitting'}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                    className="w-full bg-[#f8f9fa] border-0 rounded px-4 py-3.5 text-primary placeholder:text-[#555] focus:ring-2 focus:ring-secondary outline-none transition-shadow"
                    disabled={status === 'submitting'}
                  />
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    rows={4}
                    required
                    className="w-full bg-[#f8f9fa] border-0 rounded px-4 py-3.5 text-primary placeholder:text-[#555] focus:ring-2 focus:ring-secondary outline-none resize-none"
                    disabled={status === 'submitting'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#c5a059] text-white font-medium text-lg py-3.5 rounded hover:bg-[#b89553] transition-colors mt-2 disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit'}
                  </button>
                  <p className="text-white/80 text-[11px] leading-relaxed text-center mt-4">
                    By clicking Submit you consent to receiving SMS messages. Message &amp; data rates may apply. Message frequency may vary. Reply Help for assistance. Reply Stop to opt-out.
                  </p>
                </form>
              </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
