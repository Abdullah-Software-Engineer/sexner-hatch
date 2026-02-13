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
    question: 'When should I contact a criminal defense attorney?',
    answer:
      "You should contact a criminal defense attorney as soon as possible if you're under investigation, have been arrested, or charged with a crime. Early involvement allows your attorney to protect your rights, advise you on interactions with law enforcement, and begin building your defense. Delaying can sometimes harm your case.",
  },
  {
    id: 3,
    question: 'What should I expect during my first consultation?',
    answer:
      "During your first consultation, your attorney will listen to your situation, ask questions to understand the details, and explain your legal options. They may discuss potential strategies, fees, and next steps. This meeting is confidential and is an opportunity for you to evaluate whether the attorney is the right fit for your case.",
  },
  {
    id: 4,
    question: 'Can I change lawyers if I am not satisfied?',
    answer:
      "Yes, you have the right to change legal representation. If you're not satisfied with your current attorney, you can hire a new one. There may be procedural steps and potential fee considerations depending on your agreement, so it's best to discuss the transition with both your current and new attorney.",
  },
  {
    id: 5,
    question: 'What types of cases do you handle?',
    answer:
      "We handle a wide range of criminal defense matters, including DUI, drug offenses, assault, theft, white-collar crimes, and more. Our experienced team can advise you on the specifics of your case and the best approach to protect your rights and achieve the best possible outcome.",
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
          <h2 className="text-[30px] md:text-[30px] lg:text-[48px] xl:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            Frequently asked questions
            <span className="absolute left-8 -translate-x-1/2 -bottom-1.5 w-[70px] h-1 bg-secondary" aria-hidden="true"></span>
          </h2>
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
