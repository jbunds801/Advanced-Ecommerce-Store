import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function fetchProducts() {
  const result = await apiClient.get("/products");
  return result.data;
}

export async function fetchCategories() {
  const result = await apiClient.get("/products/categories");
  return result.data;
}

export async function fetchProductsByCategory(category: string) {
  const result = await apiClient.get(`/products/category/${category}`);
  return result.data;
}
