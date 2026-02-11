import { viaggiRepository } from './viaggi.db'
import { Viaggio } from './viaggi.types'

export const viaggiService = {
  getViaggi(status?: string): Viaggio[] {
    if (status) {
      return viaggiRepository.findByStatus(status)
    }
    return viaggiRepository.findAll()
  },

  createViaggio(data: Omit<Viaggio, 'id'>): Viaggio {
    return viaggiRepository.create(data)
  }
}
