'use client'

import Link from 'next/link'

export default function AdminIndex() {
  return (
    <div className="min-h-screen bg-elite-black text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto card">
        <h1 className="text-3xl font-display font-bold mb-4">Admin</h1>
        <p className="text-gray-300 mb-6">Manage players and data.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/admin/players" className="btn-primary">Manage Players</Link>
          <Link href="/admin/upload" className="btn-secondary">Upload CSV</Link>
        </div>
      </div>
    </div>
  )
}

 