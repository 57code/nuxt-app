import type { Order } from '@prisma/client'
import prisma from '~/server/database/client'

export async function createOrder(data: Order) {
  const order = await prisma.order.create({ data })
  return order
}

export async function getOrderById(id: number) {
  const result = await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      course: {
        select: {
          id: true,
          title: true,
          cover: true,
          price: true,
          desc: true,
        },
      },
    },
  })
  return result
}

export async function updateOrder(id: number, data: Partial<Order>) {
  const result = await prisma.order.update({
    where: {
      id,
    },
    data,
  })
  return result
}

export async function getCoursesByUser(userId: number) {
  const orders = await prisma.order.findMany({
    where: {
      userId,
    },
    include: {
      course: {
        select: {
          id: true,
          title: true,
          cover: true,
        },
      },
    },
  })

  const courses = orders.flatMap(order => order.course)
  const uniqueCourses = courses.filter((course, index, arr) => arr.findIndex(c => c.id === course.id) === index)
  return uniqueCourses
}
