import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import type { User } from '@prisma/client'
import { getUserByUsername } from '../database/repositories/userRepository'

export default defineEventHandler(async (e) => {
  const { username, password } = await readBody<User>(e)

  // 校验...

  try {
    // 获取用户
    const user = await getUserByUsername(username)

    if (!user) {
      return sendError(e, createError({
        statusCode: 401,
        statusMessage: '用户错误!',
      }))
    }

    // 校验密码
    const result = await bcrypt.compare(password, user.password)

    if (!result) {
      return sendError(e, createError({
        statusCode: 401,
        statusMessage: '密码错误!',
      }))
    }

    // 写入cookie
    const secret = process.env.JSON_SECRET
    const token = jwt.sign({ username: user.username }, secret, { expiresIn: '24h' })
    setCookie(e, 'token', token, { maxAge: 24 * 3600 })

    return { ok: true, data: user }
  }
  catch (error) {
    console.error(error)
    return sendError(e, createError('登录失败!'))
  }
})
