import handler from '@/mongodb/nextConnect'
import { getPage, updatePage, deletePage } from '@/mongodb/controllers/pages'

export default handler.get(getPage).put(updatePage).delete(deletePage)
