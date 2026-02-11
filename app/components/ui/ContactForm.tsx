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
    <div className="bg-gradient-to-b from-[#1a2b3c] to-[#b89553] p-8 rounded-xl shadow-2xl border border-white/10">
      <h3 className="font-libre text-white text-[28px] text-center mb-6 leading-tight">
        {heading}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full bg-[#f8f9fa] border-0 rounded px-4 py-3.5 text-primary placeholder:text-[#555] focus:ring-2 focus:ring-secondary outline-none transition-shadow"
          disabled={status === 'submitting'}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full bg-[#f8f9fa] border-0 rounded px-4 py-3.5 text-primary placeholder:text-[#555] focus:ring-2 focus:ring-secondary outline-none transition-shadow"
          disabled={status === 'submitting'}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          required
          className="w-full bg-[#f8f9fa] border-0 rounded px-4 py-3.5 text-primary placeholder:text-[#555] focus:ring-2 focus:ring-secondary outline-none transition-shadow"
          disabled={status === 'submitting'}
        />
        <textarea
          name="message"
          placeholder="How can we help?"
          rows={4}
          required
          className="w-full bg-[#f8f9fa] border-0 rounded px-4 py-3.5 text-primary placeholder:text-[#555] focus:ring-2 focus:ring-secondary outline-none resize-none"
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[#c5a059] text-white font-medium text-lg py-3.5 rounded hover:bg-[#b89553] transition-colors mt-2 disabled:opacity-70"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>
        <p className="text-white/80 text-[11px] leading-relaxed text-center mt-4">
          By clicking Submit you consent to receiving SMS messages. Message &amp; data rates may apply. Message frequency may vary. Reply Help for assistance. Reply Stop to opt-out.
        </p>
      </form>
    </div>
  )
}
