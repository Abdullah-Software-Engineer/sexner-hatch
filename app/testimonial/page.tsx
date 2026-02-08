import Layout from '../components/layout/Layout'
import TestimonialHero from '../sections/Testimonial/TestimonialHero'
import TestimonialsAndContactForm from '../sections/Testimonial/TestimonialsAndContactForm'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'
import PartnersMarquee from '../sections/Home/PartnersMarquee'

export const metadata = {
  title: 'Testimonials',
  description:
    'What our clients say about us. Read reviews and testimonials from clients we have helped with criminal defense in Chicago and surrounding areas.',
}

export default function TestimonialPage() {
  return (
    <Layout>
      <TestimonialHero />
      <TestimonialsAndContactForm />
      <PartnersMarquee />
      <SpeakWithTeam />
    </Layout>
  )
}
