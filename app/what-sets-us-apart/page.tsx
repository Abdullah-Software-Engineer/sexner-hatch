import Layout from '../components/layout/Layout'
import WhatSetsUsApartHero from '../sections/WhatSetsUsApart/WhatSetsUsApartHero'
import WhatYouShouldExpect from '../sections/WhatSetsUsApart/WhatYouShouldExpect'
import CaseResultsCTA from '../sections/WhatSetsUsApart/CaseResultsCTA'
import OfficeContact from '../sections/Contact/OfficeContact'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'
import ContactForm from '../sections/Home/ContactForm'
import TestimonialsMarquee from '../sections/Home/TestimonialsMarquee'
import PartnersMarquee from '../sections/Home/PartnersMarquee'

export const metadata = {
  title: 'What Sets Us Apart | Sexner & Associates LLC',
  description:
    'Discover what sets Sexner & Associates LLC apart. Experienced Chicago criminal defense attorneys. Call (312) 940-3228 for a free consultation.',
}

export default function WhatSetsUsApartPage() {
  return (
    <Layout>
      <WhatSetsUsApartHero />
      <WhatYouShouldExpect />
      <CaseResultsCTA />
      <TestimonialsMarquee />
      <PartnersMarquee />
 
      <OfficeContact />
      <ContactForm />
      <SpeakWithTeam />
    </Layout>
  )
}
 