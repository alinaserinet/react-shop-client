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
  async (cartId) => {
    const responce = await cartApi.retrieve(cartId);
    return responce.data;
  }
)

const cartSlice = createSlice({
  name: 'cart',
  reducers: {
    setCartId(state, action) {
      const {payload} = action;
      state.id = payload;
    }
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createCart.fulfilled, (state, action) => {
      const {payload} = action;
      state.id = payload.id;
      state.modifiedAt = Date.now();
      localStorage.setItem('cart-id', payload.id);
    });

    builder.addCase(retrieveCart.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(retrieveCart.fulfilled, (state, action) => {
      const { payload } = action;
      const { line_items, id, ...rest} = payload;
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