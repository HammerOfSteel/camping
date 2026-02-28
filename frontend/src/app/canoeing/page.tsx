'use client'

import { getActiveTheme } from '@/styles/themes'
import Link from 'next/link'

export default function CanoeingPage() {
  const theme = getActiveTheme()

  const trips = [
    {
      name: 'Day Adventure',
      duration: '1 day',
      price: '699 SEK/person',
      distance: '20-30 km',
      difficulty: 'Easy',
      description: 'Perfect introduction to paddling. Scenic river views and wildlife spotting.',
      icon: '🎯'
    },
    {
      name: '3-Day Expedition',
      duration: '3 days',
      price: '1,899 SEK/person',
      distance: '60-80 km',
      difficulty: 'Moderate',
      description: 'Camp under the stars, explore remote stretches, full wilderness experience.',
      icon: '🏕️'
    },
    {
      name: 'Week-Long Journey',
      duration: '7 days',
      price: '3,999 SEK/person',
      distance: '150+ km',
      difficulty: 'Moderate',
      description: 'Deep wilderness experience with professional guides. Includes all meals.',
      icon: '🌲'
    },
    {
      name: 'Ultimate Adventure',
      duration: 'Up to 25 days',
      price: 'Custom pricing',
      distance: '400+ km',
      difficulty: 'Hard',
      description: 'Epic multi-week expedition for serious paddlers. Booking required.',
      icon: '🌊'
    }
  ]

  const features = ['Guide Included', 'All Equipment', 'Meals Provided', 'Safety Gear', 'Photo Sessions', 'Expert Knowledge']

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Canoe & Kayak Adventures</h1>
          <p className="text-xl opacity-90">30+ years of experience guiding paddlers down Sweden&#39;s pristine waterways</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-gray-700 mb-8">
            From leisurely day trips to epic multi-week expeditions, Lits Camping is Norrland&#39;s largest canoe center. 
            Our expert guides know every bend of the rivers and will help you discover the beauty of Swedish wilderness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-white font-semibold"
                style={{ backgroundColor: theme.colors.primary.nordicBlue }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Options */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme.colors.primary.forestGreen }}>
            Choose Your Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trips.map((trip, idx) => (
              <div
                key={idx}
                className="rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                style={{
                  backgroundColor: 'white',
                  borderLeft: `6px solid ${theme.colors.accent.waterBlue}`
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: theme.colors.primary.forestGreen }}>
                      {trip.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{trip.duration}</p>
                  </div>
                  <div className="text-4xl">{trip.icon}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-gray-600">Distance</p>
                    <p className="font-semibold text-gray-800">{trip.distance}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Difficulty</p>
                    <p className="font-semibold" style={{ color: theme.colors.accent.sunriseOrange }}>
                      {trip.difficulty}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{trip.description}</p>
                
                <p className="text-lg font-bold mb-4" style={{ color: theme.colors.accent.sunriseOrange }}>
                  {trip.price}
                </p>
                
                <Link href="/book">
                  <button
                    className="w-full py-2 rounded font-semibold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: theme.colors.accent.waterBlue }}
                  >
                    Book Trip
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.colors.primary.forestGreen }}>
            What to Expect
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-4xl">🛶</div>
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: theme.colors.primary.forestGreen }}>
                  Professional Equipment
                </h4>
                <p className="text-gray-700">
                  All canoes, kayaks, and gear are well-maintained and regularly inspected. We provide everything you need.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">👨‍🏫</div>
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: theme.colors.primary.forestGreen }}>
                  Expert Guides
                </h4>
                <p className="text-gray-700">
                  Our guides have decades of experience. They&#39;ll teach you proper technique and share local wildlife knowledge.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">🏕️</div>
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: theme.colors.primary.forestGreen }}>
                  Wilderness Camps
                </h4>
                <p className="text-gray-700">
                  For multi-day trips, we camp at scenic riverside locations. Meals are prepared daily by our team.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">🦌</div>
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: theme.colors.primary.forestGreen }}>
                  Nature & Wildlife
                </h4>
                <p className="text-gray-700">
                  Spot moose, elk, eagles, and beavers in their natural habitat. Immerse yourself in pristine Swedish nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: theme.colors.accent.waterBlue }}
      >
        <div className="container mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Paddle?</h2>
          <p className="text-lg mb-6 opacity-90">
            Whether you&#39;re a beginner or experienced paddler, we have the perfect adventure for you.
          </p>
          <Link href="/book">
            <button
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
            >
              Book Your Adventure
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
