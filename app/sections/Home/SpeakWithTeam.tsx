'use client'

import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'

export default function SpeakWithTeam() {
  return (
    <Section className="bg-[#F8F8F8] py-8 sm:py-10 md:py-14" id="speak-with-team">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 sm:gap-6 md:gap-8">
          <div className="flex-1">
            <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
              Speak with our experienced team and understand your legal options
              <span className="absolute left-0 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
            </h2>
            <p className="font-poppins text-sm md:text-base text-[#6b6b6b] leading-relaxed max-w-[720px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consecte.
            </p>
          </div>
          <div className="shrink-0 md:pt-1">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="rounded-lg shadow-md hover:shadow-lg w-full md:w-auto"
              ariaLabel="Get started with a consultation"
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
