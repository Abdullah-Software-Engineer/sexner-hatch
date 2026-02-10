'use client'

import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

export default function ResourcesPracticeAreas() {
  return (
    <Section className="bg-[#EBE4D1] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-primary rounded-xl p-8 lg:p-10 text-white shadow-lg">
              <h3 className="text-[20px] font-medium mb-4 text-center">Traffic Violation</h3>
              <p className="font-poppins text-[14px] leading-relaxed opacity-90 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, cons. Lorem
                ipsum dolor sit amet, cons. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum
                dolor sit amet, cons.Lorem ipsum dolor sit amet, consecte.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

