import jwt from 'jsonwebtoken'
import { getUserByUsername } from '../database/repositories/userRepository'

export default defineEventHandler(async (e) => {
  // 获取令牌
  const token = getCookie(e, 'token')

  // 令牌不存在
  if (!token)
    return { ok: false }

  let info
  try {
    // 解析token
    info = jwt.verify(token, process.env.JSON_SECRET!)
    const currentTime = Date.now() / 1000

    if (info.exp < currentTime) {
      return sendError(e, createError({
        statusCode: 401,
        statusMessage: 'token过期!',
      }))
    }
  }
  catch (error) {
    return sendError(e, createError({
      statusCode: 401,
      statusMessage: 'token不合法!',
    }))
  }

  try {
    const user = await getUserByUsername(info.username)

    // 用户不存在
    if (!user) {
      return sendError(e, createError({
        statusCode: 401,
        statusMessage: '用户不存在!',
      }))
    }
    return { ok: true, data: user }
  }
  catch (error) {
    console.error(error)
    return sendError(e, createError('获取用户信息失败!'))
  }
})
