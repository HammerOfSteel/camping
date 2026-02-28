'use client'

import { getActiveTheme } from '@/styles/themes'
import Link from 'next/link'

export default function Footer() {
  const theme = getActiveTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{ backgroundColor: theme.colors.primary.forestGreen }}
      className="text-white py-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Lits Camping</h3>
            <p className="text-white/80 text-sm">
              Family-run camping and canoe center in beautiful Jämtland, Sweden. 30+ years of hospitality experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cabins" className="hover:text-white transition">
                  Cabins
                </Link>
              </li>
              <li>
                <Link href="/camping" className="hover:text-white transition">
                  Camping
                </Link>
              </li>
              <li>
                <Link href="/canoeing" className="hover:text-white transition">
                  Canoeing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="tel:+4664210247" className="hover:text-white transition">
                  ☎️ +46 642-10247
                </a>
              </li>
              <li>
                <a href="mailto:booking@litscamping.com" className="hover:text-white transition">
                  ✉️ booking@litscamping.com
                </a>
              </li>
              <li className="text-sm">
                📍 20 min north of Östersund
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <strong>Reception:</strong><br />
                8 AM - 5 PM (CET)
              </li>
              <li className="text-xs mt-2 opacity-75">
                Guests have 24-hour access to all facilities
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: `1px solid ${theme.colors.secondary.sageGreen}` }} className="mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>
            © {currentYear} Lits Camping. All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link href="/admin/login" className="hover:text-white transition font-semibold">
              Staff Login
            </Link>
            <a href="https://www.litscamping.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Swedish Site
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
