import Layout from '../components/layout/Layout'
import AboutHero from '../sections/About/AboutHero'
import AboutContent from '../sections/About/AboutContent'
import AboutVideo from '../sections/About/AboutVideo'
import AboutTeam from '../sections/About/AboutTeam'
import AboutAwards from '../sections/About/AboutAwards'
import OfficeContact from '../sections/Contact/OfficeContact'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'
import ContactForm from '../sections/Home/ContactForm'

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Sexner & Associates LLC. Experienced Chicago criminal defense attorneys with over 30 years of experience. Call (312) 940-3228 for a free consultation.',
}

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutContent />
      <AboutVideo />
      <AboutTeam />
      <AboutAwards />
      <OfficeContact />
      <ContactForm />
      <SpeakWithTeam />
    </Layout>
  )
}
