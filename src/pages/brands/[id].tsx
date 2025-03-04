import { CigarettesTable } from "@/components/domain/cigarettes-table";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { endpoints } from "../../utils/endpoints";
import { parseStringSearchParam } from "@/utils/parse-string-search-param";

export default function Home() {
  const params = useParams();

  const id = parseStringSearchParam(params?.["id"]);

  const { data } = useQuery({
    queryFn: () => fetch(endpoints.brand_by_id(id)).then((r) => r.json()),
    queryKey: ["cigarettes", "brand", id],
  });

  return <CigarettesTable data={data?.cigarettes} />;
}
