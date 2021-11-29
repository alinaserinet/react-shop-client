import cartSlice from "./cartSlice";
import productSlice from "./productSlice";


const rootReducer = {
  product: productSlice,
  cart: cartSlice,
}

export default rootReducer;