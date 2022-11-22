import { NextApiResponse, NextApiRequest } from "next";
import { Driver_Profiles } from "../../../tmp_db";
import { Driver_Profile } from "../../../interfaces/driver_profile";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Driver_Profile[]>
) {
  return res.status(200).json(Driver_Profiles);
}
