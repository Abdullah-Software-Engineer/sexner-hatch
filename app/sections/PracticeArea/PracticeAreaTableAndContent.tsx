'use client'

import { useState } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const TABLE_OF_CONTENTS = [
  'Chicago criminal procedures',
  'Representation',
  'Investigation',
  'Arrest',
  'Charging and Processing',
  'Initial Bond Hearing',
  'The Grand Jury',
  'Initial Court Date / Arraignment',
  'Discovery and Pre-Trial Motions',
  'Plea Negotiations',
  'Trial Proceedings',
  'Sentencing and Post-Trial Motions',
  'More Information about Your Rights',
]

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
const LOREM_2 =
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

export default function PracticeAreaTableAndContent() {
  const [tocOpen, setTocOpen] = useState(true)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <Section className="bg-gray-50 py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left column: TOC + content (wider) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* Table of content */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <button
                type="button"
                onClick={() => setTocOpen((o) => !o)}
                className="w-full flex items-center justify-between py-4 px-6 bg-secondary text-white font-poppins font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50"
                aria-expanded={tocOpen}
              >
                <span className="flex-1 text-center">Table of content</span>
                <span
                  className={`shrink-0 transition-transform duration-200 ${!tocOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </span>
              </button>
              {tocOpen && (
                <div className="border-t border-gray-100">
                  <ol className="p-5 md:p-6 space-y-3 font-poppins text-sm md:text-base text-primary list-none">
                    {TABLE_OF_CONTENTS.map((item, index) => (
                      <li key={index}>
                        <button
                          type="button"
                          className="flex items-start gap-3 w-full text-left hover:text-secondary transition-colors py-1"
                        >
                          <span className="text-secondary font-semibold shrink-0 tabular-nums">{index + 1}.</span>
                          <span>{item}</span>
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Content blocks */}
            <div className="space-y-10 md:space-y-14">
              <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-5 pb-3 border-b-2 border-secondary/30">
                  Heading 1
                </h2>
                <div className="space-y-4 font-poppins text-primary/85 leading-relaxed text-[15px] md:text-base">
                  <p>{LOREM}</p>
                  <p>{LOREM}</p>
                  <p>{LOREM}</p>
                  <p>{LOREM_2}</p>
                  <p>{LOREM_2}</p>
                </div>
              </article>

              <div
                className="w-full aspect-video rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500 font-poppins text-sm border border-gray-100"
                aria-hidden
              >
                Image or video placeholder
              </div>

              <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-5 pb-3 border-b-2 border-secondary/30">
                  Heading 1
                </h2>
                <div className="space-y-4 font-poppins text-primary/85 leading-relaxed text-[15px] md:text-base">
                  <p>{LOREM}</p>
                  <p>{LOREM}</p>
                  <p>{LOREM}</p>
                  <p>{LOREM_2}</p>
                  <p>{LOREM_2}</p>
                </div>
              </article>

              <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-5 pb-3 border-b-2 border-secondary/30">
                  Heading 1
                </h2>
                <div className="space-y-4 font-poppins text-primary/85 leading-relaxed text-[15px] md:text-base">
                  <p>{LOREM}</p>
                  <p>{LOREM}</p>
                  <p>{LOREM}</p>
                  <p>{LOREM_2}</p>
                  <p>{LOREM_2}</p>
                </div>
              </article>
            </div>
          </div>

          {/* Right column: sticky contact form */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="bg-primary rounded-2xl shadow-lg overflow-hidden border border-primary/20">
                <div className="py-5 px-6 border-b border-white/10">
                  <h2 className="font-playfair text-xl md:text-2xl font-semibold text-white text-center">
                    Contact us for a free case evaluation
                  </h2>
                </div>
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/95 text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                      disabled={status === 'submitting'}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/95 text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                      disabled={status === 'submitting'}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/95 text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                      disabled={status === 'submitting'}
                    />
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      rows={4}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/95 text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow resize-y min-h-[100px]"
                      disabled={status === 'submitting'}
                    />
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-secondary text-white font-poppins font-semibold hover:bg-secondary/90 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-70 transition-colors shadow-md"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                  <p className="mt-4 py-3.5 px-4 rounded-xl bg-primary/80 text-white/90 text-xs leading-relaxed">
                    By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may apply. / Message
                    frequency may vary. Reply Help to get more assistance / Reply Stop to opt-out of messaging.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
