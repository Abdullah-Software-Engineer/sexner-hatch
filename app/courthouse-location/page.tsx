import Layout from '../components/layout/Layout'
import OfficeContact from '../sections/Contact/OfficeContact'
import CourthouseLocationHero from '../sections/CourthouseLocation/CourthouseLocationHero'
import DetailedCourthouseLocationContent from '../sections/CourthouseLocation/DetailedCourthouseLocationContent'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Courthouse Locations',
  description:
    'Find courthouse locations in Chicago and surrounding areas. We serve clients at all major courthouses including Daley Center, 26th & California, and more.',
}

export default function CourthouseLocationPage() {
  return (
    <Layout>
      <CourthouseLocationHero />
      <DetailedCourthouseLocationContent />
      <OfficeContact />
      <SpeakWithTeam />
    </Layout>
  )
}

