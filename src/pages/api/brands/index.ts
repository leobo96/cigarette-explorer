import { CigarettesRepository } from "@/server/cigarettes.repo";
import { NextApiRequest, NextApiResponse } from "next";

export type GetCigarettesBrandsOutput = string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetCigarettesBrandsOutput>
) {
  try {
    const repo = new CigarettesRepository();

    const data = await repo.get_brands();

    res.status(200).json(data);
  } catch (err) {
    if (err instanceof Error) res.statusMessage = err.message;
    res.status(500);
  }
}
