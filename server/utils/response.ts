import type { H3Event } from 'h3'
import type { HttpStatusCode } from './http-status'
import { setResponseStatus } from 'h3'
import { HTTP_STATUS } from './http-status'

export function HttpSendSuccess<T>(
  event: H3Event,
  statusCode: number,
  message: string,
  data?: T,
) {
  setResponseStatus(event, statusCode)
  return {
    statusCode,
    message,
    data: data ?? null,
  }
}

export function HttpSendError(
  event: H3Event,
  statusCode: HttpStatusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
  message = 'Something went wrong',
  errors: any = null,
) {
  setResponseStatus(event, statusCode)
  return {
    statusCode,
    errors,
    message,
  }
}
