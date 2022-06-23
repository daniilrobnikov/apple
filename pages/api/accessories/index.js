import Accessory from '@/mongodb/models/Accessory'
import advancedResults from '@/mongodb/middleware/advancedResults'

import {
  getAccessories,
  createAccessory,
} from '@/mongodb/controllers/accessories'

import handler from '@/mongodb/nextConnect'

export default handler
  .get(advancedResults(Accessory), getAccessories)
  .post(createAccessory)
