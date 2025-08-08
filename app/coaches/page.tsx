'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, Shield, Eye, Mail, Phone, Building, Trophy, Star } from 'lucide-react'

const registeredCoaches = [
  {
    id: 1,
    name: "John Davis",
    title: "Head Coach",
    school: "Duke University",
    division: "Division I",
    conference: "ACC",
    email: "j.davis@duke.edu",
    phone: "(919) 555-0123",
    attending: ["Great 8 Elite Showcase", "Summer Elite Tournament"],
    image: "/coach-1.jpg"
  },
  {
    id: 2,
    name: "Mike Smith",
    title: "Assistant Coach",
    school: "Syracuse University",
    division: "Division I",
    conference: "ACC",
    email: "m.smith@syr.edu",
    phone: "(315) 555-0456",
    attending: ["Great 8 Elite Showcase"],
    image: "/coach-2.jpg"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Head Coach",
    school: "University of Maryland",
    division: "Division I",
    conference: "Big Ten",
    email: "s.johnson@umd.edu",
    phone: "(301) 555-0789",
    attending: ["Great 8 Elite Showcase", "Fall Elite Combine"],
    image: "/coach-3.jpg"
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Recruiting Coordinator",
    school: "University of Virginia",
    division: "Division I",
    conference: "ACC",
    email: "d.wilson@virginia.edu",
    phone: "(434) 555-0321",
    attending: ["Summer Elite Tournament"],
    image: "/coach-4.jpg"
  },
  {
    id: 5,
    name: "Lisa Chen",
    title: "Head Coach",
    school: "Georgetown University",
    division: "Division I",
    conference: "Big East",
    email: "l.chen@georgetown.edu",
    phone: "(202) 555-0654",
    attending: ["Great 8 Elite Showcase", "Fall Elite Combine"],
    image: "/coach-5.jpg"
  },
  {
    id: 6,
    name: "Robert Taylor",
    title: "Assistant Coach",
    school: "University of North Carolina",
    division: "Division I",
    conference: "ACC",
    email: "r.taylor@unc.edu",
    phone: "(919) 555-0987",
    attending: ["Great 8 Elite Showcase"],
    image: "/coach-6.jpg"
  }
]

const CollegeCoaches = () => {
  const [showPrivateArea, setShowPrivateArea] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDivision, setFilterDivision] = useState('all')

  const filteredCoaches = registeredCoaches.filter(coach => {
    const matchesSearch = coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coach.school.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDivision = filterDivision === 'all' || coach.division === filterDivision
    return matchesSearch && matchesDivision
  })

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
              <span className="gradient-text">College Coaches</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with college coaches from top programs across the nation. Build relationships that last a lifetime.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">College Programs</div>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Division I Schools</div>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Recruitment Success</div>
            </div>
          </motion.div>

          {/* Private Area Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Coach Portal</h3>
                  <p className="text-gray-400">Access private resources and player information</p>
                </div>
                <button 
                  onClick={() => setShowPrivateArea(!showPrivateArea)}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  {showPrivateArea ? 'Hide Portal' : 'Access Portal'}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Private Area */}
          {showPrivateArea && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 card"
            >
              <h3 className="text-xl font-bold text-white mb-4">Private Coach Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Player Information</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Detailed player profiles</li>
                    <li>• Academic information</li>
                    <li>• Contact information</li>
                    <li>• Game film access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Event Resources</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Schedule and logistics</li>
                    <li>• Scouting reports</li>
                    <li>• Performance metrics</li>
                    <li>• Direct messaging</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-elite-silver/20">
                <button className="btn-primary">
                  Login to Portal
                </button>
              </div>
            </motion.div>
          )}

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8 flex flex-col md:flex-row gap-4"
          >
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search coaches or schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-elite-charcoal border border-elite-silver/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <Eye className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            
            <select
              value={filterDivision}
              onChange={(e) => setFilterDivision(e.target.value)}
              className="px-4 py-2 bg-elite-charcoal border border-elite-silver/20 rounded-lg text-white focus:outline-none focus:border-primary-500"
            >
              <option value="all">All Divisions</option>
              <option value="Division I">Division I</option>
              <option value="Division II">Division II</option>
              <option value="Division III">Division III</option>
            </select>
          </motion.div>

          {/* Coaches Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCoaches.map((coach, index) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:scale-105 transition-transform duration-300"
              >
                {/* Coach Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-elite-charcoal rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{coach.name}</h3>
                    <p className="text-primary-500 font-semibold">{coach.title}</p>
                    <p className="text-gray-400 text-sm">{coach.school}</p>
                  </div>
                </div>

                {/* School Info */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4 text-primary-500" />
                    <span className="text-gray-300 text-sm">{coach.division}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{coach.conference}</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Mail className="w-4 h-4 text-primary-500" />
                    <span>{coach.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>{coach.phone}</span>
                  </div>
                </div>

                {/* Attending Events */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Attending Events:</h4>
                  <div className="space-y-1">
                    {coach.attending.map((event, i) => (
                      <span 
                        key={i}
                        className="inline-block px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded mr-2 mb-1"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="btn-primary flex-1 text-sm py-2">
                    Contact
                  </button>
                  <button className="btn-secondary flex-1 text-sm py-2">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Registration CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 card text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Are You a College Coach?</h3>
            <p className="text-gray-300 mb-6">
              Register to access exclusive player information, game film, and connect with elite talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Register as Coach
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CollegeCoaches 