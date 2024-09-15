import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  gradTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExists = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (!isExists) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        console.log("Items already  added");
      }
      state.selectedItems = setSelectedItems(state);
    },
  },
});

// utility functions
export const setSelectedItems = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity);
  });
