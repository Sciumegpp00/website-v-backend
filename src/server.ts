import Fastify from 'fastify'
import { healthRoutes } from './routes/health'
import { mapRoute } from './routes/map'
import { viaggiRoutes } from './modules/viaggi/viaggi.routes'
import cors from '@fastify/cors'

const app = Fastify({
  logger: true
})

app.register(healthRoutes)
app.register(mapRoute)
app.register(viaggiRoutes, { prefix: '/api/v1' })

app.register(cors, {
  origin: [
    'http://localhost:5173',
    'https://website-v-backend.onrender.com'
  ]
})

app.get('/', async () => {
  return { status: 'ok', message: 'Backend attivo 💖' }
})

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()