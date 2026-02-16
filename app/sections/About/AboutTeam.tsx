'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { TEAM_MEMBERS } from '@/lib/constants'

const CARD_HEIGHT = 420
const COLLAPSED_WIDTH = 72
const EXPANDED_WIDTH = 240

const contentVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

export default function AboutTeam() {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const selectedMember = TEAM_MEMBERS[expandedIndex]

  return (
    <Section className="bg-[#FDFDFC]" id="meet-our-team">
      <Container>
        <h2 className="font-libre text-[30px] md:text-[48px] font-bold text-[#3C3C3C] text-center mb-12 md:mb-14 lg:mb-16">
          Meet our{' '}
          <span className="relative inline-block">
            team
            <span
              className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70px] h-0.5 bg-[#D4AF37]"
              aria-hidden="true"
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column: intro text + animated member bio */}
          <div className="lg:col-span-5 space-y-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={expandedIndex}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                className="space-y-5"
              >
                <p className="font-poppins text-[#5A5A5A] text-[14px] md:text-[16px] leading-relaxed">
                  At Mitchell S. Sexner & Associates LLC, our lawyers work as a team to determine the best legal strategy for every client. With many skilled and experienced attorneys under our umbrella, you can trust that whichever lawyer handles your case will be knowledgeable, dedicated, and focused on achieving the best outcome.
                </p>
                <p className="font-poppins text-[#5A5A5A] text-[14px] md:text-[16px] leading-relaxed">
                  Since 1990, we&apos;ve served over 20,000 clients by tailoring our approach to each person&apos;s unique circumstances—because no two cases are ever the same.
                </p>
                <p className="font-poppins text-[#5A5A5A] text-[14px] md:text-[16px] leading-relaxed">
                  When you hire us, you&apos;re not just getting a lawyer— you&apos;re gaining a full legal team committed to guiding you toward a successful result.
                </p>
                {/* Selected member bio - animates when card changes */}
                <div className="pt-2 border-t border-[#e5e7eb]">
                  <h3 className="font-poppins font-bold text-[#3C3C3C] text-base mb-2">
                    {selectedMember.name}
                    {selectedMember.title && (
                      <span className="font-normal text-[#5A5A5A]"> — {selectedMember.title}</span>
                    )}
                  </h3>
                  <p className="font-poppins text-[#5A5A5A] text-[14px] md:text-[16px] leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#CBA86B] text-white font-poppins font-medium text-base hover:opacity-90 transition-opacity"
            >
              View more
            </Link>
          </div>

          {/* Team cards: grid on mobile (no overlap), expandable stack on desktop */}
          <div className="lg:col-span-7">
            {/* Mobile: 2-column grid, equal cards, no overlap */}
            <div className="lg:hidden grid grid-cols-2 gap-4 min-w-0">
              {TEAM_MEMBERS.map((member, index) => (
                <div
                  key={member.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setExpandedIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setExpandedIndex(index)
                    }
                  }}
                  className={`relative rounded-[10px] overflow-hidden bg-[#F8F8F8] shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col aspect-3/4 min-h-0 ${
                    expandedIndex === index ? 'ring-2 ring-[#D4AF37] ring-offset-2' : ''
                  }`}
                  aria-expanded={expandedIndex === index}
                  aria-label={`${member.name}, click to ${expandedIndex === index ? 'collapse' : 'expand'} profile`}
                >
                  <div className="relative w-full flex-1 min-h-0 bg-[#F8F8F8]">
                    <Image
                      src={member.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 240px"
                    />
                    <Link
                      href={`/team/${member.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center z-10 shadow hover:opacity-90 transition-opacity"
                      aria-label={`View full profile: ${member.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                        <path d="M15 3h6v6h-2V5.41l-7.29 7.3-1.42-1.42L17.59 4H15V3zM3 8v13h13v-2H5V8H3z" />
                      </svg>
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#364F6B] flex items-center pl-3 pr-2">
                      <span className="w-0.5 h-5 bg-[#D4AF37] rounded-full shrink-0 mr-2.5" aria-hidden="true" />
                      <span className="font-poppins text-white text-[16px] md:text-[18px] font-medium truncate">
                        {member.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: overlapping expandable cards */}
            <div className="hidden lg:flex justify-end overflow-visible">
              <div className="flex items-end gap-0">
                {TEAM_MEMBERS.map((member, index) => {
                  const isExpanded = expandedIndex === index
                  return (
                    <div
                      key={member.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setExpandedIndex(index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setExpandedIndex(index)
                        }
                      }}
                      className="relative shrink-0 rounded-[10px] overflow-hidden bg-[#F8F8F8] shadow-md hover:shadow-lg transition-all duration-300 ease-out cursor-pointer flex flex-col"
                      style={{
                        width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
                        height: CARD_HEIGHT,
                        zIndex: isExpanded ? 20 : 10 - index,
                      }}
                      aria-expanded={isExpanded}
                      aria-label={`${member.name}, click to ${isExpanded ? 'collapse' : 'expand'} profile`}
                    >
                      <div className="relative w-full flex-1 min-h-0 bg-[#F8F8F8]">
                        <Image
                          src={member.image}
                          alt=""
                          fill
                          className="object-cover transition-[object-position] duration-300"
                          style={{
                            objectPosition: isExpanded ? 'center center' : 'right center',
                          }}
                          sizes="(max-width: 1024px) 240px, 240px"
                        />
                        <Link
                          href={`/team/${member.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center z-10 shadow hover:opacity-90 transition-opacity"
                          aria-label={`View full profile: ${member.name}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                            <path d="M15 3h6v6h-2V5.41l-7.29 7.3-1.42-1.42L17.59 4H15V3zM3 8v13h13v-2H5V8H3z" />
                          </svg>
                        </Link>
                        <div
                          className="absolute bottom-0 left-0 right-0 h-14 bg-[#364F6B] flex items-center pl-3 pr-2 transition-opacity duration-300"
                          style={{ opacity: isExpanded ? 1 : 0 }}
                        >
                          <span className="w-0.5 h-5 bg-[#D4AF37] rounded-full shrink-0 mr-2.5" aria-hidden="true" />
                          <span className="font-poppins text-white text-[20px] font-medium truncate">
                            {member.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
