'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import { FadeUp, StaggerChildren, staggerItemVariants } from '../../components/ui/AnimateOnScroll'
import { FaArrowRight } from 'react-icons/fa'

const FEATURED_IMAGE_PATH = '/home/home-page/hero-bg.webp'

const HEADLINE =
  "Jury Returns Verdict in Sean 'P Diddy' Combs Criminal Trial"

const SHORT_DESC =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'

const LONG_DESC =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet.'

export default function LatestNews() {
  return (
    <Section className="bg-[#F5F5F5]" id="latest-news">
      <Container>
        <FadeUp className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
          <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            Latest news
            <span className="absolute left-0 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
          </h2>
          <Button
            href="/blog"
            variant="primary"
            size="sm"
            className="!bg-secondary !text-[#333] hover:!bg-primary hover:!text-white"
            ariaLabel="View all blogs"
          >
            View all blogs
          </Button>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8" stagger={0.1} amount={0.08}>
          {/* Featured card – large, dark background, image */}
          <motion.article
            variants={staggerItemVariants}
            className="lg:col-span-6 rounded-xl overflow-hidden bg-primary flex flex-col shadow-lg"
          >
            <div className="relative w-full aspect-[16/10] min-h-[220px] overflow-hidden">
              <Image
                src={FEATURED_IMAGE_PATH}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-5 md:p-6 flex flex-col flex-1">
              <h3 className="text-[20px] font-semibold text-white mb-3 line-clamp-2">
                {HEADLINE}
              </h3>
              <p className="font-poppins text-[14px] text-white/95 leading-relaxed mb-6 line-clamp-2">
                {SHORT_DESC}
              </p>
              <div className="mt-auto">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 font-poppins font-medium text-[16px] bg-secondary text-white pl-5 pr-1.5 py-1.5 rounded-full hover:opacity-90 transition-opacity"
                  aria-label="Read more - featured article"
                >
                  <span>Read more</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary shrink-0">
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Two smaller cards – gold background, text only */}
          {[1, 2].map((i) => (
            <motion.article
              key={i}
              variants={staggerItemVariants}
              className="lg:col-span-3 rounded-xl overflow-hidden bg-secondary flex flex-col p-5 md:p-6 shadow-lg"
            >
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#333] mb-3 line-clamp-2">
                {HEADLINE}
              </h3>
              <p className="font-poppins text-[14px] text-[#333] leading-relaxed flex-1 mb-6 line-clamp-4">
                {LONG_DESC}
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 font-poppins font-medium text-[16px] bg-primary text-white pl-5 pr-1.5 py-1.5 rounded-full hover:opacity-90 transition-opacity w-fit"
                aria-label={`Read more article ${i}`}
              >
                <span>Read more</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary shrink-0">
                  <FaArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.article>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
