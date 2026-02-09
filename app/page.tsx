import Layout from './components/layout/Layout'
import Hero from './sections/Home/Hero'
import LookingForLawyer from './sections/Home/LookingForLawyer'
import PartnersMarquee from './sections/Home/PartnersMarquee'
import PracticeAreas from './sections/Home/PracticeAreas'
import WhatSetsUsApart from './sections/Home/WhatSetsUsApart'
import TestimonialsMarquee from './sections/Home/TestimonialsMarquee'
import ExperiencedAttorney from './sections/Home/ExperiencedAttorney'
import SuccessStories from './sections/Home/SuccessStories'
import SpeakWithTeam from './sections/Home/SpeakWithTeam'
import LatestNews from './sections/Home/LatestNews'
import ContactForm from './sections/Home/ContactForm'
import FAQ from './sections/Home/FAQ'

export default function Home() {
  return (
    <Layout>
      {/* <main> */}
        <Hero />
        <LookingForLawyer />
        <PartnersMarquee />
        <PracticeAreas />
        <WhatSetsUsApart />
        <TestimonialsMarquee />
        <ExperiencedAttorney />
        <SuccessStories />
        <LatestNews />
        <FAQ />
        <ContactForm />
        <SpeakWithTeam />
        
      {/* </main> */}
    </Layout>
  )
}
