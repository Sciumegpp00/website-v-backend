import { FastifyRequest, FastifyReply } from 'fastify'
import { viaggiService } from './viaggi.service'
import { Viaggio, createViaggioSchema } from './viaggi.schema'

export const viaggiController = {
  getAll(
    request: FastifyRequest<{ Querystring: { status?: string } }>,
    reply: FastifyReply
  ) {
    const { status } = request.query
    const result = viaggiService.getViaggi(status)
    reply.send(result)
  },

  create(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const viaggio = viaggiService.createViaggio(request.body as any)
    reply.code(201).send(viaggio)
  }
}

// Per ora usiamo un array in memoria (poi DB)
let viaggi: Viaggio[] = [
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


export async function getViaggi() {
  return viaggi
}

export async function createViaggio(data: Omit<Viaggio, 'id'>) {
  const id = viaggi.length + 1
  const nuovoViaggio = { id, ...data }
  viaggi.push(nuovoViaggio)
  return nuovoViaggio
}
