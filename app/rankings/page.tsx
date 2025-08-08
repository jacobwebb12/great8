'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Star, TrendingUp, Search, Upload, Edit } from 'lucide-react'
import Link from 'next/link'
import { Player, mockPlayers, getOverallScore } from '@/lib/players'

const PlayerRankings = () => {
  const [players, setPlayers] = useState<Player[]>(mockPlayers)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'overallScore' | 'name' | 'gradYear'>('overallScore')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [showTop100, setShowTop100] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const withComputed = players.map((p) => ({ ...p, overall: getOverallScore(p) }))

  const filteredAndSortedPlayers = withComputed
    .filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.gradYear.toString().includes(searchTerm)
    )
    .sort((a, b) => {
      const aVal = sortBy === 'overallScore' ? a.overall : (a as any)[sortBy]
      const bVal = sortBy === 'overallScore' ? b.overall : (b as any)[sortBy]
      if (sortOrder === 'asc') return aVal > bVal ? 1 : -1
      return aVal < bVal ? 1 : -1
    })
    .slice(0, showTop100 ? 100 : withComputed.length)

  const handleSort = (field: 'overallScore' | 'name' | 'gradYear') => {
    if (sortBy === field) setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    else {
      setSortBy(field)
      setSortOrder('desc')
    }
  }

  const getSkillBarColor = (score: number) => {
    if (score >= 4.5) return 'bg-primary-500'
    if (score >= 4.0) return 'bg-primary-400'
    if (score >= 3.5) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  return (
    <div className="min-h-screen bg-elite-black">
      <Navbar />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              <span className="gradient-text">Player Rankings</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elite talent evaluated across 7 key metrics. Discover the next generation of lacrosse stars.
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search players..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-elite-charcoal border border-elite-silver/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowTop100(!showTop100)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${showTop100 ? 'bg-primary-500 text-white' : 'bg-elite-charcoal text-gray-300 border border-elite-silver/20 hover:border-primary-500'}`}
                >
                  Top 100
                </button>

                {isAdmin && (
                  <button className="btn-secondary flex items-center gap-2">
                    <Upload size={16} />
                    Upload CSV
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Rankings Table */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-elite-black/50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-white">Rank</th>
                    <th className="text-left p-4 font-semibold text-white">Player</th>
                    <th className="text-left p-4 font-semibold text-white">Grad Year</th>
                    <th className="text-left p-4 font-semibold text-white">Size</th>
                    <th className="text-left p-4 font-semibold text-white">Skills</th>
                    <th
                      className="text-left p-4 font-semibold text-white cursor-pointer hover:text-primary-500 transition-colors"
                      onClick={() => handleSort('overallScore')}
                    >
                      <div className="flex items-center gap-2">
                        Overall Score
                        <TrendingUp size={16} />
                      </div>
                    </th>
                    {isAdmin && <th className="text-left p-4 font-semibold text-white">Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedPlayers.map((player, index) => (
                    <tr key={player.id} className="border-t border-elite-silver/10 hover:bg-elite-black/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-white">#{index + 1}</span>
                          {index < 3 && <Star className="w-4 h-4 text-elite-gold" />}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-elite-charcoal rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">{player.name.split(' ').map((n) => n[0]).join('')}</span>
                          </div>
                          <div>
                            <Link href={`/rankings/${player.id}`} className="font-semibold text-white hover:text-primary-500">
                              {player.name}
                            </Link>
                            <div className="text-sm text-gray-400">ID: {player.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-white">{player.gradYear}</td>
                      <td className="p-4 text-gray-300">{player.height} / {player.weight}</td>
                      <td className="p-4">
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div className="flex items-center gap-1">
                            <span className="text-gray-400">S:</span>
                            <div className="w-8 h-1 bg-gray-700 rounded">
                              <div className={`h-full rounded ${getSkillBarColor(player.speed)}`} style={{ width: `${(player.speed / 5) * 100}%` }}></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-400">A:</span>
                            <div className="w-8 h-1 bg-gray-700 rounded">
                              <div className={`h-full rounded ${getSkillBarColor(player.agility)}`} style={{ width: `${(player.agility / 5) * 100}%` }}></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-400">ST:</span>
                            <div className="w-8 h-1 bg-gray-700 rounded">
                              <div className={`h-full rounded ${getSkillBarColor(player.stick)}`} style={{ width: `${(player.stick / 5) * 100}%` }}></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-400">D:</span>
                            <div className="w-8 h-1 bg-gray-700 rounded">
                              <div className={`h-full rounded ${getSkillBarColor(player.defense)}`} style={{ width: `${(player.defense / 5) * 100}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-2xl font-bold text-primary-500">{player.overall}</div>
                        <div className="text-xs text-gray-400">/ 100</div>
                      </td>
                      {isAdmin && (
                        <td className="p-4">
                          <button className="text-primary-500 hover:text-primary-400 transition-colors">
                            <Edit size={16} />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 card">
            <h3 className="text-lg font-semibold text-white mb-4">Skill Rating Legend</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-primary-500 rounded"></div>
                <span className="text-gray-300">4.5+ (Elite)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-primary-400 rounded"></div>
                <span className="text-gray-300">4.0-4.4 (Excellent)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-yellow-500 rounded"></div>
                <span className="text-gray-300">3.5-3.9 (Good)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PlayerRankings 