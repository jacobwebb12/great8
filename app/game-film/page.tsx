'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Play, Download, Eye, Star } from 'lucide-react'

const GameFilm = () => {
  return (
    <div className="min-h-screen bg-elite-black">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              <span className="gradient-text">Game Film</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional game film from Great 8 events. Perfect for college recruitment and player development.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">HD Quality</h3>
              <p className="text-gray-400">
                Crystal clear 1080p footage with multiple camera angles for comprehensive game analysis.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Access</h3>
              <p className="text-gray-400">
                Download your film immediately after purchase. No waiting, no delays.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Player Focused</h3>
              <p className="text-gray-400">
                Individual player highlights and full game footage available for every participant.
              </p>
            </div>
          </motion.div>

          {/* Film Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold font-display text-center mb-12">
              <span className="gradient-text">Film Packages</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Individual Highlights</h3>
                  <div className="text-4xl font-bold text-primary-500 mb-4">$49</div>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>• 3-5 minute highlight reel</li>
                    <li>• Best plays and moments</li>
                    <li>• HD quality download</li>
                    <li>• Perfect for social media</li>
                  </ul>
                  <button className="btn-primary w-full">Order Now</button>
                </div>
              </div>

              <div className="card hover:scale-105 transition-transform duration-300 border-2 border-primary-500">
                <div className="text-center">
                  <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Full Game Film</h3>
                  <div className="text-4xl font-bold text-primary-500 mb-4">$99</div>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>• Complete game footage</li>
                    <li>• Multiple camera angles</li>
                    <li>• Player tracking</li>
                    <li>• College coach ready</li>
                  </ul>
                  <button className="btn-primary w-full">Order Now</button>
                </div>
              </div>

              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Event Package</h3>
                  <div className="text-4xl font-bold text-primary-500 mb-4">$199</div>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>• All games from event</li>
                    <li>• Team and individual</li>
                    <li>• Scouting reports</li>
                    <li>• Priority processing</li>
                  </ul>
                  <button className="btn-primary w-full">Order Now</button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sample Film */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold font-display text-center mb-8">
              <span className="gradient-text">Sample Film</span>
            </h2>
            
            <div className="card">
              <div className="aspect-video bg-elite-charcoal rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <p className="text-gray-400">Sample highlight reel will be embedded here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="card"
          >
            <h2 className="text-3xl font-bold font-display text-center mb-8">
              <span className="gradient-text">Order Your Film</span>
            </h2>
            
            <div className="aspect-video bg-elite-charcoal rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary-500" />
                </div>
                <p className="text-gray-400 mb-4">Typeform will be embedded here for film orders</p>
                <button className="btn-primary">
                  Open Order Form
                </button>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold font-display text-center mb-8">
              <span className="gradient-text">What Coaches Say</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">
                      "The quality of film from Great 8 is exceptional. It gives us everything we need to evaluate talent."
                    </p>
                    <p className="text-primary-500 font-semibold">- John Davis, Head Coach, Duke University</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MS</span>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">
                      "Professional quality film that showcases players in their best light. Highly recommend."
                    </p>
                    <p className="text-primary-500 font-semibold">- Mike Smith, Assistant Coach, Syracuse</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default GameFilm 