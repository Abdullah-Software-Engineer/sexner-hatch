'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import { SITE_CONFIG } from '@/lib/constants'

type DetailedCourthouseLocationContentProps = {
  locationName: string
}

const PLACEHOLDER_PARAGRAPHS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
]

export default function DetailedCourthouseLocationContent({
  locationName,
}: DetailedCourthouseLocationContentProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Main content */}
          <div className="lg:col-span-8">
            <Link
              href="/courthouse-location"
              className="inline-flex items-center gap-2 font-poppins text-primary text-sm md:text-base hover:text-primary/80 transition-colors mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              Go back
            </Link>

            <h2 className="font-libre font-bold text-primary text-[26px] md:text-[32px] xl:text-[36px] mb-6">
              Heading 1
            </h2>
            <div className="space-y-4 mb-8">
              {PLACEHOLDER_PARAGRAPHS.map((p, i) => (
                <p key={i} className="font-poppins text-primary/90 text-sm md:text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <h3 className="font-libre font-semibold text-primary text-[22px] md:text-[26px] mb-4">
              Map to {locationName}
            </h3>
            <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100 aspect-16/10 min-h-[240px] mb-6 flex items-center justify-center">
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(locationName + ', Illinois')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins text-gray-500 text-sm hover:text-primary transition-colors"
              >
                View map on Google Maps
              </a>
              {/* Replace this block with your map image or iframe embed */}
            </div>
            <Link
              href="/courthouse-location"
              className="inline-block rounded-lg bg-primary text-white font-poppins font-semibold px-6 py-3.5 text-sm md:text-base hover:bg-primary/90 transition-colors"
            >
              View other locations
            </Link>
          </div>

          {/* Right: Sticky contact form */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 relative bg-[#28323C] rounded-xl p-6 md:p-8">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Call us"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C2.25 22.5 0 20.25 0 17.25V6.75a3 3 0 013-3H5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <h2 className="font-libre text-[22px] md:text-[26px] font-semibold text-white mb-6 pr-12">
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
                By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may apply. | Message
                frequency may vary. Reply Help to get more assistance | Reply Stop to opt-out of messaging.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
