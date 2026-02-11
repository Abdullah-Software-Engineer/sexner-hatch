import Layout from '../components/layout/Layout'
import TestimonialHero from '../sections/Testimonial/TestimonialHero'
import TestimonialsContent from '../sections/Testimonial/TestimonialsContent'
import PartnersMarquee from '../sections/Home/PartnersMarquee'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Testimonials',
  description:
    'What our clients say about us. Read reviews and testimonials from clients we have helped with criminal defense in Chicago and surrounding areas.',
}

export default function TestimonialPage() {
  return (
    <Layout>
      <TestimonialHero />
      <TestimonialsContent />
      <PartnersMarquee />
      <SpeakWithTeam />
    </Layout>
  )
}
