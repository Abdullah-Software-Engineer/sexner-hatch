'use client'

import Image from 'next/image'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import { FadeUp } from '../../components/ui/AnimateOnScroll'

const IMAGE_PATH = '/home/sucess-stories/Group.webp'

const stories = [
  {
    title: 'Dismissed',
    subtitle: 'Felony cannabis possession',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
  },
  {
    title: 'Dismissed',
    subtitle: 'Felony cannabis possession',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
  },
  {
    title: 'Dismissed',
    subtitle: 'Felony cannabis possession',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
  },
]

export default function SuccessStories() {
  // Duplicate stories to create seamless loop (4x to ensure enough height)
  const displayStories = [...stories, ...stories, ...stories, ...stories]

  return (
    <Section className="bg-[#F8F8F8]" id="success-stories">
      <style jsx global>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-25%); } 
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 40s linear infinite;
        }
        .animate-marquee-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
      <Container>
        <FadeUp className="text-center mb-10 md:mb-12">
          <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            Success Stories
            <span className="absolute left-8 -translate-x-1/2 -bottom-1.5 w-[70px] h-1 bg-secondary" aria-hidden="true"></span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <FadeUp delay={0.08} className="lg:col-span-5 flex flex-col gap-3 md:gap-4">
            <div className="relative aspect-[4/3] min-h-[300px] h-full rounded-xl overflow-hidden bg-[#333] flex-1">
              <Image
                src={IMAGE_PATH}
                alt="Legal success - gavel and law books"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-7">
            <div className="relative rounded-xl border-2 border-secondary bg-white h-[500px] flex flex-col overflow-hidden">
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
                <Button
                  href="/results"
                  variant="primary"
                  size="sm"
                  ariaLabel="View all victories"
                >
                  View all victories
                </Button>
              </div>

              {/* Scrolling Content */}
              <div className="absolute inset-0 overflow-hidden">
                 <div className="animate-marquee-vertical w-full">
                  {displayStories.map((story, index) => (
                    <div key={index} className="p-4 sm:p-6 md:p-8 lg:p-10 border-b border-dashed border-secondary last:border-b-0">
                      <h3 className="font-libre text-[20px] font-semibold text-black mb-2 pr-20 sm:pr-32 md:pr-[160px] lg:pr-[180px]">
                        {story.title}
              </h3>
                      <p className="font-poppins text-[14px] md:text-[16px] font-medium text-black/80 mb-3 md:mb-4">
                        {story.subtitle}
              </p>
                      <p className="font-poppins text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                        {story.description}
              </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
