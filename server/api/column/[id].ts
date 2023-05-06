import { getColumnById, getColumns } from '~/server/database/repositories/columnRepository'

export default defineEventHandler(async (e) => {
  const id = e.context.params?.id ? parseInt(e.context.params.id) : undefined
  if (!id)
    return sendError(e, createError({ statusCode: 400, statusMessage: '参数错误' }))
  try {
    const column = await getColumnById(id)
    if (!column)
      return sendError(e, createError({ statusCode: 404, statusMessage: '没有对应专栏' }))

    const { columns: recommend } = await getColumns({ page: 1, size: 2 })

    return { ok: true, data: { item: column, recommend } }
  }
  catch (error) {
    return sendError(e, createError({ statusCode: 500, statusMessage: '服务器错误' }))
  }
})
