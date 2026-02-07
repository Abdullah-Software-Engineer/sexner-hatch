import Layout from '../components/layout/Layout'
import PracticeAreaHero from '../sections/PracticeArea/PracticeAreaHero'
import PracticeAreaTableAndContent from '../sections/PracticeArea/PracticeAreaTableAndContent'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Practice Areas | Criminal Law & Your Rights',
  description:
    'Explore our practice areas: criminal defense, DUI, drug crimes, violent crimes, white collar, and domestic violence. Chicago criminal defense attorneys. Call (312) 940-3228.',
}

export default function PracticeAreasPage() {
  return (
    <Layout>
      <PracticeAreaHero />
      <PracticeAreaTableAndContent />
      <SpeakWithTeam />
    </Layout>
  )
}
