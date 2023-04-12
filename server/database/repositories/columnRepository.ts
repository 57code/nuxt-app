import type { Column } from '@prisma/client'
import prisma from '~/server/database/client'

export async function getNewColumns(): Promise<Column[] | null> {
  const result = await prisma.column.findMany({
    orderBy: { id: 'desc' },
    take: 4,
  })
  return result
}
