import Layout from '../components/layout/Layout'
import BlogHero from '../sections/Blog/BlogHero'
import BlogGrid from '../sections/Blog/BlogGrid'
import SpeakWithTeam from '../sections/Home/SpeakWithTeam'

export const metadata = {
  title: 'Chicago Criminal Defense Blog',
  description:
    'Read our latest blog posts on criminal defense law, legal updates, and insights from experienced Chicago criminal defense attorneys.',
}

export default function BlogPage() {
  return (
    <Layout>
      <BlogHero />
      <BlogGrid />
      <SpeakWithTeam />
    </Layout>
  )
}

