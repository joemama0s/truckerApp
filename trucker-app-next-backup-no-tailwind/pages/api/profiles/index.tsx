import { NextApiResponse, NextApiRequest } from 'next'
import { Profiles } from '../../../tmp_db'
import { Profile } from '../../../interfaces/profile'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Profile[]>
) {
  return res.status(200).json(Profiles)
}