'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { FaGavel, FaFileContract, FaShieldAlt, FaBalanceScale, FaLock, FaUserShield } from 'react-icons/fa'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import { FadeUp, StaggerChildren } from '../../components/ui/AnimateOnScroll'
import { PRACTICE_AREAS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const iconMap = {
  '1': FaGavel,
  '2': FaFileContract,
  '3': FaShieldAlt,
  '4': FaBalanceScale,
  '5': FaLock,
  '6': FaUserShield,
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] },
  },
}

export default function PracticeAreas() {
  return (
    <Section className="bg-primary" id="practice-areas">
      <Container>
        <FadeUp className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10 md:mb-12">
          <h2 className="text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] font-normal text-white relative inline-block">
            Our Practice Areas & Services
            <span className="absolute left-0 -bottom-1.5 w-[70px] h-1 bg-secondary" aria-hidden="true"></span>
          </h2>
          <motion.div
            className="self-start md:self-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Button
              href="/services"
              variant="primary"
              size="sm"
              className="w-full"
              ariaLabel="View all legal services"
            >
              View all services
            </Button>
          </motion.div>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 xl:gap-7" stagger={0.08} amount={0.08}>
          {PRACTICE_AREAS.map((area, index) => {
            const IconComponent = iconMap[area.id as keyof typeof iconMap]
            const isHighlighted = index === 0
            return (
              <motion.div
                key={area.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="h-full"
              >
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className={cn(
                    'rounded-xl p-6 md:p-7 xl:p-10 transition-all duration-300 hover:shadow-xl group no-underline focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary block h-full',
                    isHighlighted
                      ? 'bg-secondary text-white'
                      : 'bg-white text-black hover:bg-secondary hover:text-white'
                  )}
                  aria-label={`Learn more about ${area.title}`}
                >
                  <div
                    className={cn(
                      'w-[50px] h-[50px] md:w-[56px] md:h-[56px] xl:w-[60px] xl:h-[60px] min-w-[50px] min-h-[50px] md:min-w-[56px] md:min-h-[56px] xl:min-w-[60px] xl:min-h-[60px] rounded-full flex items-center justify-center mb-5 transition-all',
                      isHighlighted ? 'bg-white/20 group-hover:bg-white/30' : 'bg-primary group-hover:bg-white'
                    )}
                    aria-hidden="true"
                  >
                    <IconComponent className={cn(
                      'w-6 h-6 md:w-[26px] md:h-[26px] xl:w-7 xl:h-7 transition-colors',
                      isHighlighted ? 'text-white' : 'text-white group-hover:text-secondary'
                    )} />
                  </div>
                  <h3 className={cn(
                    'text-[20px] font-semibold mb-3 transition-colors',
                    isHighlighted ? 'text-white' : 'text-black group-hover:text-white'
                  )}>
                    {area.title}
                  </h3>
                  <p className={cn(
                    'font-poppins text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-normal leading-relaxed transition-colors',
                    isHighlighted ? 'text-white/95' : 'text-black group-hover:text-white'
                  )}>
                    {area.description}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
