'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function MeetOurTeamHero() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden flex flex-col items-center justify-end pb-12 md:pb-16 lg:pb-20"
      aria-labelledby="meet-our-team-heading"
    >
      {/* Blurred city skyline background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/home-page/hero-bg.webp"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover object-center scale-105 blur-[2px] md:blur-[3px]"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-primary/75 md:bg-primary/70"
          aria-hidden
        />
      </div>

      {/* Foreground: team photo - lower half */}
      <div className="absolute inset-0 z-1 flex items-end justify-center pt-[20vh]">
        <div className="relative w-full max-w-5xl h-[45vh] min-h-[280px] md:h-[50vh] md:min-h-[320px] lg:h-[55vh]">
          <Image
            src="/About%20us/team.webp"
            alt="Our team of legal professionals"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full flex-1 min-h-0">
        {/* Title: MEET OUR TEAM */}
        <h2
          id="meet-our-team-heading"
          className="font-playfair font-light text-[36px] leading-tight sm:text-[44px] md:text-[52px] lg:text-[64px] xl:text-[72px] text-center text-white drop-shadow-lg px-4"
        >
          MEET OUR <span className="text-secondary font-semibold">TEAM</span>
        </h2>
      </div>

      {/* CTA Button: Contact us today */}
      <div className="relative z-10 flex justify-center pt-6 md:pt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-[#2A3F53]/90 border border-white/20 text-white font-poppins font-medium text-base md:text-lg hover:bg-primary hover:border-secondary/50 transition-all duration-300 group"
          aria-label="Contact us today"
        >
          <span>Contact us today</span>
          <span className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-secondary text-primary shrink-0 group-hover:bg-secondary/90 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  )
}
