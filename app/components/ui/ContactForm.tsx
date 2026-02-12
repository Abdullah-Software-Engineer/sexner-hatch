'use client'

import { useState } from 'react'

interface ContactFormProps {
  heading?: string
  onSubmit?: (formData: FormData) => Promise<void> | void
}

export function ContactForm({ heading = 'Contact us for a free case evaluation', onSubmit }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        await new Promise((r) => setTimeout(r, 800))
      }
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="relative bg-[#2C3E50] p-5 md:p-6 rounded-xl shadow-2xl border border-[#34495e]">
      {/* Phone icon - top right corner */}
      <div className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/10" aria-hidden>
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
        </svg>
      </div>

      <h3 className="font-libre text-white text-[22px] md:text-[24px] text-center mb-4 leading-tight pr-10">
        {heading}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full bg-white border border-[#d1d5db] rounded-lg px-3 py-2.5 text-[15px] text-[#374151] placeholder:text-[#6b7280] focus:ring-2 focus:ring-[#C8A24F] focus:border-[#C8A24F] outline-none transition-shadow"
          disabled={status === 'submitting'}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full bg-white border border-[#d1d5db] rounded-lg px-3 py-2.5 text-[15px] text-[#374151] placeholder:text-[#6b7280] focus:ring-2 focus:ring-[#C8A24F] focus:border-[#C8A24F] outline-none transition-shadow"
          disabled={status === 'submitting'}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          required
          className="w-full bg-white border border-[#d1d5db] rounded-lg px-3 py-2.5 text-[15px] text-[#374151] placeholder:text-[#6b7280] focus:ring-2 focus:ring-[#C8A24F] focus:border-[#C8A24F] outline-none transition-shadow"
          disabled={status === 'submitting'}
        />
        <textarea
          name="message"
          placeholder="How can we help?"
          rows={3}
          required
          className="w-full bg-white border border-[#d1d5db] rounded-lg px-3 py-2.5 text-[15px] text-[#374151] placeholder:text-[#6b7280] focus:ring-2 focus:ring-[#C8A24F] focus:border-[#C8A24F] outline-none resize-none"
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#C8A24F] text-white font-bold text-base py-2.5 rounded-lg hover:bg-[#b89553] transition-colors mt-1 disabled:opacity-70"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>
        <p className="text-white/90 text-[11px] leading-relaxed text-center mt-3">
          By clicking SUBMIT you consent to receiving SMS messages. Message &amp; data rates may apply. / Message frequency may vary. Reply Help to get more assistance / Reply stop to opt-out of messaging.
        </p>
      </form>
    </div>
  )
}
