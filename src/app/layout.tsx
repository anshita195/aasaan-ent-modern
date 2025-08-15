import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AASAAN ENT Clinic - Dr. Anil Kumar Jain | Best ENT Specialist in Bhopal',
  description: 'AASAAN ENT Clinic by Dr. Anil Kumar Jain - Leading ENT Specialist in Bhopal with 24+ years experience. Expert in Cochlear Implant, Endoscopy, and all ENT treatments.',
  keywords: 'ENT specialist Bhopal, Cochlear Implant surgeon, Dr Anil Kumar Jain, ENT doctor Bhopal, ear nose throat specialist, endoscopy, speech therapy, hearing aid, sinusitis treatment',
  authors: [{ name: 'Dr. Anil Kumar Jain' }],
  creator: 'AASAAN ENT Clinic',
  publisher: 'AASAAN ENT Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aasaanentclinic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AASAAN ENT Clinic - Dr. Anil Kumar Jain | Best ENT Specialist in Bhopal',
    description: 'Leading ENT Specialist in Bhopal with 24+ years experience. Expert in Cochlear Implant, Endoscopy, and comprehensive ENT treatments.',
    url: 'https://aasaanentclinic.com',
    siteName: 'AASAAN ENT Clinic',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Anil Kumar Jain - ENT Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AASAAN ENT Clinic - Dr. Anil Kumar Jain',
    description: 'Leading ENT Specialist in Bhopal with 24+ years experience.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#d32f2f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
