import { Viaggio } from './viaggi.types'

// Per ora usiamo un array in memoria (poi DB)
export let viaggi: Viaggio[] = [
  {
    id: 1,
    title: "Roma",
    lat: 41.9028,
    lng: 12.4964,
    status: "visited",
    description: "Colosseo e carbonara ❤️",
    date: "2023-06-10"
  },
  {
    id: 2,
    title: "Parigi",
    lat: 48.8566,
    lng: 2.3522,
    status: "visited",
    description: "Tour Eiffel al tramonto ✨",
    date: "2024-04-02"
  },
  {
    id: 3,
    title: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    status: "planned",
    description: "Prossima avventura ✈️",
    date: "2026-09-01"
  }
]

export const viaggiRepository = {
  findAll(): Viaggio[] {
    return viaggi
  },

  findByStatus(status: string): Viaggio[] {
    return viaggi.filter(v => v.status === status)
  },

  create(data: Omit<Viaggio, 'id'>): Viaggio {
    const nuovo = { id: Date.now(), ...data }
    viaggi.push(nuovo)
    return nuovo
  }
}
