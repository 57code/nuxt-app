import { getColumns } from '../database/repositories/columnRepository'

export default defineEventHandler(async (e) => {
  try {
    // 获取分页信息
    const query = getQuery(e)
    const page = query.page ? parseInt(query.page as string) : 0
    const size = query.size ? parseInt(query.size as string) : 8
    // 分页获取课程列表和总条数
    const { columns, total } = await getColumns({ page, size })

    return { ok: true, data: { list: columns, total } }
  }
  catch (error) {
    return sendError(e, createError('获取数据失败'))
  }
})
