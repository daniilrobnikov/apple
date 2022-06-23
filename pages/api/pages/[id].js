import handler from '@/mongodb/nextConnect'

import Page from '@/mongodb/models/Page'
import { getPage, updatePage, deletePage } from '@/mongodb/controllers/pages'

export default handler.get(getPage).put(updatePage).delete(deletePage)
