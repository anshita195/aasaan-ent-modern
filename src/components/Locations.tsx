'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Calendar, IndianRupee, Copy } from 'lucide-react'
import { useState } from 'react'

export default function Locations() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const locations = [
    {
      id: 'lalghati',
      name: 'Lalghati Clinic',
      regNumber: 'MP-6753',
      address: 'Ashapuri Plaza, Gufa Mandir Road, Lalghati, Bhopal',
      timing: '5:10 PM - 9:00 PM',
      phone: '7240868002',
      specialNote: 'Sunday - Only on Appointment',
      noteType: 'warning'
    },
    {
      id: 'sant-hirdaram',
      name: 'Sant Hirdaram Nagar Clinic',
      regNumber: 'MP-3652',
      address: 'G-56 Krishna Plaza, Near Prarthna Medical Center, Near Narmada Sweet House, Sant Hirdaram Nagar, Bairagarh, Bhopal - 462030',
      timing: '5:10 PM - 9:00 PM',
      phone: '7240868002',
      consultationFee: '₹300',
      noteType: 'info'
    }
  ]

  const copyAddress = async (address: string, locationId: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(locationId)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy address:', err)
    }
  }

  return (
    <section id="locations" className="py-20 bg-medical-beige relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-24 h-24 border-2 border-medical-red rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 border border-medical-red rounded-full"></div>
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
            Our Clinic Locations
            <span className="block text-lg font-normal text-medical-brown hindi-text mt-2">
              हमारे क्लिनिक स्थान
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at either of our convenient locations in Bhopal
          </p>
          <div className="w-24 h-1 bg-medical-red mx-auto mt-6"></div>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-red/10 hover:shadow-2xl hover:border-medical-red/30 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 pb-6 border-b-2 border-medical-beige">
                  <div>
                    <h3 className="text-2xl font-bold text-medical-red mb-2 flex items-center gap-2">
                      <MapPin className="w-6 h-6" />
                      {location.name}
                    </h3>
                    <span className="inline-block bg-medical-beige text-medical-red px-3 py-1 rounded-full text-sm font-semibold">
                      Reg. No.: {location.regNumber}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3 group/address">
                    <MapPin className="w-5 h-5 text-medical-red mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">{location.address}</p>
                      <button
                        onClick={() => copyAddress(location.address, location.id)}
                        className="mt-2 text-xs text-medical-red hover:text-medical-darkred flex items-center gap-1 opacity-0 group-hover/address:opacity-100 transition-opacity duration-200"
                      >
                        <Copy className="w-3 h-3" />
                        {copiedAddress === location.id ? 'Copied!' : 'Click to copy address'}
                      </button>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-medical-red flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{location.timing}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-medical-red flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-medical-red font-semibold hover:text-medical-darkred hover:underline transition-colors duration-200"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Special Notes */}
                  {location.specialNote && (
                    <div className={`flex items-center gap-3 p-4 rounded-lg ${
                      location.noteType === 'warning' 
                        ? 'bg-yellow-50 border-l-4 border-yellow-400' 
                        : 'bg-blue-50 border-l-4 border-blue-400'
                    }`}>
                      <Calendar className={`w-5 h-5 flex-shrink-0 ${
                        location.noteType === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                      }`} />
                      <span className={`font-medium ${
                        location.noteType === 'warning' ? 'text-yellow-800' : 'text-blue-800'
                      }`}>
                        {location.specialNote}
                      </span>
                    </div>
                  )}

                  {/* Consultation Fee */}
                  {location.consultationFee && (
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <IndianRupee className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-800 font-medium">
                        Consultation Fee: {location.consultationFee}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-medical-beige">
                  <motion.a
                    href={`tel:${location.phone}`}
                    className="flex-1 bg-medical-red text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-medical-darkred transition-colors duration-200 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </motion.a>
                  <motion.button
                    onClick={() => {
                      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`
                      window.open(mapsUrl, '_blank')
                    }}
                    className="flex-1 border-2 border-medical-red text-medical-red px-6 py-3 rounded-full font-semibold hover:bg-medical-red hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-red/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need to Schedule an Appointment?
              <span className="block text-lg font-normal text-medical-brown hindi-text mt-2">
                अपॉइंटमेंट शेड्यूल करना चाहते हैं?
              </span>
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Call us directly or visit either of our clinic locations. We're here to provide you with the best ENT care in Bhopal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:7240868002"
                className="bg-medical-red text-white px-8 py-4 rounded-full font-semibold hover:bg-medical-darkred transition-colors duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call 7240868002
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 border-medical-red text-medical-red px-8 py-4 rounded-full font-semibold hover:bg-medical-red hover:text-white transition-colors duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Book Online
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
