export interface ValidateToken {
  execute: () => ValidateToken.Output
}

export namespace ValidateToken {
  export type Input = {
    token: string
  }

  export type Output = boolean
}