import nc from 'next-connect'
import middleware from '../../../middleware/all'
import { doc } from '../../../db'
import onError from '../../../middleware/error'
import { Request } from '../../../types'

const handler = nc({
  onError,
})

handler.use(middleware)

handler.put(async (req: Request, res) => {
  const updatedDoc = await doc.updateOne(req.db, req.query.id as string, req.body)

  res.send({ data: updatedDoc })
})

export default handler
