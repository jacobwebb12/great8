'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'

const HeroSection = () => {
  const scrollToEvents = () => {
    const eventsSection = document.querySelector('#events')
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback for when video doesn't load */}
        </video>
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Brand */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold font-display mb-6"
          >
            <span className="gradient-text text-glow">Great 8</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 text-shadow">
              Premier Venue.
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary-500 mb-4 text-shadow">
              Hyper Elite Competition.
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white text-shadow">
              Unmatched Exposure to College Coaches.
            </h2>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary text-lg px-8 py-4">
              View Upcoming Events
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              <Play className="inline mr-2" size={20} />
              Watch Highlights
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToEvents}
            className="text-white hover:text-primary-500 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-elite-silver rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-primary-500 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-elite-silver rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  )
}

export default HeroSection 