'use client'

import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import { getPhoneLink } from '@/lib/utils'
import { ContactForm } from './ContactForm'

export default function CallButton() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Close form on escape key
  useEffect(() => {
    if (isFormOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsFormOpen(false)
        }
      }
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [isFormOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFormOpen])

  return (
    <>
      {/* Phone Icon Button */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-[30px] sm:right-[30px] w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center z-[99] shadow-lg transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation"
        aria-label={`Open contact form or call us at ${SITE_CONFIG.phone}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      </button>

      {/* Modal Overlay */}
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] flex items-end sm:items-center justify-end sm:justify-end p-4 sm:p-6"
          onClick={() => setIsFormOpen(false)}
        >
          {/* Form Modal - Positioned near the button */}
          <div
            className="w-full max-w-md sm:max-w-lg relative bottom-0 sm:bottom-auto right-0 sm:right-[30px] modal-form-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute -top-10 sm:-top-12 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close contact form"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      )}
    </>
  )
}
