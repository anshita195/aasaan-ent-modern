'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Eye, Heart } from 'lucide-react'
import ReadMore from './ReadMore'
import CollapsibleSection from './CollapsibleSection'

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
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
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
            <CollapsibleSection
              title={<><Award className="w-6 h-6 text-medical-red" /><span>Know Your Doctor</span></>}
            >
              <p className="text-gray-700 leading-relaxed">
                I am a Senior ENT and Cochlear Implant Surgeon, ENT Specialist, Microscopic and Endoscopic Surgeon, FESS expert providing state of art treatment for all ENT problems, with a special interest in endoscopic sinus and ear surgeries. I have over 20 years of experience in providing compassionate care. Dental, Physiotherapy and Nursing Students so that they can master the art to take care of the patients with Skill, Precision and HONESTY. I am always eager and available to spread awareness about Healthy Life style and importance of Health Hygiene. I strongly believe that Prevention is Better than Cure. In my YouTube Channel (AasaanLife4U) I have posted videos, in simple language to spread awareness about how to take care of your health. In play list AAPKA SWASTH many such videos can be seen. I am very close to Nature and taking care of plants, birds and much more. This keeps me Humble, Relaxed and Energetic to serve one and all.
              </p>
            </CollapsibleSection>

            {/* Education */}
            <CollapsibleSection
              title={<><GraduationCap className="w-6 h-6 text-medical-red" /><span>Education & Qualifications</span></>}
            >
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
            </CollapsibleSection>

            {/* Experience */}
            <CollapsibleSection
              title={<><Briefcase className="w-6 h-6 text-medical-red" /><span>Professional Experience</span></>}
            >
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
            </CollapsibleSection>
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
            <CollapsibleSection
              title={<><Eye className="w-6 h-6 text-medical-red" /><span>Our Vision</span></>}
            >
              <p className="text-gray-700 leading-relaxed">
                To be your trusted Specialist Doctor in ENT health—where expert care meets 
                genuine compassion and every patient feels truly heard, understood, respected, 
                supported, and confident on their journey to better hearing, clear breathing, 
                melodious voice and a healthier life.
              </p>
            </CollapsibleSection>

            {/* Mission */}
            <CollapsibleSection
              title={<><Heart className="w-6 h-6 text-medical-red" /><span>Our Mission</span></>}
            >
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
            </CollapsibleSection>

            {/* AASAAN Meaning */}
            <CollapsibleSection
              title={<><span>AASAAN ENT Clinic - What our name refers to?</span></>}
              customClasses="bg-gradient-to-br from-medical-red to-medical-darkred text-white"
              titleColor="text-white"
            >
              <div className="space-y-3">
                <p><strong>AASAAN</strong> is a short form of</p>
                <p><strong className="text-yellow-200">A</strong>ASHI, <strong className="text-yellow-200">A</strong>NSHITA, <strong className="text-yellow-200">SA</strong>NYOGITA, <strong className="text-yellow-200">AN</strong>IL</p>
                <p className="text-sm opacity-90 mt-4">
                है ना, बिल्कुल आसान !<br/>
                यह सिर्फ एक नाम नहीं, हमारी आत्मा है।<br/>
                यह हमारे परिवार और खुद हमसे मिल कर बना है। <br/>
                हम हमेशा अपने नाम, अपने पेशे और अपने परिवार की गरिमा बनाए रखेंगे。
                </p>
              </div>
            </CollapsibleSection>
            {/* Memberships */}
            <CollapsibleSection
              title={<><Award className="w-6 h-6 text-medical-red" /><span>Professional Memberships</span></>}
            >
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
            </CollapsibleSection>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
