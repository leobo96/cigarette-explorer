const BASE_URL = "http://localhost:3000";

export const endpoints = {
  cigarettes: `${BASE_URL}/api/cigarettes`,
  brands: `${BASE_URL}/api/brands`,
  brand_by_id: (id: string) => `${BASE_URL}/api/brands/${id}`,
};
