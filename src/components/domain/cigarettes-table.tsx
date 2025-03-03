import { CigaretteDAO } from "@/server/cigarette-client/cigarette-client";
import { DataTable } from "@/components/ui/table/table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export function CigarettesTable({ data }: { data: CigaretteDAO[] }) {
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

  return <DataTable columns={columns} data={data} />;
}
