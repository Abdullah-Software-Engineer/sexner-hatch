import Layout from '../components/layout/Layout'
import PrivacyPolicyHero from '../sections/PrivacyPolicy/PrivacyPolicyHero'
import PrivacyPolicyContent from '../sections/PrivacyPolicy/PrivacyPolicyContent'

export const metadata = {
  title: 'Privacy Policy | Sexner & Associates LLC',
  description:
    'We respect your privacy and handle your personal information responsibly. Learn how we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </Layout>
  )
}
