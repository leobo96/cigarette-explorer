import { Layout } from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { urls } from "../utils/urls";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        navigation={[
          {
            id: "home",
            label: "Home",
            url: urls.home,
          },
          {
            id: "brands",
            label: "Brands",
            url: urls.brands,
          },
        ]}
        activeRoute={router.asPath}
      >
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
