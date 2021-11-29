import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../../services/productApi";

const initialState = {
  loading: true,
  entities: {}
};

export const fetchProductById = createAsyncThunk(
  'product/fetchById',
  async (productId) => {
    const responce = await productApi.get(productId);
    return responce.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addManyProducts(state, action) {
      const {payload} = action;
      payload.forEach((product) => {
        state.entities[product.id] = {
          ...product,
          modifiedAt: Date.now(),
        };
      });
      state.loading = false;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      const { payload } = action;
      state.entities[payload.id] = {
        ...payload,
        modifiedAt: Date.now(),
      };
      state.loading = false;
    });
  }
});

export const {
  addManyProducts,
} = productSlice.actions;

export default productSlice.reducer;