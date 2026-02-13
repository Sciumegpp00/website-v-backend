import { Viaggio } from './viaggi.types'

// Per ora usiamo un array in memoria (poi DB)
export let viaggi: Viaggio[] = [
  {
    id: 1,
    title: "Frankfurt am Main",
    lat: 50.1143,
    lng: 8.68149,
    status: "visited",
    description: "Il nostro nido d'amore💘",
    date: "2024-07-01"
  },
  {
    id: 2,
    title: "Colmar",
    lat: 48.083333,
    lng: 7.366667,
    status: "visited",
    description: "Nostra prima fuga in Francia",
    date: "2024-04-17"
  },
  {
    id: 3,
    title: "Puno",
    lat: -15.8391,
    lng: -70.0292,
    status: "planned",
    description: "Speriamo che zeze ci aspetti ✈️",
    date: "2026-08-07"
  },
  {
    id: 4,
    title: "Colonia",
    lat: 50.9375,
    lng: 6.9603,
    status: "visited",
    description: "Giornata alla Cattedrale Gotica per controllare se puo' ospitare il matrimonio",
    date: "2025-12-13"
  },
  {
    id: 5,
    title: "Bad Homburg",
    lat: 50.2268308,
    lng: 8.6181618,
    status: "visited",
    description: "Gitarella fuori portaaaaa",
    date: "2025-04-26"
  },
  {
    id: 6,
    title: "Strasburgo",
    lat: 48.5833,
    lng: 7.7500,
    status: "visited",
    description: "Ci eravamo abbonati alla francia",
    date: "2025-04-19"
  },
  {
    id: 7,
    title: "Bad Homburg",
    lat: 50.2268308,
    lng: 8.6181618,
    status: "visited",
    description: "Gitarella fuori porta",
    date: "2025-04-26"
  },
  {
    id: 8,
    title: "Cavaion Veronese",
    lat: 45.5333333,
    lng: 10.7666667,
    status: "visited",
    description: "Casa nostra e di Rio🐶​",
    date: "2025-06-25"
  },
  {
    id: 9,
    title: "Meda",
    lat: 45.6667,
    lng: 9.1667,
    status: "visited",
    description: "Casa di Vladino😼​",
    date: "2025-04-24"
  },
  {
    id: 10,
    title: "Porto Venere",
    lat: 45.6667,
    lng: 9.1667,
    status: "visited",
    description: "La mia nuova scoperta: la liguria​🌊​",
    date: "2025-08-10"
  },
  {
    id: 11,
    title: "Palermo",
    lat: 45.6667,
    lng: 9.1667,
    status: "visited",
    description: "Palermo bedda",
    date: "2025-07-31"
  },
  {
    id: 12,
    title: "Agrigento",
    lat: 45.6667,
    lng: 9.1667,
    status: "visited",
    description: "Casa non casa (grezza obv)​🏛️​",
    date: "2025-07-01"
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
