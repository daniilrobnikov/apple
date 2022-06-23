import Page from '@/mongodb/models/Page'
import advancedResults from '@/mongodb/middleware/advancedResults'

import { getPages, createPage } from '@/mongodb/controllers/pages'

import handler from '@/mongodb/nextConnect'

export default handler.get(advancedResults(Page), getPages).post(createPage)
