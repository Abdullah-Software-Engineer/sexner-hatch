'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const CATEGORIES = [
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

const HEADLINE = "Jury Returns Verdict in Sean 'P Diddy' Combs Criminal Trial"
const SHORT_DESC =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
const FEATURED_IMAGE_PATH = '/home/home-page/hero-bg.webp'

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 shrink-0"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
      clipRule="evenodd"
    />
  </svg>
)

export default function BlogDetailContent() {
  const [categoriesOpen, setCategoriesOpen] = useState(true)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <Section className="bg-white" id="blog-detail-content">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">
          {/* Main content column */}
          <div className="lg:col-span-8">
            <article>
              <h2 className="font-libre font-bold text-primary text-2xl md:text-3xl mb-4">
                Heading 1
              </h2>
              <p className="font-libre text-primary text-base leading-relaxed mb-6">{LOREM}</p>
              <p className="font-libre text-primary text-base leading-relaxed mb-6">{LOREM}</p>

              <div
                className="w-full h-[200px] rounded-lg bg-gray-200 mb-6 flex items-center justify-center text-gray-500 font-libre text-sm"
                aria-hidden
              >
                Image placeholder
              </div>

              <p className="font-libre text-primary text-base leading-relaxed mb-6">{LOREM}</p>
              <p className="font-libre text-primary text-base leading-relaxed mb-6">{LOREM}</p>

              <div
                className="w-full h-[200px] rounded-lg bg-gray-200 mb-6 flex items-center justify-center text-gray-500 font-libre text-sm"
                aria-hidden
              >
                Image placeholder
              </div>

              <p className="font-libre text-primary text-base leading-relaxed mb-6">{LOREM}</p>
              <p className="font-libre text-primary text-base leading-relaxed">{LOREM}</p>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Search */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="w-full pl-4 pr-12 py-3 rounded-lg bg-gray-100 text-primary placeholder:text-gray-500 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            {/* Categories */}
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <button
                type="button"
                onClick={() => setCategoriesOpen((o) => !o)}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary text-white font-libre font-medium text-left"
                aria-expanded={categoriesOpen}
              >
                <span>Categories</span>
                <span
                  className={`transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {categoriesOpen && (
                <ul className="bg-white divide-y divide-gray-100">
                  {CATEGORIES.map((label, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="block px-4 py-3 font-libre text-sm text-primary hover:bg-secondary/10 focus:bg-secondary/10 transition-colors"
                      >
                        {i + 1}. {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Contact form */}
            <div className="rounded-lg overflow-hidden bg-primary p-5 md:p-6">
              <h3 className="font-libre font-semibold text-white text-lg md:text-xl text-center mb-4">
                Contact us for a free case evaluation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-shadow"
                  disabled={status === 'submitting'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-shadow"
                  disabled={status === 'submitting'}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-shadow"
                  disabled={status === 'submitting'}
                />
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-shadow resize-y min-h-[100px]"
                  disabled={status === 'submitting'}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-lg bg-secondary text-white font-libre font-semibold hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-70 transition-opacity"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </button>
                <p className="text-white/80 text-xs leading-relaxed pt-1">
                  By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may apply. /
                  Message frequency may vary. Reply Help to get more assistance / Reply Stop to opt-out of
                  messaging.
                </p>
              </form>
            </div>

            {/* Latest news */}
            <div>
              <h3 className="font-libre font-semibold text-primary text-xl text-center mb-4">
                Latest news
              </h3>
              <ul className="space-y-4">
                {/* First: with image, white card */}
                <li>
                  <article className="rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={FEATURED_IMAGE_PATH}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-libre font-semibold text-primary text-base mb-2 line-clamp-2">
                        {HEADLINE}
                      </h4>
                      <p className="font-libre text-sm text-gray-600 mb-3 line-clamp-2">{SHORT_DESC}</p>
                      <Link
                        href="/blog-detail"
                        className="inline-flex items-center gap-2 font-libre font-medium text-sm bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity w-fit"
                        aria-label={`Read more: ${HEADLINE}`}
                      >
                        Read more
                        <ArrowIcon />
                      </Link>
                    </div>
                  </article>
                </li>
                {/* Next 4: gold background */}
                {[1, 2, 3, 4].map((i) => (
                  <li key={i}>
                    <article className="rounded-lg overflow-hidden bg-secondary p-4">
                      <h4 className="font-libre font-semibold text-white text-base mb-2 line-clamp-2">
                        {HEADLINE}
                      </h4>
                      <p className="font-libre text-sm text-white/95 mb-3 line-clamp-2">{SHORT_DESC}</p>
                      <Link
                        href="/blog-detail"
                        className="inline-flex items-center gap-2 font-libre font-medium text-sm bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity w-fit"
                        aria-label={`Read more article ${i}`}
                      >
                        Read more
                        <ArrowIcon />
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
