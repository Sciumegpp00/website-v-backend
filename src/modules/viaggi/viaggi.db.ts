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
    title: "Verona",
    lat: 45.4351,
    lng: 10.9988,
    status: "visited",
    description: "Casa nostra e di Rio🐶​",
    date: "2025-06-25"
  },
  {
    id: 9,
    title: "Monza",
    lat: 45.5831,
    lng: 9.2729,
    status: "visited",
    description: "Casa di Vladino😼​",
    date: "2025-04-24"
  },
  {
    id: 10,
    title: "Porto Venere",
    lat: 44.06023,
    lng: 9.83214,
    status: "visited",
    description: "La mia nuova scoperta: la liguria​🌊​",
    date: "2025-08-10"
  },
  {
    id: 11,
    title: "Palermo",
    lat: 38.1156,
    lng: 13.3613,
    status: "visited",
    description: "Palermo bedda",
    date: "2025-07-31"
  },
  {
    id: 12,
    title: "Agrigento",
    lat: 37.3125,
    lng: 13.575,
    status: "visited",
    description: "Casa non casa (grezza obv)​🏛️​",
    date: "2025-07-01"
  },
  {
    id: 13,
    title: "Cuzco",
    lat: -13.52,
    lng: -71.97,
    status: "planned",
    description: "Perù arriviamo ✈️",
    date: "2026-08-07"
  },
  {
    id: 14,
    title: "Lima",
    lat: -12.046,
    lng: -77.042,
    status: "planned",
    description: "Perù arriviamo ✈️",
    date: "2026-08-07"
  },
  {
    id: 15,
    title: "Venezia",
    lat: 45.4349,
    lng: 12.3385,
    status: "planned",
    description: "Perù arriviamo ✈️",
    date: "2026-08-07"
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
