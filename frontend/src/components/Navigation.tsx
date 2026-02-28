'use client'

import { getActiveTheme } from '@/styles/themes'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const theme = getActiveTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header
        className="sticky top-0 z-50 shadow-sm"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div
                className="text-2xl font-bold cursor-pointer hover:opacity-80"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                🏕️ Lits Camping
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <Link
                href="/cabins"
                className="font-semibold transition-colors hover:underline"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                Cabins
              </Link>
              <Link
                href="/camping"
                className="font-semibold transition-colors hover:underline"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                Camping
              </Link>
              <Link
                href="/canoeing"
                className="font-semibold transition-colors hover:underline"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                Canoeing
              </Link>
              <Link
                href="/contact"
                className="font-semibold transition-colors hover:underline"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                Contact
              </Link>
              <Link href="/book">
                <button
                  className="px-6 py-2 rounded font-semibold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
                >
                  Book Now
                </button>
              </Link>

              {/* Secret Admin Button - uses hover effect to show quietly */}
              <div
                className="relative group"
                title="Staff access"
              >
                <div className="w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  style={{ backgroundColor: theme.colors.primary.lightGray }}
                >
                </div>
                <Link
                  href="/admin/login"
                  className="absolute right-0 mt-2 px-3 py-1 text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  style={{
                    backgroundColor: theme.colors.primary.forestGreen,
                    color: 'white'
                  }}
                >
                  Staff
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl"
              style={{ color: theme.colors.primary.forestGreen }}
            >
              ☰
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2">
              <Link
                href="/cabins"
                className="block py-2 font-semibold"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                Cabins
              </Link>
              <Link
                href="/camping"
                className="block py-2 font-semibold"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                Camping
              </Link>
              <Link
                href="/canoeing"
                className="block py-2 font-semibold"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                Canoeing
              </Link>
              <Link
                href="/contact"
                className="block py-2 font-semibold"
                style={{ color: theme.colors.primary.forestGreen }}
              >
                Contact
              </Link>
              <Link href="/book" className="block">
                <button
                  className="w-full px-6 py-2 rounded font-semibold text-white"
                  style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
                >
                  Book Now
                </button>
              </Link>
              <Link href="/admin/login" className="block py-2 text-sm font-semibold opacity-50">
                Staff Portal
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
