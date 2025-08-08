import { NextResponse } from 'next/server'
import Papa from 'papaparse'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { computeOverallScore } from '@/lib/calc'

export async function POST(req: Request) {
  const form = await req.formData()
  const file = form.get('file') as File | null
  if (!file) return new NextResponse('No file provided', { status: 400 })

  const text = await file.text()
  const { data, errors } = Papa.parse<Record<string, string>>(text, { header: true, skipEmptyLines: true })
  if (errors.length) return NextResponse.json({ errors }, { status: 400 })

  const results: any[] = []

  for (const row of data) {
    const normalize = (key: string) => key?.trim().toLowerCase().replace(/\s+/g, '_')

    const name = row['name'] || row['Name'] || row['player'] || row['Player']
    const gradYearRaw = row['grad_year'] || row['gradyear'] || row['Grad Year'] || row['grad']

    if (!name || !gradYearRaw) continue
    const gradYear = Number(String(gradYearRaw).replace(/[^0-9]/g, ''))

    const height = row['height'] || null
    const weight = row['weight'] || null
    const headshotUrl = row['picture'] || row['headshot'] || null
    const linksRaw = row['youtube_links'] || row['youtube'] || ''
    const youtubeLinks = linksRaw ? String(linksRaw).split(/[\s,]+/).filter(Boolean) : []
    const scoutingReport = row['scouting_report'] || row['writeup'] || null

    const num = (k: string) => Number((row[k] ?? row[k.toUpperCase()] ?? '0')) || 0
    const speed = num('speed')
    const agility = num('agility')
    const stick = num('stick')
    const defense = num('defense')
    const strength = num('strength')
    const iq = num('iq')
    const communication = num('communication')

    const skills = [speed, agility, stick, defense, strength, iq, communication]
    const overallScore = computeOverallScore(skills)

    const payload = {
      name,
      gradYear,
      height,
      weight,
      headshotUrl,
      youtubeLinks,
      scoutingReport,
      speed: new Prisma.Decimal(speed.toFixed(1)),
      agility: new Prisma.Decimal(agility.toFixed(1)),
      stick: new Prisma.Decimal(stick.toFixed(1)),
      defense: new Prisma.Decimal(defense.toFixed(1)),
      strength: new Prisma.Decimal(strength.toFixed(1)),
      iq: new Prisma.Decimal(iq.toFixed(1)),
      communication: new Prisma.Decimal(communication.toFixed(1)),
      overallScore,
    }

    const player = await prisma.player.upsert({
      where: { name_gradYear: { name, gradYear } },
      update: payload,
      create: payload,
    })

    results.push(player)
  }

  return NextResponse.json({ count: results.length, items: results })
} 