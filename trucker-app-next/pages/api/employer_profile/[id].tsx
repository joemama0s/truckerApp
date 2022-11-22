import { NextApiRequest, NextApiResponse } from "next";
import { Employer_Profiles } from "../../../tmp_db";
import { Employer_Profile } from "../../../interfaces/employer_profile";

type ResponseError = {
  message: string;
};

export default function EmployerProfileHandler(
  req: NextApiRequest,
  res: NextApiResponse<Employer_Profile | ResponseError>
) {
  const { query } = req;
  const { id } = query;

  // TODO MAKE THIS AN ACTUAL DB CALL
  // Notice this is just taking the data from the tmp_db file and looking for the
  // specific id
  const filtered = Employer_Profiles.filter((p) => p.id === Number(id));

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Profile with id: ${id} not found.` });
}
