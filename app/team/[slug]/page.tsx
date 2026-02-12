import { notFound } from 'next/navigation'
import Layout from '../../components/layout/Layout'
import TeamMemberHero from '../../sections/Team/TeamMemberHero'
import TeamMemberContent from '../../sections/Team/TeamMemberContent'
import TeamCTA from '../../sections/About/TeamCTA'
import SpeakWithTeam from '../../sections/Home/SpeakWithTeam'
import { TEAM_MEMBERS } from '@/lib/constants'

export async function generateStaticParams() {
  return TEAM_MEMBERS.map((member) => ({ slug: member.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = TEAM_MEMBERS.find((m) => m.slug === slug)
  if (!member) return { title: 'Team Member | Sexner & Associates LLC' }
  return {
    title: `${member.name} | Our Team | Sexner & Associates LLC`,
    description: `Meet ${member.name}, ${member.title} at Sexner & Associates LLC. Experienced Chicago criminal defense attorneys. Call (312) 940-3228.`,
  }
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = TEAM_MEMBERS.find((m) => m.slug === slug)
  if (!member) notFound()

  return (
    <Layout>
      <TeamMemberHero name={member.name} />
      <TeamMemberContent
        name={member.name}
        title={member.title}
        image={member.image}
        bio={member.bio}
        currentSlug={member.slug}
      />
      <SpeakWithTeam />
      <TeamCTA />
    </Layout>
  )
}
