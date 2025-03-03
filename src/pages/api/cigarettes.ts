import { CigarettesRepository } from "@/server/cigarettes.repo";
import { CigaretteDAO } from "@/server/cigarette-client/cigarette-client";
import { NextApiRequest, NextApiResponse } from "next";

export type GetAllCigarettesOutput = CigaretteDAO[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetAllCigarettesOutput>
) {
  try {
    const repo = new CigarettesRepository();

    const data = await repo.get();

    res.json(data);
  } catch (err) {
    if (err instanceof Error) res.statusMessage = err.message;
    res.status(500);
  }
}
