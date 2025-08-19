'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhatsAppCTA() {
  const whatsAppNumber = '917240868002'
  const message = 'Hello Dr. Anil Kumar Jain, I would like to inquire about an appointment.'
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'sticky_cta',
      })
    }
    window.open(whatsAppLink, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Image src="/whatsapp.svg" alt="WhatsApp Icon" width={32} height={32} />
    </motion.button>
  )
}
