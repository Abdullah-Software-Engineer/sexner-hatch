import Layout from '../components/layout/Layout'
import MakePaymentHero from '../sections/MakePayment/MakePaymentHero'

export const metadata = {
  title: 'Make a Payment',
  description:
    'Pay your invoice online securely. Contact Sexner & Associates LLC to make a payment or for payment assistance.',
}

export default function MakePaymentPage() {
  return (
    <Layout>
      <MakePaymentHero />
    </Layout>
  )
}
