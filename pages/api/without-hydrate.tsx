import type { NextApiRequest, NextApiResponse } from "next";
import { getListApi } from "@/api";

async function getData(req: NextApiRequest, res: NextApiResponse) {
  const data = await getListApi();

  res.send({
    dehydratedState: data,
  });
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await getData(req, res);
}

export default handler;
