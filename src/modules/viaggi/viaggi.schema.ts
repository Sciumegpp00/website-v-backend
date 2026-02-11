import { z } from 'zod'

export const viaggioSchema = z.object({
  id: z.number(),
  title: z.string(),
  lat: z.number(),
  lng: z.number(),
  status: z.enum(['visited', 'planned']),
  description: z.string().optional(),
  date: z.string().optional()
})

export const createViaggioSchema = viaggioSchema.omit({
  id: true
})
