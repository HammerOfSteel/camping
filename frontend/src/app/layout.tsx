import type { Metadata } from 'next'
import { getActiveTheme } from '@/styles/themes'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

const activeTheme = getActiveTheme()

export const metadata: Metadata = {
  title: {
    default: 'Lits Camping - Nordic Adventure & Family Resort',
    template: '%s | Lits Camping',
  },
  description: 'Peaceful camping, cabins, and canoe center in Jämtland, Sweden. Family-run resort on beautiful Hårkan River.',
  keywords: ['camping', 'cabins', 'canoe', 'Sweden', 'Jämtland', 'Östersund', 'family resort'],
  authors: [{ name: 'Ove Djurberg and family' }],
  creator: 'Lits Camping',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://litscamping.com',
    siteName: 'Lits Camping',
    title: 'Lits Camping - Nordic Adventure & Family Resort',
    description: 'Peaceful camping, cabins, and canoe center in beautiful Jämtland, Sweden.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lits Camping - Nordic Adventure & Family Resort',
    description: 'Peaceful camping, cabins, and canoe center in beautiful Jämtland, Sweden.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-here',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={activeTheme.name}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={activeTheme.colors.primary.forestGreen} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preload critical fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
