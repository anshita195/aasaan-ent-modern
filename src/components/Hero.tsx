'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, Award, Users, Star, Youtube, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Patients Treated', hindi: 'मरीजों का इलाज' },
    { icon: Award, value: '15+', label: 'Years Experience', hindi: 'साल का अनुभव' },
    { icon: Star, value: '4.8/5', label: 'Patient Rating', hindi: 'मरीज रेटिंग' }
  ]

  return (
    <section className="relative min-h-screen bg-white">
      {/* Medical Header Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            🏥 AASAAN ENT CLINIC - आसान ईएनटी क्लिनिक | Professional Medical Care Since 2009
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Doctor Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Medical Cross Logo */}
            <div className="flex items-center space-x-4">
              <div className="medical-cross bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center">
                <div className="medical-cross"></div>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                  Dr. Anil Kumar Jain
                </h1>
                <p className="text-xl text-gray-600">M.S., M.B.B.S. (Ahmedabad)</p>
              </div>
            </div>

            {/* Credentials */}
            <div className="medical-card p-6">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                ENT Specialist & Cochlear Implant Surgeon
              </h2>
              <p className="text-lg text-gray-700 mb-4 hindi">
                कान, नाक, गला विशेषज्ञ एवं कॉक्लियर इम्प्लांट सर्जन
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Specialization:</strong><br/>
                  ENT Surgery, Cochlear Implants
                </div>
                <div>
                  <strong>Experience:</strong><br/>
                  15+ Years in ENT Care
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:7240868002"
                className="medical-button flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Appointment
              </a>
              <a 
                href="https://m.youtube.com/channel/UClLl5WoiHRyyPTfUPtx2i0A"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all"
              >
                <Youtube className="mr-2 h-5 w-5 inline" />
                Watch Videos
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-red-600" />
                <span className="font-semibold">7240868002</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-red-600" />
                <span>Mon-Sat: 5:10 PM - 9:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Anatomical Diagrams & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Anatomical Diagrams Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="medical-card p-4 text-center">
                <Image
                  src="/right_ear.png"
                  alt="Right Ear Anatomy"
                  width={120}
                  height={120}
                  className="anatomical-diagram mx-auto mb-2"
                />
                <p className="text-sm font-semibold text-gray-700">Right Ear</p>
                <p className="text-xs text-gray-500 hindi">दायां कान</p>
              </div>
              
              <div className="medical-card p-4 text-center">
                <Image
                  src="/left_ear.png"
                  alt="Left Ear Anatomy"
                  width={120}
                  height={120}
                  className="anatomical-diagram mx-auto mb-2"
                />
                <p className="text-sm font-semibold text-gray-700">Left Ear</p>
                <p className="text-xs text-gray-500 hindi">बायां कान</p>
              </div>
              
              <div className="medical-card p-4 text-center">
                <Image
                  src="/nose.png"
                  alt="Nose Anatomy"
                  width={120}
                  height={120}
                  className="anatomical-diagram mx-auto mb-2"
                />
                <p className="text-sm font-semibold text-gray-700">Nose</p>
                <p className="text-xs text-gray-500 hindi">नाक</p>
              </div>
              
              <div className="medical-card p-4 text-center">
                <Image
                  src="/throat.png"
                  alt="Throat Anatomy"
                  width={120}
                  height={120}
                  className="anatomical-diagram mx-auto mb-2"
                />
                <p className="text-sm font-semibold text-gray-700">Throat</p>
                <p className="text-xs text-gray-500 hindi">गला</p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="medical-card p-4 flex items-center"
                >
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <stat.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                    <div className="text-sm text-red-600 hindi">{stat.hindi}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* YouTube Channel Promotion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="medical-card p-8 bg-gradient-to-r from-red-50 to-orange-50">
            <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">AasaanLife4U</h3>
            <p className="text-gray-600 mb-4">
              Watch our educational videos on ENT health, hand hygiene, and medical awareness
            </p>
            <p className="text-sm text-gray-500 hindi mb-6">
              स्वास्थ्य जागरूकता के लिए हमारे वीडियो देखें
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://m.youtube.com/channel/UClLl5WoiHRyyPTfUPtx2i0A"
                target="_blank"
                rel="noopener noreferrer"
                className="medical-button inline-block"
              >
                Visit YouTube Channel
              </a>
              <a 
                href="https://youtu.be/stnz6t462yk?si=L-8nbDsiZUkqtXB8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all inline-block"
              >
                7 Steps Hand Washing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
