// BOOKING FUNCTIONALITY DISABLED - USERS SHOULD CALL DIRECTLY
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

// Simplified component - just shows call-to-action
export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null

  const handleCallClick = () => {
    // Track call click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_button_click', {
        source: 'booking_modal'
      })
    }
    window.location.href = 'tel:+917240868002'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: [0.2, 0.9, 0.2, 1] }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative border border-gray-100"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close contact modal"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            
            <h2 id="contact-modal-title" className="text-2xl font-bold text-gray-900 mb-4">
              Book Your Appointment
            </h2>
            
            <p className="text-gray-600 mb-6">
              Call us directly to book your appointment, get consultation, or enquire about our services.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={handleCallClick}
                className="medical-button w-full text-lg py-4"
              >
                <Phone className="w-6 h-6" />
                Call +91 7240868002
              </button>
              
              <div className="text-sm text-gray-500">
                <p>Available: Mon-Sat, 9:00 AM - 8:00 PM</p>
                <p className="mt-1">For urgent cases, call anytime</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
