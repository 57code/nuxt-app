import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import type { User } from '@prisma/client'
import { createUser, getUserByUsername } from '../database/repositories/userRepository'

export default defineEventHandler(async (e) => {
  try {
    const data = await readBody<User>(e)
    const { username, password } = data
    // 校验...

    // 获取用户，存在同名用户
    const user = await getUserByUsername(username)

    if (user) {
      return sendError(e, createError({
        statusCode: 400,
        statusMessage: '用户名已存在!',
      }))
    }

    // 加密
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    data.password = hash

    // 入库
    const result = await createUser(data)

    // 生成token，写入cookie
    const secret = process.env.JSON_SECRET
    const token = jwt.sign({ username: result.username }, secret, { expiresIn: '24h' })
    setCookie(e, 'token', token, { maxAge: 24 * 3600 })

    return { ok: true, data: result }
  }
  catch (error) {
    console.error(error)
    return sendError(e, createError('注册失败!'))
  }
})
