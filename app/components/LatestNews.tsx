'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from './ui/Container'
import Section from './ui/Section'
import Button from './ui/Button'

// Placeholder for featured article image – replace with your newspaper/legal image when available
const FEATURED_IMAGE_PATH = '/home/home-page/hero-bg.webp'

const HEADLINE =
  "Jury Returns Verdict in Sean 'P Diddy' Combs Criminal Trial"

const SHORT_DESC =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'

const LONG_DESC =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet.'

export default function LatestNews() {
  return (
    <Section className="bg-[#F5F5F5]" id="latest-news">
      <Container>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
          <h2 className="font-playfair text-[28px] md:text-[36px] font-normal text-primary">
            <span className="relative inline-block">
              Latest
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-secondary"
                aria-hidden
              />
            </span>{' '}
            news
          </h2>
          <Button
            href="/practice-areas"
            variant="primary"
            size="sm"
            ariaLabel="View all services"
          >
            View all services
          </Button>
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Featured card – dark blue with image */}
          <article className="rounded-xl overflow-hidden bg-primary flex flex-col">
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <Image
                src={FEATURED_IMAGE_PATH}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Geometric overlay */}
              <div
                className="absolute inset-0 bg-primary/40"
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
                aria-hidden
              />
            </div>
            <div className="p-5 md:p-6 flex flex-col flex-1">
              <h3 className="font-poppins text-lg md:text-xl font-semibold text-white mb-2 line-clamp-2">
                {HEADLINE}
              </h3>
              <p className="font-poppins text-sm text-white/90 mb-4 flex-1">
                {SHORT_DESC}
              </p>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 font-poppins font-medium text-sm bg-secondary text-white px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity w-fit"
                aria-label="Read more: Jury Returns Verdict"
              >
                Read more
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          {/* Standard cards – gold background */}
          {[1, 2].map((i) => (
            <article
              key={i}
              className="rounded-xl overflow-hidden bg-secondary flex flex-col p-5 md:p-6"
            >
              <h3 className="font-poppins text-lg md:text-xl font-semibold text-white mb-2 line-clamp-2">
                {HEADLINE}
              </h3>
              <p className="font-poppins text-sm text-white/95 mb-4 flex-1 line-clamp-4">
                {LONG_DESC}
              </p>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 font-poppins font-medium text-sm bg-primary text-white px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity w-fit"
                aria-label={`Read more article ${i}`}
              >
                Read more
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
