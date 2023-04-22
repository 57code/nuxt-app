import { getOrderById } from '~/server/database/repositories/orderRepositor'

export default defineEventHandler(async (e) => {
  const id = e.context.params?.id ? parseInt(e.context.params.id) : undefined
  if (!id) {
    return sendError(e, createError({
      statusCode: 400,
      statusMessage: '缺少订单id',
    }))
  }
  const order = await getOrderById(id)
  return { ok: true, data: order }
})
