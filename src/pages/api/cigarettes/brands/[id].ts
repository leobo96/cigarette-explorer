import { CigaretteDAO } from "@/server/cigarette-client/cigarette-client";
import { CigarettesRepository } from "@/server/cigarettes.repo";
import { NextApiRequest, NextApiResponse } from "next";
import { parseStringSearchParam } from "../../../../utils/parse-string-search-param";

export type GetCigarettesByBrandsOutput = { cigarettes: CigaretteDAO[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetCigarettesByBrandsOutput>
) {
  try {
    const repo = new CigarettesRepository();

    const id = parseStringSearchParam(req.query["id"]);

    const data = await repo.get_by_brand(id);

    res.status(200).json({ cigarettes: data });
  } catch (err) {
    if (err instanceof Error) res.statusMessage = err.message;
    if (res.statusMessage.includes("Not found")) res.status(404);
    res.status(500);
  }
}
