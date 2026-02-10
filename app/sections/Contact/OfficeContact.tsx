'use client'

import Link from 'next/link'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { SITE_CONFIG } from '@/lib/constants'
import { getPhoneLink } from '@/lib/utils'

const OFFICE = {
  title: 'Chicago, IL Law Office',
  address: SITE_CONFIG.address,
  phone: SITE_CONFIG.phone,
  phoneRaw: SITE_CONFIG.phoneRaw,
  email: SITE_CONFIG.email,
  fax: SITE_CONFIG.fax,
}

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(SITE_CONFIG.address)}&output=embed`

function ContactCard() {
  return (
    <div className="bg-secondary rounded-lg p-6 md:p-8 text-white">
      <h3 className="font-libre text-[20px] font-semibold mb-4">
        {OFFICE.title}
      </h3>
      <ul className="font-poppins text-[14px] space-y-2 text-white/95">
        <li>
          <span className="font-medium">Address: </span>
          {OFFICE.address}
        </li>
        <li>
          <span className="font-medium">Phone number: </span>
          <a
            href={getPhoneLink(OFFICE.phoneRaw)}
            className="underline hover:no-underline"
          >
            {OFFICE.phone}
          </a>
        </li>
        <li>
          <span className="font-medium">Email: </span>
          <a
            href={`mailto:${OFFICE.email}`}
            className="underline hover:no-underline"
          >
            {OFFICE.email}
          </a>
        </li>
        <li>
          <span className="font-medium">Fax: </span>
          {OFFICE.fax}
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
          <h2 className="text-[30px] md:text-[48px] font-normal text-black mb-2.5 relative inline-block">
            24 hours phone service
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-[60px] h-0.5 bg-secondary" aria-hidden="true"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          <ContactCard />
          <ContactCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="aspect-4/3 min-h-[280px] rounded-lg overflow-hidden bg-[#e8e8e8]">
            <iframe
              title="Law office location - map 1"
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[280px]"
            />
          </div>
          <div className="aspect-4/3 min-h-[280px] rounded-lg overflow-hidden bg-[#e8e8e8]">
            <iframe
              title="Law office location - map 2"
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[280px]"
            />
          </div>
        </div>
        <p className="text-center mt-4">
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-secondary font-medium hover:underline"
          >
            View on Google Maps
          </Link>
        </p>
      </Container>
    </Section>
  )
}
