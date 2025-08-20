import { z, ZodError } from 'zod'
import { HTTP_STATUS } from '~~/server/utils/http-status'
import { HttpSendError, HttpSendSuccess } from '~~/server/utils/response'

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
})

export default defineEventHandler(async (event) => {
  try {
    const { data, error } = await readValidatedBody(event, body => bodySchema.safeParse(body))
    if (error) {
      return HttpSendError(event, HTTP_STATUS.BAD_REQUEST, 'Validation Error', error.issues.map(e => ({
        path: e.path.join('.'),
        message: e.message,
      })))
    }

    if (data?.email === 'admin@admin.com' && data.password === 'admin.com') {
      const id = crypto.randomUUID()
      // set the user session in the cookie
      // this server util is auto-imported by the auth-utils module
      await setUserSession(event, {
        user: {
          id,
          name: 'John Doe',
        },
      })
      return HttpSendSuccess(event, HTTP_STATUS.OK, 'Login Success')
    }
    return HttpSendError(event, HTTP_STATUS.BAD_REQUEST, 'Invalid Credential')
  }
  catch (error: any) {
    return HttpSendError(event, HTTP_STATUS.INTERNAL_SERVER_ERROR)
  }
})
