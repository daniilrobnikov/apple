import handler from '@/mongodb/nextConnect'

import { uploadFile } from '@/mongodb/controllers/upload'

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

export default handler.post(uploadFile).put(uploadFile)
