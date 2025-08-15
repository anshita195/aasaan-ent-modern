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

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const openBookingModal = () => setIsBookingModalOpen(true)
  const closeBookingModal = () => setIsBookingModalOpen(false)

  return (
    <main>
      <Header onBookingClick={openBookingModal} />
      <Hero onBookingClick={openBookingModal} />
      <Testimonials />
      <Services onBookingClick={openBookingModal} />
      <About />
      <Locations />
      <Contact />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </main>
  )
}
