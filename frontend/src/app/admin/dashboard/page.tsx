'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getActiveTheme } from '@/styles/themes'

interface Booking {
  id: string
  bookingType: string
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
  customerName: string
  customerEmail: string
  customerPhone: string
  startDate: string
  endDate: string
  totalPrice: number
  createdAt: string
  items?: Array<{
    id: string
    itemName: string
    quantity: number
    totalPrice: number
  }>
}

export default function AdminDashboard() {
  const router = useRouter()
  const theme = getActiveTheme()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'ALL' | 'PENDING' | 'CONFIRMED' | 'CANCELLED'>('PENDING')

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }

    // Fetch bookings
    fetchBookings()
  }, [router])

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/bookings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch bookings')
      }

      const data = await response.json()
      setBookings(data)
    } catch (err) {
      console.error('Error fetching bookings:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (bookingId: string) => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`/api/admin/bookings/${bookingId}/approve`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.ok) {
        setBookings(bookings.map(b => 
          b.id === bookingId ? { ...b, status: 'CONFIRMED' as const } : b
        ))
        alert('Booking approved!')
      }
    } catch (err) {
      alert('Failed to approve booking')
    }
  }

  const handleCancel = async (bookingId: string) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return

    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`/api/admin/bookings/${bookingId}/cancel`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.ok) {
        setBookings(bookings.map(b => 
          b.id === bookingId ? { ...b, status: 'CANCELLED' as const } : b
        ))
        alert('Booking cancelled!')
      }
    } catch (err) {
      alert('Failed to cancel booking')
    }
  }

  const handleExportCSV = () => {
    const filtered = filter === 'ALL' ? bookings : bookings.filter(b => b.status === filter)
    const csv = [
      'Date,Guest Name,Email,Phone,Type,Status,Check-in,Check-out,Price',
      ...filtered.map(b => 
        `${new Date(b.createdAt).toLocaleDateString()},"${b.customerName}","${b.customerEmail}","${b.customerPhone}",${b.bookingType},${b.status},${new Date(b.startDate).toLocaleDateString()},${new Date(b.endDate).toLocaleDateString()},${b.totalPrice} SEK`
      )
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  const filteredBookings = filter === 'ALL' ? bookings : bookings.filter(b => b.status === filter)
  const pendingCount = bookings.filter(b => b.status === 'PENDING').length
  const confirmedCount = bookings.filter(b => b.status === 'CONFIRMED').length

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: theme.colors.primary.cream }}
    >
      {/* Header */}
      <div
        className="py-6 px-4 shadow-md"
        style={{ backgroundColor: theme.colors.primary.forestGreen, color: 'white' }}
      >
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <h1 className="text-3xl font-bold">📊 Booking Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded font-semibold transition-all hover:opacity-80"
            style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: 'white', borderLeft: `6px solid ${theme.colors.accent.sunriseOrange}` }}
          >
            <p className="text-gray-600 text-sm">Pending Bookings</p>
            <p className="text-4xl font-bold mt-2" style={{ color: theme.colors.accent.sunriseOrange }}>
              {pendingCount}
            </p>
          </div>
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: 'white', borderLeft: `6px solid ${theme.colors.primary.nordicBlue}` }}
          >
            <p className="text-gray-600 text-sm">Confirmed Bookings</p>
            <p className="text-4xl font-bold mt-2" style={{ color: theme.colors.primary.nordicBlue }}>
              {confirmedCount}
            </p>
          </div>
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: 'white', borderLeft: `6px solid ${theme.colors.accent.waterBlue}` }}
          >
            <p className="text-gray-600 text-sm">Total Bookings</p>
            <p className="text-4xl font-bold mt-2" style={{ color: theme.colors.accent.waterBlue }}>
              {bookings.length}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div
          className="p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row gap-4 justify-between items-center"
          style={{ backgroundColor: 'white' }}
        >
          <div className="flex gap-2">
            {['ALL', 'PENDING', 'CONFIRMED', 'CANCELLED'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-4 py-2 rounded font-semibold transition-all ${
                  filter === status ? 'text-white' : 'border-2'
                }`}
                style={
                  filter === status
                    ? { backgroundColor: theme.colors.primary.forestGreen }
                    : { borderColor: theme.colors.primary.forestGreen, color: theme.colors.primary.forestGreen }
                }
              >
                {status}
              </button>
            ))}
          </div>
          <button
            onClick={handleExportCSV}
            className="px-6 py-2 rounded font-semibold text-white transition-all hover:scale-105"
            style={{ backgroundColor: theme.colors.primary.nordicBlue }}
          >
            📥 Export CSV
          </button>
        </div>

        {/* Bookings Table */}
        {loading ? (
          <div className="text-center py-12">
            <p>Loading bookings...</p>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div
            className="p-8 rounded-lg text-center"
            style={{ backgroundColor: 'white' }}
          >
            <p className="text-gray-600 text-lg">No {filter === 'ALL' ? '' : filter.toLowerCase()} bookings</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full" style={{ backgroundColor: 'white' }}>
              <thead style={{ backgroundColor: theme.colors.primary.cream }}>
                <tr>
                  <th className="p-4 text-left font-semibold">Date</th>
                  <th className="p-4 text-left font-semibold">Guest</th>
                  <th className="p-4 text-left font-semibold">Type</th>
                  <th className="p-4 text-left font-semibold">Dates</th>
                  <th className="p-4 text-left font-semibold">Guests</th>
                  <th className="p-4 text-left font-semibold">Status</th>
                  <th className="p-4 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    style={{ borderBottom: `1px solid ${theme.colors.primary.lightGray}` }}
                  >
                    <td className="p-4 text-sm">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="font-semibold">{booking.customerName}</div>
                      <div className="text-sm text-gray-600">{booking.customerEmail}</div>
                    </td>
                    <td className="p-4 font-semibold">{booking.bookingType}</td>
                    <td className="p-4 text-sm">
                      {new Date(booking.startDate).toLocaleDateString()} -
                      {new Date(booking.endDate).toLocaleDateString()}
                    </td>
                    <td className="p-4">{booking.items?.[0]?.quantity || '-'}</td>
                    <td className="p-4">
                      <span
                        className="px-3 py-1 rounded text-white text-sm font-semibold"
                        style={{
                          backgroundColor:
                            booking.status === 'PENDING'
                              ? theme.colors.accent.sunriseOrange
                              : booking.status === 'CONFIRMED'
                              ? theme.colors.primary.nordicBlue
                              : '#ccc'
                        }}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        {booking.status === 'PENDING' && (
                          <>
                            <button
                              onClick={() => handleApprove(booking.id)}
                              className="px-3 py-1 rounded text-white text-sm font-semibold transition-all hover:scale-105"
                              style={{ backgroundColor: theme.colors.primary.nordicBlue }}
                            >
                              ✓ Approve
                            </button>
                            <button
                              onClick={() => handleCancel(booking.id)}
                              className="px-3 py-1 rounded text-white text-sm font-semibold transition-all hover:scale-105"
                              style={{ backgroundColor: '#ccc', color: '#666' }}
                            >
                              ✕ Deny
                            </button>
                          </>
                        )}
                        {booking.status === 'CONFIRMED' && (
                          <button
                            onClick={() => handleCancel(booking.id)}
                            className="px-3 py-1 rounded text-white text-sm font-semibold transition-all hover:scale-105"
                            style={{ backgroundColor: theme.colors.accent.sunriseOrange }}
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
