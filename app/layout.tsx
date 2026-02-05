import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import SideButtons from './components/SideButtons'
import CallButton from './components/CallButton'

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
  title: 'Sexner Hatch',
  description: 'Sexner Hatch Application',
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
