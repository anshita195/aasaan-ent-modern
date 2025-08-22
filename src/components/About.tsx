'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Eye, Heart } from 'lucide-react'

export default function About() {
  const education = [
    { degree: 'M.S. (Master of Surgery) - ENT', institution: 'B J Medical College, Ahmedabad', year: '2004' },
    { degree: 'DLO', institution: 'B J Medical College, Ahmedabad', year: '2003' },
    { degree: 'MBBS', institution: 'NHL Medical College, Ahmedabad', year: '2001' },
    
    
  ]

  const experience = [
    'Professor and HOD, ENT at Chirayu Medical College and Hospital',
    'Former Professor, ENT at C U Shah Medical College',
    'Former Senior Resident and Resident Doctor at B J Medical College',
    '20+ Years in Healthcare Practice',
  ]

  const memberships = [
    'Life Member of IMA (Indian Medical Association)',
    'Life Member of Association Of Otolaryngologists of India (AOI)',
    'Life Member of Cochlear Implant Group of India (CIGI)',
    'Life Member of NES',
  ]

  const mission = [
    'Listen Like Family',
    'Explain with Clarity',
    'Deliver Kind, Cutting-Edge Treatment',
    'Support You at Every Step',
    'Care for Our Community',
  ]

  return (
    <section id="about" className="py-20 bg-medical-beige relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 border-2 border-medical-red rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-medical-red rounded-full"></div>
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
            About Dr. Anil Kumar Jain
            <span className="block text-lg font-normal text-medical-brown hindi-text mt-2">
              डॉ. अनिल कुमार जैन के बारे में
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Trusted ENT Specialist with Decades of Excellence
          </p>
          <div className="w-24 h-1 bg-medical-red mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Professional Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-red/10">
              <h3 className="text-2xl font-bold text-medical-red mb-4 flex items-center gap-3">
                <Award className="w-6 h-6" />
                Know Your Doctor
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {/* Dr. Anil Kumar Jain is a highly experienced ENT Specialist and Cochlear Implant Surgeon 
                with over 24 years of dedicated service in healthcare. He is committed to providing 
                state-of-the-art healthcare services with special interest in training medical students 
                and healthcare professionals. */}
                I am a Senior ENT and Cochlear Implant Surgeon, ENT Specialist, Microscopic and Endoscopic Surgeon, FESS expert providing state of art health care services to the society at large. I have special interest in training the MBBS, MS, Dental, Physiotherapy and Nursing Students so that they can master the art to take care of the patients with Skill, Precision and HONESTY. I am always eager and available to spread awareness about Healthy Life style and importance of Health Hygiene. I strongly believe that Prevention is Better than Cure. In my YouTube Channel (AasaanLife4U) I have posted videos, in simple language to spread awareness about how to take care of your health. In play list AAPKA SWASTH many such videos can be seen. I am very close to Nature and taking care of plants, birds and much more. This keeps me Humble, Relaxed and Energetic to serve one and all.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-red/10">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-medical-red" />
                Education & Qualifications
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-4 bg-medical-cream rounded-lg border-l-4 border-medical-red"
                  >
                    <div>
                      <span className="font-bold text-medical-red">{edu.degree}</span>
                      <p className="text-gray-600 text-sm">{edu.institution}</p>
                    </div>
                    <span className="text-medical-brown font-semibold">{edu.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-red/10">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-medical-red" />
                Professional Experience
              </h4>
              <div className="space-y-3">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 hover:bg-medical-cream rounded-lg transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-medical-red rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{exp}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-red/10">
              <h4 className="text-2xl font-bold text-medical-red mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6" />
                Our Vision
                <span className="text-sm font-normal text-medical-brown hindi-text ml-2">
                  हमारा दृष्टिकोण
                </span>
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be your trusted Specialist Doctor in ENT health—where expert care meets 
                genuine compassion and every patient feels truly heard, understood, respected, 
                supported, and confident on their journey to better hearing, clear breathing, 
                melodious voice and a healthier life.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-red/10">
              <h4 className="text-2xl font-bold text-medical-red mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6" />
                Our Mission
                <span className="text-sm font-normal text-medical-brown hindi-text ml-2">
                  हमारा मिशन
                </span>
              </h4>
              <div className="space-y-4 mb-6">
                {mission.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-medical-cream rounded-lg"
                  >
                    <div className="w-6 h-6 bg-medical-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                Every decision we make, from the way we greet you to the treatments we offer, 
                reflects our promise: real human connection that transforms ENT care into an 
                experience you trust and feel good about.
              </p>
            </div>

            {/* AASAAN Meaning */}
            <div className="bg-gradient-to-br from-medical-red to-medical-darkred rounded-2xl p-8 text-white shadow-lg">
              <h4 className="text-2xl font-bold mb-4">
                AASAAN ENT Clinic - What our name refers to?
              </h4>
              <div className="space-y-3 text-lg">
                <p><strong>AASAAN</strong> is a short form of</p>
                <p><strong className="text-yellow-200">A</strong>ASHI, <strong className="text-yellow-200">A</strong>NSHITA, <strong className="text-yellow-200">SA</strong>NYOGITA, <strong className="text-yellow-200">AN</strong>IL</p>
                <p className="text-sm opacity-90 mt-4">
                है ना, बिल्कुल आसान !<br/>

                यह सिर्फ एक नाम नहीं, हमारी आत्मा है।<br/>

                यह हमारे परिवार और खुद हमसे मिल कर बना है। <br/>
                
                हम हमेशा अपने नाम, अपने पेशे और अपने परिवार की गरिमा बनाए रखेंगे।
                </p>
              </div>
            </div>
            {/* Memberships */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-red/10">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-medical-red" />
                Professional Memberships
              </h4>
              <div className="space-y-3">
                {memberships.map((membership, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 hover:bg-medical-cream rounded-lg transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-medical-red rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{membership}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
