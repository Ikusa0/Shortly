import {
  HTTPStatusCode,
  type HTTPClient,
  type HTTPRequest,
  type HTTPResponse
} from '@/data/protocols/http'

import { faker } from '@faker-js/faker'

export const mockHTTPRequest = (): HTTPRequest => ({
  url: faker.internet.url(),
  method: faker.helpers.arrayElement(['get', 'post', 'put', 'delete']),
  body: { [faker.word.words()]: faker.word.words() },
  headers: { [faker.word.words()]: faker.word.words() }
})

export class HTTPClientSpy<R = unknown> implements HTTPClient<R> {
  url?: string
  method?: string
  body?: unknown
  headers?: unknown
  response: HTTPResponse<R> = {
    statusCode: HTTPStatusCode.ok
  }

  async request (data: HTTPRequest): Promise<HTTPResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return this.response
  }
}
