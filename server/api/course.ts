import { getCourses } from '../database/repositories/courseRepository'

export default defineEventHandler(async (e) => {
  try {
    // 获取分页信息
    const query = getQuery(e)
    const page = query.page ? parseInt(query.page as string) : 0
    const size = query.size ? parseInt(query.size as string) : 8
    // 分页获取课程列表和总条数
    const { courses, total } = await getCourses({ page, size })

    return { ok: true, data: { list: courses, total } }
  }
  catch (error) {
    return sendError(e, createError('获取数据失败'))
  }
})
