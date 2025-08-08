'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPlayerById, getOverallScore } from '@/lib/players'
import ReactPlayer from 'react-player'

interface Props {
  params: { id: string }
}

export default function PlayerProfile({ params }: Props) {
  const player = getPlayerById(params.id)
  if (!player) return notFound()

  const overall = getOverallScore(player)

  const Skill = ({ label, value }: { label: string; value: number }) => (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-gray-300 text-sm">{label}</span>
        <span className="text-gray-400 text-sm">{value.toFixed(1)}</span>
      </div>
      <div className="h-2 bg-gray-700 rounded">
        <div className="h-full bg-primary-500 rounded" style={{ width: `${(value / 5) * 100}%` }} />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-elite-black">
      <Navbar />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-2">
              <span className="gradient-text">{player.name}</span>
            </h1>
            <p className="text-gray-400">Class of {player.gradYear} • {player.height} • {player.weight}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Profile and Skills */}
            <div className="lg:col-span-2 space-y-8">
              <div className="card">
                <h2 className="text-xl font-semibold text-white mb-4">Skill Breakdown</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Skill label="Speed" value={player.speed} />
                  <Skill label="Agility" value={player.agility} />
                  <Skill label="Stick" value={player.stick} />
                  <Skill label="Defense" value={player.defense} />
                  <Skill label="Strength" value={player.strength} />
                  <Skill label="IQ" value={player.iq} />
                  <Skill label="Communication" value={player.communication} />
                </div>
              </div>

              {!!player.youtubeLinks?.length && (
                <div className="card">
                  <h2 className="text-xl font-semibold text-white mb-4">Highlights</h2>
                  <div className="space-y-4">
                    {player.youtubeLinks!.map((url, i) => (
                      <div key={i} className="aspect-video rounded overflow-hidden bg-elite-charcoal">
                        <ReactPlayer url={url} width="100%" height="100%" controls />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {player.scoutingReport && (
                <div className="card">
                  <h2 className="text-xl font-semibold text-white mb-4">Scouting Report</h2>
                  <p className="text-gray-300 leading-relaxed">{player.scoutingReport}</p>
                </div>
              )}
            </div>

            {/* Right: Overview */}
            <div className="space-y-8">
              <div className="card text-center">
                <div className="text-gray-400 text-sm mb-2">Overall Score</div>
                <div className="text-6xl font-extrabold text-primary-500">{overall}</div>
                <div className="text-xs text-gray-500">/ 100</div>
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold text-white mb-4">Player Info</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Height: {player.height}</li>
                  <li>• Weight: {player.weight}</li>
                  <li>• Grad Year: {player.gradYear}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 