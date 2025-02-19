// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { CigarettesClient } from "@/server/cigarette-client/cigarette-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  try {
    const result = await CigarettesClient.getAll();

    fs.writeFileSync("./public/cigarettes.json", JSON.stringify(result));
    res.status(200);
  } catch (err) {
    if (err instanceof Error) res.statusMessage = err.message;
    res.status(500);
  }
}
