'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const ATTORNEY_PROFILES = [
  { label: 'Justia Profile', href: '#' },
  { label: 'Findlaw Profile', href: '#' },
  { label: 'HG.org Profile', href: '#' },
  { label: 'Martindale Profile', href: '#' },
  { label: 'Avvo Profile', href: '#' },
  { label: 'Lawyer.com Profile', href: '#' },
  { label: 'National Association of Distinguished Counsel', href: '#' },
  { label: 'Better Business Bureau Profile', href: '#' },
  { label: 'Google Business Profile', href: '#' },
]

export default function AttorneyProfileSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <Section className="bg-white" id="attorney-profile">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left column: Photo, name, title, bio, contact, profiles */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* Header image with overlay */}
            <div className="relative w-full aspect-4/3 max-h-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/About%20us/member.png"
                alt="Mitchell S. Sexner, Founding Attorney"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority
              />
              {/* Upward arrow in top right */}
              <Link
                href="#attorney-profile"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shadow-md hover:opacity-90 transition-opacity"
                aria-label="Scroll to profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                </svg>
              </Link>
              {/* Overlay: dark bar with name and title */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary/95 px-5 py-4 md:px-6 md:py-5 flex items-center gap-3">
                <span className="w-1 h-12 md:h-14 bg-secondary rounded-full shrink-0" aria-hidden />
                <div>
                  <h2 className="font-libre font-bold text-white text-xl sm:text-2xl md:text-3xl">
                    Mitchell S. Sexner
                  </h2>
                  <p className="font-poppins text-white/90 text-sm md:text-base mt-0.5">
                    Founding Attorney
                  </p>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="font-poppins text-[#3C3C3C] text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Mitchell S. Sexner & Associates LLC was founded in 1990. Mitchell S. Sexner is a graduate of Northwestern University and IIT Chicago Kent College of Law. During his career at the Cook County State&apos;s Attorney&apos;s Office, he prosecuted a wide range of criminal offenses, handled many cases, supervised other prosecutors, and made media appearances. His law offices have since expanded to serve clients throughout the region.
              </p>
              <p>
                The firm maintains high standards and a dedicated team. We have had success in securing over $25,000,000 in settlements and verdicts for our clients.
              </p>
            </div>

            {/* Contact line */}
            <p className="font-poppins text-[#3C3C3C] text-base leading-relaxed">
              For further information or to set up a free consultation to discuss your legal matter, contact Mitch Sexner at{' '}
              <a href="tel:+13122623576" className="font-semibold text-secondary hover:underline">
                (312) 262-3576
              </a>
              {' '}or by email at{' '}
              <a href="mailto:mitch@sexner.com" className="font-semibold text-secondary hover:underline">
                mitch@sexner.com
              </a>
              .
            </p>

            {/* Attorney profiles */}
            <div className="pt-2">
              <h3 className="font-libre font-semibold text-primary text-lg md:text-xl mb-3">
                ATTORNEY PROFILES FOR MITCHELL S. SEXNER
              </h3>
              <p className="text-sm text-[#3C3C3C]">
                {ATTORNEY_PROFILES.map((item, i) => (
                  <span key={item.label}>
                    <Link href={item.href} className="text-secondary font-medium hover:underline">
                      {item.label}
                    </Link>
                    {i < ATTORNEY_PROFILES.length - 1 && <span className="text-gray-400 mx-1">|</span>}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Right column: Contact form card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-xl overflow-hidden shadow-lg sticky top-24">
              {/* Form header */}
              <div className="bg-primary px-5 py-4 md:px-6 md:py-5">
                <h3 className="font-libre font-semibold text-white text-lg md:text-xl">
                  Contact us for a free case evaluation
                </h3>
              </div>
              {/* Form body */}
              <div className="bg-white border border-gray-200 border-t-0 px-5 py-5 md:px-6 md:py-6">
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
                    className="w-full py-3.5 rounded-lg bg-secondary text-white font-poppins font-semibold hover:opacity-90 focus:ring-2 focus:ring-secondary focus:ring-offset-2 outline-none disabled:opacity-70 transition-opacity"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
                <p className="text-gray-500 text-xs leading-relaxed mt-4">
                  By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may apply. / Message frequency may vary. Reply Help to get more assistance / Reply Stop to opt-out of messaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
