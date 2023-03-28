export interface ValidateCookie {
  execute: (input: ValidateCookie.Input) => Promise<ValidateCookie.Output>
}

export namespace ValidateCookie {
  export type Input = {
    cookie: string
  }

  export type Output = boolean
}