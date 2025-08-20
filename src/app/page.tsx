// BOOKING FUNCTIONALITY DISABLED - ALL BUTTONS NOW CALL DIRECTLY
'use client'

import { useState, lazy, Suspense } from 'react'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import BookingModal from '@/components/BookingModal'
import LoadingSpinner from '@/components/LoadingSpinner'

// Lazy load non-critical components
const Services = lazy(() => import('@/components/Services'))
const About = lazy(() => import('@/components/About'))
const Locations = lazy(() => import('@/components/Locations'))
const Contact = lazy(() => import('@/components/Contact'))
const Footer = lazy(() => import('@/components/Footer'))
const Testimonials = lazy(() => import('@/components/Testimonials'))
const YouTubeSection = lazy(() => import('@/components/YouTube'))


export default function Home() {
  // Keep modal for contact info display, but simplified
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <main>
      <Header onBookingClick={openContactModal} />
      <Hero onBookingClick={openContactModal} />
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <YouTubeSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Locations />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      <BookingModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}
