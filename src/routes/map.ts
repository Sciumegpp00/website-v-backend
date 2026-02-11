import { FastifyInstance } from 'fastify'

export async function mapRoute(app: FastifyInstance) {
  app.get('/map', async () => {
    return { alive: true }
  })
}