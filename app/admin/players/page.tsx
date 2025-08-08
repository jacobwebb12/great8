'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Player = {
  id: string
  name: string
  gradYear: number
  overallScore: number
}

export default function AdminPlayersPage() {
  const [players, setPlayers] = useState<Player[]>([])
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const pageSize = 20

  const load = async () => {
    const res = await fetch(`/api/players?q=${encodeURIComponent(q)}&page=${page}&pageSize=${pageSize}`)
    const json = await res.json()
    setPlayers(json.items)
    setTotal(json.total)
  }

  useEffect(() => { load() }, [q, page])

  const pages = Math.max(1, Math.ceil(total / pageSize))

  return (
    <div className="min-h-screen bg-elite-black text-white">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-display font-bold">Players</h1>
          <Link href="/admin/upload" className="btn-secondary">Upload CSV</Link>
        </div>

        <div className="card mb-4">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or grad year" className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" />
        </div>

        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Grad Year</th>
                <th className="text-left p-3">Overall</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <tr key={p.id} className="border-t border-elite-silver/10">
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.gradYear}</td>
                  <td className="p-3 text-primary-500 font-semibold">{p.overallScore}</td>
                  <td className="p-3">
                    <Link href={`/admin/players/${p.id}`} className="btn-secondary px-3 py-1">Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <button disabled={page<=1} onClick={() => setPage((p)=>p-1)} className="btn-secondary">Prev</button>
          <div className="text-gray-300">Page {page} of {pages}</div>
          <button disabled={page>=pages} onClick={() => setPage((p)=>p+1)} className="btn-secondary">Next</button>
        </div>
      </div>
      <Footer />
    </div>
  )
} 