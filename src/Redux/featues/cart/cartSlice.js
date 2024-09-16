import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
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
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    updateQuantity: (state, action) => {
      const product = state.products.map((product) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            if (product.quantity > 1) product.quantity -= 1;
          }
        }
        return product;
      });
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
  },
});

// utility functions
export const setSelectedItems = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity);
  }, 0);

export const setTotalPrice = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.price * product.quantity);
  }, 0);

export const setTax = (state) => setTotalPrice(state) * state.taxRate;

const setGrandTotal = (state) => {
  return setTotalPrice(state) + setTotalPrice(state) * state.taxRate;
};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
