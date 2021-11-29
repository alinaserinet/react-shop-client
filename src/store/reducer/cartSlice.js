import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../../services/cartApi";

const initialState = {
  id: null,
  items: []
};

export const createCart = createAsyncThunk(
  'cart/create',
  async () => {
    const responce = await cartApi.create();
    return responce.data;
  }
);

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
      localStorage.setItem('cart-id', payload.id);
    });
  }
});

export const {
  setCartId,
} = cartSlice.actions;

export default cartSlice.reducer;