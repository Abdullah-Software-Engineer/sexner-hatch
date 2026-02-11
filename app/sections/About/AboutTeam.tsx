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

const CARD_HEIGHT = 600
const COLLAPSED_WIDTH = 90
const EXPANDED_WIDTH = 320

export default function AboutTeam() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <Section className="bg-white" id="meet-our-team">
      <Container>
        <div className="text-center mb-10 md:mb-12 xl:mb-16">
          <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            Meet our team
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 md:space-y-8 pt-4 md:pt-6">
            <p className="font-poppins text-[#5A5A5A] text-base md:text-lg leading-relaxed">
              At Mitchell S. Sexner & Associates LLC, our lawyers work as a team to determine the best legal strategy for every client. With many skilled and experienced attorneys under our umbrella, you can trust that whichever lawyer handles your case will be knowledgeable, dedicated, and focused on achieving the best outcome.
            </p>
            <p className="font-poppins text-[#5A5A5A] text-base md:text-lg leading-relaxed">
              Since 1990, we&apos;ve served over 20,000 clients by tailoring our approach to each person&apos;s unique circumstances—because no two cases are ever the same.
            </p>
            <p className="font-poppins text-[#5A5A5A] text-base md:text-lg leading-relaxed">
              When you hire us, you&apos;re not just getting a lawyer— you&apos;re gaining a full legal team committed to guiding you toward a successful result.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#CBA86B] text-white font-poppins font-medium text-lg hover:bg-secondary transition-colors shadow-sm"
              >
                View more
              </Link>
            </div>
          </div>

          {/* Expandable team cards */}
          <div className="lg:col-span-7 flex justify-end overflow-visible">
            <div className="flex items-center gap-3 sm:gap-4">
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
                    className="relative shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer flex flex-col group"
                    style={{
                      width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
                      height: CARD_HEIGHT,
                    }}
                    aria-expanded={isExpanded}
                    aria-label={`${member.name}, click to ${isExpanded ? 'collapse' : 'expand'} profile`}
                  >
                    <div className="relative w-full flex-1 min-h-0 bg-gray-200">
                      <Image
                        src={member.image}
                        alt=""
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out"
                        style={{
                           transform: isExpanded ? 'scale(1)' : 'scale(1.05)',
                        }}
                        sizes="(max-width: 1024px) 240px, 400px"
                      />
                      
                      {/* Dark overlay gradient at bottom */}
                      <div 
                        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1e2b3a]/90 via-[#1e2b3a]/40 to-transparent"
                        aria-hidden="true"
                      />

                      <Link
                        href={member.link}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C8A24F] flex items-center justify-center z-10 shadow-lg hover:scale-105 transition-transform"
                        aria-label={`View full profile: ${member.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 rotate-45">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>
                      </Link>

                      {/* Name overlay - only when expanded */}
                      <div
                        className="absolute bottom-8 left-6 right-6 transition-all duration-500 delay-100"
                        style={{ 
                          opacity: isExpanded ? 1 : 0,
                          transform: isExpanded ? 'translateY(0)' : 'translateY(20px)'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-8 bg-[#C8A24F] rounded-full shrink-0" aria-hidden="true" />
                          <span className="font-poppins text-white text-xl font-bold tracking-wide drop-shadow-md">
                            {member.name}
                          </span>
                        </div>
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
