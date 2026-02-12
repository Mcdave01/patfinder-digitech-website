import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PathFinder DigiTech - Digital Transformation & Technology Solutions Nigeria',
  description: 'PathFinder DigiTech Limited provides comprehensive digital transformation, institutional management systems, computer lab solutions, web design, video production, and technology training across Nigeria and West Africa.',
  keywords: 'digital transformation Nigeria, educational management systems, computer lab solutions, web design Lagos, digital marketing services, technology training, institutional software solutions',
  authors: [{ name: 'PathFinder DigiTech Limited' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pathfinderdigitech.org',
    siteName: 'PathFinder DigiTech',
    description: 'Africa\'s leading digital transformation partner for institutions and businesses',
  },

   icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
