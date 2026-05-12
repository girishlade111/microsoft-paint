import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://microsoft-paint.vercel.app'),
  title: {
    default: 'Microsoft Paint Web - Free Online Drawing & Painting Tool',
    template: '%s | Microsoft Paint Web',
  },
  description: 'Use Microsoft Paint online for free. A full-featured digital painting and drawing application in your browser. Draw, edit images, and create artwork with brush tools, eraser, and color picker.',
  keywords: ['microsoft paint', 'paint online', 'free paint', 'drawing app', 'digital painting', 'web paint', 'canvas editor', 'image editor', 'drawing tool', 'paint tool'],
  authors: [{ name: 'Microsoft Paint Web' }],
  creator: 'Microsoft Paint Web',
  publisher: 'Microsoft Paint Web',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://microsoft-paint.vercel.app',
    siteName: 'Microsoft Paint Web',
    title: 'Microsoft Paint Web - Free Online Drawing & Painting Tool',
    description: 'Use Microsoft Paint online for free. A full-featured digital painting and drawing application in your browser.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Microsoft Paint Web - Free Online Drawing Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Paint Web',
    description: 'Use Microsoft Paint online for free. A full-featured digital painting and drawing application.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://microsoft-paint.vercel.app',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
