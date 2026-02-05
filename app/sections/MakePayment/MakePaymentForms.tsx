'use client'

import { useState } from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { cn } from '@/lib/utils'

type PaymentMethod = 'paypal' | 'venmo' | 'card' | 'paylater' | null

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-amber-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow'

export default function MakePaymentForms() {
  const [activePayment, setActivePayment] = useState<PaymentMethod>(null)
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [amount, setAmount] = useState('')
  const [deliverToBilling, setDeliverToBilling] = useState(true)

  const handlePaymentSelect = (method: PaymentMethod) => {
    setActivePayment((prev) => (prev === method ? null : method))
  }

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContactStatus('submitting')
    setTimeout(() => setContactStatus('success'), 800)
  }

  const handlePaySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Replace with your payment processor integration
  }

  return (
    <Section className="bg-[#F7F9FA] overflow-hidden" id="payment-forms">
      <Container className="py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left column: Payment */}
          <div className="space-y-6">
            <div className="bg-[#F7F9FA] rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-6">
                Payment
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Client name"
                  className="w-full px-4 py-3 rounded-lg bg-[#D4AF37]/20 text-primary placeholder:text-primary/70 border border-secondary/40 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow"
                />
                <input
                  type="text"
                  placeholder="Amount in USD"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#D4AF37]/20 text-primary placeholder:text-primary/70 border border-secondary/40 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow"
                />
                <input
                  type="text"
                  placeholder="Office file number"
                  className="w-full px-4 py-3 rounded-lg bg-[#D4AF37]/20 text-primary placeholder:text-primary/70 border border-secondary/40 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('paypal')}
                  className={cn(
                    'flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg border-2 transition-all',
                    activePayment === 'paypal'
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-primary/40 bg-[#F7F9FA] text-primary hover:border-primary hover:bg-primary/5'
                  )}
                  aria-pressed={activePayment === 'paypal'}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .76-.646h6.38c2.02 0 3.58.54 4.55 1.61.88 1 1.32 2.42 1.24 4.25-.15 2.87-1.5 4.7-4.08 5.47-.42.12-.85.2-1.28.24h-.12c-.28.02-.55.03-.82.03H8.28c-.27 0-.5.2-.55.46l-.24 1.54-.45 2.87-.17 1.08a.64.64 0 0 1-.63.54z" />
                  </svg>
                  <span className="font-medium">PayPal</span>
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('venmo')}
                  className={cn(
                    'flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg border-2 transition-all',
                    activePayment === 'venmo'
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-primary/40 bg-[#F7F9FA] text-primary hover:border-primary hover:bg-primary/5'
                  )}
                  aria-pressed={activePayment === 'venmo'}
                >
                  <span className="text-xl font-bold text-[#008CFF]">V</span>
                  <span className="font-medium">venmo</span>
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('card')}
                  className={cn(
                    'flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg border-2 transition-all',
                    activePayment === 'card'
                      ? 'border-secondary bg-secondary/10 text-primary'
                      : 'border-secondary/60 bg-[#F7F9FA] text-primary hover:border-secondary hover:bg-secondary/5'
                  )}
                  aria-pressed={activePayment === 'card'}
                >
                  <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                  <span className="font-medium">Debit or Credit card</span>
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('paylater')}
                  className={cn(
                    'flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg border-2 transition-all',
                    activePayment === 'paylater'
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-primary/40 bg-[#F7F9FA] text-primary hover:border-primary hover:bg-primary/5'
                  )}
                  aria-pressed={activePayment === 'paylater'}
                >
                  <span className="text-lg font-bold text-[#008CFF]">P</span>
                  <span className="font-medium">Pay Later</span>
                </button>
              </div>

              {/* Expanded payment form - shown when any payment button is clicked */}
              {activePayment && (
                <div className="relative rounded-xl border border-amber-200/60 bg-[#F7F9FA] p-6 md:p-8 mt-6 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setActivePayment(null)}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors"
                    aria-label="Close payment form"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <form onSubmit={handlePaySubmit} className="space-y-5 pt-2">
                    {/* Card details */}
                    <div>
                      <input
                        type="text"
                        placeholder="Card number"
                        className={inputClass}
                        maxLength={19}
                      />
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <input type="text" placeholder="Expires" className={inputClass} maxLength={5} />
                        <input type="text" placeholder="Security code" className={inputClass} maxLength={4} />
                      </div>
                    </div>

                    {/* Billing address */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Billing address</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="text" placeholder="First name" className={inputClass} />
                        <input type="text" placeholder="Last name" className={inputClass} />
                      </div>
                      <input type="text" placeholder="Address line 1" className={cn(inputClass, 'mt-3')} />
                      <input type="text" placeholder="Address line 2" className={inputClass} />
                      <input type="text" placeholder="Town/city" className={inputClass} />
                      <div className="relative">
                        <select
                          className={cn(inputClass, 'appearance-none pr-10')}
                          defaultValue=""
                          aria-label="County (optional)"
                        >
                          <option value="">County (optional)</option>
                        </select>
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <input type="text" placeholder="Postcode" className={inputClass} />
                      <input type="tel" placeholder="Mobile (+44)" className={inputClass} />
                      <input type="email" placeholder="Email" className={inputClass} />
                    </div>

                    {/* Deliver to billing address */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={deliverToBilling}
                        onChange={(e) => setDeliverToBilling(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-secondary"
                      />
                      <span className="text-primary text-sm">Deliver to billing address</span>
                    </label>

                    {/* Shipping address - only when deliver to billing is NOT checked */}
                    {!deliverToBilling && (
                      <div>
                        <h3 className="font-semibold text-primary mb-3">Shipping address</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" placeholder="First name" className={inputClass} />
                          <input type="text" placeholder="Last name" className={inputClass} />
                        </div>
                        <input type="text" placeholder="Address line 1" className={cn(inputClass, 'mt-3')} />
                        <input type="text" placeholder="Address line 2" className={inputClass} />
                        <input type="text" placeholder="Town/city" className={inputClass} />
                        <div className="relative">
                          <select
                            className={cn(inputClass, 'appearance-none pr-10')}
                            defaultValue=""
                            aria-label="County (optional)"
                          >
                            <option value="">County (optional)</option>
                          </select>
                          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <input type="text" placeholder="Postcode" className={inputClass} />
                      </div>
                    )}

                    {/* Legal */}
                    <p className="text-gray-500 text-xs leading-relaxed">
                      You acknowledge the terms of the service PayPal provides to the seller and agree to the{' '}
                      <a href="#" className="text-primary underline hover:text-secondary">Privacy Statement</a>.
                      No PayPal account required.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-primary text-[#F7F9FA] font-semibold hover:opacity-90 focus:ring-2 focus:ring-secondary focus:ring-offset-2 outline-none transition-opacity"
                    >
                      Pay {amount ? `$${amount}` : '(amount)'}
                    </button>
                  </form>

                  <p className="text-center text-gray-500 text-sm mt-4">Powered by PayPal</p>
                </div>
              )}

              <p className="text-center text-gray-500 text-sm mt-6">
                Powered by PayPal
              </p>
            </div>
          </div>

          {/* Right column: Contact form - sticky when a payment form is open */}
          <div
            className={cn(
              'lg:transition-[top] duration-200',
              activePayment
                ? 'lg:sticky lg:top-6'
                : ''
            )}
          >
            <div className="bg-primary rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="font-playfair text-xl md:text-2xl font-semibold text-white mb-6">
                Contact us for a free case evaluation
              </h2>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                  disabled={contactStatus === 'submitting'}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                  disabled={contactStatus === 'submitting'}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg bg-[#F7F9FA] text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow"
                  disabled={contactStatus === 'submitting'}
                />
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#F7F9FA] text-primary placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary outline-none transition-shadow resize-y min-h-[100px]"
                  disabled={contactStatus === 'submitting'}
                />
                <button
                  type="submit"
                  disabled={contactStatus === 'submitting'}
                  className="w-full py-3.5 rounded-lg bg-secondary text-[#F7F9FA] font-semibold hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-70 transition-opacity"
                >
                  {contactStatus === 'submitting' ? 'Submitting...' : 'Submit'}
                </button>
                <p className="text-white/80 text-xs leading-relaxed">
                  By clicking SUBMIT you consent to receiving SMS messages. Message & data rates may apply. / Message frequency may vary. Reply Help to get more assistance / Reply Stop to opt-out of messaging.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
