'use client'

import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'

export default function SpeakWithTeam() {
  return (
    <Section className="bg-[#F8F8F8] py-10 md:py-14" id="speak-with-team">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
          <div className="flex-1">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-[34px] font-normal text-[#1a1a1a] leading-tight mb-4">
              Speak with our experienced team and understand your legal{' '}
              <span className="relative inline-block">
                options
                <span
                  className="absolute left-0 bottom-0.5 w-full h-1 bg-secondary"
                  aria-hidden="true"
                />
              </span>
              .
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
