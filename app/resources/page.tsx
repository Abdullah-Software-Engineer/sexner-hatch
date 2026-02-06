import Layout from '../components/layout/Layout'
import ResourcesHero from '../sections/Resources/ResourcesHero'
import YourRightsContent from '../sections/Resources/YourRightsContent'
import ExperiencedAttorney from '../sections/Home/ExperiencedAttorney'
import ResourcesPracticeAreas from '../sections/Resources/ResourcesPracticeAreas'
import TeamSection from '../sections/Resources/TeamSection'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Your Rights Resources',
  description:
    'Learn about your rights in criminal law. Comprehensive resources on Chicago criminal procedures, representation, and legal processes. Free case evaluation available.',
}

export default function ResourcesPage() {
  return (
    <Layout>
      <ResourcesHero />
      <YourRightsContent />
      <ResourcesPracticeAreas />
      <TeamSection />
      <SpeakWithTeam />
      
    </Layout>
  )
}

