'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { FadeUp, StaggerChildren, staggerItemVariants } from '../../components/ui/AnimateOnScroll'

const faqItems = [
  {
    id: 1,
    question: 'How much does hiring a criminal defense attorney in Chicago cost?',
    answer:
      "The cost of hiring an experienced criminal defense lawyer in Chicago can vary widely depending on the complexity of the case, the attorney's experience and reputation, and the amount of time and effort required to mount a strong defense. Some criminal defense attorneys charge a flat fee, while others charge by the hour. It's important to discuss fees and payment arrangements with your attorney before hiring them.",
  },
  {
    id: 2,
    question: 'What are the qualifications of a good criminal defense lawyer in Chicago?',
    answer:
      "A good Chicago criminal defense lawyer should have extensive experience in criminal law and a deep understanding of Illinois laws and the justice system. They must possess strong communication and negotiation skills, develop effective defense strategies, and work closely with clients throughout the process. Above all, they should be ethical, professional, and committed to delivering high-quality legal representation.",
  },
  {
    id: 3,
    question: 'How do I find the best criminal defense lawyer in Chicago?',
    answer:
      "Finding the best Chicago criminal lawyer can feel overwhelming, but a few smart steps can help. Start by researching online & reading verified client reviews on platforms like Google, AVVO & the Better Business Bureau. Check whether the attorney has earned recognition from respected organizations such as Super Lawyers or The National Trial Lawyers. You can also ask friends, family, or colleagues for referrals to better understand an attorney's approach & experience. Finally, consider hiring a lawyer who is part of an established legal team rather than practicing alone, as collaboration with other experienced attorneys can strengthen your defense strategy.",
  },
  {
    id: 4,
    question: 'What should I expect during the process of hiring a criminal defense lawyer?',
    answer:
      "Hiring a criminal defense lawyer usually starts with a free initial consultation, where you discuss your case and legal options. A good attorney will answer your questions and ask detailed ones to fully understand your situation. If you choose to move forward, you'll sign a representation agreement outlining fees and any available payment plans. From there, your Chicago criminal lawyer will build a strong defense strategy, negotiate with prosecutors, appear at all required court dates, and represent you at trial if necessary.",
  },
  {
    id: 5,
    question: 'What should I look for in a criminal defense attorney?',
    answer:
      "When looking for a Chicago criminal defense attorney, it's crucial to find someone with experience in your type of case. Look for a lawyer with a track record of success in similar cases, who can communicate effectively with you about your case, and preferably an attorney who works as part of a legal team. It's also essential to find a lawyer who is responsive, accessible, and willing to work with you to develop a strong defense strategy.",
  },
]

function SpeechBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number>(1)

  return (
    <Section className="bg-[#F5F5F5]" id="faq">
      <Container>
        <FadeUp className="text-center mb-10 md:mb-12">
          <h2 className="text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] font-normal text-black mb-2.5">
            Frequently asked questions
          </h2>
          <div className="flex justify-center -mt-2.5 mb-2.5">
            <span className="w-[70px] h-1 bg-secondary shrink-0" aria-hidden="true"></span>
          </div>
        </FadeUp>

        <StaggerChildren className="space-y-3" stagger={0.06} amount={0.05}>
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <motion.div
                key={item.id}
                variants={staggerItemVariants}
                className="rounded-lg overflow-hidden"
                role="group"
                aria-expanded={isOpen}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? 0 : item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-4 md:px-5 md:py-5 bg-[#E8E8E8] hover:bg-[#E0E0E0] transition-colors text-left ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span
                    className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#4A4A4A] text-white flex items-center justify-center font-poppins font-semibold text-sm"
                    aria-hidden
                  >
                    {item.id}
                  </span>
                  <span className="flex-1 font-poppins text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-medium text-[#333333]">
                    {item.question}
                  </span>
                  <motion.span
                    className="shrink-0 text-[#333333] flex items-center justify-center"
                    aria-hidden
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FaChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex gap-4 px-4 py-4 md:px-5 md:py-5 bg-primary rounded-b-lg">
                        <span
                          className="shrink-0 w-8 h-8 text-secondary mt-0.5"
                          aria-hidden
                        >
                          <SpeechBubbleIcon className="w-8 h-8" />
                        </span>
                        <p className="font-poppins text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-white leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
