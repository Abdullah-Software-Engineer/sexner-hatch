import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import SideButtons from './components/ui/SideButtons'
import CallButton from './components/ui/CallButton'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sexner-hatch.com'),
  title: {
    default: 'Chicago Criminal Defense Attorneys | Sexner & Associates LLC',
    template: '%s | Sexner & Associates LLC',
  },
  description: 'Experienced criminal defense attorneys in Chicago with over 30 years of experience. We have helped over 20,000 clients with their legal matters. Call (312) 940-3228 for a free consultation.',
  keywords: [
    'criminal defense attorney',
    'Chicago lawyer',
    'DUI defense',
    'criminal lawyer Chicago',
    'defense attorney',
    'legal representation',
  ],
  authors: [{ name: 'Sexner & Associates LLC' }],
  creator: 'Sexner & Associates LLC',
  publisher: 'Sexner & Associates LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sexner-hatch.com',
    title: 'Chicago Criminal Defense Attorneys | Sexner & Associates LLC',
    description: 'Experienced criminal defense attorneys in Chicago with over 30 years of experience.',
    siteName: 'Sexner & Associates LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicago Criminal Defense Attorneys | Sexner & Associates LLC',
    description: 'Experienced criminal defense attorneys in Chicago with over 30 years of experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${poppins.variable}`}>
      <body>
        <SideButtons />
        <CallButton />
        {children}
      </body>
    </html>
  )
}
