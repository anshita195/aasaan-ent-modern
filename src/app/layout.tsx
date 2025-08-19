import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { MotionConfig } from 'framer-motion'
import './globals.css'
import WhatsAppCTA from '@/components/WhatsAppCTA'

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
  metadataBase: new URL('https://aasaan-ent-modern.vercel.app'),
  alternates: {
    canonical: 'https://aasaan-ent-modern.vercel.app/',
  },
  openGraph: {
    title: 'AASAAN ENT Clinic - Dr. Anil Kumar Jain | Best ENT Specialist in Bhopal',
    description: 'Leading ENT Specialist in Bhopal with 24+ years experience. Expert in Cochlear Implant, Endoscopy, and comprehensive ENT treatments.',
    url: 'https://aasaan-ent-modern.vercel.app',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#d32f2f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Physician", "LocalBusiness"],
              "name": "AASAAN ENT Clinic",
              "description": "Leading ENT Specialist in Bhopal with 24+ years experience. Expert in Cochlear Implant, Endoscopy, and comprehensive ENT treatments.",
              "url": "https://aasaan-ent-modern.vercel.app",
              "telephone": "+917240868002",
              "email": "info@aasaanentclinic.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Bhopal Railway Station",
                "addressLocality": "Bhopal",
                "addressRegion": "Madhya Pradesh",
                "postalCode": "462001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.2599",
                "longitude": "77.4126"
              },
              "openingHours": "Mo-Sa 17:10-21:00",
              "priceRange": "₹₹",
              "image": "https://aasaan-ent-modern.vercel.app/doctor.png",
              "founder": {
                "@type": "Person",
                "name": "Dr. Anil Kumar Jain",
                "jobTitle": "ENT Specialist",
                "worksFor": {
                  "@type": "Organization",
                  "name": "AASAAN ENT Clinic"
                }
              },
              "medicalSpecialty": [
                "Otolaryngology",
                "Cochlear Implant Surgery",
                "Endoscopy",
                "Speech Therapy",
                "Hearing Aid Fitting"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Bhopal"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ENT Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "General ENT Examination"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure", 
                      "name": "Cochlear Implant Surgery"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "ENT Endoscopy"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <MotionConfig isStatic={true}>
          <Toaster position="top-center" richColors />
          <WhatsAppCTA />
          {children}
        </MotionConfig>
      </body>
    </html>
  )
}
