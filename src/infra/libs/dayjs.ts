import dayjs from 'dayjs'

import { DateIsExpired } from '@/domain/features'

export class DayjsService implements DateIsExpired {
  isExpired (input: DateIsExpired.Input): DateIsExpired.Ouput {
    const expirationDate = dayjs.unix(input.expirationDate)
    const checkIfIsExpired = dayjs(dayjs()).isAfter(expirationDate)
    return checkIfIsExpired
  }
}