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
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
    highlighted: true,
  },
  {
    id: 2,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
    highlighted: false,
  },
  {
    id: 3,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
    highlighted: false,
  },
  {
    id: 4,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.',
    highlighted: false,
  },
]

export default function WhatYouShouldExpect() {
  return (
    <Section className="bg-[#F7F9FA]" id="what-you-should-expect">
      <Container>
        {/* Upper text block */}
        <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed max-w-full mb-10 md:mb-12 xl:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
