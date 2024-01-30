import { type AccountModel } from '@/domain/models'
import { type Authentication, type AuthenticationParams } from '@/domain/usecases'
import { faker } from '@faker-js/faker'
import { mockAccountModel } from '@tests/domain/mocks'

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params!: AuthenticationParams

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    return this.account
  }
}
