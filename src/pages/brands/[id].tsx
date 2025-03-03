import { CigarettesTable } from "@/components/domain/cigarettes-table";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { endpoints } from "../../utils/endpoints";

export default function Home() {
  const params = useParams();

  const _id = params?.["id"];

  const id =
    typeof _id === "string"
      ? _id
      : Array.isArray(_id) && _id.at(0)
      ? _id[0]
      : "";

  const { data } = useQuery({
    queryFn: () => fetch(endpoints.brand_by_id(id)).then((r) => r.json()),
    queryKey: ["cigarettes", "brand", id],
  });

  return <CigarettesTable data={data.cigarettes} />;
}
