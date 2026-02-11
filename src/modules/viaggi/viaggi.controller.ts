import { FastifyRequest, FastifyReply } from 'fastify'
import { viaggiService } from './viaggi.service'

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
