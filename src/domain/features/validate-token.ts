export interface ValidateToken {
  execute: (input: ValidateToken.Input) => ValidateToken.Output
}

export namespace ValidateToken {
  export type Input = {
    token: string
  }

  export type Output = void
}