import Header from './components/Header'
import Hero from './components/Hero'
import LookingForLawyer from './components/LookingForLawyer'
import PartnersMarquee from './components/PartnersMarquee'
import PracticeAreas from './components/PracticeAreas'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LookingForLawyer />
      <PartnersMarquee />
      <PracticeAreas />
    </main>
  )
}
