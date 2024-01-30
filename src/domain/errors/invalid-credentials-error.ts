export class InvalidCredentialsError extends Error {
  constructor (message: string = 'Credenciais Inválidas!') {
    super(message)
    this.name = 'InvalidCredentialsError'
  }
}
