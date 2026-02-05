import Layout from '../components/layout/Layout'
import ContactHero from '../sections/Contact/ContactHero'
import CourthouseLocations from '../sections/Contact/CourthouseLocations'
import ContactForm from '../sections/Home/ContactForm'

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Sexner & Associates LLC for a free consultation. Call (312) 940-3228 or complete our form. Experienced Chicago criminal defense attorneys.',
}

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <CourthouseLocations />
    </Layout>
  )
}
