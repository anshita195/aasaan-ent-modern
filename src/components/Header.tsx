'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Doctor' },
    { href: '#services', label: 'Services' },
    { href: '#locations', label: 'Locations' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-medical-cream/95 backdrop-blur-md border-b-2 border-medical-red shadow-lg' 
          : 'bg-medical-cream/90 backdrop-blur-sm border-b border-medical-red/30'
      }`}
    >
      {/* Top contact bar */}
      <div className="bg-medical-red text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:7240868002" className="hover:underline">7240868002</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Timing: 5:10 PM - 9:00 PM | Sunday: By Appointment</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-2xl font-bold text-medical-red tracking-wide">
              AASAAN ENT CLINIC
            </h1>
            <p className="text-medical-brown text-sm font-medium hindi-text">
              आसान ईएनटी क्लिनिक
            </p>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-medical-red font-medium transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-red transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a
              href="tel:7240868002"
              className="bg-medical-red text-white px-6 py-2 rounded-full font-semibold hover:bg-medical-darkred transition-colors duration-200 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Book Appointment
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-medical-red hover:bg-medical-red/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-4 border border-medical-red/20"
        >
          <div className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-medical-red font-medium py-2 border-b border-gray-100 last:border-b-0 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:7240868002"
              className="block bg-medical-red text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-medical-darkred transition-colors"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.02 }}
            >
              📞 Book Appointment
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
