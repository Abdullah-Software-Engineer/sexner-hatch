import Layout from '../components/layout/Layout'
import PracticeAreasHero from '../sections/PracticeAreas/PracticeAreasHero'
import PracticeAreasGrid from '../sections/PracticeAreas/PracticeAreasGrid'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Practice Areas | Criminal Defense | Sexner & Associates LLC',
  description:
    'Explore our practice areas: arson, assault, DUI, drug crimes, domestic violence, and more. Chicago criminal defense attorneys. Call (312) 940-3228.',
}

export default function PracticeAreasListingPage() {
  return (
    <Layout>
      <PracticeAreasHero />
      <PracticeAreasGrid />
      <SpeakWithTeam />
    </Layout>
  )
}
