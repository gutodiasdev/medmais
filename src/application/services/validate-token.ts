import jwt, { sign } from 'jsonwebtoken'

import {
  DateIsExpired,
  GenerateToken,
  ValidateToken
} from '@/domain/features'
import { TOKEN_SECRET } from '@/infra/config'
import { destroyCookie, setCookie } from 'nookies'

type DecodedToken = {
  id: string
  email: string
  role: string
  iat: number
  exp: number
}
export class ValidateTokenService implements ValidateToken, GenerateToken {
  constructor (
    private readonly token: string,
    private readonly dayjsService: DateIsExpired
  ) {}

  execute (): ValidateToken.Output {
    const tokenPayload = jwt.verify(this.token, TOKEN_SECRET) as DecodedToken
    const tokenIsExpired = this.dayjsService.isExpired({ expirationDate: tokenPayload.exp })
    if (tokenIsExpired === true) {
      destroyCookie(null, 'medmais.access_token')
      const newToken = this.generateToken(tokenPayload)
      setCookie(null, 'medmais.access_token', newToken)
    }
  }

  generateToken (input: GenerateToken.Input): string {
    const token = sign({ id: input.id, email: input.role, role: input.role }, TOKEN_SECRET, { expiresIn: '1d'})
    return token
  }
}