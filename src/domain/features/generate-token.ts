export interface GenerateToken {
  generateToken: (input: GenerateToken.Input) => GenerateToken.Output
}

export namespace GenerateToken {
  export type Input = {
    id: string
    email: string
    role: string
  }

  export type Output = string
}