import { NextApiResponse, NextApiRequest } from 'next'
import { Jobs} from '../../../tmp_db'
import { Job } from '../../../interfaces/job'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  return res.status(200).json(Jobs)
}