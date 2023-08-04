import type { NextApiRequest, NextApiResponse } from "next";
import { getListApi } from "@/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";

async function getData(req: NextApiRequest, res: NextApiResponse) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getListQuery"], getListApi, {
    retry: 0,
  });

  const json = {
    dehydratedState: dehydrate(queryClient),
  };

  console.log(json);

  res.send(json);
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await getData(req, res);
}

export default handler;
