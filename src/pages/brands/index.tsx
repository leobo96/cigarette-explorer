import { urls } from "../../utils/urls";
import { GetCigarettesBrandsOutput } from "@/pages/api/cigarettes/brands";
import { endpoints } from "@/utils/endpoints";
import { GetStaticProps } from "next";
import Link from "next/link";

export const getServerSideProps = (async () => {
  const data = await fetch(endpoints.brands).then((r) => r.json());
  return { props: { data } };
}) satisfies GetStaticProps<{
  data: GetCigarettesBrandsOutput;
}>;

export default function Home({ data }: { data: GetCigarettesBrandsOutput }) {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {data.map((brand) => (
        <li key={brand}>
          <Link href={urls.brands_detail(brand)}>{brand}</Link>
        </li>
      ))}
    </ul>
  );
}
