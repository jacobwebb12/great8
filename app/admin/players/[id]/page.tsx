'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function EditPlayerPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const id = params.id
  const [player, setPlayer] = useState<any>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/api/players/${id}`)
      if (res.ok) setPlayer(await res.json())
    }
    if (id) load()
  }, [id])

  const setField = (k: string, v: any) => setPlayer((p: any) => ({ ...p, [k]: v }))

  const save = async () => {
    setSaving(true)
    const res = await fetch(`/api/players/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(player) })
    setSaving(false)
    if (res.ok) router.push('/admin/players')
  }

  if (!player) return null

  const Skill = ({ k, label }: { k: string; label: string }) => (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm text-gray-300">{label}</label>
        <span className="text-sm text-gray-400">{player[k]}</span>
      </div>
      <input type="range" min={0} max={5} step={0.1} value={Number(player[k])} onChange={(e) => setField(k, Number(e.target.value))} className="w-full" />
    </div>
  )

  return (
    <div className="min-h-screen bg-elite-black text-white">
      <Navbar />
      <div className="pt-24 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-display font-bold mb-6">Edit Player</h1>
        <div className="card space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" value={player.name} onChange={(e)=>setField('name', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Grad Year</label>
              <input type="number" className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" value={player.gradYear} onChange={(e)=>setField('gradYear', Number(e.target.value))} />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Height</label>
              <input className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" value={player.height||''} onChange={(e)=>setField('height', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Weight</label>
              <input className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" value={player.weight||''} onChange={(e)=>setField('weight', e.target.value)} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-1">Headshot URL</label>
              <input className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" value={player.headshotUrl||''} onChange={(e)=>setField('headshotUrl', e.target.value)} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-1">YouTube Links (comma or space separated)</label>
              <input className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" value={(player.youtubeLinks||[]).join(', ')} onChange={(e)=>setField('youtubeLinks', e.target.value.split(/[\s,]+/).filter(Boolean))} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-1">Scouting Report</label>
              <textarea className="w-full bg-elite-charcoal border border-elite-silver/20 rounded px-3 py-2" rows={5} value={player.scoutingReport||''} onChange={(e)=>setField('scoutingReport', e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skill k="speed" label="Speed" />
            <Skill k="agility" label="Agility" />
            <Skill k="stick" label="Stick" />
            <Skill k="defense" label="Defense" />
            <Skill k="strength" label="Strength" />
            <Skill k="iq" label="IQ" />
            <Skill k="communication" label="Communication" />
          </div>

          <div className="flex gap-3">
            <button onClick={save} disabled={saving} className="btn-primary">{saving ? 'Saving...' : 'Save'}</button>
            <button onClick={()=>router.push('/admin/players')} className="btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 