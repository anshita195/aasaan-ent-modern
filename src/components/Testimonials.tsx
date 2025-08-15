'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Nimish Soni',
      location: 'Bhopal',
      rating: 5,
      text: 'I had on and off cough cold and voice change. I consulted Dr Anil Kumar Jain sir. He listened to my sufferings and did careful examination. Then he gave medicines and advised how to properly take medicines. Also he explained precautions to be taken . Dr Anil Kumar Jain sir provided his own instructional videos for care tobe taken for better health. Now I am fine. I recommend to consult Dr Anil Kumar Jain sir for Ear nose throat that is ENT related diseases ',
     
    },

    {
      name: 'Nikita Maheshwari',
      location: 'Bhopal',
      rating: 5,
      text: 'I consulted Dr Anil Kumar Jain sir my cousins who had severe ear ache. Sir examined using endoscope. Diagnosed correctly and given appropriate treatment. My cousine is fine since then. I wish him best to continue good work. I strongly recommend to consult him for ENT related diseases. ',
     
    },
    {
      name: 'Divya Jain',
      location: 'Bhopal',
      rating: 5,
      text: 'Dr. Anil Sir is very very experienced doctor and the best ENT specialist in Bhopal. He gives lot of time to patients and his diagnosis and treatment is very good. I have been taking treatment for myself and my family since last 3 years. We really need such experienced doctors in our society. The staff is also very supportive and humble.Thank You Sir 🙏',
     
    },
    // {
    //   name: 'Priya Sharma',
    //   location: 'Bhopal',
    //   rating: 5,
    //   text: 'Dr. Jain performed my cochlear implant surgery with excellent care. My hearing has improved dramatically!',
    //   hindi: 'डॉ. जैन ने बहुत अच्छी देखभाल के साथ मेरी कॉक्लियर इम्प्लांट सर्जरी की।'
    // },
    // {
    //   name: 'Rajesh Kumar',
    //   location: 'Bhopal',
    //   rating: 5,
    //   text: 'Best ENT specialist in Bhopal. Professional treatment for my chronic sinusitis problem.',
    //   hindi: 'भोपाल के सबसे अच्छे ईएनटी विशेषज्ञ। मेरी साइनसाइटिस की समस्या का बेहतरीन इलाज।'
    // },
    // {
    //   name: 'Sunita Patel',
    //   location: 'Bhopal',
    //   rating: 5,
    //   text: 'Excellent speech therapy services for my child. Very patient and caring approach.',
    //   hindi: 'मेरे बच्चे के लिए उत्कृष्ट स्पीच थेरेपी सेवाएं। बहुत धैर्यवान और देखभाल भरा दृष्टिकोण।'
    // }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 hindi">
            मरीजों के अनुभव
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">(300+ reviews)</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="medical-card p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-8 h-8 text-red-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* <p className="text-sm text-gray-500 hindi mb-4">
                "{testimonial.hindi}"
              </p> */}

              {/* Patient Info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to More Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=dr+anil+kumar+jain+the+best+ent+specialist+bhopal%2C+krishna+plaza%2C+g-56%2C+near+narmada+sweet+house%2C+bairagarh%2C+bhopal%2C+madhya+pradesh+462030&oq=dr+anil+&aqs=chrome.1.69i57j35i39l2j0i512l2j46i175i199i512l2j0i512j46i175i199i512.3949j0j7&client=ms-android-vivo-rvo2&sourceid=chrome-mobile&ie=UTF-8#ebo=0&lrd=0x397c67b3e8bdeb39:0x2d3751fb39c39c0,1"
            target="_blank"
            rel="noopener noreferrer"
            className="medical-button-secondary inline-flex items-center gap-2"
          >
            <Star className="w-4 h-4" />
            See More Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
