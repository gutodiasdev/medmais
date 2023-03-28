import { setCookie } from 'nookies'

import { UserLogin } from '@/domain/features'
import { api } from '@/infra/config'

export class UserLoginService implements UserLogin {
  private readonly formData: UserLogin.Input

  constructor (formInputs: UserLogin.Input) {
    this.formData = formInputs
  }

  async submitLogin (): Promise<void> {
    const { data } = await api.post<{ token: string }>('/api/session/create', this.formData)
    setCookie(null, 'medmais.access_token', data.token, { maxAge: 60 * 60 * 24 })
  }
}