import { type HTTPClient } from '@/data/protocols/http'
import { type AccountModel } from '@/domain/models'
import { type Authentication, type AuthenticationParams } from '@/domain/usecases'

export class APIAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HTTPClient<AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    return httpResponse.body!
  }
}
