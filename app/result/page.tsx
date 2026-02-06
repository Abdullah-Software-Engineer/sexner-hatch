import Layout from '../components/layout/Layout'
import ResultHero from '../sections/Result/ResultHero'
import CaseResultsWithForm from '../sections/Result/CaseResultsWithForm'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Case Results',
  description:
    'View our case results and successful outcomes. Sexner & Associates LLC – experienced Chicago criminal defense attorneys. Book a consultation.',
}

export default function ResultPage() {
  return (
    <Layout>
      <ResultHero />
      <CaseResultsWithForm />
      <SpeakWithTeam />
      {/* < */}
    </Layout>
  )
}
