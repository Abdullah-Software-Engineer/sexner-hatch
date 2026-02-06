'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

const teamMembers = [
  { id: 1, name: 'Mitchell S. Sexner', image: '/About%20us/member.png', link: '#' },
  { id: 2, name: 'Mitchell S. Sexner', image: '/About%20us/member.png', link: '#' },
  { id: 3, name: 'Mitchell S. Sexner', image: '/About%20us/member.png', link: '#' },
  { id: 4, name: 'Mitchell S. Sexner', image: '/About%20us/member.png', link: '#' },
]

const CARD_HEIGHT = 420
const COLLAPSED_WIDTH = 72
const EXPANDED_WIDTH = 240

export default function AboutTeam() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <Section className="bg-[#FDFDFC]" id="meet-our-team">
      <Container>
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#3C3C3C] text-center mb-12 md:mb-14 lg:mb-16">
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
          <div className="lg:col-span-5 space-y-5">
            <p className="font-poppins text-[#5A5A5A] text-base md:text-lg leading-relaxed">
              At Mitchell S. Sexner & Associates LLC, our lawyers work as a team to determine the best legal strategy for every client. With many skilled and experienced attorneys under our umbrella, you can trust that whichever lawyer handles your case will be knowledgeable, dedicated, and focused on achieving the best outcome.
            </p>
            <p className="font-poppins text-[#5A5A5A] text-base md:text-lg leading-relaxed">
              Since 1990, we&apos;ve served over 20,000 clients by tailoring our approach to each person&apos;s unique circumstances—because no two cases are ever the same.
            </p>
            <p className="font-poppins text-[#5A5A5A] text-base md:text-lg leading-relaxed">
              When you hire us, you&apos;re not just getting a lawyer— you&apos;re gaining a full legal team committed to guiding you toward a successful result.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#CBA86B] text-white font-poppins font-medium text-base hover:opacity-90 transition-opacity"
            >
              View more
            </Link>
          </div>

          {/* Expandable team cards */}
          <div className="lg:col-span-7 flex justify-end overflow-visible">
            <div className="flex items-end gap-0">
              {teamMembers.map((member, index) => {
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
                        href={member.link}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center z-10 shadow hover:opacity-90 transition-opacity"
                        aria-label={`View full profile: ${member.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                          <path d="M15 3h6v6h-2V5.41l-7.29 7.3-1.42-1.42L17.59 4H15V3zM3 8v13h13v-2H5V8H3z" />
                        </svg>
                      </Link>
                      {/* Name overlay - only when expanded */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-14 bg-[#364F6B] flex items-center pl-3 pr-2 transition-opacity duration-300"
                        style={{ opacity: isExpanded ? 1 : 0 }}
                      >
                        <span className="w-0.5 h-5 bg-[#D4AF37] rounded-full shrink-0 mr-2.5" aria-hidden="true" />
                        <span className="font-poppins text-white text-base font-medium truncate">
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
      </Container>
    </Section>
  )
}
