import Layout from '../components/layout/Layout'
import MeetOurTeamHero from '../sections/About/MeetOurTeamHero'
import AboutTeam from '../sections/About/AboutTeam'
import AttorneyProfileSection from '../sections/About/AttorneyProfileSection'
import OfficeContact from '../sections/Contact/OfficeContact'
import ContactForm from '../sections/Home/ContactForm'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Meet Our Team',
  description:
    'Meet the attorneys and team at Sexner & Associates LLC. Experienced Chicago criminal defense lawyers dedicated to your case. Call (312) 940-3228 for a free consultation.',
}

export default function MeetOurTeamPage() {
  return (
    <Layout>
      <MeetOurTeamHero />
      <AboutTeam />
      <AttorneyProfileSection />
      <OfficeContact />
      <ContactForm />
      <SpeakWithTeam />
    </Layout>
  )
}
