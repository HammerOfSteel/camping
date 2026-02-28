'use client'

import { getActiveTheme } from '@/styles/themes'
import { useState } from 'react'

export default function ContactPage() {
  const theme = getActiveTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main>
      <section
        className="py-20 px-4"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary.forestGreen}, ${theme.colors.primary.nordicBlue})`,
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-90">Questions? We would love to hear from you!</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: theme.colors.primary.forestGreen }}>
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: theme.colors.primary.forestGreen }}>Phone</h3>
                    <p className="text-gray-700 mb-1">+46 642-10247</p>
                    <p className="text-sm text-gray-600">Mon-Sun: 8 AM - 8 PM (CET)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: theme.colors.primary.forestGreen }}>Email</h3>
                    <p>
                      <a href="mailto:booking@litscamping.com" className="text-blue-600 hover:underline">
                        booking@litscamping.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: theme.colors.primary.forestGreen }}>Location</h3>
                    <p className="text-gray-700 mb-1">Lits Camping</p>
                    <p className="text-gray-700 mb-1">20 min North of Östersund</p>
                    <p className="text-gray-700 mb-1">Along E45, Jämtland, Sweden</p>
                    <a href="https://maps.google.com" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">🕐</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: theme.colors.primary.forestGreen }}>Hours</h3>
                    <p className="text-gray-700 mb-1">Reception: 8 AM - 5 PM</p>
                    <p className="text-gray-700">Guests: 24-hour access</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: theme.colors.primary.forestGreen }}>Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.forestGreen }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 rounded"
                    style={{ borderColor: theme.colors.primary.lightGray }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.forestGreen }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 rounded"
                    style={{ borderColor: theme.colors.primary.lightGray }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.forestGreen }}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 rounded"
                    style={{ borderColor: theme.colors.primary.lightGray }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.forestGreen }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border-2 rounded"
                    style={{ borderColor: theme.colors.primary.lightGray }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded font-semibold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4">
                We typically respond within 24 hours. For urgent matters, please call directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
