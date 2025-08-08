'use client'

import { motion } from 'framer-motion'
import { Users, Trophy, Award, Target } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Players Recruited",
    description: "Successfully placed in college programs"
  },
  {
    icon: Trophy,
    number: "50+",
    label: "College Programs",
    description: "Regularly attending our events"
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
    description: "Of players receive college interest"
  },
  {
    icon: Target,
    number: "25+",
    label: "Events Hosted",
    description: "Premier showcases and tournaments"
  }
]

const StatsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          <span className="gradient-text">Proven Results</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our track record speaks for itself. Great 8 has established itself as the premier destination for elite lacrosse talent.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-500" />
                </div>
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-primary-500 mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Success Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="card max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            "Great 8 changed my life. The exposure I got here led to offers from 5 Division I programs."
          </h3>
          <p className="text-gray-300 mb-4">
            - Jake Thompson, Class of 2023, Committed to Duke University
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
      </motion.div>
    </div>
  )
}

export default StatsSection 