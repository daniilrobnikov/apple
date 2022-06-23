import Accessory from '@/mongodb/models/Accessory'

import {
  getAccessory,
  updateAccessory,
  deleteAccessory,
} from '@/mongodb/controllers/accessories'

import handler from '@/mongodb/nextConnect'

export default handler
  .get(getAccessory)
  .put(updateAccessory)
  .delete(deleteAccessory)
