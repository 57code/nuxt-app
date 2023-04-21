import { getCourseById, getCourses } from '~/server/database/repositories/courseRepository'

export default defineEventHandler(async (e) => {
  const id = e.context.params?.id ? parseInt(e.context.params.id) : undefined
  if (!id)
    return sendError(e, createError({ statusCode: 400, statusMessage: '参数错误' }))
  try {
    const course = await getCourseById(id)
    if (!course)
      return sendError(e, createError({ statusCode: 404, statusMessage: '没有对应课程' }))

    const { courses: recommend } = await getCourses({ page: 1, size: 2 })

    return { ok: true, data: { item: course, recommend } }
  }
  catch (error) {
    return sendError(e, createError({ statusCode: 500, statusMessage: '服务器错误' }))
  }
})
