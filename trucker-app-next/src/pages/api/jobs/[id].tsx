import { NextApiRequest, NextApiResponse } from "next";
import { Jobs } from "../../../../tmp_db";
import { Job } from "../../../../interfaces/job";

type ResponseError = {
  message: string;
};

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Job | ResponseError>
) {
  const { query } = req;
  const { id } = query;

  // TODO MAKE THIS AN ACTUAL DB CALL
  // Notice this is just taking the data from the tmp_db file and looking for the
  // specific id
  const filtered = Jobs.filter((p) => p.id === Number(id));

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Job with id: ${id} not found.` });
}
