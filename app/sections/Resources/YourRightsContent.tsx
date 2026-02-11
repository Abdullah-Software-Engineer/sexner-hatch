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
  'Bond Hearing',
  'The Grand Jury',
  'Initial Court Date / Arraignment',
  'Discovery and Pre-Trial Motions',
  'Plea Negotiations',
  'Trial Proceedings',
  'Sentencing and Post-Trial Motions',
  'More Information about Your Rights',
]

export default function YourRightsContent() {
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
          {/* Left: Table of Contents and Content */}
          <div className="flex-1 lg:w-[58.33%] space-y-6 min-w-0">
            {/* Table of Contents Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-200">
              <h2 className="font-libre text-[20px] font-semibold text-primary mb-6">
                Table of Content
              </h2>
              <ol className="space-y-3 font-poppins text-[14px] text-primary">
                {TABLE_OF_CONTENTS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary font-semibold shrink-0">{index + 1}.</span>
                    <span className="hover:text-secondary transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((sectionNum) => (
              <div key={sectionNum} className="space-y-4">
                  <h3 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary">
                  Heading {sectionNum}
                </h3>
                <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="font-poppins text-[14px] md:text-[16px] text-primary/80 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <aside className="w-full lg:w-[41.67%] lg:flex-shrink-0">
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
