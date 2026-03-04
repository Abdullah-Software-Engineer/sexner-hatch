'use client'

import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { SITE_CONFIG } from '@/lib/constants'
import { getPhoneLink } from '@/lib/utils'

const OFFICES = [
  {
    title: 'Chicago, IL Law Office',
    address: '2126 W Van Buren St. Chicago, IL 60612',
    phone: '(312) 940-3228',
    phoneRaw: '3129403228',
    email: SITE_CONFIG.email,
    fax: SITE_CONFIG.fax,
  },
  {
    title: 'Arlington Heights, IL Law Office',
    address: '415 W Golf Rd, Suite #15 Arlington Heights, IL 60005',
    phone: '(312) 262-3637',
    phoneRaw: '3122623637',
    email: SITE_CONFIG.email,
    fax: SITE_CONFIG.fax,
  },
]

function ContactCard({
  title,
  address,
  phone,
  phoneRaw,
  email,
  fax,
}: {
  title: string
  address: string
  phone: string
  phoneRaw: string
  email: string
  fax: string
}) {
  return (
    <div className="bg-secondary rounded-lg p-6 md:p-8 text-white">
      <h3 className="font-libre text-[20px] font-semibold mb-4">
        {title}
      </h3>
      <ul className="font-poppins text-[14px] space-y-2 text-white/95">
        <li>
          <span className="font-medium">Address: </span>
          {address}
        </li>
        <li>
          <span className="font-medium">Phone number: </span>
          <a
            href={getPhoneLink(phoneRaw)}
            className="underline hover:no-underline"
          >
            {phone}
          </a>
        </li>
        <li>
          <span className="font-medium">Email: </span>
          <a
            href={`mailto:${email}`}
            className="underline hover:no-underline"
          >
            {email}
          </a>
        </li>
        <li>
          <span className="font-medium">Fax: </span>
          {fax}
        </li>
      </ul>
    </div>
  )
}

export default function OfficeContact() {
  return (
    <Section className="bg-white" id="office-contact">
      <Container>
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5">
            24 hours{' '}
            <span className="relative inline-block">
              phone service
              <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-secondary" aria-hidden="true" />
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {OFFICES.map((office) => (
            <ContactCard
              key={office.title}
              title={office.title}
              address={office.address}
              phone={office.phone}
              phoneRaw={office.phoneRaw}
              email={office.email}
              fax={office.fax}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {OFFICES.map((office) => (
            <div key={office.title} className="w-full min-w-0 overflow-hidden">
              <div className="relative w-full aspect-4/3 min-h-[240px] sm:min-h-[280px] rounded-lg overflow-hidden bg-[#e8e8e8]">
                <iframe
                  title={`${office.title} location`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(office.address)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, maxWidth: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full max-w-full"
                />
              </div>
              <p className="text-center mt-3">
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-secondary font-medium hover:underline text-sm"
                >
                  View on Google Maps
                </Link>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
