'use client'

import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import Testimonials from './Testimonials'
import About from './About'
import YouTube from './YouTube'
import Locations from './Locations'
import Contact from './Contact'
import Footer from './Footer'
import BookingModal from './BookingModal'

export default function PageClient() {
  const [isBookingModalOpen, setBookingModalOpen] = useState(false)

  const handleBookingClick = () => {
    setBookingModalOpen(true)
  }

  const handleCloseModal = () => {
    setBookingModalOpen(false)
  }

  return (
    <>
      <Header onBookingClick={handleBookingClick} />
      <main>
        <Hero onBookingClick={handleBookingClick} />
        <Services />
        <Testimonials />
        <About />
        <YouTube />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </>
  )
}
