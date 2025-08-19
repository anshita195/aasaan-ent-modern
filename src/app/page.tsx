// BOOKING FUNCTIONALITY DISABLED - ALL BUTTONS NOW CALL DIRECTLY
'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BookingModal from '@/components/BookingModal'
import Testimonials from '@/components/Testimonials'
import YouTubeSection from '@/components/YouTube'

export default function Home() {
  // Keep modal for contact info display, but simplified
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <main>
      <Header onBookingClick={openContactModal} />
      <Hero onBookingClick={openContactModal} />
      <Testimonials />
      <Services />
      <YouTubeSection />
      <About />
      <Locations />
      <Contact />
      <Footer />
      <BookingModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}
