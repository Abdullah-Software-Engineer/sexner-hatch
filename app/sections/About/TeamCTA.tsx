'use client'

import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

export default function TeamCTA() {
  return (
    <Section className="bg-white py-12 md:py-16">
      <Container>
        <div className="bg-[#C5A059] rounded-xl px-8 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <h2 className="font-libre font-normal text-white text-[28px] md:text-[36px] lg:text-[42px] leading-tight max-w-3xl">
            Speak with our experienced team and understand your legal options.
          </h2>
          <Link
            href="/results"
            className="shrink-0 bg-[#2A3F53] text-white font-poppins text-sm md:text-base font-medium px-6 py-3.5 rounded hover:bg-[#1e2d3d] transition-colors shadow-sm"
          >
            View our case results
          </Link>
        </div>
      </Container>
    </Section>
  )
}
