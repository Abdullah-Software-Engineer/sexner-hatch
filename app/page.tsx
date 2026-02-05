import Header from './components/Header'
import Hero from './components/Hero'
import LookingForLawyer from './components/LookingForLawyer'
import PartnersMarquee from './components/PartnersMarquee'
import PracticeAreas from './components/PracticeAreas'
import WhatSetsUsApart from './components/WhatSetsUsApart'
import TestimonialsMarquee from './components/TestimonialsMarquee'
import ExperiencedAttorney from './components/ExperiencedAttorney'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LookingForLawyer />
      <PartnersMarquee />
      <PracticeAreas />
      <WhatSetsUsApart />
      <TestimonialsMarquee />
      <ExperiencedAttorney />
    </main>
  )
}
