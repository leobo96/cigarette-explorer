import path from "path";
import fs from "fs";
import { CigaretteDAO } from "@/server/cigarette-client/cigarette-client";

export class CigarettesRepository {
  data: CigaretteDAO[] | undefined;

  constructor() {}

  async get() {
    if (this.data) return this.data;

    const filePath = path.join(process.cwd(), "public", "cigarettes.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData) as CigaretteDAO[];

    this.data = data;

    return data;
  }

  async get_brands() {
    const data = await this.get();

    return Array.from(new Set(data.map((el) => el.brand)));
  }

  async get_by_brand(brand: string) {
    const data = await this.get();

    return data.filter((el) => el.brand === brand);
  }
}
