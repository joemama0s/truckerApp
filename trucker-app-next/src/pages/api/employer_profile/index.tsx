import { NextApiResponse, NextApiRequest } from "next";
import { Employer_Profiles } from "../../../../tmp_db";
import { Employer_Profile } from "../../../../interfaces/employer_profile";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Employer_Profile[]>
) {
  return res.status(200).json(Employer_Profiles);
}
