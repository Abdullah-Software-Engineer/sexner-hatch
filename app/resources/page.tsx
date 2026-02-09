import Layout from '../components/layout/Layout'
import ResourcesHero from '../sections/Resources/ResourcesHero'
import YourRightsContent from '../sections/Resources/YourRightsContent'
import ResourcesExperiencedAttorney from '../sections/Resources/ResourcesExperiencedAttorney'
import ResourcesTeamImage from '../sections/Resources/ResourcesTeamImage'

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

