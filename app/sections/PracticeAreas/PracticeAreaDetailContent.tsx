'use client'

import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { ContactForm } from '../../components/ui/ContactForm'
import { PRACTICE_AREAS_FULL } from '@/lib/constants'

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
const LOREM_2 =
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'

interface PracticeAreaDetailContentProps {
  title?: string
  currentSlug?: string
}

export default function PracticeAreaDetailContent({ title = 'Overview', currentSlug }: PracticeAreaDetailContentProps) {
  return (
    <Section className="bg-white py-14 md:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Left: Main content - headings, paragraphs, grey placeholder blocks */}
          <div className="flex-1 min-w-0 space-y-8">
            <section>
              <h2 className="font-libre font-bold text-primary text-2xl md:text-3xl mb-4">
                Heading!
              </h2>
              <div className="space-y-4 font-poppins text-primary/90 text-[15px] md:text-base leading-relaxed">
                <p>{LOREM}</p>
                <p>{LOREM_2}</p>
              </div>
            </section>

            {/* Grey placeholder block - image/content */}
            <div
              className="w-full max-w-[66.67%] aspect-video rounded-lg bg-[#e5e7eb] flex items-center justify-center text-[#6b7280] text-sm font-poppins"
              aria-hidden
            >
              Image or media placeholder
            </div>

            <section>
              <h2 className="font-libre font-bold text-primary text-2xl md:text-3xl mb-4">
                Heading!
              </h2>
              <div className="space-y-4 font-poppins text-primary/90 text-[15px] md:text-base leading-relaxed">
                <p>{LOREM}</p>
                <p>{LOREM_2}</p>
              </div>
            </section>

            {/* Second grey placeholder block */}
            <div
              className="w-full max-w-[66.67%] aspect-[4/3] rounded-lg bg-[#e5e7eb] flex items-center justify-center text-[#6b7280] text-sm font-poppins"
              aria-hidden
            >
              Image or media placeholder
            </div>

            <section>
              <h2 className="font-libre font-bold text-primary text-2xl md:text-3xl mb-4">
                Heading!
              </h2>
              <div className="space-y-4 font-poppins text-primary/90 text-[15px] md:text-base leading-relaxed">
                <p>{LOREM}</p>
                <p>{LOREM_2}</p>
              </div>
            </section>

            {/* Third grey placeholder block */}
            <div
              className="w-full max-w-[66.67%] h-48 rounded-lg bg-[#e5e7eb] flex items-center justify-center text-[#6b7280] text-sm font-poppins"
              aria-hidden
            >
              Image or media placeholder
            </div>
          </div>

          {/* Right: Sidebar - Practice Areas nav card + Contact form card */}
          <aside className="w-full lg:w-[340px] xl:w-[380px] lg:flex-shrink-0 lg:sticky lg:top-32 lg:self-start space-y-6">
            {/* Practice Areas navigation card - gold header, white body */}
            <div className="rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm">
              <div className="bg-[#C8A24F] px-4 py-3">
                <h3 className="font-libre font-bold text-primary text-lg">
                  Practice Areas
                </h3>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-2 list-none">
                  {PRACTICE_AREAS_FULL.map((area) => {
                    const isCurrent = currentSlug === area.slug
                    return (
                      <li key={area.slug}>
                        {isCurrent ? (
                          <span className="block font-poppins text-[15px] font-semibold text-primary py-1">
                            {area.title}
                          </span>
                        ) : (
                          <Link
                            href={`/practice-areas/${area.slug}`}
                            className="block font-poppins text-[15px] text-primary/90 hover:text-secondary py-1 transition-colors"
                          >
                            {area.title}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            {/* Contact us form card */}
            <ContactForm />
          </aside>
        </div>
      </Container>
    </Section>
  )
}
