import { FastifyInstance } from 'fastify'
import { viaggiController } from './viaggi.controller'

export async function viaggiRoutes(app: FastifyInstance) {
  app.get('/viaggi', viaggiController.getAll)
  app.post('/viaggi', viaggiController.create)
}
