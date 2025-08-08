import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { computeOverallScore } from '@/lib/calc'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')?.toLowerCase() || ''
  const page = Number(searchParams.get('page') || '1')
  const pageSize = Number(searchParams.get('pageSize') || '20')
  const skip = (page - 1) * pageSize

  const where = q
    ? {
        OR: [
          { name: { contains: q, mode: 'insensitive' } },
          { gradYear: { equals: Number(q) || -1 } },
        ],
      }
    : {}

  const [items, total] = await Promise.all([
    prisma.player.findMany({ where, skip, take: pageSize, orderBy: { name: 'asc' } }),
    prisma.player.count({ where }),
  ])

  return NextResponse.json({ items, total, page, pageSize })
}

export async function POST(req: Request) {
  const data = await req.json()
  const {
    id,
    name,
    gradYear,
    height,
    weight,
    headshotUrl,
    youtubeLinks = [],
    scoutingReport,
    speed,
    agility,
    stick,
    defense,
    strength,
    iq,
    communication,
  } = data

  const skills = [speed, agility, stick, defense, strength, iq, communication].map((n: any) => Number(n) || 0)
  const overallScore = computeOverallScore(skills)

  const payload = {
    name,
    gradYear: Number(gradYear),
    height: height || null,
    weight: weight || null,
    headshotUrl: headshotUrl || null,
    youtubeLinks,
    scoutingReport: scoutingReport || null,
    speed: new Prisma.Decimal(Number(speed).toFixed(1)),
    agility: new Prisma.Decimal(Number(agility).toFixed(1)),
    stick: new Prisma.Decimal(Number(stick).toFixed(1)),
    defense: new Prisma.Decimal(Number(defense).toFixed(1)),
    strength: new Prisma.Decimal(Number(strength).toFixed(1)),
    iq: new Prisma.Decimal(Number(iq).toFixed(1)),
    communication: new Prisma.Decimal(Number(communication).toFixed(1)),
    overallScore,
  }

  const player = await prisma.player.upsert({
    where: id ? { id } : { name_gradYear: { name, gradYear: Number(gradYear) } },
    update: payload,
    create: payload,
  })

  return NextResponse.json(player)
} 