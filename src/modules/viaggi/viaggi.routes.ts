import { FastifyInstance } from 'fastify'
import { viaggiController } from './viaggi.controller'
import { createViaggioSchema } from './viaggi.schema'
import { createViaggio, getViaggi } from './viaggi.controller'

export async function viaggiRoutes(app: FastifyInstance) {
  app.get('/viaggi', viaggiController.getAll)
//   app.post('/viaggi', viaggiController.create)
  app.post('/viaggi', async (request, reply) => {
    // validazione con Zod
    const parsed = createViaggioSchema.parse(request.body)
    const nuovoViaggio = await createViaggio(parsed)
    return reply.code(201).send(nuovoViaggio)
  })

}