'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AdminUploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return
    setLoading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const json = await res.json()
    setResult(json)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-elite-black text-white">
      <Navbar />
      <div className="pt-24 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-display font-bold mb-6">Upload Player CSV</h1>
        <form onSubmit={handleSubmit} className="card space-y-4">
          <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full" />
          <button type="submit" disabled={!file || loading} className="btn-primary w-full">{loading ? 'Uploading...' : 'Upload CSV'}</button>
        </form>
        {result && (
          <div className="card mt-6">
            <div className="text-gray-300">Imported {result.count} players</div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
} 