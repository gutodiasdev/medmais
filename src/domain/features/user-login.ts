import { LoginInput, LoginOutput } from '@/domain/models'

export interface UserLogin {
  submitLogin: () => Promise<void>
}

export namespace UserLogin {
  export type Input = LoginInput
  export type Output = LoginOutput
}