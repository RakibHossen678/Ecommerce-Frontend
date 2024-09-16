import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./featues/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
