import Layout from '../components/layout/Layout'
import TeamHero from '../sections/Team/TeamHero'
import TeamGrid from '../sections/Team/TeamGrid'
import TeamCTA from '../sections/About/TeamCTA'

export const metadata = {
  title: 'Our Team',
  description:
    'Meet the attorneys and team at Sexner & Associates LLC. Experienced Chicago criminal defense lawyers dedicated to your case. Call (312) 940-3228 for a free consultation.',
}

export default function TeamPage() {
  return (
    <Layout>
      <TeamHero />
      <TeamGrid />
      <TeamCTA />
    </Layout>
  )
}
