'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import ScrollFollowingForm from '../../components/ScrollFollowingForm'
import { cn } from '@/lib/utils'

type PaymentMethod = 'paypal' | 'venmo' | 'card' | 'paylater' | null

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-gray-500 border border-amber-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow'

export default function MakePaymentForms() {
  const [activePayment, setActivePayment] = useState<PaymentMethod>(null)
  const [amount, setAmount] = useState('')
  const [deliverToBilling, setDeliverToBilling] = useState(true)

  const handlePaymentSelect = (method: PaymentMethod) => {
    setActivePayment((prev) => (prev === method ? null : method))
  }

  const handlePaySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Replace with your payment processor integration
  }

  return (
    <Section className="bg-white" id="payment-forms">
      <Container className="py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">
          {/* Left column: Payment */}
          <div className="flex-1 lg:w-[58.33%] space-y-6">
            <div className="bg-[#F9F9F9] rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
              <h2 className="font-libre text-xl font-medium text-black mb-6">
                Payment
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                <input
                  type="text"
                  placeholder="Client name"
                  className="w-full px-4 py-3.5 rounded-md bg-[#C5A059] text-white placeholder:text-white/90 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                />
                <input
                  type="text"
                  placeholder="Amount in USD"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-md bg-[#C5A059] text-white placeholder:text-white/90 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                />
                <input
                  type="text"
                  placeholder="Office file number"
                  className="w-full px-4 py-3.5 rounded-md bg-[#C5A059] text-white placeholder:text-white/90 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('paypal')}
                  className={cn(
                    'flex items-center justify-center py-4 px-4 rounded-lg border bg-white transition-all h-20 hover:shadow-md relative overflow-hidden',
                    activePayment === 'paypal' ? 'border-[#003087] ring-1 ring-[#003087]' : 'border-[#003087]'
                  )}
                  aria-label="Pay with PayPal"
                >
                  <div className="relative w-28 h-8">
                    <Image 
                      src="/payment/paypal.png" 
                      alt="PayPal" 
                      fill 
                      className="object-contain" 
                      sizes="112px"
                    />
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('venmo')}
                  className={cn(
                    'flex items-center justify-center py-4 px-4 rounded-lg border bg-white transition-all h-20 hover:shadow-md relative overflow-hidden',
                    activePayment === 'venmo' ? 'border-[#008CFF] ring-1 ring-[#008CFF]' : 'border-[#008CFF]'
                  )}
                  aria-label="Pay with Venmo"
                >
                  <div className="relative w-24 h-8">
                    <Image 
                      src="/payment/venmo.png" 
                      alt="Venmo" 
                      fill 
                      className="object-contain" 
                      sizes="96px"
                    />
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('card')}
                  className={cn(
                    'flex items-center justify-center py-4 px-4 rounded-lg border bg-white transition-all h-20 hover:shadow-md relative overflow-hidden',
                    activePayment === 'card' ? 'border-[#FFC439] ring-1 ring-[#FFC439]' : 'border-[#FFC439]'
                  )}
                  aria-label="Pay with Debit or Credit Card"
                >
                   <div className="flex items-center gap-3">
                    <div className="relative w-8 h-5">
                       <Image 
                        src="/payment/debit-or-credit.png" 
                        alt="" 
                        fill 
                        className="object-contain" 
                        sizes="32px"
                      />
                    </div>
                    <span className="font-poppins text-sm font-medium text-black">Debit or Credit card</span>
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('paylater')}
                  className={cn(
                    'flex items-center justify-center py-4 px-4 rounded-lg border bg-white transition-all h-20 hover:shadow-md relative overflow-hidden',
                    activePayment === 'paylater' ? 'border-[#003087] ring-1 ring-[#003087]' : 'border-[#003087]'
                  )}
                  aria-label="Pay Later"
                >
                  <div className="relative w-28 h-8">
                    <Image 
                      src="/payment/paypal-paylater.png" 
                      alt="PayPal Pay Later" 
                      fill 
                      className="object-contain" 
                      sizes="112px"
                    />
                  </div>
                </button>
              </div>

              {/* Expanded payment form - shown when any payment button is clicked */}
              {activePayment && (
                <div className="relative rounded-xl border border-gray-200 bg-white p-6 md:p-8 mb-8 shadow-sm">
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
                </div>
              )}

              <div className="flex items-center justify-center gap-1.5 text-gray-500 text-sm">
                <span>Powered by</span> 
                <span className="font-bold italic text-[#003087] text-lg">PayPal</span>
              </div>
            </div>
          </div>

          {/* Right column: Contact form - Sticky */}
          <ScrollFollowingForm />
        </div>
      </Container>
    </Section>
  )
}
