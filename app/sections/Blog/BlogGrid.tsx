'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const BLOG_IMAGE_PATH = '/home/home-page/hero-bg.webp'

const HEADLINE = "Jury Returns Verdict in Sean 'P Diddy' Combs Criminal Trial"

const SHORT_DESC = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'

const LONG_DESC =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet.'

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
      clipRule="evenodd"
    />
  </svg>
)

// Large card component with image
function LargeCard({ className }: { className?: string }) {
  return (
    <article
      className={`rounded-lg overflow-hidden bg-primary flex flex-col shadow-lg ${className || ''}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={BLOG_IMAGE_PATH}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1 bg-primary">
        <h3 className="font-poppins text-lg md:text-xl font-semibold text-white mb-2 line-clamp-2">
          {HEADLINE}
        </h3>
        <p className="font-poppins text-sm text-white/90 mb-4 flex-1">
          {SHORT_DESC}
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-poppins font-medium text-sm bg-secondary text-white px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity w-fit"
          aria-label={`Read more: ${HEADLINE}`}
        >
          Read more
          <ArrowIcon />
        </Link>
      </div>
    </article>
  )
}

// Small card component (text-only, golden background)
function SmallCard({ className }: { className?: string }) {
  return (
    <article
      className={`rounded-lg overflow-hidden bg-secondary flex flex-col p-5 md:p-6 shadow-lg ${className || ''}`}
    >
      <h3 className="font-poppins text-lg md:text-xl font-semibold text-white mb-2 line-clamp-2">
        {HEADLINE}
      </h3>
      <p className="font-poppins text-sm text-white/95 mb-4 flex-1 line-clamp-4">
        {LONG_DESC}
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-poppins font-medium text-sm bg-secondary/90 text-white px-4 py-2.5 rounded-md hover:bg-secondary transition-colors w-fit border border-white/30"
        aria-label={`Read more: ${HEADLINE}`}
      >
        Read more
        <ArrowIcon />
      </Link>
    </article>
  )
}

export default function BlogGrid() {
  return (
    <Section className="bg-[#F5F5F5]" id="blog-grid">
      <Container>
        {/* Row 1: Large (left) + Small (middle) + Small (right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          <div className="md:col-span-1">
            <LargeCard />
          </div>
          <div className="md:col-span-1">
            <SmallCard />
          </div>
          <div className="md:col-span-1">
            <SmallCard />
          </div>
        </div>

        {/* Row 2: Small (left) + Large (middle) + Small (right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          <div className="md:col-span-1">
            <SmallCard />
          </div>
          <div className="md:col-span-1">
            <LargeCard />
          </div>
          <div className="md:col-span-1">
            <SmallCard />
          </div>
        </div>

        {/* Row 3: Large (left) + Small (middle) + Small (right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="md:col-span-1">
            <LargeCard />
          </div>
          <div className="md:col-span-1">
            <SmallCard />
          </div>
          <div className="md:col-span-1">
            <SmallCard />
          </div>
        </div>
      </Container>
    </Section>
  )
}

