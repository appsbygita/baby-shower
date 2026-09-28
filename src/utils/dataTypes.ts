export type Guest = {
  name: string
  attending: 'yes' | 'no'
  maxGuests: number
  numOfRsvp?: number
  dietaryRestrictions?: string
  message?: string
  slugParam: string
}

export type Message = {
  name: string
  message: string
}
