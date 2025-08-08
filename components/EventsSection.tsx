'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const events = [
  {
    id: 1,
    title: "Great 8 Elite Showcase",
    date: "March 15-17, 2024",
    location: "Premier Sports Complex, Orlando, FL",
    description: "The premier showcase event featuring top talent from across the nation. College coaches from over 50 programs in attendance.",
    image: "/event-1.jpg",
    attendees: "200+ Players",
    price: "$495",
    featured: true
  },
  {
    id: 2,
    title: "Summer Elite Tournament",
    date: "July 8-10, 2024",
    location: "Championship Field, Baltimore, MD",
    description: "High-intensity tournament format with guaranteed exposure to Division I, II, and III programs.",
    image: "/event-2.jpg",
    attendees: "150+ Players",
    price: "$395",
    featured: false
  },
  {
    id: 3,
    title: "Fall Elite Combine",
    date: "October 12-14, 2024",
    location: "Elite Training Center, Philadelphia, PA",
    description: "Comprehensive combine testing with skill development and scouting opportunities.",
    image: "/event-3.jpg",
    attendees: "100+ Players",
    price: "$295",
    featured: false
  }
]

const EventsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          <span className="gradient-text">Upcoming Events</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join the elite. Compete against the best. Get noticed by college coaches.
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="card hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
              {/* Event Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent"></div>
                <div className="absolute inset-0 bg-elite-charcoal/80"></div>
                {event.featured && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.price}
                </div>
              </div>

              {/* Event Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary-500" />
                    {event.attendees}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>

                <Link 
                  href={`/events/${event.id}`}
                  className="inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Events Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/events" className="btn-primary text-lg px-8 py-4">
          View All Events
        </Link>
      </motion.div>
    </div>
  )
}

export default EventsSection 