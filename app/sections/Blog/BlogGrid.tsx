'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { StaggerChildren, staggerItemVariants } from '../../components/ui/AnimateOnScroll'
import { FaArrowRight } from 'react-icons/fa'

const FEATURED_IMAGE_PATH = '/home/home-page/hero-bg.webp'

const HEADLINE = "Jury Returns Verdict in Sean 'P Diddy' Combs Criminal Trial"

const SHORT_DESC = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'

const LONG_DESC =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet.'

export default function BlogGrid() {
  return (
    <Section className="bg-white" id="blog-grid">
      <Container>
        {/* Row 1: 3 cards */}
        <StaggerChildren className="flex flex-col md:flex-row gap-6 lg:gap-8 h-auto md:h-[600px] mb-6 lg:mb-8" stagger={0.1} amount={0.08}>
          {[1, 2, 3].map((i) => (
            <motion.article
              key={i}
              variants={staggerItemVariants}
              className="flex-1 rounded-xl overflow-hidden bg-secondary hover:bg-primary transition-all duration-500 ease-in-out flex flex-col group min-w-0 hover:flex-[2] md:hover:flex-[2.5] relative"
            >
              <div className="p-4 pb-0 shrink-0">
                <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src={FEATURED_IMAGE_PATH}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              
              <div className="p-5 md:p-6 flex flex-col flex-1 min-w-0 overflow-hidden relative">
                <div className="flex-1">
                  <h3 className="text-[20px] font-semibold text-white mb-3 line-clamp-2 shrink-0">
                    {HEADLINE}
                  </h3>
                  <div className="relative overflow-hidden mb-16">
                    <p className="font-poppins text-[14px] text-white/95 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      <span className="group-hover:hidden">{LONG_DESC}</span>
                      <span className="hidden group-hover:inline">{SHORT_DESC}</span>
                    </p>
                  </div>
                </div>
                
                {/* Button aligned to bottom right */}
                <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-3 font-poppins font-medium text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] bg-primary group-hover:bg-secondary text-white pl-5 pr-1.5 py-1.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-md group-hover:text-white"
                    aria-label={`Read more article ${i}`}
                  >
                    <span>Read more</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary group-hover:text-secondary shrink-0">
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerChildren>

        {/* Row 2: 3 cards */}
        <StaggerChildren className="flex flex-col md:flex-row gap-6 lg:gap-8 h-auto md:h-[600px] mb-6 lg:mb-8" stagger={0.1} amount={0.08}>
          {[4, 5, 6].map((i) => (
            <motion.article
              key={i}
              variants={staggerItemVariants}
              className="flex-1 rounded-xl overflow-hidden bg-secondary hover:bg-primary transition-all duration-500 ease-in-out flex flex-col group min-w-0 hover:flex-[2] md:hover:flex-[2.5] relative"
            >
              <div className="p-4 pb-0 shrink-0">
                <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src={FEATURED_IMAGE_PATH}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              
              <div className="p-5 md:p-6 flex flex-col flex-1 min-w-0 overflow-hidden relative">
                <div className="flex-1">
                  <h3 className="text-[20px] font-semibold text-white mb-3 line-clamp-2 shrink-0">
                    {HEADLINE}
                  </h3>
                  <div className="relative overflow-hidden mb-16">
                    <p className="font-poppins text-[14px] text-white/95 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      <span className="group-hover:hidden">{LONG_DESC}</span>
                      <span className="hidden group-hover:inline">{SHORT_DESC}</span>
                    </p>
                  </div>
                </div>
                
                {/* Button aligned to bottom right */}
                <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-3 font-poppins font-medium text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] bg-primary group-hover:bg-secondary text-white pl-5 pr-1.5 py-1.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-md group-hover:text-white"
                    aria-label={`Read more article ${i}`}
                  >
                    <span>Read more</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary group-hover:text-secondary shrink-0">
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerChildren>

        {/* Row 3: 3 cards (last row) */}
        <StaggerChildren className="flex flex-col md:flex-row gap-6 lg:gap-8 h-auto md:h-[600px]" stagger={0.1} amount={0.08}>
          {[7, 8, 9].map((i) => (
            <motion.article
              key={i}
              variants={staggerItemVariants}
              className="flex-1 rounded-xl overflow-hidden bg-secondary hover:bg-primary transition-all duration-500 ease-in-out flex flex-col group min-w-0 hover:flex-[2] md:hover:flex-[2.5] relative"
            >
              <div className="p-4 pb-0 shrink-0">
                <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src={FEATURED_IMAGE_PATH}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              
              <div className="p-5 md:p-6 flex flex-col flex-1 min-w-0 overflow-hidden relative">
                <div className="flex-1">
                  <h3 className="text-[20px] font-semibold text-white mb-3 line-clamp-2 shrink-0">
                    {HEADLINE}
                  </h3>
                  <div className="relative overflow-hidden mb-16">
                    <p className="font-poppins text-[14px] text-white/95 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      <span className="group-hover:hidden">{LONG_DESC}</span>
                      <span className="hidden group-hover:inline">{SHORT_DESC}</span>
                    </p>
                  </div>
                </div>
                
                {/* Button aligned to bottom right */}
                <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-3 font-poppins font-medium text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] bg-primary group-hover:bg-secondary text-white pl-5 pr-1.5 py-1.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-md group-hover:text-white"
                    aria-label={`Read more article ${i}`}
                  >
                    <span>Read more</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary group-hover:text-secondary shrink-0">
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
