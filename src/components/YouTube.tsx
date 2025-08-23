'use client'

import { motion } from 'framer-motion'
import { Play, Youtube, ExternalLink } from 'lucide-react'

export default function YouTubeSection() {
  const featuredPlaylist = {
    title: 'Aapka Swasth - Your Health',
    description: 'General healthcare benefits for the public',
    hindi: 'आपका स्वास्थ्य - सामान्य स्वास्थ्य लाभ',
    playlistId: 'PLj1aymWcR9MAlI8RmoQGcrzdkzME3f8Ng',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLj1aymWcR9MAlI8RmoQGcrzdkzME3f8Ng',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLj1aymWcR9MAlI8RmoQGcrzdkzME3f8Ng'
  }

  const featuredVideos = [
    {
      title: '7 Steps of Handwashing - How to Handwash Properly',
      description: 'Learn the proper technique for effective handwashing',
      hindi: 'हाथ धोने के 7 चरण - सही तरीके से हाथ कैसे धोएं',
      videoId: 'stnz6t462yk',
      embedUrl: 'https://www.youtube.com/embed/stnz6t462yk',
      videoUrl: 'https://youtu.be/stnz6t462yk'
    },
    {
      title: 'Nose Drop | AOMIASOM | Otalgia | Otitis media | Ear Care | Sinus',
      description: 'Complete guide for nose drops and ear care treatment',
      hindi: 'नाक की दवा और कान की देखभाल का पूरा गाइड',
      videoId: '_CxmT0ooRnE',
      embedUrl: 'https://www.youtube.com/embed/_CxmT0ooRnE',
      videoUrl: 'https://youtu.be/_CxmT0ooRnE'
    },
    {
      title: 'ENT Health Tips and Treatment Guidelines',
      description: 'Essential ENT health tips and treatment information',
      hindi: 'आवश्यक ईएनटी स्वास्थ्य सुझाव और उपचार जानकारी',
      videoId: 'LTgloI9NWH8',
      embedUrl: 'https://www.youtube.com/embed/LTgloI9NWH8',
      videoUrl: 'https://youtu.be/LTgloI9NWH8'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Youtube className="w-8 h-8 text-red-600" />
            Health Education Videos
          </h2>
          <p className="text-lg text-gray-600 hindi mb-2 hidden md:block">
            स्वास्थ्य शिक्षा वीडियो
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto hidden md:block">
            Watch Dr. Anil Kumar Jain&apos;s educational videos for better health awareness and preventive care
          </p>
        </motion.div>

        {/* Featured Playlist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-red-100">
            <div className="p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <Play className="w-6 h-6" />
                Aapka Swasth <span className="hidden sm:inline">- Your Health</span>
              </h3>
              <p className="text-red-100 mb-1 hidden sm:block">{featuredPlaylist.description}</p>
              <p className="text-sm text-red-200 hindi">{featuredPlaylist.hindi}</p>
            </div>
            
                        <div className="aspect-video max-w-2xl mx-auto px-4 md:px-2">
              <iframe
                src={featuredPlaylist.embedUrl}
                title={featuredPlaylist.title}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-4 bg-gray-50 flex justify-center">
              <a
                href={featuredPlaylist.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <Youtube className="w-4 h-4" />
                View Full Playlist
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured Videos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Health Tips
            <span className="block text-lg font-normal text-gray-600 hindi mt-1">
              विशेष स्वास्थ्य सुझाव
            </span>
          </h3>
          
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.videoId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${video.videoId === '_CxmT0ooRnE' ? 'hidden md:block' : ''}`}
              >
                <div className="aspect-video relative group cursor-pointer">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2 hidden md:block">{video.description}</p>
                  <p className="text-xs text-gray-500 hindi hidden md:block">{video.hindi}</p>
                  
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    <Play className="w-4 h-4" />
                    Watch on YouTube
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Channel Subscription Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-red-300 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-red-300 rounded-full"></div>
              <div className="absolute top-1/2 right-8 w-8 h-8 border-2 border-red-300 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-50 rounded-full p-4 border border-red-200">
                  <Youtube className="w-12 h-12 text-red-600" />
                </div>
              </div>
              
              <h4 className="text-3xl font-bold mb-3 text-gray-900">
                Join Our Health Community
              </h4>
              <p className="text-gray-600 mb-2 text-lg">
                Subscribe for expert ENT health tips & educational content
              </p>
              <p className="text-gray-500 mb-6 hindi text-base">
                विशेषज्ञ ईएनटी स्वास्थ्य सुझाव और शैक्षिक सामग्री के लिए सब्सक्राइब करें
              </p>
              
              <div className="flex justify-center">
                <a
                  href="https://youtube.com/@AasaanLife4U?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Youtube className="w-6 h-6" />
                  Subscribe Now
                </a>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">Health Videos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">Expert ENT Tips</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
