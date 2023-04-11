import type { User } from '@prisma/client'
import prisma from '~/server/database/client'

export async function getUserByUsername(username: string): Promise<User | null> {
  const result = await prisma.user.findUnique({
    where: {
      username,
    },
  })
  return result
}

export async function createUser(data: User) {
  const user = await prisma.user.create({ data })
  return user
}
