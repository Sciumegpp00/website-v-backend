import { FastifyRequest, FastifyReply } from 'fastify'
import { viaggiService } from './viaggi.service'
import { Viaggio, createViaggioSchema } from './viaggi.schema'
import { viaggi } from './viaggi.db'

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

export async function getViaggi() {
  return viaggi
}

export async function createViaggio(data: Omit<Viaggio, 'id'>) {
  const id = viaggi.length + 1
  const nuovoViaggio = { id, ...data }
  viaggi.push(nuovoViaggio)
  return nuovoViaggio
}
