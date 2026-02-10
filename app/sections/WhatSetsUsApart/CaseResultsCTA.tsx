'use client'

import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function CaseResultsCTA() {
  return (
    <section className="bg-white py-8 md:py-10" aria-labelledby="case-results-cta-heading">
      <Container>
        <div className="bg-secondary rounded-xl md:rounded-2xl px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">
          <h2
            id="case-results-cta-heading"
            className="font-playfair font-semibold text-white text-[30px] md:text-[48px] leading-tight max-w-xl"
          >
            Speak with our experienced team
            <br />
            and understand your legal options.
          </h2>
          <Link
            href="/results"
            className="shrink-0 px-6 py-3.5 rounded-lg bg-primary text-white font-poppins font-medium text-[14px] hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary transition-colors w-full sm:w-auto text-center"
          >
            View our case results
          </Link>
        </div>
      </Container>
    </section>
  )
}
