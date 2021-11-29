import httpClient from "./httpClient";

class CartApi {
  create() {
    return httpClient.get('/carts');
  }
  
  retrieve(id) {
    return httpClient.get(`/carts/${id}`);
  }

  addItem(cartId, productId, quantity) {
    return httpClient.post(`/carts/${cartId}`, {
      id: productId,
      quantity
    });
  }
}

const cartApi = new CartApi();

export default cartApi;