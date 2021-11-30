import httpClient from "./httpClient";

class CartApi {
  create() {
    return httpClient.get('/carts');
  }

  retrieve(id) {
    return httpClient.get(`/carts/${id}`);
  }

  addItem(cartId, productId, quantity = 1) {
    return httpClient.post(`/carts/${cartId}`, {
      id: productId,
      quantity
    });
  }

  updateItem(cartId, productId, quantity = 1, options = {}) {
    return httpClient.put(`/carts/${cartId}/items/${productId}`, {
      quantity,
      options
    });
  }

  async updateItems(cartId, products) {
    const result = await Promise.all([
      ...products.map(async (item) => {
        return await this.updateItem(cartId, item.id, item.quantity)
      })
    ]);
    return result[result.length - 1];
  }

  deleteItem(cartId, productId) {
    return httpClient.delete(`/carts/${cartId}/items/${productId}`);
  }
}

const cartApi = new CartApi();

export default cartApi;