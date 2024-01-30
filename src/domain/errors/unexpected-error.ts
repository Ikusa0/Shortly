export class UnexpectedError extends Error {
  constructor (message: string = 'Algo não deu muito certo. Tente novamente em breve!') {
    super(message)
    this.name = 'UnexpectedError'
  }
}
