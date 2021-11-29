import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../../services/cartApi";

const initialState = {
  id: null,
  info: null,
  items: [],
  modifiedAt: null,
  loading: true
};

export const createCart = createAsyncThunk(
  'cart/create',
  async () => {
    const responce = await cartApi.create();
    return responce.data;
  }
);

export const retrieveCart = createAsyncThunk(
  'cart/retrieve',
  async (_, storeApi) => {
    const { cart } = storeApi.getState();
    const responce = await cartApi.retrieve(cart.id);
    return responce.data;
  }
);

export const addItem = createAsyncThunk(
  'cart/addItem',
  async (productId, storeApi) => {
    const { cart } = storeApi.getState();
    const responce = await cartApi.addItem(cart.id, productId);
    return responce.data;
  }
);

export const changeQuantity = createAsyncThunk(
  'cart/changeQuantity',
  async ({ productId, quantity }, storeApi) => {
    const { cart } = storeApi.getState();
    const responce = await cartApi.updateItem(cart.id, productId, quantity);
    return responce.data;
  }
);

export const deleteItem = createAsyncThunk(
  'cart/deleteItem',
  async (productId, storeApi) => {
    const { cart } = storeApi.getState();
    const responce = await cartApi.deleteItem(cart.id, productId);
    return responce.data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  reducers: {
    setCartId(state, action) {
      const { payload } = action;
      state.id = payload;
    }
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createCart.fulfilled, (state, action) => {
      const { payload } = action;
      state.id = payload.id;
      state.modifiedAt = Date.now();
      localStorage.setItem('cart-id', payload.id);
    });

    builder.addCase(retrieveCart.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(retrieveCart.fulfilled, (state, action) => {
      const { payload } = action;
      const { line_items, id, ...rest } = payload;
      state.info = rest;
      state.items = line_items;
      state.modifiedAt = Date.now();
      state.loading = false;
    });

    builder.addCase(addItem.fulfilled, (state, action) => {
      const { payload } = action;
      const { line_items, id, ...rest } = payload.cart;
      state.info = rest;
      state.items = line_items;
      state.modifiedAt = Date.now();
      state.loading = false;
    });

    builder.addCase(changeQuantity.fulfilled, (state, action) => {
      const { payload } = action;
      const { line_items, id, ...rest } = payload.cart;
      state.info = rest;
      state.items = line_items;
      state.modifiedAt = Date.now();
      state.loading = false;
    });

    builder.addCase(deleteItem.fulfilled, (state, action) => {
      const { payload } = action;
      const { line_items, id, ...rest } = payload.cart;
      state.info = rest;
      state.items = line_items;
      state.modifiedAt = Date.now();
      state.loading = false;
    });
  }
});

export const {
  setCartId,
} = cartSlice.actions;

export default cartSlice.reducer;