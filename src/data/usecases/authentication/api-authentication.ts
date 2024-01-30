import { HTTPStatusCode, type HTTPClient } from '@/data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
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

    switch (httpResponse.statusCode) {
      case HTTPStatusCode.ok:
        return httpResponse.body!
      case HTTPStatusCode.unauthorized:
        throw new InvalidCredentialsError('E-mail e/ou Senha inválidos!')
      default:
        throw new UnexpectedError()
    }
  }
}
