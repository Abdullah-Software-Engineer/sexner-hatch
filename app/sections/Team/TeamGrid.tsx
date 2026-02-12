'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { TEAM_MEMBERS } from '@/lib/constants'

export default function TeamGrid() {
  return (
    <Section className="bg-[#FDFDFC]" id="team-grid">
      <Container>
        <h2 className="font-libre text-[30px] md:text-[48px] font-bold text-[#3C3C3C] text-center mb-12 md:mb-14 lg:mb-16">
          Our{' '}
          <span className="relative inline-block">
            team
            <span
              className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70px] h-0.5 bg-[#D4AF37]"
              aria-hidden="true"
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.slug}`}
              className="group relative rounded-[10px] overflow-hidden bg-[#F8F8F8] shadow-md hover:shadow-lg transition-all duration-300 aspect-[3/4] max-h-[420px]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center z-10 shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M15 3h6v6h-2V5.41l-7.29 7.3-1.42-1.42L17.59 4H15V3zM3 8v13h13v-2H5V8H3z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#364F6B] flex items-center pl-3 pr-2">
                  <span className="w-0.5 h-5 bg-[#D4AF37] rounded-full shrink-0 mr-2.5" aria-hidden="true" />
                  <span className="font-poppins text-white text-[18px] md:text-[20px] font-medium truncate">
                    {member.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
