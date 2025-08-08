'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default function LoginPage() {
  const router = useRouter()
  const params = useSearchParams()
  const error = params.get('error')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', { redirect: false, email, password })
    setLoading(false)
    if (!res?.error) router.push('/admin/players')
  }

  return (
    <div className="min-h-screen bg-elite-black text-white">
      <Navbar />
      <div className="pt-24 max-w-md mx-auto px-4">
        <h1 className="text-3xl font-display font-bold mb-6">Admin Login</h1>
        {error && <p className="mb-4 text-red-400">{error}</p>}
        <form onSubmit={handleSubmit} className="card space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full">{loading ? 'Signing in...' : 'Sign In'}</button>
        </form>
      </div>
    </div>
  )
} 