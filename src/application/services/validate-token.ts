import jwt from 'jsonwebtoken'

import { DateIsExpired, ValidateToken } from '@/domain/features'
import { TOKEN_SECRET } from '@/infra/config'

type DecodedToken = {
  id: string
  email: string
  role: string
  iat: number
  exp: number
}
export class ValidateTokenService implements ValidateToken {
  constructor (
    private readonly token: string,
    private readonly dayjsService: DateIsExpired
  ) {}

  execute (): ValidateToken.Output {
    const tokenIsValid = jwt.verify(this.token, TOKEN_SECRET) as DecodedToken
    const tokenIsExpired = this.dayjsService.isExpired({ expirationDate: tokenIsValid.exp })
    return tokenIsExpired
  }
}