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
    description: 'Leading ENT Specialist in Bhopal with 20+ years experience.',
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
        
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
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
        {children}
      </body>
    </html>
  )
}
