'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  onBookingClick: () => void
}

declare global {
  interface Window {
    gtag: (command: string, action: string, parameters: any) => void
  }
}

export default function Header({ onBookingClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home', hindi: 'होम' },
    { name: 'Services', href: '#services', hindi: 'सेवाएं' },
    { name: 'About', href: '#about', hindi: 'परिचय' },
    { name: 'Locations', href: '#locations', hindi: 'स्थान' },
    { name: 'Contact', href: '#contact', hindi: 'संपर्क' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCallClick = () => {
    // Track call click event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'call_button_click', {
        source: 'header'
      })
    }
    window.location.href = 'tel: 7240868002'
  }

  return (
    <>
      <header className={`${isScrolled ? 'header-sticky' : 'bg-white shadow-lg sticky top-0'} z-50 transition-all duration-300`}>
        {/* Top Contact Bar - Hidden on mobile */}
        <div className="hidden lg:block text-white py-2" style={{ background: 'var(--brand-primary)' }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-base">
              <div className="flex items-center space-x-6 mb-2 sm:mb-0">
                <a href="tel:7240868002" className="flex items-center hover:underline">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-medium">7240868002</span>
                </a>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">Mon-Sat: 5:10 PM - 9:00 PM</span>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-medium">Bhopal, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center ${isScrolled ? 'py-2' : 'py-4'}`}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="AASAAN ENT Clinic Logo" 
                  width={64}
                  height={64}
                  className={`${isScrolled ? 'h-12 w-12' : 'h-16 w-16'} object-contain transition-all duration-300`}
                />
              </div>
              {/* Moved Call Button next to Logo */}
              <a
                href="tel:+917240868002"
                onClick={handleCallClick}
                className="medical-button"
                data-testid="header-call-button"
              >
                <Phone className="h-5 w-5 text-white-600" /> Call
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {!isScrolled && navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-lg"
                >
                  {item.name}
                  <span className="block text-sm text-gray-500 hindi">{item.hindi}</span>
                </motion.a>
              ))}
            </nav>

            {/* Right-side utilities (kept small phone on scroll, removed duplicate call button) */}
            <div className="flex items-center gap-3">
              {isScrolled && (
                <a 
                  href="tel:7240868002"
                  className="hidden sm:flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ml-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2 text-lg"
                  >
                    {item.name}
                    <span className="block text-sm text-gray-500 hindi">{item.hindi}</span>
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      {/* Mobile Sticky CTA */}
      {/* <div className="mobile-sticky-cta md:hidden">
        <a
          href="tel:+917240868002"
          onClick={handleCallClick}
          className="medical-button w-full"
        >
          <Phone className="w-5 h-5" />
          Call +91 7240868002
        </a>
      </div> */}
    </>
  )
}
