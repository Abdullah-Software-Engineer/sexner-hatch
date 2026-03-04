'use client'

import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

function ChartLineIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 6-6" />
    </svg>
  )
}

const expectCards = [
  {
    id: 1,
    title: 'Professionalism',
    description:
      'Every attorney is a dedicated, compassionate professional. We collaborate to find creative solutions that meet your specific needs and point your life in a positive direction.',
    highlighted: true,
  },
  {
    id: 2,
    title: 'Fair Fees',
    description:
      'We believe quality representation should be accessible. For criminal or traffic matters, flat fees are quoted upfront with flexible payment plans available in most cases.',
    highlighted: false,
  },
  {
    id: 3,
    title: 'Total Honesty',
    description:
      'We tell it like it is. A successful legal outcome requires a relationship built on the truth, ensuring you have the realistic information needed to make vital decisions.',
    highlighted: false,
  },
  {
    id: 4,
    title: '100% Effort',
    description:
      'No one will work harder for your results. We treat our clients like extended family, taking immense pride in every success we achieve on your behalf.',
    highlighted: false,
  },
]

export default function WhatYouShouldExpect() {
  return (
    <Section className="bg-[#F7F9FA]" id="what-you-should-expect">
      <Container>
        {/* Upper text block */}
        <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed max-w-full mb-10 md:mb-12 xl:mb-16">
          Since 1990, our mission has been simple: deliver elite legal representation with the respect every client deserves. What began as a single attorney has grown into a powerhouse team serving clients across Illinois, while staying true to our commitment to excellence and results. With more than 20,000 clients helped, we continue to prioritize one thing above all—protecting your future. Contact us today to experience the difference our skill, dedication, and proven track record can make.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* Left column: heading, accent, paragraph, button */}
          <div className="order-2 lg:order-1">
            <h2 className="font-playfair font-semibold text-primary text-[30px] md:text-[48px] leading-tight">
              What you should
              <br />
              expect
            </h2>
            <span
              className="mt-2 block w-24 h-1 bg-secondary rounded"
              aria-hidden="true"
            />
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
              Our firm is built on a foundation of integrity and tireless advocacy. We provide the high-level legal assistance you need during life&apos;s most challenging moments.
            </p>
            <Link
              href="/practice-areas"
              className="inline-block mt-8 px-6 py-3.5 rounded-lg bg-secondary text-white font-poppins font-medium text-[14px] hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 transition-colors"
            >
              View more
            </Link>
          </div>

          {/* Right column: 2x2 card grid */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {expectCards.map((card) => (
              <article
                key={card.id}
                className={`rounded-xl p-5 md:p-6 flex flex-col gap-3 transition-shadow hover:shadow-md ${
                  card.highlighted
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary border border-gray-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`shrink-0 ${card.highlighted ? 'text-white' : 'text-primary'}`}
                    aria-hidden="true"
                  >
                    <ChartLineIcon className="w-6 h-6 md:w-7 md:h-7" />
                  </span>
                  <h3 className="font-libre font-semibold text-[20px] leading-tight">
                    {card.title}
                  </h3>
                </div>
                <p
                  className={`text-[14px] leading-relaxed ${
                    card.highlighted ? 'text-white/90' : 'text-gray-600'
                  }`}
                >
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
