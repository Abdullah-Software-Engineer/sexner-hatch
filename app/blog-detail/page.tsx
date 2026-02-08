import Layout from '../components/layout/Layout'
import BlogDetailHero from '../sections/BlogDetail/BlogDetailHero'
import BlogDetailContent from '../sections/BlogDetail/BlogDetailContent'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Blog Detail',
  description:
    'Chicago Criminal Defense Blog. Read insights and updates from experienced criminal defense attorneys.',
}

export default function BlogDetailPage() {
  return (
    <Layout>
      <BlogDetailHero />
      <BlogDetailContent />
      <SpeakWithTeam />
    </Layout>
  )
}
