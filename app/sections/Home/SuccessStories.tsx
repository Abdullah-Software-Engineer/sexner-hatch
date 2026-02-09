'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'

const IMAGE_PATH = '/home/sucess-stories/Group.webp'

export default function SuccessStories() {
  return (
    <Section className="bg-[#F8F8F8]" id="success-stories">
      <Container>
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            Success Stories
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left column: 3 stacked image cards */}
          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4">
            <div className="relative aspect-[4/3] min-h-[120px] rounded-xl overflow-hidden bg-[#333] flex-1">
              <Image
                src={IMAGE_PATH}
                alt="Legal success - gavel and law books"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
           
          </div>

          {/* Right column: content card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl border-2 border-secondary bg-white p-4 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col">
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8">
                <Button
                  href="/victories"
                  variant="primary"
                  size="sm"
                  ariaLabel="View all victories"
                  className="text-xs sm:text-sm"
                >
                  View all victories
                </Button>
              </div>

              <h3 className="font-libre text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-2 pr-20 sm:pr-32 md:pr-[160px] lg:pr-[180px]">
                Dismissed
              </h3>
              <p className="font-poppins text-sm sm:text-base md:text-lg font-medium text-black/80 mb-3 md:mb-4">
                Felony cannabis possession
              </p>
              <p className="font-poppins text-sm sm:text-base md:text-lg text-black/80 leading-relaxed flex-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <div
                className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-dashed border-secondary"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
