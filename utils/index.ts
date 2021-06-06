import { AxiosError, AxiosResponse } from 'axios'

export interface IErrorResponse {
  code: string
  message: string
  errors?: ValidationError[]
}

export interface ValidationError {
  field: string
  code: string
  argument: string
  message: string
}

export const getResponseData = <T>(response: AxiosResponse<{ data: T }>): T => {
  return response.data.data
}

export const getResponseErrorMessage = (
  err: AxiosError
): string | ValidationError[] => {
  if (!err.response) {
    return err.message
  }
  const data = err.response.data
  const payload: IErrorResponse = data.errors
  if (!payload) {
    return err.response.statusText
  }
  try {
    const validationErrors = payload.errors
    return validationErrors ? validationErrors : 'Oops! Something went wrong!'
  } catch (e) {
    return err.response.statusText
  }
}
