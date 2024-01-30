import { APIAuthentication } from '@/data/usecases/authentication'
import { type AccountModel } from '@/domain/models'
import { faker } from '@faker-js/faker'
import { HTTPClientSpy } from '@tests/data/mocks'
import { mockAuthenticationParams } from '@tests/domain/mocks'

type SutTypes = {
  sut: APIAuthentication
  httpClientSpy: HTTPClientSpy<AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HTTPClientSpy<AccountModel>()
  const sut = new APIAuthentication(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('APIAuthentication', () => {
  test('Should call HTTPClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    const authenticationParams = mockAuthenticationParams()

    await sut.auth(authenticationParams)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(authenticationParams)
  })
})
