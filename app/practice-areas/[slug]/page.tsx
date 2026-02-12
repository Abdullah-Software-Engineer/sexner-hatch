import { notFound } from 'next/navigation'
import Layout from '../../components/layout/Layout'
import PracticeAreaDetailHero from '../../sections/PracticeAreas/PracticeAreaDetailHero'
import PracticeAreaDetailContent from '../../sections/PracticeAreas/PracticeAreaDetailContent'
import SpeakWithTeam from '../../sections/Home/SpeakWithTeam'
import { PRACTICE_AREAS_FULL } from '@/lib/constants'

export async function generateStaticParams() {
  return PRACTICE_AREAS_FULL.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = PRACTICE_AREAS_FULL.find((a) => a.slug === slug)
  if (!area) return { title: 'Practice Area | Sexner & Associates LLC' }
  return {
    title: `${area.title} | Criminal Defense | Sexner & Associates LLC`,
    description: `Chicago criminal defense attorneys for ${area.title}. Experienced representation. Call (312) 940-3228.`,
  }
}

export default async function PracticeAreaSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = PRACTICE_AREAS_FULL.find((a) => a.slug === slug)
  if (!area) notFound()

  return (
    <Layout>
      <PracticeAreaDetailHero title={area.title} />
      <PracticeAreaDetailContent title={area.title} currentSlug={area.slug} />
      <SpeakWithTeam />
    </Layout>
  )
}
