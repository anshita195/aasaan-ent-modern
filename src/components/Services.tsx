'use client'

import { motion } from 'framer-motion'
import { Headphones, Search, Mic, Wind, MessageCircle, RotateCcw, Scissors, Stethoscope, Phone } from 'lucide-react'

interface ServicesProps {
  onBookingClick?: () => void
}

export default function Services({ onBookingClick }: ServicesProps) {
  const services = [
    {
      icon: Stethoscope,
      title: 'General ENT Examination',
      titleHindi: 'सामान्य ईएनटी जांच'
    },
    {
      icon: Mic,
      title: 'Stammering, Speech Therapy, AVT',
      titleHindi: 'हकलाना, स्पीच थेरेपी, एवीटी'
    },
    {
      icon: Stethoscope,
      title: 'Vertigo',
      titleHindi: 'वर्टिगो'
    },
    {
      icon: Stethoscope,
      title: 'Polyp Removal',
      titleHindi: 'पॉलिप हटाना'
    },
    {
      icon: Stethoscope,
      title: 'Endoscopy',
      titleHindi: 'एंडोस्कोपी'
    },
    {
      icon: Headphones,
      title: 'Cochlear Implant, Hearing Aids',
      titleHindi: 'कॉक्लियर इम्प्लांट, हियरिंग एड'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background anatomical elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32">
          {/* Ear outline */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-medical-red">
            <path d="M20,30 Q30,20 40,30 Q50,40 40,50 Q30,60 20,50 Q10,40 20,30 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-24 h-32">
          {/* Nose outline */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-medical-red">
            <path d="M50,10 L60,40 Q55,50 50,60 Q45,50 40,40 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/2 w-28 h-20">
          {/* Throat outline */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-medical-red">
            <ellipse cx="50" cy="50" rx="40" ry="25" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
            <span className="block text-lg font-normal text-medical-brown hindi-text mt-2">
              हमारी सेवाएं
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive ENT Care with Advanced Treatment Options
          </p>
          <div className="w-24 h-1 bg-medical-red mx-auto mt-6"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-medical-cream border border-medical-red/10 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-medical-red/30 relative overflow-hidden">
                {/* Background pattern for each card */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <service.icon className="w-full h-full text-medical-red" />
                </div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical-red to-medical-darkred rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="medical-card group">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                        <service.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-500 hindi">{service.titleHindi}</p>
                      </div>
                    </div>
                    

                    {/* Replaced booking with direct call button */}
                    <a
                      href="tel:+917240868002"
                      className="medical-button-secondary w-full mt-4 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2"
                      aria-label={`Call for ${service.title} consultation`}
                    >
                      <Phone className="w-4 h-4" />
                      Call to Enquire
                    </a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-medical-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
