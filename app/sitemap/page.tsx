import Layout from '../components/layout/Layout'
import SitemapHero from '../sections/Sitemap/SitemapHero'
import SitemapContent from '../sections/Sitemap/SitemapContent'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'
import ContactForm from '../sections/Home/ContactForm'

export const metadata = {
  title: 'Sitemap | Sexner and Associates LLC – Chicago Criminal Defense',
  description:
    'Complete sitemap for Sexner and Associates LLC. Find practice areas, courthouse locations, your rights, blogs, videos, and contact information. Chicago criminal defense attorneys.',
}

export default function SitemapPage() {
  return (
    <Layout>
      <SitemapHero />
      <SitemapContent />
      <ContactForm />
      <SpeakWithTeam />
    </Layout>
  )
}
