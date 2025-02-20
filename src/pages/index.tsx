import { CigaretteDAO } from "@/server/cigarette-client/cigarette-client";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { DataTable } from "@/components/table/table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/button";
import { ArrowUpDown } from "lucide-react";

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
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nome
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "nicotine_amount",
      header: ({ column }) => {
        return (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Nicotina
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      },
      cell: (info) => (
        <div className="text-end px-4">{`${info.getValue()}`}</div>
      ),
    },
    {
      accessorKey: "tar_amount",
      header: ({ column }) => {
        return (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Catrame
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      },
      cell: (info) => (
        <div className="text-end px-4">{`${info.getValue()}`}</div>
      ),
    },
    {
      accessorKey: "co_amount",
      header: ({ column }) => {
        return (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Monossido di carbonio
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      },
      cell: (info) => (
        <div className="text-end px-4">{`${info.getValue()}`}</div>
      ),
    },
  ];
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl">
          <span className="inline-block -translate-y-1">🚬</span> Cigarette
          Explorer
        </h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
