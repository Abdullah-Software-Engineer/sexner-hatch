'use client'

import { useState, useMemo } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { CASE_RESULTS, type ResultCategory } from '@/lib/caseResultsData'

type FilterId = ResultCategory | 'all'

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'dismissed', label: 'Dismissed' },
  { id: 'not-guilty', label: 'Not guilty' },
  { id: 'reduced-charges', label: 'Reduced charges' },
]

const INTRO_TEXT =
  'Since 1990, Mitchell S. Sexner & Associates LLC has defended the rights of the accused with a strong record of successful outcomes. Our attorneys bring decades of experience, meticulous preparation, and relentless advocacy to protect your future and pursue the best possible results.'

const DISCLAIMER =
  'These results represent a sampling of cases litigated by Mitchell S. Sexner & Associates LLC. Every case is unique; these summaries are for illustrative purposes and do not guarantee or predict similar outcomes for future cases.'

export default function CaseResultsWithForm() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const filteredResults = useMemo(
    () =>
      activeFilter === 'all'
        ? CASE_RESULTS
        : CASE_RESULTS.filter((card) => card.category === activeFilter),
    [activeFilter]
  )

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
              {INTRO_TEXT}
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

            <div className="space-y-8 mt-16">
              {filteredResults.map((card, index) => {
                const imageLeft = index % 2 === 0
                const imagePlaceholder = (
                  <div
                    className="shrink-0 w-full md:w-[38%] min-w-0 md:min-w-[140px] aspect-4/3 rounded-xl bg-gray-400 order-2 md:order-none"
                    aria-hidden
                  />
                )
                const textBlock = (
                  <div className="min-w-0 flex-1 flex flex-col justify-center order-1 md:order-none">
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
                    className="flex flex-col md:flex-row gap-5 md:gap-8 p-5 md:p-6 bg-[#FAFAFA] rounded-2xl shadow-sm border border-gray-200/80 overflow-hidden"
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

            <p className="font-poppins text-gray-500 text-[13px] md:text-[14px] leading-relaxed mt-10 pt-6 border-t border-gray-200">
              {DISCLAIMER}
            </p>
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
