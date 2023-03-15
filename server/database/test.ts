import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 插入一条数据
  // await prisma.user.create({
  //   data: {
  //     name: '村长',
  //     email: 'yt0379@qq.com',
  //     posts: {
  //       create: {
  //         title: '10分钟速通下一代ORM解决方案：Prisma',
  //       },
  //     },
  //   },
  // })

  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })

  // eslint-disable-next-line no-console
  console.log(post)

  // 查询所有用户
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })

  // console.log(allUsers)
  // eslint-disable-next-line no-console
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
