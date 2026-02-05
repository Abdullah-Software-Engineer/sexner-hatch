import Header from './components/Header'
import Hero from './components/Hero'
import LookingForLawyer from './components/LookingForLawyer'
import PartnersMarquee from './components/PartnersMarquee'
import PracticeAreas from './components/PracticeAreas'
import WhatSetsUsApart from './components/WhatSetsUsApart'
import TestimonialsMarquee from './components/TestimonialsMarquee'
import ExperiencedAttorney from './components/ExperiencedAttorney'
import SuccessStories from './components/SuccessStories'
import SpeakWithTeam from './components/SpeakWithTeam'
import LatestNews from './components/LatestNews'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

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
      <SuccessStories />
      <LatestNews />
      <ContactForm />
      <SpeakWithTeam />
      <FAQ />
      <Footer />
    </main>
  )
}
