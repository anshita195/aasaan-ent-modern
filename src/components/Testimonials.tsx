'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'

export default function Testimonials() {
  const googleReviews = [
    {
      name: 'Nimish Soni',
      avatar: 'N',
      rating: 5,
      timeAgo: '2 years ago',
      text: 'I had on and off cough cold and voice change. I consulted Dr Anil Kumar Jain sir. He listened to my sufferings and did careful examination. Then he gave medicines and advised how to properly take medicines. Also he explained precautions to be taken. Dr Anil Kumar Jain sir provided his own instructional videos for care to be taken for better health. Now I am fine. I recommend to consult Dr Anil Kumar Jain sir for Ear nose throat that is ENT related diseases.',
      reviewUrl: 'https://www.google.com/maps/contrib/102130990822878620086/reviews/@23.2503065,77.3913415,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: 'Nikita Maheshwari',
      avatar: 'N',
      rating: 5,
      timeAgo: '1 year ago',
      text: 'I consulted Dr Anil Kumar Jain sir for my cousin who had severe ear ache. Sir examined using endoscope. Diagnosed correctly and given appropriate treatment. My cousin is fine since then. I wish him best to continue good work. I strongly recommend to consult him for ENT related diseases.',
      reviewUrl: 'https://www.google.com/maps/contrib/107118549991270251080/reviews?hl=en-GB'
    },
    {
      name: 'Divya Jain',
      avatar: 'D',
      rating: 5,
      timeAgo: '6 months ago',
      text: 'Dr. Anil Sir is very very experienced doctor and the best ENT specialist in Bhopal. He gives lot of time to patients and his diagnosis and treatment is very good. I have been taking treatment for myself and my family since last 3 years. We really need such experienced doctors in our society. The staff is also very supportive and humble. Thank You Sir 🙏',
      reviewUrl: 'https://www.google.com/maps/contrib/115390654686544910017/reviews?hl=en-GB'
    }
  ]

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
            Google Reviews
          </h2>
          
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

        {/* Google Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {googleReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => window.open(review.reviewUrl, '_blank')}
            >
              {/* Google Logo */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold" aria-hidden="true">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.timeAgo}</p>
                  </div>
                </div>
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="Google logo">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3" role="img" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {review.text}
              </p>

              {/* Click to view on Google */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-600">Posted on Google</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
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
            See All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
