import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST() {
  const email = process.env.ADMIN_EMAIL
  const name = process.env.ADMIN_NAME || 'Admin'
  if (!email) return new NextResponse('ADMIN_EMAIL not set', { status: 400 })

  const user = await prisma.user.upsert({
    where: { email },
    create: { email, name, role: 'ADMIN' },
    update: { name, role: 'ADMIN' },
  })

  return NextResponse.json({ ok: true, user })
} 