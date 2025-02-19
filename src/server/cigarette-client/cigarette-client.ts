import pdf2table from "pdf2table";
import axios from "axios";

export type CigaretteDAO = {
  id: string;
  name: string;
  package: string;
  nicotine_amount: number;
  tar_amount: number;
  co_amount: number;
};

export class CigarettesClient {
  private static url =
    "https://www.adm.gov.it/portale/documents/20182/5353742/Livelli+di+emissione+delle+sigarette_10_02_2021/fd14edd5-a732-4241-a610-7885d24cf718";
  private static data: CigaretteDAO[] | undefined = undefined;

  static async getAll(): Promise<CigaretteDAO[]> {
    if (this.data && this.data.length !== 0) return this.data;

    try {
      const data = await this.extractTableFromPDF();
      const mappedData = this.mapPdf2ToTableResultToCigaretteDAOList(data);
      this.data = mappedData;
      return mappedData;
    } catch {
      throw new Error("[CigarettesRepository]: unable to retrieve data");
    }
  }

  private static async getPDF() {
    try {
      return await axios.get(this.url, { responseType: "arraybuffer" });
    } catch {
      throw new Error("[CigarettesRepository] : could not retrieve pdf");
    }
  }

  private static async extractTableFromPDF(): Promise<string[][]> {
    try {
      const pdf = await this.getPDF();

      const result = new Promise<string[][]>((resolve, reject) =>
        pdf2table.parse(pdf.data, (err, rows) => {
          if (err) reject(err);
          resolve(rows.filter((el) => el.length === 6)); // Extracted table rows
        })
      );

      return result;
    } catch {
      throw new Error("[CigarettesRepository]: could not process pdf");
    }
  }

  private static mapPdf2ToTableResultToCigaretteDAOList(
    input: string[][]
  ): CigaretteDAO[] {
    const result: CigaretteDAO[] = input.map((el) => {
      const result: CigaretteDAO = {
        id: el[0],
        name: el[1],
        package: el[2],
        nicotine_amount: Number(el[3].replace(",", ".")),
        tar_amount: Number(el[4].replace(",", ".")),
        co_amount: Number(el[5].replace(",", ".")),
      };
      return result;
    });

    return result;
  }
}
