'use client'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import { FadeUp } from '../../components/ui/AnimateOnScroll'

export default function SpeakWithTeam() {
  return (
      <Container className="py-8 sm:py-10 md:py-14 bg-white ">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 sm:gap-6 md:gap-8">
          <FadeUp className="flex-1">
            <h2 className="text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] font-normal text-black mb-6 md:mb-8">
              Speak with our experienced team and{' '}
              <span className="relative inline-block">
                understand
                <span className="absolute left-0 -bottom-0.5 w-full h-1 bg-secondary" aria-hidden="true" />
              </span>{' '}
              your legal options.
            </h2>
            <p className="font-poppins text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-black/80 leading-relaxed max-w-[720px]">
              Your consultation is completely confidential. We&apos;ll listen to your situation, explain your rights clearly and outline the strongest path forward so you can make informed decisions with confidence.
            </p>
          </FadeUp>
          <FadeUp delay={0.12} className="shrink-0 md:pt-1">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="rounded-lg shadow-md hover:shadow-lg w-full md:w-auto transition-shadow duration-300"
              ariaLabel="Get started with a consultation"
            >
              Get started
            </Button>
          </FadeUp>
        </div>
      </Container>
  )
}
