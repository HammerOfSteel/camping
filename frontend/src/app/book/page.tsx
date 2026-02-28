'use client'

import { getActiveTheme } from '@/styles/themes'
import { useState } from 'react'

export default function BookingPage() {
  const theme = getActiveTheme()
  const [bookingType, setBookingType] = useState<'cabin' | 'camping' | 'canoe' | null>(null)
  const [_formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    accommodationType: 'cabin-4bed',
    specialRequests: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const bookingPayload = {
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        bookingType: bookingType?.toUpperCase(),
        startDate: formData.checkIn,
        endDate: formData.checkOut,
        specialRequests: formData.specialRequests,
        totalPrice: 2500,
        items: [
          {
            itemType: bookingType,
            itemName: formData.accommodationType,
            quantity: formData.guests,
            pricePerUnit: 500,
            totalPrice: formData.guests * 500
          }
        ]
      }
      
      const response = await fetch('/api/admin/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      })
      
      if (response.ok) {
        alert(`Booking request submitted! We'll confirm via ${formData.email} within 24 hours.`)
        setBookingType(null)
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: 2,
          accommodationType: 'cabin-4bed',
          specialRequests: ''
        })
      } else {
        alert('Error submitting booking. Please try again.')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('Error submitting booking. Please try again.')
    }
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 px-4"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.accent.sunriseOrange}, ${theme.colors.accent.waterBlue})`,
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-lg opacity-90">Simple and secure booking process</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {!bookingType ? (
            // Step 1: Choose booking type
            <div>
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary.forestGreen }}>
                What would you like to book?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { type: 'cabin' as const, icon: '🏡', title: 'Cabin', desc: 'Cozy self-catering cottage' },
                  { type: 'camping' as const, icon: '⛺', title: 'Camping', desc: 'Tent or RV site' },
                  { type: 'canoe' as const, icon: '🛶', title: 'Canoe Trip', desc: 'Adventure on the water' }
                ].map((option) => (
                  <button
                    key={option.type}
                    onClick={() => {
                      setBookingType(option.type)
                      setFormStep(2)
                    }}
                    className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                    style={{
                      backgroundColor: theme.colors.primary.cream,
                      border: `2px solid ${theme.colors.primary.forestGreen}`
                    }}
                  >
                    <div className="text-5xl mb-4">{option.icon}</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary.forestGreen }}>
                      {option.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{option.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Step 2+: Booking form
            <div>
              <button
                onClick={() => {
                  setBookingType(null)
                  setFormStep(1)
                }}
                className="mb-6 text-sm font-semibold"
                style={{ color: theme.colors.primary.nordicBlue }}
              >
                ← Back
              </button>

              <h2 className="text-3xl font-bold mb-8" style={{ color: theme.colors.primary.forestGreen }}>
                {bookingType === 'cabin' && 'Book a Cabin'}
                {bookingType === 'camping' && 'Reserve a Camping Site'}
                {bookingType === 'canoe' && 'Book a Canoe Trip'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: theme.colors.primary.cream }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.primary.forestGreen }}>
                    Your Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border-2 rounded"
                        style={{ borderColor: theme.colors.primary.lightGray }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border-2 rounded"
                        style={{ borderColor: theme.colors.primary.lightGray }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border-2 rounded"
                        style={{ borderColor: theme.colors.primary.lightGray }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Number of Guests *</label>
                      <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        min="1"
                        required
                        className="w-full px-4 py-2 border-2 rounded"
                        style={{ borderColor: theme.colors.primary.lightGray }}
                      />
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div
                  className="p-6 rounded-lg border-2"
                  style={{ borderColor: theme.colors.primary.nordicBlue }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.primary.nordicBlue }}>
                    Booking Dates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Check-in Date *</label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border-2 rounded"
                        style={{ borderColor: theme.colors.primary.lightGray }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Check-out Date *</label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border-2 rounded"
                        style={{ borderColor: theme.colors.primary.lightGray }}
                      />
                    </div>
                  </div>

                  {(bookingType === 'cabin' || bookingType === 'camping') && (
                    <div>
                      <label className="block text-sm font-semibold mb-2">Accommodation Type *</label>
                      <select
                        name="accommodationType"
                        value={formData.accommodationType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 rounded"
                        style={{ borderColor: theme.colors.primary.lightGray }}
                      >
                        {bookingType === 'cabin' ? (
                          <>
                            <option value="cabin-4bed">4-Bed Cottage (800 SEK/night)</option>
                            <option value="cabin-6bed">6-Bed Cottage (1000 SEK/night)</option>
                            <option value="cabin-comfort">Comfort Cabin (600 SEK/night)</option>
                          </>
                        ) : (
                          <>
                            <option value="tent-site">Tent Site (150 SEK/night)</option>
                            <option value="rv-site">RV Site (250 SEK/night)</option>
                            <option value="premium-camping">Premium Camping (400 SEK/night)</option>
                          </>
                        )}
                      </select>
                    </div>
                  )}
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Special Requests or Allergies</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border-2 rounded"
                    style={{ borderColor: theme.colors.primary.lightGray }}
                    placeholder="E.g., vegetarian options, pet accommodation, accessibility needs..."
                  />
                </div>

                {/* Submit */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded font-semibold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
                  >
                    Request Booking
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setBookingType(null)
                      setFormStep(1)
                    }}
                    className="flex-1 py-3 rounded font-semibold border-2 transition-all"
                    style={{
                      borderColor: theme.colors.primary.forestGreen,
                      color: theme.colors.primary.forestGreen
                    }}
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-sm text-gray-600 text-center mt-6">
                  * We will confirm your booking within 24 hours and send a confirmation email with payment details.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-bold mb-2">Secure Payment</h4>
              <p className="text-sm text-gray-600">All payments encrypted and secure</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-bold mb-2">Trusted by Thousands</h4>
              <p className="text-sm text-gray-600">30+ years of hospitality experience</p>
            </div>
            <div>
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-bold mb-2">24h Support</h4>
              <p className="text-sm text-gray-600">We&apos;re here to help anytime</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
