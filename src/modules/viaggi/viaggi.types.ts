export type ViaggioStatus = 'visited' | 'planned'

export interface Viaggio {
  id: number
  title: string
  lat: number
  lng: number
  status: ViaggioStatus
  description?: string
  date?: string
}
