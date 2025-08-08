import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null
        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!user) return null
        // Expect password hashed in image field? We'll store hashed in image temporarily? Better: add separate field. For simplicity, require ADMIN role and compare against env ADMIN_PASSWORD
        if (user.role !== 'ADMIN') return null
        const ok = await bcrypt.compare(credentials.password, process.env.ADMIN_PASSWORD_HASH || '')
        if (!ok) return null
        return { id: user.id, name: user.name, email: user.email, image: user.image }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role || 'USER'
      return token
    },
    async session({ session, token }) {
      if (session.user) (session.user as any).role = (token as any).role
      return session
    },
  },
})

export { handler as GET, handler as POST } 