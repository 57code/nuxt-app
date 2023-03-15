import { getUserByEmail } from '../database/repositories/userRepository'

export default defineEventHandler(async (e) => {
  const { email } = await readBody(e)

  if (!email)
    return sendError(e, createError('email required!'))

  try {
    const user = await getUserByEmail(email)

    if (!user) {
      return sendError(e, createError({
        statusCode: 401,
        statusMessage: 'email not exist!',
      }))
    }

    return user
  }
  catch (error) {
    console.error(error)
    return sendError(e, createError('Failed to retrieve data!'))
  }
})
