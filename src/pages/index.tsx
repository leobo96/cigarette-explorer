import { GetStaticProps } from "next";
import { GetAllCigarettesOutput } from "@/pages/api/cigarettes";
import { CigarettesTable } from "../components/domain/cigarettes-table";
import { endpoints } from "@/utils/endpoints";

export const getServerSideProps = (async () => {
  const data = await fetch(endpoints.cigarettes).then((r) => r.json());
  return { props: { data } };
}) satisfies GetStaticProps<{
  data: GetAllCigarettesOutput;
}>;

export default function Home({ data }: { data: GetAllCigarettesOutput }) {
  return <CigarettesTable data={data} />;
}
