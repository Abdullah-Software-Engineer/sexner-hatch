import Layout from '../components/layout/Layout'
import TermsConditionsHero from '../sections/TermsConditions/TermsConditionsHero'
import TermsConditionsContent from '../sections/TermsConditions/TermsConditionsContent'

export const metadata = {
  title: 'Terms and Conditions | Sexner & Associates LLC',
  description:
    'By using this website, you agree to our terms, including limitations of liability and permitted use of site content.',
}

export default function TermsAndConditionsPage() {
  return (
    <Layout>
      <TermsConditionsHero />
      <TermsConditionsContent />
    </Layout>
  )
}
