'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getActiveTheme } from '@/styles/themes'

export default function AdminLoginPage() {
  const router = useRouter()
  const theme = getActiveTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // TODO: Call API endpoint to authenticate
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        throw new Error('Invalid credentials')
      }

      const data = await response.json()
      localStorage.setItem('adminToken', data.token)
      router.push('/admin/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: theme.colors.primary.cream }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">👨‍💼</div>
          <h1 className="text-3xl font-bold" style={{ color: theme.colors.primary.forestGreen }}>
            Staff Portal
          </h1>
          <p className="text-gray-600 mt-2">Manage bookings and operations</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.forestGreen }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 rounded"
              style={{ borderColor: theme.colors.primary.lightGray }}
              placeholder="staff@litscamping.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: theme.colors.primary.forestGreen }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 rounded"
              style={{ borderColor: theme.colors.primary.lightGray }}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-4 rounded" style={{ backgroundColor: '#fee', color: '#c33' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded font-semibold text-white transition-all hover:scale-105 disabled:opacity-50"
            style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Demo Credentials */}
        <div
          className="mt-8 p-4 rounded text-sm"
          style={{ backgroundColor: theme.colors.primary.lightGray }}
        >
          <p className="font-semibold mb-2">Demo Credentials (Development only):</p>
          <p>Email: admin@litscamping.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </main>
  )
}
