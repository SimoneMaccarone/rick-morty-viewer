import { Observable } from "rxjs"

export interface EpisodeModel {
  info: Info
  results: EpisodeResult[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface EpisodeResult {
  children: EpisodeResult[] | Observable<EpisodeResult[]> | null | undefined
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
