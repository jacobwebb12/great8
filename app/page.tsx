'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import EventsSection from '@/components/EventsSection'
import StatsSection from '@/components/StatsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-elite-black">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <HeroSection />
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-elite-dark">
        <EventsSection />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-elite-black">
        <StatsSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 