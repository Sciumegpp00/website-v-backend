import { Viaggio } from './viaggi.types'

const viaggi: Viaggio[] = [
  {
    id: 1,
    title: 'Roma',
    lat: 41.9028,
    lng: 12.4964,
    status: 'visited',
    description: 'Il primo viaggio insieme 💖'
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
