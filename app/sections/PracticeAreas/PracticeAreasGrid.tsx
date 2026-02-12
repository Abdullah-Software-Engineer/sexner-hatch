'use client'

import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import ScrollFollowingForm from '../../components/ScrollFollowingForm'
import ServiceCard from '../../components/ui/ServiceCard'
import { PRACTICE_AREAS_FULL } from '@/lib/constants'

const DEFAULT_DESCRIPTION =
  'Our experienced criminal defense attorneys provide skilled representation in this area. Contact us for a confidential case evaluation.'

export default function PracticeAreasGrid() {
  return (
    <Section className="bg-white py-14 md:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Left: Service cards */}
          <div className="flex-1 lg:w-[58.33%] min-w-0 space-y-6">
            <p className="font-poppins text-primary text-[14px] md:text-[16px] leading-relaxed">
              We handle a wide range of criminal defense matters. Select a practice area below to learn more about our experience and how we can help.
            </p>
            <div className="space-y-9">
              {PRACTICE_AREAS_FULL.map((area, index) => (
                <ServiceCard
                  key={area.slug}
                  title={area.title}
                  description={DEFAULT_DESCRIPTION}
                  href={`/practice-areas/${area.slug}`}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>

          {/* Right: Existing contact us card */}
          <ScrollFollowingForm />
        </div>
      </Container>
    </Section>
  )
}
