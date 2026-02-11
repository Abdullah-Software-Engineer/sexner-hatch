'use client'

import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import { FadeUp } from '../../components/ui/AnimateOnScroll'

export default function SpeakWithTeam() {
  return (
    <Section className="bg-white py-8 sm:py-10 md:py-14" id="speak-with-team">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 sm:gap-6 md:gap-8">
          <FadeUp className="flex-1">
            <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-6 md:mb-8 relative inline-block">
              Speak with our experienced team and understand your legal options
              <span className="absolute left-0 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
            </h2>
            <p className="font-poppins text-[14px] md:text-[16px] text-[#6b6b6b] leading-relaxed max-w-[720px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consecte.
            </p>
          </FadeUp>
          <FadeUp delay={0.12} className="shrink-0 md:pt-1">
            <Button
              href="#contact"
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
    </Section>
  )
}
