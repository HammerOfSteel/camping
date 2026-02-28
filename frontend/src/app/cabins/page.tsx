'use client'

import { getActiveTheme } from '@/styles/themes'
import Link from 'next/link'
import Image from 'next/image'

export default function CabinsPage() {
  const theme = getActiveTheme()

  const cabins = [
    {
      name: '6-Bed Self-Catering Cottage',
      beds: '6 beds',
      size: '35 sqm',
      image: '/images/cabin-35kvm.jpg',
      image2: '/images/cabin-35kvm.jpg',
      price: 'From 1000 SEK/night',
      amenities: ['Full Kitchen', 'Larger Layout', 'Terrace', 'Parking'],
      description: '3 bedrooms designed for larger groups or extended families.'
    },
    {
      name: '4-Bed Self-Catering Cottage',
      beds: '4-5 beds',
      size: '35 sqm',
      image: '/images/cabin-16kvm.jpg',
      image2: '/images/cabin-16kvm.jpg',
      price: 'From 800 SEK/night',
      amenities: ['Full Kitchen', 'TV + DVD', 'Terrace', 'Parking'],
      description: '2 bedrooms with comfortable beds and a pull-out sofa. Perfect for families.'
    },
    {
      name: 'Comfort Cabin',
      beds: '2-3 beds',
      size: '20 sqm',
      image: '/images/cabin-8kvm.jpg',
      price: 'From 600 SEK/night',
      amenities: ['Kitchenette', 'Heating', 'Shower', 'Peaceful'],
      description: 'Cozy, intimate accommodation perfect for couples or solo travelers.'
    }
  ]

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary.forestGreen}, ${theme.colors.primary.nordicBlue})`,
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cozy Cabins & Cottages</h1>
          <p className="text-xl opacity-90">Comfortable, well-equipped accommodations for every style of traveler</p>
        </div>
      </section>

      {/* Cabin Listings */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cabins.map((cabin, idx) => (
              <div
                key={idx}
                className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                style={{ borderTop: `4px solid ${theme.colors.accent.sunriseOrange}` }}
              >
                {/* Image Gallery for cabin type */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={cabin.image}
                    alt={cabin.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary.forestGreen }}>
                    {cabin.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: theme.colors.accent.sunriseOrange }}>
                    {cabin.beds} • {cabin.size}
                  </p>
                  <p className="text-gray-700 mb-4">{cabin.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {cabin.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded text-sm text-white"
                          style={{ backgroundColor: theme.colors.primary.nordicBlue }}
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-lg font-bold mb-4" style={{ color: theme.colors.accent.sunriseOrange }}>
                    {cabin.price}
                  </p>
                  
                  <Link href="/book">
                    <button
                      className="w-full py-3 rounded font-semibold text-white transition-all hover:scale-105"
                      style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.colors.primary.forestGreen }}>
            What&#39;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.primary.nordicBlue }}>Standard Amenities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Full bedding and pillows</li>
                <li>✓ Heating system</li>
                <li>✓ Private bathroom with shower</li>
                <li>✓ WiFi access</li>
                <li>✓ Parking space</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.primary.nordicBlue }}>Optional Add-ons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>+ Sheets & towels rental (100 SEK)</li>
                <li>+ Breakfast package</li>
                <li>+ Late check-out (extra fee)</li>
                <li>+ Pet accommodation (dogs only)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: theme.colors.primary.forestGreen }}
      >
        <div className="container mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <Link href="/book">
            <button
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
            >
              Reserve Your Cabin
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
