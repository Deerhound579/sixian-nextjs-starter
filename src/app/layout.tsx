import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { config } from './config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: config.siteName,
    template: `%s | ${config.siteName}`,
  },
  description: "Sixian's personalized Next.js + Tailwind + TypeScript starter",
  openGraph: {
    title: config.siteName,
    description: 'Free spirit',
    url: 'https://sixian.li',
    siteName: 'Sixian Li',
    images: [
      {
        url: config.og,
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.siteName,
    images: [config.og],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
