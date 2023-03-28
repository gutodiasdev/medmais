export interface DateIsExpired {
  isExpired: (input: DateIsExpired.Input) => DateIsExpired.Ouput
}

export namespace DateIsExpired {
  export type Input = {}
  export type Ouput = {}
}