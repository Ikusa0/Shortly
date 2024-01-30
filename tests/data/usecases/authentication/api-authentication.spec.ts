import { HTTPStatusCode } from '@/data/protocols/http'
import { APIAuthentication } from '@/data/usecases/authentication'
import { UnexpectedError } from '@/domain/errors'
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

  test('Should throw UnexpectedError if HTTPClient returns Status Code 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HTTPStatusCode.serverError
    }

    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HTTPClient returns Status Code 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HTTPStatusCode.serverError
    }

    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HTTPClient returns Status Code 400', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HTTPStatusCode.serverError
    }

    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
