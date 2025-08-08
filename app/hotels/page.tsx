'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, Phone, Globe, Star, Bed, Wifi, Car, Utensils } from 'lucide-react'

const hotels = [
  {
    id: 1,
    name: "Premier Sports Resort & Spa",
    location: "Orlando, FL",
    event: "Great 8 Elite Showcase",
    address: "123 Elite Drive, Orlando, FL 32801",
    phone: "(407) 555-0123",
    website: "https://premiersportsresort.com",
    rating: 4.8,
    price: "$189/night",
    amenities: ["Free WiFi", "Shuttle Service", "Restaurant", "Pool", "Gym"],
    groupCode: "GREAT8ELITE",
    distance: "0.2 miles from venue",
    image: "/hotel-1.jpg"
  },
  {
    id: 2,
    name: "Championship Inn",
    location: "Baltimore, MD",
    event: "Summer Elite Tournament",
    address: "456 Victory Lane, Baltimore, MD 21201",
    phone: "(410) 555-0456",
    website: "https://championshipinn.com",
    rating: 4.5,
    price: "$159/night",
    amenities: ["Free WiFi", "Free Parking", "Breakfast", "Business Center"],
    groupCode: "GREAT8SUMMER",
    distance: "0.5 miles from venue",
    image: "/hotel-2.jpg"
  },
  {
    id: 3,
    name: "Elite Training Center Hotel",
    location: "Philadelphia, PA",
    event: "Fall Elite Combine",
    address: "789 Training Blvd, Philadelphia, PA 19101",
    phone: "(215) 555-0789",
    website: "https://elitetraininghotel.com",
    rating: 4.6,
    price: "$179/night",
    amenities: ["Free WiFi", "Fitness Center", "Restaurant", "Meeting Rooms"],
    groupCode: "GREAT8FALL",
    distance: "0.1 miles from venue",
    image: "/hotel-3.jpg"
  }
]

const Hotels = () => {
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
              <span className="gradient-text">Recommended Hotels</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner hotels offering special rates and amenities for Great 8 event participants.
            </p>
          </motion.div>

          {/* Hotels Grid */}
          <div className="space-y-12">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Hotel Image */}
                  <div className="lg:col-span-1">
                    <div className="aspect-video bg-elite-charcoal rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Bed className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                        <p className="text-gray-400">{hotel.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{hotel.name}</h2>
                        <div className="flex items-center gap-2 text-primary-500 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{hotel.address}</p>
                        <p className="text-gray-300 font-semibold">{hotel.event}</p>
                      </div>
                      
                      <div className="text-right mt-4 md:mt-0">
                        <div className="text-3xl font-bold text-primary-500 mb-2">{hotel.price}</div>
                        <div className="flex items-center justify-end gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-elite-gold fill-current' : 'text-gray-600'}`} 
                            />
                          ))}
                          <span className="text-sm text-gray-400 ml-2">{hotel.rating}</span>
                        </div>
                        <p className="text-sm text-gray-400">{hotel.distance}</p>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Phone className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">{hotel.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Globe className="w-4 h-4 text-primary-500" />
                        <a 
                          href={hotel.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary-500 hover:text-primary-400 transition-colors"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Amenities</h3>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-elite-charcoal border border-elite-silver/20 rounded-full text-xs text-gray-300"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Group Code */}
                    <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold mb-1">Group Booking Code</h4>
                          <p className="text-gray-400 text-sm">Use this code for special rates</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary-500 font-mono">{hotel.groupCode}</div>
                          <p className="text-xs text-gray-400">Save up to 20%</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="btn-primary flex-1">
                        Book Now
                      </button>
                      <button className="btn-secondary flex-1">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Booking Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Book early to secure the best rates</li>
                <li>• Always mention the Great 8 group code</li>
                <li>• Check cancellation policies before booking</li>
                <li>• Consider booking for the entire event duration</li>
                <li>• Contact hotels directly for special requests</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Transportation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Most hotels offer shuttle service to venues</li>
                <li>• Uber/Lyft available in all locations</li>
                <li>• Rental car options at nearby airports</li>
                <li>• Public transportation available</li>
                <li>• Walking distance options highlighted</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 card text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Need Help with Accommodations?</h3>
            <p className="text-gray-300 mb-6">
              Our team can help you find the perfect hotel for your stay during Great 8 events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Our Team
              </button>
              <button className="btn-secondary">
                View All Options
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Hotels 