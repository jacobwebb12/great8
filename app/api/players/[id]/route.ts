import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { computeOverallScore } from '@/lib/calc'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const player = await prisma.player.findUnique({ where: { id: params.id } })
  if (!player) return new NextResponse('Not Found', { status: 404 })
  return NextResponse.json(player)
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()
  const skills = [body.speed, body.agility, body.stick, body.defense, body.strength, body.iq, body.communication].map((n: any) => Number(n) || 0)
  const overallScore = computeOverallScore(skills)

  const data: any = {
    name: body.name,
    gradYear: Number(body.gradYear),
    height: body.height || null,
    weight: body.weight || null,
    headshotUrl: body.headshotUrl || null,
    youtubeLinks: body.youtubeLinks || [],
    scoutingReport: body.scoutingReport || null,
    speed: new Prisma.Decimal(Number(body.speed).toFixed(1)),
    agility: new Prisma.Decimal(Number(body.agility).toFixed(1)),
    stick: new Prisma.Decimal(Number(body.stick).toFixed(1)),
    defense: new Prisma.Decimal(Number(body.defense).toFixed(1)),
    strength: new Prisma.Decimal(Number(body.strength).toFixed(1)),
    iq: new Prisma.Decimal(Number(body.iq).toFixed(1)),
    communication: new Prisma.Decimal(Number(body.communication).toFixed(1)),
    overallScore,
  }

  const player = await prisma.player.update({ where: { id: params.id }, data })
  return NextResponse.json(player)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.player.delete({ where: { id: params.id } })
  return NextResponse.json({ ok: true })
} 