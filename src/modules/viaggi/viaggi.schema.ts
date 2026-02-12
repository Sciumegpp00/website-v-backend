import { z } from 'zod'

/**
 * Schema completo di un viaggio
 * Rappresenta come il viaggio viene salvato nel backend
 */
export const viaggioSchema = z.object({
  id: z.number(),

  title: z
    .string()
    .min(1, 'Il titolo è obbligatorio')
    .max(100, 'Titolo troppo lungo'),

  lat: z
    .number()
    .min(-90, 'Latitudine non valida')
    .max(90, 'Latitudine non valida'),

  lng: z
    .number()
    .min(-180, 'Longitudine non valida')
    .max(180, 'Longitudine non valida'),

  status: z.enum(['visited', 'planned']),

  description: z.string().max(500).optional(),

  date: z.string().optional() // puoi migliorarla dopo
})

/**
 * Schema per creazione viaggio (POST)
 * Il client NON deve mandare l'id
 */
export const createViaggioSchema = viaggioSchema.omit({
  id: true
})

/**
 * Schema per update (PUT/PATCH)
 * Tutti i campi opzionali
 */
export const updateViaggioSchema = createViaggioSchema.partial()

/**
 * Tipi TypeScript derivati automaticamente
 */
export type Viaggio = z.infer<typeof viaggioSchema>
export type CreateViaggioInput = z.infer<typeof createViaggioSchema>
export type UpdateViaggioInput = z.infer<typeof updateViaggioSchema>
