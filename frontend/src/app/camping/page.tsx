'use client'

import { getActiveTheme } from '@/styles/themes'
import Link from 'next/link'
import Image from 'next/image'

export default function CampingPage() {
  const theme = getActiveTheme()

  const campingOptions = [
    {
      name: 'Tent Site',
      icon: '⛺',
      price: 'From 150 SEK/night',
      features: ['Spacious pitches', 'Level ground', 'Fire pit', 'Table & benches']
    },
    {
      name: 'RV/Caravan Site',
      icon: '🚐',
      price: 'From 250 SEK/night',
      features: ['Electric hookup', 'Water access', 'Waste disposal', 'Parking']
    },
    {
      name: 'Premium Camping',
      icon: '🏕️',
      price: 'From 400 SEK/night',
      features: ['Electric included', 'Private area', 'WiFi', 'Facilities access']
    }
  ]

  const facilities = [
    { name: 'Playground', icon: '🎪' },
    { name: 'Swimming Area', icon: '🏊' },
    { name: 'Miniature Golf', icon: '⛳' },
    { name: 'Restaurant & Bar', icon: '🍴' },
    { name: 'WiFi Zones', icon: '📶' },
    { name: 'Bicycle Rentals', icon: '🚴' }
  ]

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary.nordicBlue}, ${theme.colors.accent.waterBlue})`,
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Riverside Camping</h1>
          <p className="text-xl opacity-90">Perfect for tents, RVs, and caravans with family-friendly facilities</p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.colors.primary.forestGreen }}>
            See Our Campground
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '/images/camping/camping-aerial.jpg',
              '/images/camping/rv-site.jpg',
              '/images/camping/camping-aerial.jpg',
              '/images/camping/rv-site.jpg'
            ].map((src, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={src}
                  alt={`Camping area ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camping Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme.colors.primary.forestGreen }}>
            Camping Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campingOptions.map((option, idx) => (
              <div
                key={idx}
                className="rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                style={idx === 1 ? { 
                  backgroundColor: theme.colors.primary.cream,
                  borderTop: `6px solid ${theme.colors.accent.sunriseOrange}`
                } : {
                  backgroundColor: 'white',
                  borderTop: `4px solid ${theme.colors.primary.nordicBlue}`
                }}
              >
                <div className="text-6xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary.forestGreen }}>
                  {option.name}
                </h3>
                <p className="text-lg font-bold mb-6" style={{ color: theme.colors.accent.sunriseOrange }}>
                  {option.price}
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  {option.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
                <Link href="/book">
                  <button
                    className="w-full py-2 rounded font-semibold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: theme.colors.primary.nordicBlue }}
                  >
                    Book Site
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme.colors.primary.forestGreen }}>
            Family-Friendly Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{facility.icon}</div>
                <p className="font-semibold text-gray-800">{facility.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: theme.colors.primary.cream }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.primary.forestGreen }}>
                Amenities Included
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Access to all facilities</li>
                <li>✓ Parking area</li>
                <li>✓ Waste disposal</li>
                <li>✓ Fire pits (tent sites)</li>
                <li>✓ WiFi access zones</li>
              </ul>
            </div>
            <div
              className="p-8 rounded-lg border-2"
              style={{ borderColor: theme.colors.primary.nordicBlue }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.primary.nordicBlue }}>
                Peak Season Info
              </h3>
              <p className="text-gray-700 mb-4">
                Peak season runs June through August. Booking in advance is recommended, especially for extended stays.
              </p>
              <p className="text-sm text-gray-600">
                Minimum 1-night stay. Check-in after 2 PM, check-out by 11 AM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: theme.colors.primary.nordicBlue }}
      >
        <div className="container mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Spot</h2>
          <Link href="/book">
            <button
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
            >
              Reserve Campsite
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
