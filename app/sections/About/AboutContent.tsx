'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { AnimatedCounter } from '../../components/ui/AnimateOnScroll'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
)

export default function AboutContent() {
  return (
    <Section className="bg-[#f5f5f5] overflow-hidden" id="about-content">
      {/* Top: Repeating marquee heading */}
      <div className="border-y border-primary/10 bg-white py-4 md:py-5">
        <div className="overflow-hidden">
          <div className="flex animate-marquee-scroll whitespace-nowrap">
            <span className="font-libre text-xl md:text-2xl lg:text-3xl font-bold text-primary px-8">
              Looking for a Criminal Defense Lawyer?
            </span>
            <span className="font-libre text-xl md:text-2xl lg:text-3xl font-bold text-primary px-8">
              Looking for a Criminal Defense Lawyer?
            </span>
            <span className="font-libre text-xl md:text-2xl lg:text-3xl font-bold text-primary px-8">
              Looking for a Criminal Defense Lawyer?
            </span>
            <span className="font-libre text-xl md:text-2xl lg:text-3xl font-bold text-primary px-8">
              Looking for a Criminal Defense Lawyer?
            </span>
            <span className="font-libre text-xl md:text-2xl lg:text-3xl font-bold text-primary px-8">
              Looking for a Criminal Defense Lawyer?
            </span>
          </div>
        </div>
      </div>

      <Container className="pt-8 md:pt-10 lg:pt-12">
        {/* Row 1: Gold card + two dark stat cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          <div className="lg:col-span-2 bg-secondary rounded-2xl p-6 md:p-8 flex flex-col justify-center">
            <h2 className="font-libre text-[20px] font-bold text-white leading-tight mb-4">
              Heading will come here Heading will come here
            </h2>
            <p className="font-poppins text-white/95 text-[14px] md:text-[16px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="font-poppins text-white/95 text-[14px] md:text-[16px] leading-relaxed mt-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className="bg-primary rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="font-libre text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter value="30+" duration={1800} />
            </div>
              <p className="font-poppins text-white/90 text-[14px] mt-2">Years of experience</p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 mt-6 px-4 py-3 bg-white text-primary rounded-xl font-poppins font-medium text-[16px] hover:bg-white/90 transition-colors w-fit"
            >
              Any button link here
              <ArrowIcon />
            </Link>
          </div>
          <div className="bg-primary rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="font-libre text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter value="20,000+" duration={1800} />
            </div>
              <p className="font-poppins text-white/90 text-[14px] mt-2">People we have helped</p>
            </div>
            <Link
              href="/result#testimonials"
              className="inline-flex items-center gap-2 mt-6 px-4 py-3 bg-white text-primary rounded-xl font-poppins font-medium text-[16px] hover:bg-white/90 transition-colors w-fit"
            >
              What our clients say
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Row 2: Team image (2/3) + dark heading card (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-4 md:mt-5 lg:mt-6">
          <div className="lg:col-span-2 relative aspect-[16/10] md:aspect-[2/1] rounded-2xl overflow-hidden">
            <Image
              src="/About%20us/team.webp"
              alt="Our team of criminal defense attorneys"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority={false}
            />
          </div>
          <div className="bg-primary rounded-2xl p-6 md:p-8 flex flex-col justify-center">
            <h2 className="font-libre text-[20px] font-bold text-white leading-tight">
              Heading will come here Heading will come here
            </h2>
          </div>
        </div>

        {/* Row 3: Heading with underline + two text columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-10 md:mt-12 lg:mt-14 pb-4">
          <div>
            <h2 className="font-libre text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              Some text which is a bit long will be here{' '}
              <span className="relative inline-block">
                like
                <span className="absolute left-0 bottom-0.5 w-full h-0.5 bg-secondary" aria-hidden="true" />
              </span>{' '}
              a heading
            </h2>
          </div>
          <div>
            <p className="font-poppins text-primary/90 text-[14px] md:text-[16px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <p className="font-poppins text-primary/90 text-[14px] md:text-[16px] leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
