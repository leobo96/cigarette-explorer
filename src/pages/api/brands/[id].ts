import { CigaretteDAO } from "@/server/cigarette-client/cigarette-client";
import { CigarettesRepository } from "@/server/cigarettes.repo";
import { NextApiRequest, NextApiResponse } from "next";

export type GetCigarettesByBrandsOutput = { cigarettes: CigaretteDAO[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetCigarettesByBrandsOutput>
) {
  try {
    const repo = new CigarettesRepository();

    const _id = req.query["id"];

    if (!_id) throw new Error("Not found");

    const id =
      typeof _id === "string"
        ? _id
        : Array.isArray(_id) && _id.at(0)
        ? _id[0]
        : "";

    const data = await repo.get_by_brand(id);

    res.status(200).json({ cigarettes: data });
  } catch (err) {
    if (err instanceof Error) res.statusMessage = err.message;
    if (res.statusMessage.includes("Not found")) res.status(404);
    res.status(500);
  }
}
