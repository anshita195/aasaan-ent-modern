'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Youtube, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-32 h-32 border border-medical-red rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 border border-medical-red rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-bold text-medical-red mb-3 sm:text-xl">
              AASAAN ENT CLINIC
            </h3>
            <p className="text-gray-300 mb-4 hindi-text">
              आसान ईएनटी क्लिनिक
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Leading ENT Specialist in Bhopal with 20+ years experience. 
              Expert in Cochlear Implant, Endoscopy, and comprehensive ENT treatments.
            </p>
            <div className="flex items-center gap-2 text-medical-red">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Caring for your ENT health with compassion</span>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:pl-4"
          >
            <h4 className="text-base font-semibold mb-3 text-medical-red sm:text-lg">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-medical-red flex-shrink-0" />
                <a 
                  href="tel:7240868002"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  7240868002
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-medical-red flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  Bhopal, Madhya Pradesh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-medical-red flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  5:10 PM - 9:00 PM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:pl-4"
          >
            <h4 className="text-base font-semibold mb-3 text-medical-red sm:text-lg">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About Doctor' },
                { href: '#services', label: 'Services' },
                { href: '#locations', label: 'Locations' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-medical-red transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://youtube.com/@AasaanLife4U"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-medical-red transition-colors duration-200 text-sm"
              >
                <Youtube className="w-4 h-4" />
                AasaanLife4U
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-6 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm mb-2">
            &copy; {currentYear} AASAAN ENT Clinic - Dr. Anil Kumar Jain. <br/>
            All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Professional ENT Care | 
            <a href="tel:7240868002" className="text-medical-red hover:underline ml-1">
              7240868002
            </a>
            | Bhopal, Madhya Pradesh
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
