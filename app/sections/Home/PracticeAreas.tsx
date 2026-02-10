'use client'

import Link from 'next/link'
import { FaGavel, FaFileContract, FaShieldAlt, FaBalanceScale, FaLock, FaUserShield } from 'react-icons/fa'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import { PRACTICE_AREAS } from '@/lib/constants'

const iconMap = {
  '1': FaGavel,
  '2': FaFileContract,
  '3': FaShieldAlt,
  '4': FaBalanceScale,
  '5': FaLock,
  '6': FaUserShield,
}

export default function PracticeAreas() {
  return (
    <Section className="bg-primary" id="practice-areas">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10 md:mb-12">
          <h2 className="text-[30px] md:text-[48px] font-normal text-white relative inline-block">
            Our Practice Areas & Services
            <span className="absolute left-0 -bottom-1.5 w-[70px] h-1 bg-secondary" aria-hidden="true"></span>
          </h2>
          <Button
            href="/services"
            variant="primary"
            size="sm"
            className="self-start md:self-auto"
            ariaLabel="View all legal services"
          >
            View all services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 xl:gap-7">
          {PRACTICE_AREAS.map((area) => {
            const IconComponent = iconMap[area.id as keyof typeof iconMap]
            return (
              <Link
                key={area.id}
                href={`/practice-areas/${area.slug}`}
                className="bg-white rounded-xl p-6 md:p-7 xl:p-10 transition-all hover:bg-secondary hover:-translate-y-1 hover:shadow-xl group no-underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
                aria-label={`Learn more about ${area.title}`}
              >
                <div
                  className="w-[50px] h-[50px] md:w-[56px] md:h-[56px] xl:w-[60px] xl:h-[60px] min-w-[50px] min-h-[50px] md:min-w-[56px] md:min-h-[56px] xl:min-w-[60px] xl:min-h-[60px] bg-primary rounded-full flex items-center justify-center mb-5 transition-all group-hover:bg-white"
                  aria-hidden="true"
                >
                  <IconComponent className="w-6 h-6 md:w-[26px] md:h-[26px] xl:w-7 xl:h-7 text-white transition-colors group-hover:text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 transition-colors group-hover:text-white">
                  {area.title}
                </h3>
                <p className="font-poppins text-sm font-normal text-black leading-relaxed transition-colors group-hover:text-white">
                  {area.description}
                </p>
              </Link>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
