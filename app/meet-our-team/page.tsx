import Layout from '../components/layout/Layout'
import MeetOurTeamHero from '../sections/About/MeetOurTeamHero'
import AttorneyProfileSection from '../sections/About/AttorneyProfileSection'
import TeamCTA from '../sections/About/TeamCTA'

export const metadata = {
  title: 'Meet Our Team',
  description:
    'Meet the attorneys and team at Sexner & Associates LLC. Experienced Chicago criminal defense lawyers dedicated to your case. Call (312) 940-3228 for a free consultation.',
}

export default function MeetOurTeamPage() {
  return (
    <Layout>
      <MeetOurTeamHero />
      <AttorneyProfileSection />
      <TeamCTA />
    </Layout>
  )
}
