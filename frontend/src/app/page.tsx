'use client'

import { getActiveTheme } from '@/styles/themes'
import Link from 'next/link'

export default function Home() {
  const theme = getActiveTheme()
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary.forestGreen}, ${theme.colors.primary.nordicBlue})`,
            opacity: 0.9
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to Lits Camping
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Peaceful Nordic adventure meets authentic family hospitality in vibrant Jämtland, Sweden
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-85">
            Beautifully situated where the Hårkan river flows into Indalsälven—only 20 minutes north of Östersund along the E45. Your perfect Scandinavian escape awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <button 
                className="px-8 py-4 rounded-lg font-semibold text-lg white transition-all hover:scale-105 w-full sm:w-auto"
                style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
              >
                Book Now
              </button>
            </Link>
            <Link href="/cabins">
              <button 
                className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white text-white hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Explore Cabins
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme.colors.primary.forestGreen }}>
            Everything You Need for the Perfect Stay
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🛏️</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary.forestGreen }}>Comfortable Stays</h3>
              <p className="text-gray-600">15 cozy cabins and 12 self-catered cottages with all the comforts of home</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🏕️</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary.forestGreen }}>Camping Experience</h3>
              <p className="text-gray-600">50 tent sites and parking spaces with electricity in a beautiful riverside setting</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🛶</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary.forestGreen }}>Canoe Adventures</h3>
              <p className="text-gray-600">30+ years of expertise—day trips to 25-day expeditions down pristine Swedish rivers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Cabins */}
            <Link href="/cabins" className="group">
              <div 
                className="p-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{ backgroundColor: theme.colors.primary.cream }}
              >
                <h3 className="text-3xl font-bold mb-4" style={{ color: theme.colors.primary.forestGreen }}>
                  Cabins & Cottages
                </h3>
                <p className="text-gray-700 mb-4">
                  Experience Swedish comfort in our selection of well-equipped cabins and self-catered cottages. Perfect for families and groups.
                </p>
                <p style={{ color: theme.colors.accent.sunriseOrange }} className="font-semibold">
                  Explore →
                </p>
              </div>
            </Link>

            {/* Camping */}
            <Link href="/camping" className="group">
              <div 
                className="p-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer border-2"
                style={{ borderColor: theme.colors.primary.nordicBlue, backgroundColor: 'white' }}
              >
                <h3 className="text-3xl font-bold mb-4" style={{ color: theme.colors.primary.nordicBlue }}>
                  Camping & RV Sites
                </h3>
                <p className="text-gray-700 mb-4">
                  Pitch your tent or park your RV on our spacious riverside grounds. Amenities include electric hookups and family-friendly facilities.
                </p>
                <p style={{ color: theme.colors.accent.sunriseOrange }} className="font-semibold">
                  Explore →
                </p>
              </div>
            </Link>

            {/* Canoeing */}
            <Link href="/canoeing" className="group">
              <div 
                className="p-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer border-2"
                style={{ borderColor: theme.colors.accent.waterBlue, backgroundColor: 'white' }}
              >
                <h3 className="text-3xl font-bold mb-4" style={{ color: theme.colors.accent.waterBlue }}>
                  Canoe Adventures
                </h3>
                <p className="text-gray-700 mb-4">
                  Explore Sweden&#39;s most beautiful waterways. From short day trips to epic multi-week expeditions, we&#39;ve got the perfect adventure.
                </p>
                <p style={{ color: theme.colors.accent.sunriseOrange }} className="font-semibold">
                  Explore →
                </p>
              </div>
            </Link>

            {/* Contact */}
            <Link href="/contact" className="group">
              <div 
                className="p-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{ backgroundColor: theme.colors.secondary.sageGreen, opacity: 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-4" style={{ color: theme.colors.primary.warmBrown }}>
                  Get in Touch
                </h3>
                <p className="text-gray-700 mb-4">
                  Questions or ready to book? Contact Ove and the team for personalized recommendations and planning.
                </p>
                <p style={{ color: theme.colors.accent.sunriseOrange }} className="font-semibold">
                  Contact →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: theme.colors.primary.forestGreen }}
      >
        <div className="container mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book your stay, canoe trip, or camping experience today
          </p>
          <Link href="/book">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
            >
              Start Booking
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
