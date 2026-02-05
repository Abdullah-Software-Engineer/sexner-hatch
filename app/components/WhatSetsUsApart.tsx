'use client'

import Image from 'next/image'
import { FaComments, FaUsers, FaClipboardCheck } from 'react-icons/fa'
import Container from './ui/Container'
import Section from './ui/Section'

const features = [
  {
    id: 1,
    icon: FaComments,
    title: 'Straight Talk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.  Lorem ipsum dolor sit amet, cons.',
  },
  {
    id: 2,
    icon: FaUsers,
    title: 'Team Effort',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.  Lorem ipsum dolor sit amet, cons.',
  },
  {
    id: 3,
    icon: FaClipboardCheck,
    title: 'Hard Work',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons.  Lorem ipsum dolor sit amet, cons.',
  },
]

export default function WhatSetsUsApart() {
  return (
    <Section className="bg-white" id="what-sets-us-apart">
      <Container>
        {/* Title */}
        <div className="text-center mb-10 md:mb-12 xl:mb-16">
          <h2 className="font-playfair text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            What sets us apart?
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 xl:gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8 md:space-y-10">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.id} className="flex gap-4 md:gap-5">
                  {/* Vertical Line */}
                  <div className="flex-shrink-0 w-0.5 bg-secondary"></div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3 md:mb-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
                      </div>
                      <h3 className="font-poppins text-xl md:text-2xl font-semibold text-black">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="font-poppins text-sm md:text-base text-black leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/home-page/apart-image.webp"
              alt="Our legal team working together"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
