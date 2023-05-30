export interface LocationModel {
  info: Info
  results: LocationResult[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface LocationResult {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}
