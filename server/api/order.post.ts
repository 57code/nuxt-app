import type { Order } from '@prisma/client'
import { OrderStatus } from '@prisma/client'
import { isNuxtError } from 'nuxt/app'
import { getTokenInfo } from '../database/service/token'
import { createOrder } from '../database/repositories/orderRepositor'

export default defineEventHandler(async (e) => {
  const { courseId } = await readBody(e)

  const result = getTokenInfo(e)
  if (isNuxtError(result))
    return sendError(e, result)

  const order = {
    courseId: Number(courseId),
    userId: result.id,
    createdAt: new Date(),
    status: OrderStatus.WAIT_CONFIRM,
  } as Order

  const o = await createOrder(order)

  return { ok: true, data: { orderId: o.id } }
})
