import Layout from '../components/layout/Layout'
import ResourcesHero from '../sections/your-right/ResourcesHero'
import YourRightsContent from '../sections/your-right/YourRightsContent'
import ResourcesExperiencedAttorney from '../sections/your-right/ResourcesExperiencedAttorney'
import ResourcesTeamImage from '../sections/your-right/ResourcesTeamImage'

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
      <ResourcesExperiencedAttorney />
      <ResourcesTeamImage />
      
      <SpeakWithTeam />
      
    </Layout>
  )
}

