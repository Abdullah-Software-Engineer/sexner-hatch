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
    // Replace with your form submission logic
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <Section className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Table of Contents and Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Table of Contents Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="font-libre text-[24px] md:text-[28px] font-semibold text-primary mb-6">
                Table of Content
              </h2>
              <ol className="space-y-3 font-poppins text-sm md:text-base text-primary">
                {TABLE_OF_CONTENTS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary font-semibold shrink-0">{index + 1}.</span>
                    <span className="hover:text-secondary transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Content Sections */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((sectionNum) => (
              <div key={sectionNum} className="space-y-4">
                <h3 className="font-libre text-[22px] md:text-[26px] font-semibold text-primary">
                  Heading {sectionNum}
                </h3>
                <p className="font-poppins text-sm md:text-base text-primary/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="font-poppins text-sm md:text-base text-primary/80 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-primary rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-white mb-6">
                  Contact us for a free case evaluation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                    disabled={status === 'submitting'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
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
                  <textarea
                    name="message"
                    placeholder="How can we help?"
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

                  <p className="text-white/80 text-xs leading-relaxed pt-1">
                    By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may apply. / Message
                    frequency may vary. Reply Help to get more assistance / Reply Stop to opt-out of messaging.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

