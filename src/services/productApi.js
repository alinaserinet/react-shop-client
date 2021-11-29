import httpClient from "./httpClient";

class ProductApi {
  get(id) {
    return httpClient.get(`/products/${id}`);
  }
  getMany(limit = 25) {
    return httpClient.get(`/products?limit=${limit}`);
  }
}

const productApi = new ProductApi();

export default productApi;