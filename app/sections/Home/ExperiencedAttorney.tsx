'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import { FadeUp, StaggerChildren, staggerItemVariants } from '../../components/ui/AnimateOnScroll'

const QUALIFICATION_CARDS = [
  {
    id: 1,
    title: 'Elite Legal Standing',
    description: 'Holds the \'AV Preeminent\' rating from Martindale-Hubbell, a prestigious honour reflecting the highest level of professional excellence and ethical standards in the legal community.',
  },
  {
    id: 2,
    title: 'Former Assistant State\'s Attorney',
    description: 'Leverages his previous experience as a Chicago prosecutor to anticipate government tactics and build more effective, proactive defence strategies for his clients.',
  },
  {
    id: 3,
    title: 'National Recognition',
    description: 'Recognised by \'Who\'s Who\' in American Law and selected as one of the Top 100 Attorneys nationwide by The National Trial Lawyers.',
  },
]

export default function ExperiencedAttorney() {
  return (
    <section className="relative bg-white ">
      <div className="bg-white pt-12 sm:pt-16 md:pt-20  relative z-10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
            <FadeUp className="w-full lg:w-[60%] xl:w-[55%]">
              <h2 className="text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] font-normal text-black mb-4 sm:mb-5 md:mb-6">
                Mitchell S. Sexner - <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Experienced Criminal <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Defense Attorney in Chicago
                <div className="w-[50px] sm:w-[60px] h-0.5 sm:h-1 bg-secondary mt-3 sm:mt-4"></div>
              </h2>
              <p className="font-poppins text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-black/80 leading-relaxed max-w-2xl mb-8 sm:mb-10 md:mb-12">
                Founder Mitchell S. Sexner is an AV Preeminent-rated attorney and National Trial Lawyers Top 100 member. A former Chicago prosecutor with over 30 years of experience, he and his team deliver aggressive, results-driven representation in criminal defense and personal injury cases.
              </p>
            </FadeUp>

            <FadeUp delay={0.12} amount={0.15} className="hidden lg:block w-[40%] xl:w-[45%] relative h-[450px] lg:h-[500px] xl:h-[600px] shrink-0">
              <Image
                src="/home/home-page/women-pc.webp"
                alt="Lady Justice"
                fill
                className="object-contain object-right"
                sizes="(max-width: 1024px) 0vw, 40vw"
                priority
              />
            </FadeUp>
          </div>
        </Container>
      </div>

      <div className="bg-[#e8dec5] py-12 sm:py-16 md:py-20">
        <Container>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" stagger={0.1} amount={0.1}>
            {QUALIFICATION_CARDS.map((card) => (
              <motion.div
                key={card.id}
                variants={staggerItemVariants}
                className="bg-primary text-white p-10 sm:p-12 rounded-xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300"
              >
                <div className="w-[50px] h-[50px] md:w-[56px] md:h-[56px] rounded-full bg-white/20 flex items-center justify-center mb-5 overflow-hidden shrink-0">
                  <Image
                    src="/home/Group.webp"
                    alt=""
                    width={32}
                    height={32}
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-medium mb-4">
                  {card.title}
                </h3>
                <p className="font-poppins text-[14px] leading-relaxed text-gray-300">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </Container>
      </div>
    </section>
  )
}
