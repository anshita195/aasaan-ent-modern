'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, Calendar, Users, Award, Star, Youtube, Info } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  onBookingClick: () => void
}

export default function Hero({ onBookingClick }: HeroProps) {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Patients Treated', hindi: 'मरीजों का इलाज' },
    { icon: Award, value: '20+', label: 'Years Experience', hindi: 'साल का अनुभव' },
    { icon: Star, value: '4.9/5', label: 'Patient Rating', hindi: 'मरीज रेटिंग' }
  ];

  return (
    <section className="relative min-h-screen bg-white">
      {/* Medical Header Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            AASAAN ENT CLINIC - आसान ईएनटी क्लिनिक 
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-3">
                Dr. Anil Kumar Jain
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-6">M.S., M.B.B.S. (Ahmedabad)</p>
              
              <div className="inline-block bg-red-50 px-6 py-4 rounded-lg mb-6">
                <h2 className="text-lg lg:text-xl font-bold text-red-600">
                  ENT Specialist & Cochlear Implant Surgeon
                </h2>
                <p className="text-sm text-gray-700 hindi mt-1">
                  कान, नाक, गला विशेषज्ञ एवं कॉक्लियर इम्प्लांट सर्जन
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
            >
              <a 
                href="#about"
                className="medical-button flex items-center justify-center px-8 py-3"
              >
                <Info className="mr-2 h-5 w-5" />
                Know Your Doctor
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="microtrust-row justify-center md:justify-start"
            >
              <div className="microtrust-item">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="microtrust-item">
                <Award className="w-4 h-4 text-red-600" />
                <span>20+ Years</span>
              </div>
              <div className="microtrust-item">
                <Users className="w-4 h-4 text-blue-600" />
                <span>10,000+ Patients</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <Image 
              src="/doctor.png" 
              alt="Dr. Anil Kumar Jain" 
              width={320}
              height={416}
              priority
              className="w-72 h-96 lg:w-80 lg:h-[26rem] rounded-lg shadow-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Anatomical Diagrams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20 mt-16"
        >
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Specializations</h2>
            <p className="text-xl text-gray-600 hindi">हमारी विशेषताएं</p>
          </div>

          <div className="flex justify-center">
                        <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 max-w-4xl items-start">
              {/* Ear */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="anatomical-diagram text-center"
              >
                <div className="transition-all duration-300">
                  <div className="flex justify-center mb-6 h-20 w-20 mx-auto">
                    <Image
                      src="/new_ear.png"
                      alt="Ear Anatomy"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <p className="font-semibold text-red-600 text-xl">Ear</p>
                  <p className="text-base text-gray-600 hindi mt-2">कान</p>
                </div>
              </motion.div>

              {/* Nose */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="anatomical-diagram text-center"
              >
                <div className="transition-all duration-300">
                  <div className="flex justify-center mb-6 h-20 w-20 mx-auto">
                    <Image
                      src="/new_nose.png"
                      alt="Nose Anatomy"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <p className="font-semibold text-red-600 text-xl">Nose</p>
                  <p className="text-base text-gray-600 hindi mt-2">नाक</p>
                </div>
              </motion.div>

              {/* Throat */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="anatomical-diagram text-center"
              >
                <div className="transition-all duration-300">
                  <div className="flex justify-center mb-6 h-20 w-20 mx-auto">
                    <Image
                      src="/new_throat.png"
                      alt="Throat Anatomy"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <p className="font-semibold text-red-600 text-xl">Throat</p>
                  <p className="text-base text-gray-600 hindi mt-2">गला</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-8 text-base text-gray-600">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-red-600" />
              <span className="font-semibold text-lg">7240868002</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-3 text-red-600" />
              <span className="font-medium">5:10 PM - 9:00 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-red-600" />
              <span className="font-medium">Bhopal, Madhya Pradesh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
