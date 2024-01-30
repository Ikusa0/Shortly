export type HTTPMethod = 'post' | 'get' | 'put' | 'delete'

export type HTTPRequest = {
  url: string
  method: HTTPMethod
  body?: unknown
  headers?: unknown
}

export type HTTPResponse<T = unknown> = {
  statusCode: HTTPStatusCode
  body?: T
}

export interface HTTPClient<R = unknown> {
  request: (data: HTTPRequest) => Promise<HTTPResponse<R>>
}

export enum HTTPStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}
