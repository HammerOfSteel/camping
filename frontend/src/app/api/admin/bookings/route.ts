import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-change-this')
  } catch {
    return null
  }
}

// GET - List bookings (admin only)
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const bookings = await prisma.booking.findMany({
      include: {
        items: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Create booking (public)
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const booking = await prisma.booking.create({
      data: {
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        bookingType: data.bookingType,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        totalPrice: parseFloat(data.totalPrice),
        specialRequests: data.specialRequests || null,
        status: 'PENDING',
        items: {
          create: (data.items || []).map((item: any) => ({
            itemType: item.itemType,
            itemName: item.itemName,
            quantity: item.quantity,
            pricePerUnit: parseFloat(item.pricePerUnit),
            totalPrice: parseFloat(item.totalPrice)
          }))
        }
      },
      include: {
        items: true
      }
    })

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
