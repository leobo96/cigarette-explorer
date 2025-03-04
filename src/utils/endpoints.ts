import { config } from "@/utils/configs";

const BASE_URL = config.api_base_url ?? "";

export const endpoints = {
  cigarettes: `${BASE_URL}/api/cigarettes`,
  brands: `${BASE_URL}/api/cigarettes/brands`,
  brand_by_id: (id: string) => `${BASE_URL}/api/cigarettes/brands/${id}`,
};
