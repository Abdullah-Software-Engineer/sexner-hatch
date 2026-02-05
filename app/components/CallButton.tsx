'use client'

import { SITE_CONFIG } from '@/lib/constants'
import { getPhoneLink } from '@/lib/utils'

export default function CallButton() {
  return (
    <a
      href={getPhoneLink(SITE_CONFIG.phoneRaw)}
      className="fixed bottom-[30px] right-[30px] w-10 h-10 bg-primary rounded-full flex items-center justify-center z-[99] shadow-lg transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-xl no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`Call us at ${SITE_CONFIG.phone}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-white"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    </a>
  )
}
