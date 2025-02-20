import { CigaretteDAO } from "@/server/cigarette-client/cigarette-client";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { DataTable } from "@/components/table/table";
import { ColumnDef } from "@tanstack/react-table";

export const getStaticProps = (async () => {
  const filePath = path.join(process.cwd(), "public", "cigarettes.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return { props: { data } };
}) satisfies GetStaticProps<{
  data: CigaretteDAO[];
}>;

export default function Home({ data }: { data: CigaretteDAO[] }) {
  const columns: ColumnDef<CigaretteDAO>[] = [
    {
      accessorKey: "name",
      header: "Nome",
    },
    {
      accessorKey: "nicotine_amount",
      header: "Nicotina",
      cell: (info) => `${info.getValue()}`,
    },
    {
      accessorKey: "tar_amount",
      header: "Catrame",
      cell: (info) => `${info.getValue()}`,
    },
    {
      accessorKey: "co_amount",
      header: "Monossido di carbonio",
      cell: (info) => `${info.getValue()}`,
    },
  ];
  return (
    <div className="container mx-auto p-8">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
