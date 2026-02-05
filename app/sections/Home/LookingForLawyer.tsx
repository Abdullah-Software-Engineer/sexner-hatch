'use client'

import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { STATS } from '@/lib/constants'

export default function LookingForLawyer() {
  return (
    <Section className="bg-white" id="looking-for-lawyer">
      <Container>
        <div className="text-center">
          <h2 className="font-playfair text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            Looking for a Criminal Defense Lawyer?
            <span className="absolute left-0 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
          </h2>
          <p className="font-poppins text-sm md:text-base text-black leading-relaxed max-w-[900px] md:max-w-[1000px] mx-auto my-8 md:my-10">
            With over 30 years of experience defending clients in Chicago, our dedicated team of criminal defense attorneys has successfully helped over 20,000 individuals navigate complex legal challenges. We understand the stress and uncertainty of facing criminal charges, and we're committed to providing aggressive, compassionate representation to protect your rights and your future.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6 xl:gap-6 max-w-[900px] mx-auto mt-10 md:mt-12 xl:mt-12">
            {STATS.map((stat, index) => (
              <article
                key={stat.id}
                className="bg-primary rounded-xl p-3 md:p-3.5 xl:p-3.5 flex items-center gap-4 w-full max-w-[400px] md:max-w-[420px]"
              >
                <div
                  className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] min-w-[50px] min-h-[50px] md:min-w-[60px] md:min-h-[60px] bg-secondary rounded-lg flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 md:w-8 md:h-8 text-primary"
                  >
                    {index === 0 ? (
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    ) : (
                      <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" />
                    )}
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <div className="font-poppins text-[13px] md:text-sm font-normal text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="font-poppins text-2xl md:text-[28px] font-semibold text-white">
                    {stat.value}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
