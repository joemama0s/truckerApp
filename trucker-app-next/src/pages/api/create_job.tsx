import { NextApiRequest, NextApiResponse } from "next";
import { Job } from "../../../interfaces/job";

type ResponseError = {
  message: string;
};

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<boolean | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const body = req.body;
  // TODO Add the body to the database

  res.status(200).json(true);
}
