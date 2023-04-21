import type { Column } from '@prisma/client'
import prisma from '~/server/database/client'

export async function getNewColumns(): Promise<Column[] | null> {
  const result = await prisma.column.findMany({
    orderBy: { id: 'desc' },
    take: 4,
  })
  return result
}

export async function getColumns({ page, size }): Promise<{ columns: Column[] | null; total: number }> {
  const [columns, total] = await Promise.all([
    prisma.column.findMany({
      orderBy: { id: 'desc' },
      skip: page * size,
      take: size,
    }),
    prisma.column.count(),
  ])
  return { columns, total }
}

export async function getColumnById(id: number): Promise<Column | null> {
  const result = await prisma.column.findFirst({
    where: {
      id,
    },
  })
  return result
}
