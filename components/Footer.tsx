'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-elite-charcoal border-t border-elite-silver/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold font-display mb-4">
              <span className="gradient-text">Great 8</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premier Venue. Hyper Elite Competition. Unmatched Exposure to College Coaches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Player Rankings
                </Link>
              </li>
              <li>
                <Link href="/game-film" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Game Film
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-gray-400 hover:text-primary-500 transition-colors">
                  College Coaches
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/registration" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Rules & Policies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-primary-500" />
                <span>info@great8lacrosse.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-primary-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-primary-500" />
                <span>123 Elite Drive<br />Orlando, FL 32801</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-elite-silver/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Great 8 Lacrosse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 